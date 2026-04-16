"use client";

import { CheckCircle2 } from "lucide-react";
import type { FormState, WpEigentuemer } from "@/types/form";
import { cn } from "@/lib/utils";

const options: { value: WpEigentuemer; label: string; sublabel: string }[] = [
  { value: "ja", label: "Ja", sublabel: "Ich bin Eigentümer/in" },
  { value: "nein", label: "Nein", sublabel: "z. B. Mieter/in oder Verwalter" },
];

type Props = {
  form: FormState;
  onSelect: (value: WpEigentuemer) => void;
};

export function Step05_WP_Eigentuemer({ form, onSelect }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-navy-900">
        Sind Sie Eigentümer des Objekts?
      </p>
      <div className="grid gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition-all duration-150",
              form.wp_eigentuemer === opt.value
                ? "border-gold-500 bg-gold-50 text-navy-900"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            )}
            aria-pressed={form.wp_eigentuemer === opt.value}
            aria-label={`${opt.label}, ${opt.sublabel}`}
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{opt.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{opt.sublabel}</p>
            </div>
            {form.wp_eigentuemer === opt.value && (
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
