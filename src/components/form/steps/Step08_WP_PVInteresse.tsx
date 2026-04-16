"use client";

import { CheckCircle2 } from "lucide-react";
import type { FormState, WpPvInteresse } from "@/types/form";
import { cn } from "@/lib/utils";

const options: { value: WpPvInteresse; label: string; sublabel: string }[] = [
  { value: "ja", label: "Ja", sublabel: "Ich interessiere mich für eine PV-Anlage" },
  {
    value: "vielleicht",
    label: "Vielleicht",
    sublabel: "Noch unsicher – gerne im Gespräch",
  },
  { value: "nein", label: "Nein", sublabel: "Derzeit kein Bedarf" },
];

type Props = {
  form: FormState;
  onSelect: (value: WpPvInteresse) => void;
};

export function Step08_WP_PVInteresse({ form, onSelect }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-navy-900">
        Besteht auch Interesse an einer Photovoltaik-Anlage?
      </p>
      <p className="text-xs text-slate-500">Optional – hilft uns bei der Gesamtplanung.</p>
      <div className="grid gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition-all duration-150",
              form.wp_pv_interesse === opt.value
                ? "border-gold-500 bg-gold-50 text-navy-900"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            )}
            aria-pressed={form.wp_pv_interesse === opt.value}
            aria-label={`${opt.label}, ${opt.sublabel}`}
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{opt.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{opt.sublabel}</p>
            </div>
            {form.wp_pv_interesse === opt.value && (
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
