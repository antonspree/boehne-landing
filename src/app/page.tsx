import { AblaufSection } from "@/components/sections/AblaufSection";
import { ConversionMidSection } from "@/components/sections/ConversionMidSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FoerderungenSection } from "@/components/sections/FoerderungenSection";
import { GewerbeSection } from "@/components/sections/GewerbeSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { KontaktSection } from "@/components/sections/KontaktSection";
import { LeistungenSection } from "@/components/sections/LeistungenSection";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { SicherheitSection } from "@/components/sections/SicherheitSection";
import { SonnenenergieSection } from "@/components/sections/SonnenenergieSection";
import { TrustStatsStrip } from "@/components/sections/TrustStatsStrip";
import { WarumWirSection } from "@/components/sections/WarumWirSection";
import { ZukunftSection } from "@/components/sections/ZukunftSection";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";

export default function HomePage() {
  return (
    <div className="pb-[4.5rem] lg:pb-0">
      <HeroSection />
      <TrustStatsStrip />
      <LeistungenSection />
      <SonnenenergieSection />
      <FoerderungenSection />
      <ZukunftSection />
      <GewerbeSection />
      <AblaufSection />
      <WarumWirSection />
      <SicherheitSection />
      <ConversionMidSection />
      <PartnerSection />
      <FAQSection />
      <KontaktSection />
      <FinalCTASection />
      <StickyMobileCta />
    </div>
  );
}
