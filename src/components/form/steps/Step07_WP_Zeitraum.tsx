"use client";

import { CheckCircle2 } from "lucide-react";
import type { FormState, WpZeitraum } from "@/types/form";
import { cn } from "@/lib/utils";

const options: { value: WpZeitraum; label: string; sublabel: string }[] = [
  { value: "sofort", label: "Sofort", sublabel: "Schnellstmöglich" },
  { value: "3monate", label: "In 3 Monaten", sublabel: "Kurzfristige Planung" },
  { value: "6monate", label: "In 6 Monaten", sublabel: "Mittelfristig" },
  { value: "spaeter", label: "Später", sublabel: "Noch in der Informationsphase" },
];

type Props = {
  form: FormState;
  onSelect: (value: WpZeitraum) => void;
};

export function Step07_WP_Zeitraum({ form, onSelect }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-navy-900">
        Wann planen Sie die Umsetzung?
      </p>
      <div className="grid gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition-all duration-150",
              form.wp_zeitraum === opt.value
                ? "border-gold-500 bg-gold-50 text-navy-900"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            )}
            aria-pressed={form.wp_zeitraum === opt.value}
            aria-label={`${opt.label}, ${opt.sublabel}`}
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{opt.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{opt.sublabel}</p>
            </div>
            {form.wp_zeitraum === opt.value && (
              <CheckCircle2
                className="ml-auto size-5 shrink-0 text-gold-500"
                aria-hidden
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
