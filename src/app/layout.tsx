import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "SunEnergy – Energetische Sanierung in NRW | Photovoltaik & Wärmepumpen",
  description:
    "Regionaler Fachbetrieb für Photovoltaik, Wärmepumpen und Energiespeicher in NRW. Persönliche Beratung, eigene Monteure, keine Fremdvergabe. Jetzt kostenlos beraten lassen.",
  keywords: [
    "Photovoltaik NRW",
    "Wärmepumpe NRW",
    "Energetische Sanierung",
    "SunEnergy",
    "Energiespeicher",
    "Solaranlage NRW",
  ],
  openGraph: {
    title: "SunEnergy – Energetische Sanierung in NRW",
    description:
      "Regionaler Fachbetrieb für Photovoltaik, Wärmepumpen und Energiespeicher in NRW.",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "SunEnergy – Photovoltaik und Wärmepumpen in NRW",
      },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://sunenergy.de" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-navy-50/40 font-sans text-navy-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
