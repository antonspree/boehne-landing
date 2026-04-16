"use client";

import { BadgeCheck, Building2, Hammer, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

const items = [
  {
    icon: PhoneCall,
    title: "Persönliche Erstberatung",
    text: "Kein Callcenter – echte Ansprechpartner aus der Region.",
  },
  {
    icon: Hammer,
    title: "Eigene Handwerker",
    text: "Montage durch unser Team – keine Fremdfirmen.",
  },
  {
    icon: BadgeCheck,
    title: "Qualität & Planung",
    text: "Geprüfte Produkte, saubere Ausführung, klare Prozesse.",
  },
  {
    icon: Building2,
    title: "NRW & Umland",
    text: "Wir kommen zu Ihnen – Beratung direkt am Objekt.",
  },
];

export function TrustStatsStrip() {
  return (
    <motion.section
      className="border-b border-gold-600/40 bg-gold-500 py-12 md:py-14"
      {...fadeInUp}
      aria-label="Warum SunEnergy"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-10 lg:px-8">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white">
              <item.icon className="size-6" aria-hidden />
            </div>
            <div>
              <p className="font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm leading-snug text-white/90">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
