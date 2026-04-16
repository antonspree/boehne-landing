"use client";

import { CheckCircle2 } from "lucide-react";
import { Sun, Thermometer } from "lucide-react";
import type { FormState, InterestType } from "@/types/form";
import { cn } from "@/lib/utils";

const options: {
  value: InterestType;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "photovoltaik",
    label: "Photovoltaik",
    sublabel: "Solaranlage & Speicher",
    icon: <Sun className="size-8 text-gold-500" aria-hidden />,
  },
  {
    value: "waermepumpe",
    label: "Wärmepumpe",
    sublabel: "Heizung modernisieren",
    icon: <Thermometer className="size-8 text-gold-500" aria-hidden />,
  },
];

type Props = {
  form: FormState;
  onSelect: (value: InterestType) => void;
};

export function Step01_Interesse({ form, onSelect }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-navy-900">
        Wofür interessieren Sie sich?
      </p>
      <div className="grid gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={cn(
              "flex min-h-[52px] w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/70 focus-visible:ring-offset-2",
              form.interest === opt.value
                ? "border-gold-500 bg-gold-50 text-navy-900"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            )}
            aria-pressed={form.interest === opt.value}
            aria-label={`${opt.label}: ${opt.sublabel}`}
          >
            <span className="text-2xl" aria-hidden>
              {opt.icon}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{opt.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{opt.sublabel}</p>
            </div>
            {form.interest === opt.value && (
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
