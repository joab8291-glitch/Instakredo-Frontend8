import { AirtimePurchaseSection } from "@/sections/AirtimePurchaseSection";
import { StatsStrip } from "@/sections/StatsStrip";
import { PricingSection } from "@/sections/PricingSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { FAQSection } from "@/sections/FAQSection";
import { WhatsAppCTA } from "@/sections/WhatsAppSection";

export const Main = () => {
  return (
    <main className="caret-transparent outline-[3px] py-[50px]">
      <AirtimePurchaseSection />
      <StatsStrip />
      <PricingSection />
      <FeaturesSection />
      <FAQSection />
      <WhatsAppCTA />
    </main>
  );
};
