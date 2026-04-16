"use client";

import Image from "next/image";
import { Ban, FileText, Home, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, staggerViewport } from "@/lib/motion";

const points = [
  {
    icon: Ban,
    title: "Keine versteckten Kosten",
    text: "Sie erhalten eine nachvollziehbare Kostenaufstellung. Kein Kleingedrucktes, das später überrascht – Transparenz ist für uns selbstverständlich.",
  },
  {
    icon: Home,
    title: "Auch für Mieter möglich",
    text: "Mit Zustimmung der Eigentümerschaft können auch Mieterinnen und Mieter eine Solaranlage realisieren. Wir unterstützen bei der Abstimmung und den Unterlagen.",
  },
  {
    icon: FileText,
    title: "Planbare Zahlungsabsprachen",
    text: "Klare Abschläge und nachvollziehbare Meilensteine – Sie wissen von Anfang an, womit Sie rechnen können.",
  },
  {
    icon: ShieldCheck,
    title: "Widerruf & Ruhe beim Entscheid",
    text: "Nach Vertragsschluss haben Sie gesetzliche Widerrufsrechte – wir erklären die Fristen und Begleiten Sie sachlich durch den Prozess.",
  },
];

export function SicherheitSection() {
  return (
    <motion.section
      id="sicherheit"
      className="bg-white py-24 md:py-32"
      {...fadeInUp}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200/80">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
                alt="Beratungsgespräch zu Hause"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-gold-600">
              Ihre Sicherheit
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
              Eine Investition in Energie soll sich gut anfühlen – auch
              rechtlich und finanziell.
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Wir wissen, dass eine PV-Anlage, eine Wärmepumpe oder ein Speicher
              Entscheidungen fürs Leben sind. Deshalb legen wir Wert auf klare
              Kommunikation und fair gestaltete Abläufe – ähnlich den
              Versprechen, die wir auch auf unseren Kampagnenseiten einhalten.
            </p>

            <motion.ul
              className="mt-10 space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={staggerViewport}
            >
              {points.map((p) => (
                <motion.li
                  key={p.title}
                  variants={staggerItem}
                  className="flex gap-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-600">
                    <p.icon className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="font-semibold text-navy-900">
                      {p.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                      {p.text}
                    </span>
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
