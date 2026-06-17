import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const Footer = () => {
  return (
    <footer className="caret-transparent outline-[3px]">
      <div className="items-center box-border caret-transparent gap-x-2.5 flex flex-col justify-between max-w-[1440px] outline-[3px] gap-y-2.5 text-center w-full mx-auto px-5 md:gap-x-5 md:flex-row md:gap-y-5 md:text-start md:px-16">
        <div className="text-stone-700 items-center caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] opacity-80 outline-[3px] text-center md:text-start">
          <p>Copyright © InstaKredo</p>
          <p className="text-xs text-stone-500">Powered by Packson Ventures</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
};
