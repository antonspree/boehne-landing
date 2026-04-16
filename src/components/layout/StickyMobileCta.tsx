"use client";

import { MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useScrollPosition } from "@/lib/useScrollPosition";
import { cn } from "@/lib/utils";

const SHOW_AFTER = 420;

export function StickyMobileCta() {
  const scrollY = useScrollPosition();
  const visible = scrollY > SHOW_AFTER;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(10,22,40,0.12)] backdrop-blur-md transition-transform duration-300 lg:hidden",
        "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
        visible ? "translate-y-0" : "translate-y-full pointer-events-none",
      )}
      role="region"
      aria-label="Schnell zur kostenlosen Beratung"
    >
      <div className="mx-auto flex max-w-lg items-center gap-3 px-1">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-navy-900">Kostenlose Erstberatung</p>
          <p className="truncate text-[11px] text-slate-500">
            Unverbindlich · Antwort in der Regel innerhalb von 24 h
          </p>
        </div>
        <a
          href="#beratung"
          className={cn(
            buttonVariants({ variant: "gold", size: "sm" }),
            "shrink-0 gap-2 px-4 py-2.5 text-sm font-semibold shadow-sm",
          )}
          aria-label="Zum Beratungsformular"
        >
          <MessageCircle className="size-4" aria-hidden />
          Starten
        </a>
      </div>
    </div>
  );
}
