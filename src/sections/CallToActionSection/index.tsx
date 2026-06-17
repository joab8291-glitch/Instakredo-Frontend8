export const CallToActionSection = () => {
  return (
    <section className="text-[22px] caret-transparent leading-[10px] outline-[3px] text-center mt-[50px] px-[5%] py-2.5 md:px-[10%]">
      <div className="caret-transparent outline-[3px]">
        <h2 className="text-[19.2px] font-bold caret-transparent leading-[28.8px] outline-[3px] my-[15.936px] md:text-[33px] md:leading-[10px] md:my-[27.39px]">
          Experience Hassle-Free Airtime Purchases!
        </h2>
      </div>
      <button className="text-white text-base font-semibold items-center bg-green-600 caret-transparent gap-x-2 inline-flex leading-[normal] outline-[3px] gap-y-2 m-5 px-7 py-3.5 rounded-[50px] hover:bg-green-700">
        Buy Airtime now
        <img
          src="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/icon-1.svg"
          alt="Icon"
          className="caret-transparent h-6 outline-[3px] align-baseline w-6"
        />
      </button>
    </section>
  );
};
