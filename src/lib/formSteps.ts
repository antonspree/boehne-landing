import type { InterestType } from "@/types/form";

/** Kurzer Titel für die aktuelle Frage (Orientierung + Screenreader). */
export function getStepQuestionTitle(
  step: number,
  interest: InterestType | null,
): string {
  if (step === 0 || !interest) {
    return "Wofür interessieren Sie sich?";
  }
  if (interest === "photovoltaik") {
    if (step === 1) return "Was ist für Sie relevant?";
    return "Kontakt – Rückruf";
  }
  const wp: Record<number, string> = {
    1: "Ihre aktuelle Heizung",
    2: "Alter der Heizung",
    3: "Gebäudetyp",
    4: "Eigentümerschaft",
    5: "Geplanter Installationsort",
    6: "Geplanter Zeitraum",
    7: "Interesse an Photovoltaik?",
    8: "Kontakt – Rückruf",
  };
  return wp[step] ?? "Angaben";
}

/** Fortschrittstext unter der Leiste. */
export function getProgressLabel(
  step: number,
  total: number,
  interest: InterestType | null,
): string {
  if (!interest) {
    return `Schritt 1 von ${total} – Start`;
  }
  const topic = interest === "photovoltaik" ? "Solar" : "Wärmepumpe";
  return `${topic} · Schritt ${step + 1} von ${total}`;
}
