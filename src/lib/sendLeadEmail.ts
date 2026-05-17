import nodemailer from "nodemailer";
import { Resend } from "resend";
import { formatLeadHtml, formatLeadPlainText } from "@/lib/formatLeadEmail";
import type { LeadSubmission } from "@/lib/formSchema";
import { site } from "@/lib/site";

const RESEND_DEFAULT_FROM = "SUNENERGY Landing <onboarding@resend.dev>";

export type SendLeadResult =
  | { ok: true }
  | { ok: false; status: 503 | 502; message: string };

function leadSubject(data: LeadSubmission): string {
  const topic =
    data.form.interest === "waermepumpe" ? "Wärmepumpe" : "Photovoltaik";
  return `Neue Landingpage-Anfrage (${topic}) – ${data.contact.name}`;
}

function leadRecipient(): string {
  return process.env.LEAD_EMAIL_TO?.trim() || site.leadsEmail;
}

async function sendViaSmtp(data: LeadSubmission): Promise<SendLeadResult> {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const to = leadRecipient();

  if (!host || !user || !pass) {
    return {
      ok: false,
      status: 503,
      message:
        "SMTP ist unvollständig konfiguriert (SMTP_HOST, SMTP_USER, SMTP_PASS).",
    };
  }

  const from =
    process.env.LEAD_EMAIL_FROM?.trim() ||
    `SUNENERGY Landing <${user}>`;

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure =
    process.env.SMTP_SECURE === "true" || process.env.SMTP_SECURE === "1";

  try {
    const transport = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transport.sendMail({
      from,
      to,
      replyTo: data.contact.email,
      subject: leadSubject(data),
      text: formatLeadPlainText(data),
      html: formatLeadHtml(data),
    });

    return { ok: true };
  } catch (err) {
    console.error("[sendLeadEmail/smtp]", err);
    return {
      ok: false,
      status: 502,
      message: "E-Mail konnte nicht gesendet werden.",
    };
  }
}

async function sendViaResend(data: LeadSubmission): Promise<SendLeadResult> {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) {
    return {
      ok: false,
      status: 503,
      message:
        "E-Mail-Versand ist nicht konfiguriert. SMTP oder RESEND_API_KEY setzen.",
    };
  }

  const to = leadRecipient();
  const from = process.env.LEAD_EMAIL_FROM?.trim() || RESEND_DEFAULT_FROM;

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.contact.email,
    subject: leadSubject(data),
    text: formatLeadPlainText(data),
    html: formatLeadHtml(data),
  });

  if (error) {
    console.error("[sendLeadEmail/resend]", error);
    return {
      ok: false,
      status: 502,
      message: "E-Mail konnte nicht gesendet werden.",
    };
  }

  return { ok: true };
}

/** SMTP wenn SMTP_HOST gesetzt, sonst Resend. */
export async function sendLeadEmail(
  data: LeadSubmission,
): Promise<SendLeadResult> {
  if (process.env.SMTP_HOST?.trim()) {
    return sendViaSmtp(data);
  }
  return sendViaResend(data);
}
