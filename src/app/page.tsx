import { ConversionMidSection } from "@/components/sections/ConversionMidSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { GewerbeSection } from "@/components/sections/GewerbeSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LeistungenSection } from "@/components/sections/LeistungenSection";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { SectionWave } from "@/components/sections/SectionWave";
import { TrustStatsStrip } from "@/components/sections/TrustStatsStrip";
import { WarumWirSection } from "@/components/sections/WarumWirSection";
import { ZukunftSection } from "@/components/sections/ZukunftSection";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";

export default function HomePage() {
  return (
    <div className="pb-[4.5rem] lg:pb-0">
      <HeroSection />
      <SectionWave />
      <TrustStatsStrip />
      <LeistungenSection />
      <ZukunftSection />
      <GewerbeSection />
      <WarumWirSection />
      <ConversionMidSection />
      <PartnerSection />
      <FAQSection />
      <FinalCTASection />
      <StickyMobileCta />
    </div>
  );
}
