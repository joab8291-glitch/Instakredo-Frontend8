export const ConfirmationModal = () => {
  return (
    <div className="fixed items-center bg-black/60 caret-transparent hidden h-full justify-center outline-[3px] w-full z-[1000] left-0 top-0">
      <div className="bg-white shadow-[rgba(0,0,0,0.2)_0px_4px_15px_0px] caret-transparent max-w-[400px] outline-[3px] text-center w-[90%] p-[25px] rounded-lg">
        <p className="caret-transparent leading-6 outline-[3px] mb-5">
          This is the confirmation message.
        </p>
        <div className="caret-transparent gap-x-2.5 flex justify-end outline-[3px] gap-y-2.5">
          <button className="text-white text-[13.3333px] font-bold bg-red-500 caret-transparent block outline-[3px] px-5 py-2.5 rounded-[5px] hover:bg-green-700">
            Cancel
          </button>
          <button className="text-white text-[13.3333px] font-bold bg-green-600 caret-transparent block outline-[3px] px-5 py-2.5 rounded-[5px] hover:bg-green-700">
            OK, Buy Airtime
          </button>
        </div>
      </div>
    </div>
  );
};