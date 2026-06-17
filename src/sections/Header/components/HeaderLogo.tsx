import packsonLogo from "@/assets/packson-ventures-logo.png";

export const HeaderLogo = () => {
  return (
    <div className="caret-transparent outline-[3px] text-center md:text-left mt-0 mb-8 md:mt-[-10px] md:mb-[60px]">
      <div className="font-poppins text-4xl md:text-[48px] font-extrabold leading-none tracking-tight">
        <span className="text-neutral-800">Insta</span>
        <span className="text-green-700">Kredo</span>
      </div>
      <div className="flex items-center gap-2 justify-center md:justify-start mt-2.5">
        <span className="text-xs text-stone-500 uppercase tracking-wider">
          Powered by
        </span>
        <img
          src={packsonLogo}
          alt="Packson Ventures"
          className="h-5 w-auto align-baseline"
        />
      </div>
    </div>
  );
};
