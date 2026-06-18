import { AirtimePurchaseSection } from "@/sections/AirtimePurchaseSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { CallToActionSection } from "@/sections/CallToActionSection";

export const Main = () => {
  return (
    <main className="caret-transparent outline-[3px] py-[50px]">
      <AirtimePurchaseSection />
      <FeaturesSection />
      <CallToActionSection />
    </main>
  );
};