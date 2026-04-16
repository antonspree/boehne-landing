"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const sections: {
  id: string;
  title: string;
  body: React.ReactNode;
}[] = [
  {
    id: "verantwortlicher",
    title: "1. Verantwortlicher & Kontakt",
    body: (
      <>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist die
          SunEnergy GmbH, Musterstraße 1, 44000 Musterstadt, Deutschland.
          E-Mail: info@sunenergy.de, Telefon: +49 (0)2xx xxx xxxx.
        </p>
        <p className="mt-3">
          Sofern ein Datenschutzbeauftragter bestellt ist, erreichen Sie diesen
          unter der oben genannten Adresse mit dem Zusatz
          &bdquo;Datenschutz&ldquo; oder per E-Mail an info@sunenergy.de.
        </p>
      </>
    ),
  },
  {
    id: "verarbeitungen",
    title: "2. Übersicht der Verarbeitungen",
    body: (
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung
        einer funktionsfähigen Website, zur Bearbeitung von Anfragen und zur
        Kommunikation mit Ihnen erforderlich ist. Rechtsgrundlagen können
        insbesondere Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung), Art. 6
        Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb) und
        Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) sein.
      </p>
    ),
  },
  {
    id: "hosting",
    title: "3. Hosting (Vercel / Next.js)",
    body: (
      <p>
        Diese Website wird auf der Infrastruktur von Vercel Inc. gehostet
        (internationale CDN- und Hosting-Dienste). Beim Aufruf der Seite werden
        technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt, User-Agent)
        verarbeitet, um die Auslieferung der Inhalte zu ermöglichen. Hierzu
        besteht ein berechtigtes Interesse an einem sicheren und schnellen
        Webauftritt. Weitere Informationen finden Sie in der Datenschutzerklärung
        von Vercel.
      </p>
    ),
  },
  {
    id: "kontaktformular",
    title: "4. Kontaktformular / Lead-Formular",
    body: (
      <p>
        Wenn Sie das Formular nutzen, verarbeiten wir die von Ihnen eingegebenen
        Daten (Name, Kontaktdaten, Angaben zu Ihrem Anliegen) zur Bearbeitung
        Ihrer Angebotsanfrage und zur Kontaktaufnahme. Die Daten werden
        vorübergehend in unserem System bzw. bei unserem E-Mail-Dienst
        verarbeitet. Eine Speicherdauer richtet sich nach den gesetzlichen
        Aufbewahrungsfristen; Anfragedaten werden in der Regel nach Abschluss
        der Anbahnung bzw. nach 24 Monaten gelöscht, sofern keine gesetzlichen
        Pflichten entgegenstehen.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "5. Cookies & Analysen",
    body: (
      <p>
        Wir setzen keine nicht notwendigen Tracking-Cookies ohne Ihre
        Einwilligung ein. Technisch notwendige Cookies können zur
        Funktionsfähigkeit der Seite eingesetzt werden. Analyse- oder
        Marketingtools werden nur nach vorheriger Einwilligung aktiviert.
      </p>
    ),
  },
  {
    id: "rechte",
    title: "6. Ihre Rechte",
    body: (
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die
        Verarbeitung, soweit eine Rechtsgrundlage dies zulässt. Zudem haben Sie
        das Recht, erteilte Einwilligungen mit Wirkung für die Zukunft zu
        widerrufen. Sie können sich bei einer Datenschutzaufsichtsbehörde
        beschweren.
      </p>
    ),
  },
  {
    id: "fonts",
    title: "7. Google Fonts (lokale Einbindung)",
    body: (
      <p>
        Zur einheitlichen Darstellung wird die Schriftart Inter (normale
        Sans-Serif) über{" "}
        <code className="rounded bg-slate-100 px-1 text-sm">next/font/google</code>{" "}
        eingebunden. Die Schriftdateien werden beim Build auf unseren Server
        geladen und von dort ausgeliefert – es findet keine direkte Verbindung
        Ihres Browsers zu Google-Servern beim Seitenaufruf statt.
      </p>
    ),
  },
  {
    id: "unsplash",
    title: "8. Unsplash-Bilder",
    body: (
      <p>
        Auf dieser Website werden Bilder über das CDN von Unsplash (Unsplash
        Inc., USA) eingebunden. Beim Laden dieser Bilder kann Ihre IP-Adresse an
        Unsplash übermittelt werden. Die Einbindung erfolgt zur ansprechenden
        Gestaltung des Auftritts auf Grundlage unseres berechtigten Interesses
        (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen finden Sie in der
        Datenschutzerklärung von Unsplash.
      </p>
    ),
  },
  {
    id: "ssl",
    title: "9. SSL-Verschlüsselung",
    body: (
      <p>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
        vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte
        Verbindung erkennen Sie an der Adresszeile Ihres Browsers
        (&bdquo;https://&ldquo;).
      </p>
    ),
  },
  {
    id: "aktualitaet",
    title: "10. Aktualität dieser Datenschutzerklärung",
    body: (
      <p>
        Wir passen diese Datenschutzerklärung bei Änderungen der Website oder
        der Rechtslage an. Es gilt die jeweils auf dieser Seite veröffentlichte
        Fassung.
      </p>
    ),
  },
];

export function DatenschutzContent() {
  return (
    <>
      <h1 className="text-3xl font-bold text-navy-900">
        Datenschutzerklärung
      </h1>
      <p className="mt-4 text-slate-600">
        Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend
        informieren wir Sie transparent über die Verarbeitung im Zusammenhang
        mit dieser Website.
      </p>

      <Accordion multiple={false} className="mt-12 w-full">
        {sections.map((s) => (
          <AccordionItem key={s.id} value={s.id}>
            <AccordionTrigger className="text-left text-base font-semibold text-navy-900 hover:text-gold-600">
              {s.title}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-600">
              {s.body}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
