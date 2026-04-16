"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp } from "@/lib/motion";

const faqs = [
  {
    q: "Warum lohnt sich eine PV-Anlage jetzt noch?",
    a: "Die Einspeisevergütung ist gesunken, aber die Eigenverbrauchsoptimierung und gestiegene Strompreise machen PV heute attraktiver denn je. Wer jetzt investiert, sichert sich stabile Energiekosten für die nächsten 25+ Jahre.",
  },
  {
    q: "Was bringt ein dynamischer Stromtarif?",
    a: "In Kombination mit einem Speicher können Sie Strom dann kaufen, wenn er an der Börse günstig ist – oft nachts oder bei viel Wind. Das senkt Ihre Stromkosten zusätzlich um 15–30%.",
  },
  {
    q: "Was ist Vehicle-to-Home und für wen lohnt es sich?",
    a: "V2H ermöglicht es, die Batterie Ihres E-Autos als Hausenergiespeicher zu nutzen. Wer ein E-Auto hat oder plant, kann damit einen teuren Heimspeicher teilweise ersetzen und gleichzeitig die Flexibilität erhöhen.",
  },
  {
    q: "Was passiert bei einem Stromausfall?",
    a: "Mit einem Heimspeicher und aktivierter Ersatzstromfunktion schaltet Ihr System automatisch in den Inselbetrieb. Ihr Haus läuft weiter – Beleuchtung, Kühlschrank, wichtige Geräte sind weiterhin versorgt.",
  },
  {
    q: "Wie lange dauert eine Installation?",
    a: "Eine Standard-PV-Anlage mit Speicher ist in 1–2 Tagen installiert. Die Planung, Genehmigung und Materialbestellung nehmen je nach Auslastung 4–8 Wochen in Anspruch. Wir halten Sie transparent auf dem Laufenden.",
  },
  {
    q: "Welche Förderungen gibt es?",
    a: "Wärmepumpen werden aktuell mit bis zu 70% über die BEG (Bundesförderung Effizienzgebäude) gefördert. Bei PV gibt es attraktive KfW-Kredite. Wir beraten Sie in der Erstberatung kostenlos über alle aktuellen Optionen.",
  },
];

export function FAQSection() {
  return (
    <motion.section
      id="faq"
      className="bg-white py-24 md:py-32"
      {...fadeInUp}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-gold-600">
              Häufige Fragen
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
              Was Sie wissen möchten – ehrlich beantwortet.
            </h2>
          </div>
          <div>
            <Accordion multiple={false} className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-navy-900 hover:text-gold-600">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
