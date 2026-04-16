"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const bullets = [
  "Große Speicherlösungen ab 50 kWh",
  "Gewerbliche PV-Anlagen ohne Standardlösungen",
  "Eigene Montage – keine Subunternehmer",
];

export function GewerbeSection() {
  return (
    <motion.section
      id="gewerbe"
      className="bg-navy-50 py-24 md:py-32"
      {...fadeInUp}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1200&q=80"
              alt="Industriedach mit Photovoltaikanlage"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy-900">
            Gewerbe &amp; Industrie
          </span>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-navy-700">
            Für Unternehmen
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
            Große Anlagen. Individuelle Konzepte. Langfristige Partnerschaft.
          </h2>
          <p className="mt-4 text-navy-800/90 leading-relaxed">
            Ob mittelständisches Unternehmen, Logistikzentrum oder
            Produktionsstätte – wir planen und realisieren gewerbliche
            Energieprojekte, die sich rechnen. Mit eigenen Monteuren,
            transparenter Planung und echten Partnerschaften.
          </p>
          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-navy-800">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-gold-500"
                  aria-hidden
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <a
            href="#beratung"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mt-10 inline-flex border-navy-700 text-navy-900 hover:bg-navy-50",
            )}
            aria-label="Gewerbliche Anfrage – zum Beratungsformular"
          >
            Gewerbliche Anfrage stellen →
          </a>
        </div>
      </div>
    </motion.section>
  );
}
