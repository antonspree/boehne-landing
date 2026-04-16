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
