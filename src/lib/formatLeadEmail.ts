import type { LeadSubmission } from "@/lib/formSchema";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const wpHeizung: Record<string, string> = {
  gas: "Gas",
  oel: "Öl",
  fernwaerme: "Fernwärme",
  nachtspeicher: "Nachtspeicher",
  sonstige: "Sonstige",
};

const wpAlter: Record<string, string> = {
  unter5: "Unter 5 Jahre",
  "5bis15": "5–15 Jahre",
  ueber15: "Über 15 Jahre",
};

const wpGebaeude: Record<string, string> = {
  einfamilienhaus: "Einfamilienhaus",
  doppelhaus: "Doppelhaus",
  reihenhaus: "Reihenhaus",
  mehrfamilienhaus: "Mehrfamilienhaus",
};

const wpEigentuemer: Record<string, string> = {
  ja: "Ja",
  nein: "Nein",
};

const wpOrt: Record<string, string> = {
  innen: "Innen",
  aussen: "Außen",
  beides: "Beides",
  weissnicht: "Weiß nicht",
};

const wpZeitraum: Record<string, string> = {
  sofort: "Sofort",
  "3monate": "In ca. 3 Monaten",
  "6monate": "In ca. 6 Monaten",
  spaeter: "Später / unklar",
};

const wpPv: Record<string, string> = {
  ja: "Ja",
  nein: "Nein",
  vielleicht: "Vielleicht",
};

function fmtInterest(v: string | null): string {
  if (v === "photovoltaik") return "Photovoltaik";
  if (v === "waermepumpe") return "Wärmepumpe";
  return "—";
}

function linesForSubmission(d: LeadSubmission): string[] {
  const { contact: c, form: f } = d;
  const out: string[] = [
    "Neue Anfrage über die Landingpage",
    "",
    "— Kontakt —",
    `Name: ${c.name}`,
    `Telefon: ${c.telefon}`,
    `E-Mail: ${c.email}`,
    `Adresse: ${f.strasse}, ${f.plz} ${f.ort}`,
    `Datenschutz akzeptiert: ja`,
    "",
    "— Anfrage —",
    `Thema: ${fmtInterest(f.interest)}`,
  ];

  if (f.interest === "photovoltaik") {
    out.push(
      "PV-Interessen:",
      `  Speicher: ${f.pv_speicher ? "ja" : "nein"}`,
      `  Ladestation: ${f.pv_ladestation ? "ja" : "nein"}`,
      `  Dynamischer Tarif: ${f.pv_dynamisch ? "ja" : "nein"}`,
      `  Vehicle-to-Home: ${f.pv_v2h ? "ja" : "nein"}`,
    );
  }

  if (f.interest === "waermepumpe") {
    out.push(
      `Aktuelle Heizung: ${f.wp_heizung ? wpHeizung[f.wp_heizung] ?? f.wp_heizung : "—"}`,
      `Alter der Heizung: ${f.wp_alter ? wpAlter[f.wp_alter] ?? f.wp_alter : "—"}`,
      `Gebäudetyp: ${f.wp_gebaeudetyp ? wpGebaeude[f.wp_gebaeudetyp] ?? f.wp_gebaeudetyp : "—"}`,
      `Eigentümer: ${f.wp_eigentuemer ? wpEigentuemer[f.wp_eigentuemer] ?? f.wp_eigentuemer : "—"}`,
      `Installationsort: ${f.wp_installationsort ? wpOrt[f.wp_installationsort] ?? f.wp_installationsort : "—"}`,
      `Zeitraum: ${f.wp_zeitraum ? wpZeitraum[f.wp_zeitraum] ?? f.wp_zeitraum : "—"}`,
      `Zusätzlich PV: ${f.wp_pv_interesse ? wpPv[f.wp_pv_interesse] ?? f.wp_pv_interesse : "—"}`,
    );
  }

  return out;
}

export function formatLeadPlainText(d: LeadSubmission): string {
  return linesForSubmission(d).join("\n");
}

export function formatLeadHtml(d: LeadSubmission): string {
  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;font-size:14px;color:#0f172a"><pre style="white-space:pre-wrap;font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.5">${esc(formatLeadPlainText(d))}</pre><p style="margin-top:16px;color:#64748b;font-size:12px">Antworten Sie direkt auf diese E-Mail, um den Kunden zu erreichen.</p></body></html>`;
}
