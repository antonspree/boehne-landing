"use client";

import { Building2, Home, Layers, Warehouse } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import type { FormState, WpGebaeudetyp } from "@/types/form";
import { cn } from "@/lib/utils";

const options: {
  value: WpGebaeudetyp;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "einfamilienhaus",
    label: "Einfamilienhaus",
    icon: <Home className="size-8 text-gold-500" aria-hidden />,
  },
  {
    value: "doppelhaus",
    label: "Doppelhaus",
    icon: <Building2 className="size-8 text-gold-500" aria-hidden />,
  },
  {
    value: "reihenhaus",
    label: "Reihenhaus",
    icon: <Layers className="size-8 text-gold-500" aria-hidden />,
  },
  {
    value: "mehrfamilienhaus",
    label: "Mehrfamilienhaus",
    icon: <Warehouse className="size-8 text-gold-500" aria-hidden />,
  },
];

type Props = {
  form: FormState;
  onSelect: (value: WpGebaeudetyp) => void;
};

export function Step04_WP_Gebaeude({ form, onSelect }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-navy-900">
        Um welchen Gebäudetyp handelt es sich?
      </p>
      <div className="grid gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition-all duration-150",
              form.wp_gebaeudetyp === opt.value
                ? "border-gold-500 bg-gold-50 text-navy-900"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            )}
            aria-pressed={form.wp_gebaeudetyp === opt.value}
            aria-label={opt.label}
          >
            <span className="shrink-0">{opt.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{opt.label}</p>
            </div>
            {form.wp_gebaeudetyp === opt.value && (
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
