import { HeaderContent } from "@/sections/Header/components/HeaderContent";
import { HeaderImage } from "@/sections/Header/components/HeaderImage";

export const Header = () => {
  return (
    <header className="relative items-center flex flex-col justify-between text-center px-2.5 py-5 md:items-start md:flex-row md:text-left md:px-0 md:py-[60px]">
      <HeaderContent />
      <HeaderImage />
    </header>
  );
};