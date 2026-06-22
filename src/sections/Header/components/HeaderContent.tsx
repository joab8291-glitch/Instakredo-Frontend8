import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const HeaderContent = () => {
  return (
    <div className="basis-[0%] grow text-center pl-0 md:text-left md:pl-[10%]">
      <HeaderLogo />
      <div className="inline-flex items-center gap-2 bg-green-50 border border-green-700/20 rounded-full px-4 py-1.5 text-xs text-green-700 font-semibold mb-5">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Live · Instant Processing
      </div>
      <h1 className="font-poppins text-3xl md:text-[52px] font-extrabold leading-[1.1] text-center md:text-left mb-4 text-neutral-900">
        Recharge Faster.{" "}
        <span className="text-green-700">Pay Less.</span>
        <br />
        Every Time.
      </h1>
      <p className="text-stone-500 text-[15px] md:text-lg leading-relaxed text-center md:text-left max-w-[460px] mb-6 mx-auto md:mx-0">
        Buy{" "}
        <span className="text-green-700 font-semibold">Safaricom</span>,{" "}
        <span className="text-red-600 font-semibold">Airtel</span> or{" "}
        <span className="text-sky-600 font-semibold">Telkom</span> airtime
        for yourself or anyone else, directly from your{" "}
        <span className="text-green-700 font-semibold">M-PESA</span>.
      </p>
      <HeaderActions buttonText="Buy Airtime now" />
      <HeaderActions buttonText="Buy Pin Voucher now" href="/buy-voucher#sender-number" />
    </div>
  );
};