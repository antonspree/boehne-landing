"use client";

import { FileCheck, Landmark, Percent } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, staggerViewport } from "@/lib/motion";

const cards = [
  {
    icon: Percent,
    title: "Mehrwertsteuer bei PV",
    text: "Für bestimmte Lieferungen von Solarmodulen an Betreiber von Photovoltaikanlagen kann die Umsatzsteuer 0 % betragen – vorausgesetzt, die Anlage wird u. a. auf oder in der Nähe von Privatwohnungen errichtet. Wir beraten Sie zur Einordnung Ihres Vorhabens.",
  },
  {
    icon: Landmark,
    title: "Förderungen & Finanzierung",
    text: "Wärmepumpen können über die BEG (Bundesförderung Effizienzgebäude) gefördert werden; für PV und Speicher gibt es u. a. attraktive Kredite. Hinzu kommt unsere Zusammenarbeit mit der LBS – damit wird die Investition planbar.",
  },
  {
    icon: FileCheck,
    title: "Anmeldung & Regeln",
    text: "Steckerfertige Kleinstanlagen und Balkonkraftwerke unterliegen klaren Regeln – inklusive Anmeldung beim Marktstammdatenregister. Wir sagen Ihnen, was für Ihre Anlagengröße gilt und übernehmen die Abstimmung mit.",
  },
];

export function FoerderungenSection() {
  return (
    <motion.section
      id="foerderungen"
      className="bg-white py-24 md:py-32"
      {...fadeInUp}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-gold-600">
            Förderungen &amp; Rahmenbedingungen
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
            Was Politik und Finanzierung für Sie hergeben können.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Gesetzliche Regelungen ändern sich – deshalb ist die persönliche
            Einordnung wichtig. Hier die Themen, die wir in der Beratung für
            Sie prüfen (ohne Steuer- oder Rechtsberatung im engeren Sinne).
          </p>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={staggerViewport}
        >
          {cards.map((c) => (
            <motion.article
              key={c.title}
              variants={staggerItem}
              className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                <c.icon className="size-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {c.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
