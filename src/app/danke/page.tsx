"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DankePage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-32 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        aria-hidden
      >
        <CheckCircle2 className="size-16 text-gold-500" />
      </motion.div>
      <h1 className="mt-8 text-3xl font-bold text-navy-900 md:text-4xl">
        Vielen Dank für Ihre Anfrage!
      </h1>
      <p className="mt-6 max-w-lg text-slate-600 leading-relaxed">
        Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen. Bitte
        halten Sie Ihr Telefon bereit, da wir häufig telefonisch Kontakt
        aufnehmen.
      </p>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "mt-10 border-navy-200 text-navy-900 hover:bg-slate-50",
        )}
        aria-label="Zurück zur Startseite"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
