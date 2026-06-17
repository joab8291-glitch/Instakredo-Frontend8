import { HeaderContent } from "@/sections/Header/components/HeaderContent";
import { HeaderImage } from "@/sections/Header/components/HeaderImage";

export const Header = () => {
  return (
    <header className="relative items-center bg-orange-50 caret-transparent flex flex-col justify-between outline-[3px] text-center px-2.5 py-5 md:items-start md:flex-row md:text-left md:px-0 md:py-[50px]">
      <HeaderContent />
      <HeaderImage />
    </header>
  );
};
