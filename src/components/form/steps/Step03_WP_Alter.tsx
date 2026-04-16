"use client";

import { CheckCircle2 } from "lucide-react";
import type { FormState, WpAlter } from "@/types/form";
import { cn } from "@/lib/utils";

const options: { value: WpAlter; label: string; sublabel: string }[] = [
  { value: "unter5", label: "Unter 5 Jahre", sublabel: "Relativ neu" },
  { value: "5bis15", label: "5 bis 15 Jahre", sublabel: "Mittleres Alter" },
  { value: "ueber15", label: "Über 15 Jahre", sublabel: "Oft sanierungsbedürftig" },
];

type Props = {
  form: FormState;
  onSelect: (value: WpAlter) => void;
};

export function Step03_WP_Alter({ form, onSelect }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-navy-900">
        Wie alt ist Ihre aktuelle Heizung?
      </p>
      <div className="grid gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition-all duration-150",
              form.wp_alter === opt.value
                ? "border-gold-500 bg-gold-50 text-navy-900"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            )}
            aria-pressed={form.wp_alter === opt.value}
            aria-label={`${opt.label}, ${opt.sublabel}`}
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{opt.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{opt.sublabel}</p>
            </div>
            {form.wp_alter === opt.value && (
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
