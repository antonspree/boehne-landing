"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export function SonnenenergieSection() {
  return (
    <motion.section
      id="sonne"
      className="bg-navy-50 py-24 md:py-32"
      {...fadeInUp}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-navy-700">
              Photovoltaik &amp; Speicher
            </p>
            <blockquote className="mt-4 border-l-4 border-navy-600 pl-5 text-lg font-medium italic leading-snug text-navy-900 md:text-xl">
              „Die Sonne stellt uns keine Rechnung!“
            </blockquote>
            <h2 className="mt-6 text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
              Entdecken Sie die Kraft der Sonne – für Ihr Zuhause und Ihr
              Budget.
            </h2>
            <p className="mt-4 text-navy-800/90 leading-relaxed">
              Die Sonne liefert täglich mehr Energie, als wir weltweit
              verbrauchen. Photovoltaik wandelt dieses Licht in sauberen Strom
              um – ohne Emissionen, ohne Brennstoffe. Für Haushalte und
              Unternehmen bedeutet das: langfristig planbare Energiekosten,
              weniger Abhängigkeit von steigenden Strompreisen und ein
              spürbarer Beitrag zum Klimaschutz.
            </p>
            <p className="mt-4 text-navy-800/90 leading-relaxed">
              Moderne Module und Speicher werden immer effizienter – die
              Investition in eine durchdachte Anlage zahlt sich über die
              Nutzungsdauer immer wieder aus. Wir zeigen Ihnen transparent, was
              bei Ihnen vor Ort wirtschaftlich und technisch sinnvoll ist.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Als Spezialist für erneuerbare Energien begleiten wir Sie von der
              ersten Idee bis zur Inbetriebnahme – persönlich in der Region, wie
              auf unserer{" "}
              <a
                href="https://www.sunenergy4you.de/"
                className="font-medium text-gold-600 underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hauptwebsite
              </a>
              .
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/80">
              <Image
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1200&q=80"
                alt="Photovoltaikanlage auf einem Einfamilienhaus"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-center text-xs text-slate-500">
              Individuelle Planung statt Standardpaket – abgestimmt auf Dach,
              Verbrauch und Ziele.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
