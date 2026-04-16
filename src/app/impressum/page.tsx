import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum | SUNENERGY Böhne",
  description: "Impressum und rechtliche Angaben der SUNENERGY Böhne GmbH.",
};

export default function ImpressumPage() {
  return (
    <div className="bg-white px-4 py-24 sm:px-6">
      <article className="mx-auto max-w-3xl space-y-4 text-slate-700 leading-relaxed">
        <h1 className="text-3xl font-bold text-navy-900">
          Impressum
        </h1>

        <h2 className="mt-10 text-lg font-semibold text-navy-900">
          Angaben gemäß § 5 TMG
        </h2>
        <p>
          {site.company}
          <br />
          {site.addressLines[0]}
          <br />
          {site.addressLines[1]}
        </p>

        <p>
          Handelsregister: HRB XXXXX
          <br />
          Registergericht: Amtsgericht Musterstadt
        </p>

        <h2 className="mt-8 text-lg font-semibold text-navy-900">
          Vertreten durch
        </h2>
        <p>Max Mustermann (Geschäftsführer)</p>

        <h2 className="mt-8 text-lg font-semibold text-navy-900">Kontakt</h2>
        <p>
          Telefon: {site.phoneDisplay}
          <br />
          E-Mail:{" "}
          <a href={site.emailHref} className="text-gold-600 underline-offset-2 hover:underline">
            {site.email}
          </a>
        </p>

        <h2 className="mt-8 text-lg font-semibold text-navy-900">
          Umsatzsteuer-ID
        </h2>
        <p>DE XXXXXXXXX</p>

        <h2 className="mt-8 text-lg font-semibold text-navy-900">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <p>
          Max Mustermann
          <br />
          Musterstraße 1
          <br />
          44000 Musterstadt
        </p>

        <h2 className="mt-8 text-lg font-semibold text-navy-900">
          EU-Streitschlichtung
        </h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="text-gold-600 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          <br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-navy-900">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </article>
    </div>
  );
}
