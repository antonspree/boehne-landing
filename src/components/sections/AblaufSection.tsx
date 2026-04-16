"use client";

import Image from "next/image";
import { ClipboardList, Hammer, Headphones, PhoneForwarded } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, staggerViewport } from "@/lib/motion";

const steps = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Kurz-Check ausfüllen",
    text: "Ein paar Angaben zu Objekt, Verbrauch und Wunsch – online in wenigen Minuten. So können wir Ihre Anfrage gezielt vorbereiten.",
  },
  {
    step: 2,
    icon: PhoneForwarded,
    title: "Beratung & Angebot",
    text: "Wir melden uns telefonisch oder vor Ort, klären offene Punkte und erstellen ein transparentes Angebot – ohne Kleingedrucktes.",
  },
  {
    step: 3,
    icon: Hammer,
    title: "Installation & Inbetriebnahme",
    text: "Mit unseren eigenen Monteuren setzen wir die geplanten Komponenten fachgerecht um und nehmen die Anlage gemeinsam mit Ihnen in Betrieb.",
  },
  {
    step: 4,
    icon: Headphones,
    title: "Betreuung & Service",
    text: "Auch nach der Installation sind wir Ihr Ansprechpartner – für Fragen, Erweiterungen (z. B. Speicher, Wallbox) und Wartung.",
  },
];

export function AblaufSection() {
  return (
    <motion.section
      id="ablauf"
      className="relative overflow-hidden bg-navy-900 py-24 md:py-32"
      {...fadeInUp}
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.12]"
          sizes="50vw"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-gold-400">
            So funktioniert&apos;s
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">
            Von der Anfrage bis zur laufenden Anlage – klar strukturiert.
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Orientierung an dem Ablauf, den viele unserer Kunden aus Minden und
            der Region schätzen: schnelle Rückmeldung, ehrliche Empfehlung,
            feste Ansprechpartner.
          </p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={staggerViewport}
        >
          {steps.map((s) => (
            <motion.article
              key={s.step}
              variants={staggerItem}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex shrink-0 flex-col items-center gap-2">
                <span className="flex size-10 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-navy-900">
                  {s.step}
                </span>
                <s.icon className="size-6 text-gold-400" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {s.text}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
