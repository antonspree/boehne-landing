"use client";

import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const phoneHref = "tel:+492xxxxxxxx";

export function ConversionMidSection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 md:py-20"
      {...fadeInUp}
      aria-labelledby="conversion-mid-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(240,165,0,0.12),_transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-gold-400">
          Nächster Schritt
        </p>
        <h2
          id="conversion-mid-heading"
          className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl"
        >
          Kurz Ihre Situation beschreiben – wir melden uns mit einem
          konkreten Vorschlag.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          Kein Vertriebsdruck: Nach Ihrer Anfrage klären wir telefonisch oder
          vor Ort, was für Sie passt. Unverbindlich und kostenlos.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href="#beratung"
            className={cn(
              buttonVariants({ variant: "gold", size: "lg" }),
              "inline-flex h-12 items-center justify-center gap-2 px-8 text-base font-semibold shadow-lg shadow-black/10",
            )}
            aria-label="Zum Beratungsformular scrollen"
          >
            Zum Formular
            <ArrowRight className="size-4" aria-hidden />
          </a>
          <a
            href={phoneHref}
            className={cn(
              buttonVariants({ variant: "outlineOnDark", size: "lg" }),
              "inline-flex h-12 items-center justify-center gap-2 border-white/30",
            )}
            aria-label="SunEnergy telefonisch erreichen"
          >
            <Phone className="size-4" aria-hidden />
            Lieber anrufen
          </a>
        </div>
      </div>
    </motion.section>
  );
}
