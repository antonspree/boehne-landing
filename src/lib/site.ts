/** Öffentliche Kontakt- und Firmendaten (Landingpage & CTAs). */
export const site = {
  company: "SUNENERGY Böhne GmbH",
  phoneDisplay: "+49 (0) 571 97 30 40 50",
  phoneHref: "tel:+4957197304050",
  email: "info@boehne.de",
  emailHref: "mailto:info@boehne.de",
  /** Ziel für Lead-Anfragen aus dem Formular (serverseitig, s. LEAD_EMAIL_TO). */
  leadsEmail: "planung@boehne.de",
  addressLines: ["Aminghauser Str. 5", "32423 Minden"],
  regionLabel: "Minden & NRW",
  hoursShort: "Mo–Do 8–16:30 · Fr 8–14 Uhr",
  hoursDetail:
    "Mo–Do: 8–16:30 Uhr · Fr: 8–14 Uhr · und nach Vereinbarung",
  mainWebsite: "https://www.sunenergy4you.de/",
} as const;
