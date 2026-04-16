"use client";

import {
  Battery,
  Car,
  Gauge,
  Home,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { FormState } from "@/types/form";
import { cn } from "@/lib/utils";

type Props = {
  form: FormState;
  onChange: (patch: Partial<FormState>) => void;
};

const rows: {
  key: keyof Pick<
    FormState,
    "pv_speicher" | "pv_ladestation" | "pv_dynamisch" | "pv_v2h"
  >;
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    key: "pv_speicher",
    title: "Speicher",
    description: "Eigenverbrauch optimieren, Strom für später sichern",
    icon: <Battery className="size-6 text-gold-500" aria-hidden />,
  },
  {
    key: "pv_ladestation",
    title: "Ladestation",
    description: "E-Auto zuhause laden, perfekt zur PV abgestimmt",
    icon: <Car className="size-6 text-gold-500" aria-hidden />,
  },
  {
    key: "pv_dynamisch",
    title: "Dynamischer Tarif",
    description: "Günstige Börsenpreise automatisch nutzen",
    icon: <Gauge className="size-6 text-gold-500" aria-hidden />,
  },
  {
    key: "pv_v2h",
    title: "Vehicle-to-Home",
    description: "E-Auto-Batterie als Puffer fürs Zuhause",
    icon: <Home className="size-6 text-gold-500" aria-hidden />,
  },
];

export function Step02_PV_Options({ form, onChange }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-navy-900">
        Welche Themen sind für Sie relevant? (mehrfach möglich)
      </p>
      <div className="space-y-3">
        {rows.map((row) => {
          const on = form[row.key];
          return (
            <div
              key={row.key}
              className={cn(
                "flex items-center gap-3 rounded-xl border-2 p-4 transition-all duration-150",
                on
                  ? "border-gold-400 bg-gold-50"
                  : "border-slate-200 bg-white",
              )}
            >
              <div className="shrink-0">{row.icon}</div>
              <div className="min-w-0 flex-1">
                <Label
                  htmlFor={`pv-${row.key}`}
                  className="text-sm font-medium text-navy-900"
                >
                  {row.title}
                </Label>
                <p className="text-xs text-slate-500">{row.description}</p>
              </div>
              <Switch
                id={`pv-${row.key}`}
                checked={on}
                onCheckedChange={(v) => onChange({ [row.key]: v })}
                className="data-checked:border-gold-500 data-checked:bg-gold-500"
                aria-label={row.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
