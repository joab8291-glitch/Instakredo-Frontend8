export const AirtimeFormIntro = () => {
  return (
    <div className="bg-slate-50 caret-transparent outline-[3px] w-full p-5 rounded-t-2xl">
      <h2 className="text-2xl font-bold caret-transparent outline-[3px] mb-2.5 pt-[15px]">
        Buy or send airtime today
      </h2>
      <p className="text-black/80 caret-transparent outline-[3px] my-4 px-5 py-2.5 md:px-[100px]">
        Buy{" "}
        <span className="text-green-700 font-bold caret-transparent outline-[3px]">
          Safaricom
        </span>
        ,
        <span className="text-red-600 font-bold caret-transparent outline-[3px]">
          Airtel
        </span>
        or
        <span className="text-sky-600 font-bold caret-transparent outline-[3px]">
          Telkom
        </span>
        airtime for yourself or any other number directly from your
        <span className="text-green-700 font-bold caret-transparent outline-[3px]">
          M-PESA
        </span>
        .
      </p>
    </div>
  );
};
