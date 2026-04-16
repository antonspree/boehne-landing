"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type FormSuccessProps = {
  title?: string;
  description?: string;
};

export function FormSuccess({
  title = "Anfrage gesendet",
  description = "Wir melden uns zeitnah bei Ihnen.",
}: FormSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-3 py-6 text-center"
      role="status"
    >
      <CheckCircle2
        className="size-14 text-gold-500"
        aria-hidden
      />
      <p className="text-lg font-semibold text-navy-900">
        {title}
      </p>
      <p className="text-sm text-slate-600">{description}</p>
    </motion.div>
  );
}
