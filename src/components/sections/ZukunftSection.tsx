"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, staggerViewport } from "@/lib/motion";

const features = [
  {
    title: "Vehicle-to-Home (V2H)",
    emoji: "🚗⚡",
    subtitle: "Ihr E-Auto als Heimspeicher",
    text: "Nutzen Sie die Batterie Ihres Elektroautos als Energiepuffer für Ihr Zuhause – bidirektionales Laden macht es möglich.",
  },
  {
    title: "Ersatzstromsystem",
    emoji: "🔋🏠",
    subtitle: "Unabhängig bei Stromausfall",
    text: "Ihr Haus läuft einfach weiter. Bei Netzausfall schaltet das System automatisch in den Inselbetrieb – sekundenschnell, ohne Unterbrechung.",
  },
  {
    title: "Dynamische Stromtarife",
    emoji: "📊💡",
    subtitle: "Strom kaufen wenn er günstig ist",
    text: "Koppeln Sie Ihre Anlage an dynamische Börsenstromtarife und laden Ihren Speicher automatisch zu den günstigsten Zeiten.",
  },
  {
    title: "Smart Energy Management",
    emoji: "🤖🌐",
    subtitle: "Alles vernetzt, alles intelligent",
    text: "Eine zentrale Steuerung koordiniert PV, Speicher, Wärmepumpe und E-Auto – vollautomatisch für maximale Effizienz.",
  },
];

export function ZukunftSection() {
  return (
    <motion.section
      id="zukunft"
      className="relative overflow-hidden bg-navy-900 py-24 md:py-32"
      {...fadeInUp}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
        aria-hidden
      >
        <defs>
          <pattern
            id="dotGrid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-gold-400">
            Zukunft heute nutzen
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">
            Technologie, die andere erst ankündigen – wir installieren sie
            bereits.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Moderne Systeme für Eigenverbrauch, Netzstabilität und Komfort – mit
            Blick auf das, was morgen Standard wird.
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={staggerViewport}
        >
          {features.map((f) => (
            <motion.article
              key={f.title}
              variants={staggerItem}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-md"
            >
              <p className="text-2xl" aria-hidden>
                {f.emoji}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-gold-300">{f.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {f.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
