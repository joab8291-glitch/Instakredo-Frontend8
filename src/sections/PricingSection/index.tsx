const TIERS = [
  { get: 100, save: 2.5 },
  { get: 500, save: 12.5 },
  { get: 1000, save: 25 },
  { get: 2000, save: 50 },
];

export const PricingSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-5 py-16 text-center md:text-left">
      <span className="text-xs tracking-widest uppercase text-green-700 font-bold">
        Pricing
      </span>
      <h2 className="font-poppins text-3xl md:text-4xl font-extrabold mt-2 mb-8">
        Pay 97.5%, Get 100% <span className="text-green-700">Always.</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {TIERS.map((tier) => {
          const pay = Math.ceil(tier.get * 0.975);
          return (
            <div
              key={tier.get}
              className="relative bg-white border border-green-700/15 rounded-2xl p-5 text-left hover:border-green-600 hover:-translate-y-1 transition"
            >
              <span className="absolute top-3 right-3 bg-green-50 border border-green-700/15 text-green-700 text-[11px] font-bold px-2 py-1 rounded-full">
                Save KES {tier.save}
              </span>
              <div className="text-xs text-stone-500 tracking-wide">
                You receive
              </div>
              <div className="font-poppins text-2xl font-extrabold my-2">
                KES {tier.get.toLocaleString()}
              </div>
              <div className="h-px bg-green-700/15 my-3" />
              <div className="text-xs text-stone-500">You pay</div>
              <div className="font-poppins text-xl font-extrabold text-green-700">
                KES {pay.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
