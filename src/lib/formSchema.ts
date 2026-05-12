import { z } from "zod";

export const contactStepSchema = z.object({
  name: z
    .string()
    .min(2, "Bitte geben Sie Ihren Namen ein.")
    .max(120, "Name zu lang."),
  telefon: z
    .string()
    .min(6, "Bitte geben Sie eine gültige Telefonnummer ein.")
    .max(40, "Telefonnummer zu lang."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  plz: z
    .string()
    .regex(/^\d{5}$/, "Bitte geben Sie eine gültige PLZ ein."),
  ort: z.string().min(2, "Bitte geben Sie den Ort an.").max(80, "Zu lang."),
  strasse: z
    .string()
    .min(2, "Bitte geben Sie Straße und Hausnummer an.")
    .max(120, "Zu lang."),
  datenschutz: z
    .boolean()
    .refine((v) => v === true, {
      message: "Bitte akzeptieren Sie die Datenschutzerklärung.",
    }),
});

export type ContactStepValues = z.infer<typeof contactStepSchema>;

/** Snapshot der Formularantworten (wie beim Absenden). */
export const formSnapshotSchema = z.object({
  interest: z.enum(["photovoltaik", "waermepumpe"]).nullable(),
  pv_speicher: z.boolean(),
  pv_ladestation: z.boolean(),
  pv_dynamisch: z.boolean(),
  pv_v2h: z.boolean(),
  wp_heizung: z
    .enum(["gas", "oel", "fernwaerme", "nachtspeicher", "sonstige"])
    .nullable(),
  wp_alter: z.enum(["unter5", "5bis15", "ueber15"]).nullable(),
  wp_gebaeudetyp: z
    .enum([
      "einfamilienhaus",
      "doppelhaus",
      "reihenhaus",
      "mehrfamilienhaus",
    ])
    .nullable(),
  wp_eigentuemer: z.enum(["ja", "nein"]).nullable(),
  wp_installationsort: z
    .enum(["innen", "aussen", "beides", "weissnicht"])
    .nullable(),
  wp_zeitraum: z
    .enum(["sofort", "3monate", "6monate", "spaeter"])
    .nullable(),
  wp_pv_interesse: z.enum(["ja", "nein", "vielleicht"]).nullable(),
  name: z.string(),
  telefon: z.string(),
  email: z.string(),
  plz: z.string(),
  ort: z.string(),
  strasse: z.string(),
});

export const leadSubmissionSchema = z
  .object({
    contact: contactStepSchema,
    form: formSnapshotSchema,
  })
  .refine((d) => d.form.interest !== null, {
    message: "Thema fehlt",
    path: ["form", "interest"],
  });

export type LeadSubmission = z.infer<typeof leadSubmissionSchema>;
