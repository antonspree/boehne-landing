"use client";

import { motion } from "framer-motion";
import {
  Award,
  Handshake,
  Landmark,
  MapPin,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer, staggerItem, staggerViewport } from "@/lib/motion";

const usps = [
  {
    icon: MapPin,
    title: "Regionaler Fachbetrieb in NRW",
    text: "Wir kennen die lokalen Gegebenheiten, Förderungen und Anforderungen in Ihrer Region genau.",
  },
  {
    icon: Wrench,
    title: "Eigene Monteure",
    text: "Kein einziger Fremdmonteur. Unser festangestelltes Team führt jede Installation selbst durch – für lückenlose Qualität und Haftung.",
  },
  {
    icon: Handshake,
    title: "Persönliche Beratung vor Ort",
    text: "Kein Call-Center, kein Standardangebot. Wir kommen zu Ihnen, schauen uns alles an und erarbeiten gemeinsam die beste Lösung.",
  },
  {
    icon: Landmark,
    title: "Finanzierung über LBS",
    text: "Wir arbeiten mit der LBS zusammen und können Ihnen attraktive Finanzierungsmöglichkeiten anbieten – damit Energieunabhängigkeit für jeden erschwinglich wird.",
  },
  {
    icon: Award,
    title: "Starke Herstellerpartner",
    text: "Wir setzen ausschließlich auf bewährte Hersteller wie E3/DC, die für Qualität und Langlebigkeit stehen.",
  },
];

const testimonials = [
  {
    name: "Thomas K.",
    ort: "Minden",
    text: "Von der Beratung bis zur Montage – alles aus einer Hand. Transparent und zuverlässig.",
  },
  {
    name: "Sabine M.",
    ort: "Bad Oeynhausen",
    text: "Endlich ein Anbieter, der vor Ort war und keine leeren Versprechen gemacht hat.",
  },
  {
    name: "Markus L.",
    ort: "Porta Westfalica",
    text: "Unsere PV-Anlage läuft einwandfrei. Das Team war pünktlich und sehr professionell.",
  },
  {
    name: "Nicole R.",
    ort: "Minden",
    text: "Von Anfang bis Ende zu 100 % zufrieden – schnelle, saubere Arbeit und bester Service.",
  },
  {
    name: "Hans B.",
    ort: "Minden",
    text: "Sehr freundliche und kompetente Beratung – inklusive durchdachter Speicher- und Wallbox-Lösung.",
  },
  {
    name: "BDM Gebäudereinigung",
    ort: "Gewerbe aus der Region",
    text: "Professioneller Umgang mit Geschäftspartnern: schnell, unkompliziert und seriös.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 von 5 Sternen">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className="text-gold-500" aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

export function WarumWirSection() {
  return (
    <motion.section
      id="warum-wir"
      className="bg-white py-24 md:py-32"
      {...fadeInUp}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-gold-600">
            Warum SunEnergy
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
            Regionale Kompetenz. Echte Handwerker. Echte Ergebnisse.
          </h2>
        </div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={staggerViewport}
        >
          {usps.map((u) => (
            <motion.article
              key={u.title}
              variants={staggerItem}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <u.icon className="size-8 text-gold-500" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-navy-900">
                {u.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {u.text}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-16 rounded-2xl bg-slate-50 p-8 md:p-10">
          <p className="text-center text-xs font-medium uppercase tracking-[0.08em] text-gold-600">
            Vertrauen aus der Region
          </p>
          <p className="mb-8 mt-2 text-center text-sm text-slate-600">
            So erleben Hausbesitzer unsere Beratung – authentisch und ohne
            Auftragspflicht.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="border-slate-100 bg-white shadow-sm"
              >
                <CardContent className="pt-6">
                  <Stars />
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-semibold text-navy-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.ort}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
