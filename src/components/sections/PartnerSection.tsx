"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

const partners = [
  "e3DC",
  "SMA",
  "BYD",
  "Sungrow",
  "QCells",
  "Trina Solar",
  "LBS Finanzierung",
] as const;

export function PartnerSection() {
  return (
    <motion.section
      id="partner"
      className="border-y border-navy-100 bg-navy-50 py-20 md:py-24"
      {...fadeInUp}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h3 className="text-lg font-semibold text-navy-600">
          Lieferanten &amp; Marktpartner
        </h3>
        <p className="mt-4 text-base leading-relaxed text-navy-800 md:text-[1.05rem]">
          Als Lieferanten und Marktpartner nehmen wir{" "}
          <span className="font-semibold text-navy-900">e3DC</span>,{" "}
          <span className="font-semibold text-navy-900">SMA</span>,{" "}
          <span className="font-semibold text-navy-900">BYD</span>,{" "}
          <span className="font-semibold text-navy-900">Sungrow</span>,{" "}
          <span className="font-semibold text-navy-900">QCells</span>,{" "}
          <span className="font-semibold text-navy-900">Trina Solar</span>,{" "}
          <span className="font-semibold text-navy-900">LBS Finanzierung</span>.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {partners.map((name) => (
            <div
              key={name}
              className="grayscale transition-all duration-200 hover:grayscale-0"
            >
              <span className="inline-block rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm font-bold text-navy-700 shadow-sm md:px-5 md:text-base">
                {name}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-navy-700/85 leading-relaxed">
          Für Finanzierungen kooperieren wir mit der{" "}
          <strong className="font-medium text-navy-800">LBS Minden</strong> –
          damit Solar &amp; Speicher auch ohne großes Eigenkapital planbar werden.
        </p>
      </div>
    </motion.section>
  );
}
