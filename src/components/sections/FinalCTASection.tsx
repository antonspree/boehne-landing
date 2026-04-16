"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const phoneHref = "tel:+492xxxxxxxx";

const reassurance = [
  "Kostenlose und unverbindliche Ersteinschätzung",
  "Kein Verkaufsdruck – klare Empfehlung für Ihre Situation",
  "Persönlicher Kontakt aus der Region, kein anonymes Portal",
];

export function FinalCTASection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-navy-900 py-24 md:py-32"
      {...fadeInUp}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
          loading="lazy"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-gold-400">
          Bereit für den nächsten Schritt?
        </p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.02em] text-white md:text-[2.8rem] md:leading-tight">
          Holen Sie sich Ihre ehrliche Einschätzung – noch heute starten.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-slate-400 leading-relaxed">
          Ein kurzer Check genügt. Wir melden uns mit einem konkreten
          Vorschlag, wie es bei Ihnen weitergehen kann.
        </p>
        <ul className="mx-auto mt-8 max-w-lg space-y-3 text-left text-sm text-slate-300">
          {reassurance.map((line) => (
            <li key={line} className="flex gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                <Check className="size-3" strokeWidth={3} aria-hidden />
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#beratung"
            className={cn(
              buttonVariants({ variant: "gold", size: "lg" }),
              "h-12 min-w-[260px] px-8 text-base font-semibold shadow-lg shadow-black/20",
            )}
            aria-label="Zum kostenlosen Beratungsformular"
          >
            Jetzt Kurz-Check starten →
          </a>
          <a
            href={phoneHref}
            className={cn(
              buttonVariants({ variant: "outlineOnDark", size: "lg" }),
              "h-12 min-w-[260px]",
            )}
            aria-label="SunEnergy anrufen"
          >
            Uns anrufen
          </a>
        </div>
      </div>
    </motion.section>
  );
}
