"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useScrollPosition } from "@/lib/useScrollPosition";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#gewerbe", label: "Gewerbe" },
  { href: "#warum-wir", label: "Über uns" },
  { href: "#beratung", label: "Kontakt" },
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
        "sticky top-0 z-50 w-full transition-all duration-200",
        solid
          ? "border-b border-slate-100/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          aria-label="SunEnergy Startseite"
        >
          <span className="text-gold-500">Sun</span>
          <span className="text-navy-900">Energy</span>
        </Link>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Hauptnavigation"
        >
          <NavLinks />
          <CtaLink />
        </nav>

        <div className="md:hidden">
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
