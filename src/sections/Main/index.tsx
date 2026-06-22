import { AirtimePurchaseSection } from "@/sections/AirtimePurchaseSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { CallToActionSection } from "@/sections/CallToActionSection";

export const Main = () => {
  return (
    <main className="bg-[radial-gradient(circle,rgb(255,255,255)_20%,rgb(255,252,246)_40%,rgb(243,249,254)_60%,rgb(250,251,249)_100%)] caret-transparent outline-[3px] py-[50px]">
      <AirtimePurchaseSection />
      <FeaturesSection />
      <CallToActionSection />
    </main>
  );
};