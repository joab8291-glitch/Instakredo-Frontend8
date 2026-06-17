import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const HeaderContent = () => {
  return (
    <div className="caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] text-center pl-0 md:text-left md:pl-[10%]">
      <HeaderLogo />
      <div className="caret-transparent leading-8 outline-[3px] text-center md:text-left">
        <h1 className="text-2xl font-bold caret-transparent outline-[3px] text-center my-[16.08px] md:text-[44.8px] md:text-left md:my-[30.016px]">
          Instant Airtime.{" "}
        </h1>
        <h1 className="text-2xl font-bold caret-transparent outline-[3px] text-center my-[16.08px] md:text-[44.8px] md:text-left md:my-[30.016px]">
          <span className="text-sky-600 text-2xl caret-transparent outline-[3px] text-center md:text-[44.8px] md:text-left">
            Anytime
          </span>
          , Anywhere.{" "}
          <span className="text-green-700 text-2xl caret-transparent outline-[3px] text-center md:text-[44.8px] md:text-left">
            Enjoy up to 15%
            <br className="text-2xl caret-transparent outline-[3px] text-center md:text-[44.8px] md:text-left" />
            <br className="text-2xl caret-transparent outline-[3px] text-center md:text-[44.8px] md:text-left" />
            discount.{" "}
          </span>
        </h1>
      </div>
      <p className="text-cyan-950 text-[14.4px] caret-transparent leading-[27.2px] outline-[3px] text-center my-[14.4px] md:text-xl md:text-left md:my-5">
        Buy{" "}
        <span className="text-green-700 text-[14.4px] font-bold caret-transparent outline-[3px] text-center md:text-xl md:text-left">
          Safaricom
        </span>
        ,
        <span className="text-red-600 text-[14.4px] font-bold caret-transparent outline-[3px] text-center md:text-xl md:text-left">
          Airtel
        </span>
        or
        <span className="text-sky-600 text-[14.4px] font-bold caret-transparent outline-[3px] text-center md:text-xl md:text-left">
          Telkom
        </span>
        airtime for yourself or any other number directly from your
        <span className="text-green-700 text-[14.4px] font-bold caret-transparent outline-[3px] text-center md:text-xl md:text-left">
          M-PESA{" "}
        </span>
        .
      </p>
      <HeaderActions buttonText="Buy Airtime now" />
      <HeaderActions
        buttonText="Buy Pin Voucher now"
        href="/buy-voucher#sender-number"
      />
    </div>
  );
};
