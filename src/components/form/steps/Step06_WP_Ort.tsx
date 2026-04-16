"use client";

import {
  CheckCircle2,
  DoorOpen,
  HelpCircle,
  LayoutGrid,
  Sun,
} from "lucide-react";
import type { FormState, WpInstallationsort } from "@/types/form";
import { cn } from "@/lib/utils";

const options: {
  value: WpInstallationsort;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "innen",
    label: "Innen",
    sublabel: "z. B. Technikraum, Keller",
    icon: <DoorOpen className="size-7 text-gold-500" aria-hidden />,
  },
  {
    value: "aussen",
    label: "Außen",
    sublabel: "Außenaufstellung",
    icon: <Sun className="size-7 text-gold-500" aria-hidden />,
  },
  {
    value: "beides",
    label: "Beides möglich",
    sublabel: "Noch unentschieden",
    icon: <LayoutGrid className="size-7 text-gold-500" aria-hidden />,
  },
  {
    value: "weissnicht",
    label: "Weiß ich noch nicht",
    sublabel: "Gerne vor Ort klären",
    icon: <HelpCircle className="size-7 text-gold-500" aria-hidden />,
  },
];

type Props = {
  form: FormState;
  onSelect: (value: WpInstallationsort) => void;
};

export function Step06_WP_Ort({ form, onSelect }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-navy-900">
        Wo soll die Wärmepumpe installiert werden?
      </p>
      <div className="grid gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition-all duration-150",
              form.wp_installationsort === opt.value
                ? "border-gold-500 bg-gold-50 text-navy-900"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            )}
            aria-pressed={form.wp_installationsort === opt.value}
            aria-label={`${opt.label}, ${opt.sublabel}`}
          >
            <span className="shrink-0">{opt.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{opt.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{opt.sublabel}</p>
            </div>
            {form.wp_installationsort === opt.value && (
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
