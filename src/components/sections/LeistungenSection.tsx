"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, staggerViewport } from "@/lib/motion";

const items = [
  {
    title: "Photovoltaik",
    text: "Maßgeschneiderte Solaranlagen für Ihr Dach – geplant, installiert und betreut von unserem eigenen Team.",
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
  },
  {
    title: "Wärmepumpen",
    text: "Effiziente Heizsysteme, die Ihre Heizkosten dauerhaft senken – unabhängig von Gas und Öl.",
    src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
  },
  {
    title: "Energiespeicher",
    text: "Speichern Sie selbst erzeugten Strom und nutzen ihn dann, wenn Sie ihn brauchen – auch nachts.",
    src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
  },
  {
    title: "E-Mobilität",
    text: "Wallboxen und Ladesysteme, die perfekt mit Ihrer PV-Anlage zusammenarbeiten.",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    title: "Gewerbelösungen",
    text: "Großanlagen, Energiespeicher und individuelle Konzepte für Unternehmen jeder Größe.",
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
  },
];

export function LeistungenSection() {
  return (
    <motion.section
      id="leistungen"
      className="bg-white py-24 md:py-32"
      {...fadeInUp}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-gold-600">
            Unsere Leistungen
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
            Alles aus einer Hand – von der Beratung bis zur Montage.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Von der ersten Bestandsaufnahme bis zur Inbetriebnahme – ein
            Ansprechpartner, ein Team, eine Verantwortung. Nutzen Sie den
            Kurz-Check oben für Ihr konkretes Vorhaben.
          </p>
        </div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={staggerViewport}
        >
          {items.map((item) => (
            <motion.article
              key={item.title}
              variants={staggerItem}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
                <Link
                  href="#beratung"
                  className="mt-4 inline-flex text-sm font-semibold text-gold-600 transition-colors hover:text-gold-500"
                >
                  Unverbindlich anfragen →
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
