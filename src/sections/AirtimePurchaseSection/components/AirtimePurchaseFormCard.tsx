import { AirtimeFormIntro } from "@/sections/AirtimePurchaseSection/components/AirtimeFormIntro";
import { AirtimeForm } from "@/sections/AirtimePurchaseSection/components/AirtimeForm";

export const AirtimePurchaseFormCard = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_20px_0px] caret-transparent max-w-[750px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full overflow-hidden mt-0 p-2.5 rounded-2xl md:mt-[-100px] md:p-0">
      <AirtimeFormIntro />
      <div className="text-white bg-green-500 caret-transparent hidden outline-[3px] mb-5 p-[15px] rounded-[5px]">
        <p className="caret-transparent outline-[3px] my-4">
          Your airtime purchase was successful! Kindly wait for a confirmation
          message on your phone.
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
      </div>
      <AirtimeForm />
    </div>
  );
};
