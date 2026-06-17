export const AirtimeForm = () => {
  return (
    <form className="caret-transparent outline-[3px]">
      <input
        type="hidden"
        value="0.915"
        className="appearance-none text-black text-[13.3333px] bg-transparent caret-transparent hidden outline-[3px] text-start p-0 font-arial"
      />
      <input
        type="hidden"
        value="0.98"
        className="appearance-none text-black text-[13.3333px] bg-transparent caret-transparent hidden outline-[3px] text-start p-0 font-arial"
      />
      <input
        type="hidden"
        value="0.98"
        className="appearance-none text-black text-[13.3333px] bg-transparent caret-transparent hidden outline-[3px] text-start p-0 font-arial"
      />
      <input
        type="hidden"
        value="200"
        className="appearance-none text-black text-[13.3333px] bg-transparent caret-transparent hidden outline-[3px] text-start p-0 font-arial"
      />
      <input
        type="hidden"
        value="0700 000 000"
        className="appearance-none text-black text-[13.3333px] bg-transparent caret-transparent hidden outline-[3px] text-start p-0 font-arial"
      />
      <div className="caret-transparent outline-[3px] text-left mb-5 px-5">
        <label className="font-semibold caret-transparent block outline-[3px] mb-[5px]">
          Select Operator : Safaricom, Airtel, Telkom
        </label>
        <div className="relative caret-transparent outline-[3px] w-full">
          <div className="items-center bg-white caret-transparent flex justify-between outline-[3px] border border-stone-300 p-3 rounded-lg border-solid">
            <div className="items-center bg-white caret-transparent gap-x-2.5 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5">
              <div className="text-green-700 font-bold caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                <img
                  src="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/safaricom.webp"
                  alt="Safaricom"
                  className="caret-transparent inline outline-[3px] align-baseline w-20"
                />
              </div>
              <span className="caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                Safaricom
              </span>
            </div>
            <img
              src="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/icon-2.svg"
              alt="Icon"
              className="caret-transparent h-6 outline-[3px] align-baseline w-6"
            />
          </div>
          <div className="absolute bg-stone-50 shadow-[rgba(0,0,0,0.1)_0px_4px_12px_0px] caret-transparent hidden flex-col outline-[3px] z-10 py-[5px] rounded-lg top-full inset-x-0">
            <div className="items-center caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 px-3 py-2.5 hover:bg-neutral-100">
              <div className="text-green-700 font-bold caret-transparent outline-[3px]">
                <img
                  src="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/safaricom.webp"
                  alt="Safaricom"
                  className="caret-transparent inline outline-[3px] align-baseline w-20"
                />
              </div>
              <span className="caret-transparent block outline-[3px]">
                Safaricom
              </span>
            </div>
            <div className="items-center caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 px-3 py-2.5 hover:bg-neutral-100">
              <div className="text-red-600 font-bold caret-transparent outline-[3px]">
                <img
                  src="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/airtel.webp"
                  alt="Airtel"
                  className="caret-transparent inline outline-[3px] align-baseline w-20"
                />
              </div>
              <span className="caret-transparent block outline-[3px]">
                Airtel
              </span>
            </div>
            <div className="items-center caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 px-3 py-2.5 hover:bg-neutral-100">
              <div className="text-sky-600 font-bold caret-transparent outline-[3px]">
                <img
                  src="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/telcom.webp"
                  alt="Telkom"
                  className="caret-transparent inline outline-[3px] align-baseline w-20"
                />
              </div>
              <span className="caret-transparent block outline-[3px]">
                Telkom
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="caret-transparent outline-[3px] text-left mb-5 px-5">
        <label className="font-semibold caret-transparent block outline-[3px] mb-[5px]">
          From: Mobile number (To charge)
        </label>
        <input
          type="tel"
          placeholder="Enter phone number"
          className="text-black text-[17.6px] caret-transparent outline-[3px] text-start w-[90%] border border-stone-300 mt-[5px] p-3.5 rounded-lg border-solid font-arial md:w-[95%]"
        />
        <p className="caret-transparent outline-[3px] my-4"></p>
      </div>
      <div className="caret-transparent outline-[3px] text-left mb-5 px-5">
        <label className="font-semibold caret-transparent block outline-[3px] mb-[5px]">
          To: Enter Mobile number
        </label>
        <input
          type="tel"
          placeholder="Enter recipient's number"
          className="text-black text-[17.6px] caret-transparent outline-[3px] text-start w-[90%] border border-stone-300 mt-[5px] p-3.5 rounded-lg border-solid font-arial md:w-[95%]"
        />
        <p className="caret-transparent outline-[3px] my-4"></p>
      </div>
      <div className="caret-transparent outline-[3px] text-left mb-5 px-5">
        <label className="font-semibold caret-transparent block outline-[3px] mb-[5px]">
          Enter Amount
        </label>
        <input
          type="number"
          placeholder="Enter amount"
          className="text-black text-[17.6px] caret-transparent outline-[3px] text-start w-[90%] border border-stone-300 mt-[5px] p-3.5 rounded-lg border-solid font-arial md:w-[95%]"
        />
        <p className="caret-transparent outline-[3px] my-4"></p>
      </div>
      <div className="border-t-blue-500 caret-transparent hidden h-10 outline-[3px] w-10 mx-auto my-5 rounded-[50%] border-b-black/10 border-x-black/10 border-4 border-solid"></div>
      <div className="caret-transparent outline-[3px]">
        <p className="caret-transparent outline-[3px] my-4">
          0700 000 000 will receive KES 200 worth of airtime. You&#39;ll pay KES
          183.
        </p>
      </div>
      <div className="text-white bg-green-500 caret-transparent hidden outline-[3px] mb-5 p-[15px] rounded-[5px]">
        <p className="caret-transparent outline-[3px] my-4">
          Your airtime purchase has been initiated! Kindly wait for an MPesa
          prompt on your phone to pay and complete the purchase.
        </p>
      </div>
      <div className="caret-transparent outline-[3px]">
        <div className="text-white bg-red-600 caret-transparent hidden outline-[3px] mb-5 p-[15px] rounded-[5px]">
          Invalid phone number!
        </div>
        <div className="text-white bg-red-600 caret-transparent hidden outline-[3px] mb-5 p-[15px] rounded-[5px]">
          Amount must be between KES 20 and KES 10000!
        </div>
        <div className="text-white bg-red-600 caret-transparent hidden outline-[3px] mb-5 p-[15px] rounded-[5px]">
          Please fix the errors in the form and try again.
        </div>
        <div className="text-white bg-red-600 caret-transparent hidden outline-[3px] mb-5 p-[15px] rounded-[5px]">
          Could not process your request, please try again later.
        </div>
      </div>
      <button
        type="submit"
        className="text-white font-semibold items-center bg-green-600 caret-transparent gap-x-2 inline-flex outline-[3px] gap-y-2 m-5 px-7 py-3.5 rounded-[50px] hover:bg-green-700"
      >
        Buy Airtime now
        <img
          src="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/icon-1.svg"
          alt="Icon"
          className="caret-transparent h-6 outline-[3px] align-baseline w-6"
        />
      </button>
    </form>
  );
};
