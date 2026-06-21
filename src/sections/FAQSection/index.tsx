import { useState } from "react";

const FAQS = [
  { q: "How does the discount work?", a: "You pay only 97.5% of the airtime value. For KES 1,000 you pay KES 975 and receive the full KES 1,000 instantly." },
  { q: "Which networks are supported?", a: "All major Kenyan networks: Safaricom, Airtel, and Telkom." },
  { q: "How fast will I get my airtime?", a: "After payment confirmation, airtime is sent within 2 minutes. You'll also get a WhatsApp confirmation." },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-[700px] mx-auto px-5 py-16">
      <span className="text-xs tracking-widest uppercase text-amber-300 font-bold">FAQ</span>
      <h2 className="font-poppins text-3xl font-extrabold mt-2 mb-6 text-white">
        Questions? We've got answers.
      </h2>
      <div>
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.q} className="bg-[#121810] border border-amber-400/10 rounded-2xl mb-3 overflow-hidden">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left font-semibold px-5 py-4 flex justify-between items-center text-white"
              >
                {faq.q}
                <span className={`transition-transform text-amber-300 ${isOpen ? "rotate-180" : ""}`}>▼</span>
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-sm text-[#94a89c]">{faq.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};