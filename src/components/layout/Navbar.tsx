"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/Logo";
import { useScrollPosition } from "@/lib/useScrollPosition";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#gewerbe", label: "Gewerbe" },
  { href: "#warum-wir", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8 md:gap-y-0">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={onNavigate}
            className="text-sm font-medium text-navy-900 transition-colors duration-200 hover:text-gold-600 md:text-[0.95rem]"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function CtaLink({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <a
      href="#beratung"
      onClick={onNavigate}
      className={cn(
        buttonVariants({ variant: "gold", size: "lg" }),
        "inline-flex h-10 items-center justify-center rounded-lg px-5 shadow-none",
        className,
      )}
      aria-label="Kostenlos beraten lassen – zum Formular"
    >
      Kostenlos beraten lassen
    </a>
  );
}

export function Navbar() {
  const scrollY = useScrollPosition();
  const solid = scrollY > 80;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,border-color,box-shadow,backdrop-filter] duration-200",
        solid
          ? "border-b border-navy-200/70 bg-white/95 shadow-sm shadow-navy-900/5 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-h-20 w-full max-w-7xl items-center justify-between gap-3 px-4 py-0 sm:gap-5 sm:px-6 md:h-24 md:max-h-24 md:gap-7 lg:gap-8 lg:px-8">
        <Logo variant="nav" priority />

        <nav
          className="hidden min-w-0 flex-1 items-center justify-end gap-8 lg:gap-10 xl:gap-12 md:flex"
          aria-label="Hauptnavigation"
        >
          <NavLinks />
          <CtaLink />
        </nav>

        <div className="shrink-0 md:hidden">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-navy-900"
            onClick={() => setMobileOpen(true)}
            aria-label="Menü öffnen"
          >
            <Menu className="size-6" />
          </Button>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetContent side="right" className="w-full gap-0 sm:max-w-sm">
              <SheetHeader className="border-b border-border pb-4 text-left">
                <SheetTitle className="text-lg">
                  Menü
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-4">
                <NavLinks onNavigate={() => setMobileOpen(false)} />
                <CtaLink
                  className="w-full"
                  onNavigate={() => setMobileOpen(false)}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
