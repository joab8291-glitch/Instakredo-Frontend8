import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const Footer = () => {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="items-center flex flex-col justify-between max-w-[1440px] gap-y-2.5 text-center w-full mx-auto px-5 py-6 md:flex-row md:px-16">
        <div className="text-stone-500 flex flex-col text-center md:text-start">
          <p className="font-semibold text-neutral-900">Copyright © InstaKredo</p>
          <p className="text-xs">Powered by Packson Ventures</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
};