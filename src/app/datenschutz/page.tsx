import type { Metadata } from "next";
import { DatenschutzContent } from "./DatenschutzContent";

export const metadata: Metadata = {
  title: "Datenschutz | SunEnergy",
  description:
    "Datenschutzerklärung der SunEnergy GmbH – Informationen zur Verarbeitung personenbezogener Daten.",
};

export default function DatenschutzPage() {
  return (
    <div className="bg-white px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <DatenschutzContent />
      </div>
    </div>
  );
}
