"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Check } from "lucide-react";
import { LeadForm } from "@/components/form/LeadForm";
import { heroContent } from "@/lib/motion";

const benefits = [
  "Transparente Planung & Kosten",
  "Förderungen von Anfang an mitdenken",
  "Ein Team – von der Idee bis zur Übergabe",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:px-8">
        <motion.div {...heroContent} className="max-w-xl lg:max-w-none">
          <p className="mb-5 inline-flex items-center rounded-full border border-gold-400 bg-gold-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-gold-600">
            ✦ Regionaler Fachbetrieb · Minden &amp; NRW
          </p>
          <p className="mb-4 text-sm italic text-slate-500 md:text-base">
            „Die Sonne stellt uns keine Rechnung.“ – Senken Sie Stromkosten und
            leisten Sie einen Beitrag zum Klimaschutz.
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-navy-900 md:text-5xl lg:text-[3.35rem]">
            Weniger Energiekosten, mehr Unabhängigkeit –{" "}
            <span className="text-gold-500">Ihre Sanierung</span>, professionell
            geplant und umgesetzt.
          </h1>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-slate-600 md:text-[1.1rem]">
            Ob PV, Wärmepumpe oder Speicher: Wir beraten Sie ehrlich, was sich für
            Ihr Gebäude rechnet – mit eigenen Monteuren, ohne versteckte Kosten
            und ohne Standardpakete von der Stange.
          </p>

          <ul className="mt-8 flex flex-col gap-2.5">
            {benefits.map((line) => (
              <li
                key={line}
                className="flex items-start gap-2.5 text-sm font-medium text-navy-800 md:text-[0.95rem]"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                  <Check className="size-3" strokeWidth={3} aria-hidden />
                </span>
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200/80 pt-8 text-sm text-slate-700">
            <span className="flex items-center gap-2">
              <span aria-hidden>⭐</span>
              <span>
                <strong className="text-navy-900">5,0/5</strong> – Google
                Bewertungen
              </span>
            </span>
            <span className="hidden h-4 w-px bg-slate-200 sm:block" aria-hidden />
            <span className="flex items-center gap-2">
              <span aria-hidden>🏦</span>
              Finanzierung über LBS möglich
            </span>
            <span className="hidden h-4 w-px bg-slate-200 sm:block" aria-hidden />
            <span className="flex items-center gap-2">
              <span aria-hidden>📍</span>
              Vor Ort in NRW
            </span>
          </div>

          <a
            href="#beratung"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-500 lg:hidden"
            aria-label="Zum Beratungsformular"
          >
            Direkt zum Kurz-Check
            <ArrowDown className="size-4" aria-hidden />
          </a>
        </motion.div>

        <div className="lg:sticky lg:top-24" id="beratung">
          <div className="relative rounded-2xl border border-slate-100/80 bg-white p-[1px] shadow-[0_25px_60px_-12px_rgba(10,22,40,0.18)] ring-1 ring-gold-500/20">
            <div className="overflow-hidden rounded-2xl bg-white">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
