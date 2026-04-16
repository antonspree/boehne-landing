"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type StepIndicatorProps = {
  /** 0–1 Anteil für die Füllung */
  progress: number;
  label: string;
  className?: string;
};

export function StepIndicator({
  progress,
  label,
  className,
}: StepIndicatorProps) {
  const pct = Math.min(100, Math.max(0, progress * 100));

  return (
    <div className={cn("w-full", className)}>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <motion.div
          className="h-full rounded-full bg-gold-500"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
      <p className="mt-2 text-right text-xs text-slate-500">{label}</p>
    </div>
  );
}
