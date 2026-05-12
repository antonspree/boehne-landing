import { Resend } from "resend";
import { NextResponse } from "next/server";
import { formatLeadHtml, formatLeadPlainText } from "@/lib/formatLeadEmail";
import { leadSubmissionSchema } from "@/lib/formSchema";

const DEFAULT_TO = "planung@boehne.de";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const parsed = leadSubmissionSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Ungültige Formulardaten" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("RESEND_API_KEY ist nicht gesetzt.");
    return NextResponse.json(
      {
        error:
          "E-Mail-Versand ist nicht konfiguriert. Bitte RESEND_API_KEY setzen.",
      },
      { status: 503 },
    );
  }

  const to = process.env.LEAD_EMAIL_TO ?? DEFAULT_TO;
  const from =
    process.env.LEAD_EMAIL_FROM ??
    "SUNENERGY Landing <onboarding@resend.dev>";

  const data = parsed.data;
  const topic =
    data.form.interest === "waermepumpe" ? "Wärmepumpe" : "Photovoltaik";

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.contact.email,
    subject: `Neue Landingpage-Anfrage (${topic}) – ${data.contact.name}`,
    text: formatLeadPlainText(data),
    html: formatLeadHtml(data),
  });

  if (error) {
    console.error("[api/lead]", error);
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
