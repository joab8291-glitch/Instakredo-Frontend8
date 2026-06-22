import packsonLogo from "@/assets/packson-ventures-logo.png";

export const HeaderLogo = () => {
  return (
    <div className="text-center md:text-left mt-0 mb-6 md:mb-[40px]">
      <div className="font-poppins text-4xl md:text-[48px] font-extrabold leading-none tracking-tight">
        <span className="text-white">Insta</span>
        <span className="text-green-400">Kredo</span>
      </div>
      <div className="flex items-center gap-2 justify-center md:justify-start mt-2.5">
        <span className="text-[11px] text-[#6b8070] uppercase tracking-wider">
          Powered by
        </span>
        <img src={packsonLogo} alt="Packson Ventures" className="h-5 w-auto opacity-80" />
      </div>
    </div>
  );
};