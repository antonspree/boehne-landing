import Link from "next/link";
import { Camera, MessageCircle, Share2 } from "lucide-react";

const phoneDisplay = "+49 (0)2xx xxx xxxx";
const phoneHref = "tel:+492xxxxxxxx";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl font-bold">
              <span className="text-gold-500">Sun</span>
              <span className="text-white">Energy</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Regionaler Fachbetrieb für energetische Sanierung in NRW.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-md text-slate-400 transition-colors duration-200 hover:text-gold-400"
                aria-label="SunEnergy auf LinkedIn"
              >
                <Share2 className="size-5" aria-hidden />
              </a>
              <a
                href="#"
                className="rounded-md text-slate-400 transition-colors duration-200 hover:text-gold-400"
                aria-label="SunEnergy auf Instagram"
              >
                <Camera className="size-5" aria-hidden />
              </a>
              <a
                href="#"
                className="rounded-md text-slate-400 transition-colors duration-200 hover:text-gold-400"
                aria-label="SunEnergy auf Facebook"
              >
                <MessageCircle className="size-5" aria-hidden />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-slate-500">
              Leistungen
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#leistungen"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Photovoltaik
                </a>
              </li>
              <li>
                <a
                  href="#leistungen"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Wärmepumpen
                </a>
              </li>
              <li>
                <a
                  href="#leistungen"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Energiespeicher
                </a>
              </li>
              <li>
                <a
                  href="#leistungen"
                  className="transition-colors duration-200 hover:text-white"
                >
                  E-Mobilität
                </a>
              </li>
              <li>
                <a
                  href="#gewerbe"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Gewerbe
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-slate-500">
              Unternehmen
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#warum-wir"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  href="#partner"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Partner
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors duration-200 hover:text-white"
                >
                  FAQ
                </a>
              </li>
              <li>
                <span className="text-slate-500">Karriere</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-slate-500">
              Kontakt
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <span aria-hidden>📍</span>
                <span>
                  Musterstraße 1
                  <br />
                  44000 Musterstadt, NRW
                </span>
              </li>
              <li>
                <a
                  href={phoneHref}
                  className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
                >
                  <span aria-hidden>📞</span>
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sunenergy.de"
                  className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
                >
                  <span aria-hidden>✉</span>
                  info@sunenergy.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© 2025 SunEnergy GmbH – Alle Rechte vorbehalten</p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="transition-colors duration-200 hover:text-slate-300"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition-colors duration-200 hover:text-slate-300"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
