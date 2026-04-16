"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

const partners = ["E3/DC", "SMA", "Fronius", "Viessmann", "LBS", "Vaillant"];

export function PartnerSection() {
  return (
    <motion.section
      id="partner"
      className="bg-slate-50 py-20 md:py-24"
      {...fadeInUp}
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h3 className="text-lg font-semibold text-slate-400">
          Unsere Partner &amp; Hersteller
        </h3>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((name) => (
            <div
              key={name}
              className="grayscale transition-all duration-200 hover:grayscale-0"
            >
              <span className="inline-block rounded-lg border border-slate-200 bg-white px-6 py-3 text-lg font-bold text-navy-700 shadow-sm">
                {name}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl mx-auto text-sm text-slate-500 leading-relaxed">
          Wir arbeiten ausschließlich mit zertifizierten Qualitätsherstellern.
          Für Finanzierungen kooperieren wir mit der{" "}
          <strong className="font-medium text-slate-600">LBS Minden</strong> –
          damit Solar &amp; Speicher auch ohne großes Eigenkapital planbar werden.
        </p>
      </div>
    </motion.section>
  );
}
