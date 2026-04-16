"use client";

import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function KontaktSection() {
  return (
    <motion.section
      id="kontakt"
      className="border-t border-slate-100 bg-slate-50 py-24 md:py-32"
      {...fadeInUp}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200/80 lg:min-h-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
              alt="Regionale Nähe – Karte als Symbolik"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-medium text-gold-300">
                {site.regionLabel}
              </p>
              <p className="mt-1 text-lg font-semibold">
                Persönlich vor Ort – nicht im Callcenter.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-gold-600">
              Kontakt
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
              Sprechen Sie mit uns – oder starten Sie den Kurz-Check.
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Unser Team in Minden ist für Sie erreichbar. Für eine erste
              technische und wirtschaftliche Einordnung können Sie auch direkt
              das Formular oben auf der Seite nutzen – unverbindlich und
              kostenlos.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-navy-900">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-5 shrink-0 text-gold-600"
                  aria-hidden
                />
                <span>
                  <strong className="font-semibold">{site.company}</strong>
                  <br />
                  {site.addressLines[0]}
                  <br />
                  {site.addressLines[1]}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="mt-0.5 size-5 shrink-0 text-gold-600"
                  aria-hidden
                />
                <a
                  href={site.phoneHref}
                  className="font-medium underline-offset-2 hover:underline"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="mt-0.5 size-5 shrink-0 text-gold-600"
                  aria-hidden
                />
                <a
                  href={site.emailHref}
                  className="font-medium underline-offset-2 hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock
                  className="mt-0.5 size-5 shrink-0 text-gold-600"
                  aria-hidden
                />
                <span>
                  <span className="font-semibold">Erreichbarkeit</span>
                  <br />
                  <span className="text-slate-600">{site.hoursDetail}</span>
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#beratung"
                className={cn(
                  buttonVariants({ variant: "gold", size: "lg" }),
                  "inline-flex",
                )}
              >
                Zum Kurz-Check
              </a>
              <a
                href={site.mainWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "inline-flex border-navy-200 text-navy-900 hover:bg-navy-50",
                )}
              >
                Zur Hauptwebsite
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
