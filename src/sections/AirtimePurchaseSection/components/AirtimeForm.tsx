import { useState } from "react";

const OPERATORS = [
  { name: "Safaricom", icon: "https://c.animaapp.com/mqh5jtbuMW9pRs/assets/safaricom.webp" },
  { name: "Airtel", icon: "https://c.animaapp.com/mqh5jtbuMW9pRs/assets/airtel.webp" },
  { name: "Telkom", icon: "https://c.animaapp.com/mqh5jtbuMW9pRs/assets/telcom.webp" },
];

const DISCOUNT = 0.025;

export const AirtimeForm = () => {
  const [selectedOperator, setSelectedOperator] = useState(OPERATORS[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fromPhone, setFromPhone] = useState("");
  const [toPhone, setToPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const numericAmount = parseFloat(amount) || 0;
  const payAmount = Math.ceil(numericAmount * (1 - DISCOUNT));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^0[17]\d{8}$/.test(fromPhone.trim())) {
      setError("Please enter a valid paying phone number.");
      return;
    }
    if (!/^0[17]\d{8}$/.test(toPhone.trim())) {
      setError("Please enter a valid recipient phone number.");
      return;
    }
    if (!numericAmount || numericAmount < 20 || numericAmount > 10000) {
      setError("Amount must be between KES 20 and KES 10,000!");
      return;
    }
    setError("");
    setShowModal(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="text-left mb-5 px-5">
          <label className="font-semibold block mb-[5px] text-stone-500 text-sm">
            Select Operator
          </label>
          <div className="relative w-full">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="items-center bg-white flex justify-between border border-stone-200 p-3 rounded-lg cursor-pointer hover:border-green-500 transition"
            >
              <div className="items-center flex gap-x-2.5">
                <img src={selectedOperator.icon} alt={selectedOperator.name} className="w-16 rounded" />
                <span className="text-neutral-900 font-medium">{selectedOperator.name}</span>
              </div>
              <span className="text-green-700">▼</span>
            </div>
            {isDropdownOpen && (
              <div className="absolute bg-white border border-stone-200 flex flex-col z-10 py-[5px] rounded-lg top-full inset-x-0 shadow-md">
                {OPERATORS.map((op) => (
                  <div
                    key={op.name}
                    onClick={() => { setSelectedOperator(op); setIsDropdownOpen(false); }}
                    className="items-center gap-x-2.5 flex px-3 py-2.5 hover:bg-stone-50 cursor-pointer"
                  >
                    <img src={op.icon} alt={op.name} className="w-16 rounded" />
                    <span className="text-neutral-900">{op.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-left mb-5 px-5">
          <label className="font-semibold block mb-[5px] text-stone-500 text-sm">
            From: Mobile number (To charge via M-PESA)
          </label>
          <input
            type="tel"
            value={fromPhone}
            onChange={(e) => setFromPhone(e.target.value)}
            placeholder="07XX XXX XXX"
            className="bg-white text-neutral-900 w-full border border-stone-200 mt-[5px] p-3.5 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
          />
        </div>

        <div className="text-left mb-5 px-5">
          <label className="font-semibold block mb-[5px] text-stone-500 text-sm">
            To: Recipient mobile number
          </label>
          <input
            type="tel"
            value={toPhone}
            onChange={(e) => setToPhone(e.target.value)}
            placeholder="07XX XXX XXX"
            className="bg-white text-neutral-900 w-full border border-stone-200 mt-[5px] p-3.5 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
          />
        </div>

        <div className="text-left mb-5 px-5">
          <label className="font-semibold block mb-[5px] text-stone-500 text-sm">
            Enter Amount (KES)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Min KES 20"
            className="bg-white text-neutral-900 w-full border border-stone-200 mt-[5px] p-3.5 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
          />
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl mx-5 p-4 flex justify-between items-center mb-5">
          <div>
            <div className="text-xs text-stone-500">You pay</div>
            <div className="font-poppins text-xl font-extrabold text-green-700">
              KES {payAmount.toLocaleString()}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-stone-500">You receive</div>
            <div className="font-poppins text-xl font-extrabold text-green-600">
              KES {numericAmount.toLocaleString()}
            </div>
          </div>
        </div>

        {error && (
          <div className="text-white bg-red-600 mx-5 mb-5 p-[15px] rounded-lg text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="text-white font-bold items-center bg-green-700 inline-flex m-5 px-7 py-3.5 rounded-full shadow-[0_4px_12px_rgba(22,163,74,0.3)] hover:bg-green-800 transition"
        >
          Buy Airtime now →
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-4">
          <div className="bg-white border border-stone-200 max-w-[400px] w-full p-6 rounded-2xl text-center shadow-xl">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="font-bold text-lg mb-1 text-neutral-900">Order Received!</h3>
            <p className="text-stone-500 text-sm mb-4">
              Send payment via M-PESA to complete your order
            </p>
            <div className="bg-stone-50 rounded-xl p-4 text-left text-sm mb-4 space-y-2 border border-stone-200">
              <div><strong className="text-neutral-900">M-PESA Till:</strong> <span className="text-green-700">[Pending registration]</span></div>
              <div><strong className="text-neutral-900">Amount to pay:</strong> <span className="text-green-700 font-bold">KES {payAmount.toLocaleString()}</span></div>
              <div><strong className="text-neutral-900">You'll receive:</strong> <span className="text-green-700">KES {numericAmount.toLocaleString()} airtime</span></div>
              <div><strong className="text-neutral-900">To number:</strong> {toPhone}</div>
            </div>
            <a
              href={`https://wa.me/254722822256?text=${encodeURIComponent(
                `Hello InstaKredo, I have placed an order:\nNetwork: ${selectedOperator.name}\nAmount: KES ${numericAmount}\nTo: ${toPhone}\nFrom: ${fromPhone}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="block bg-[#25d366] text-white font-bold py-3 rounded-full mb-3 hover:opacity-90"
            >
              📲 Notify us on WhatsApp
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="w-full border border-stone-200 text-neutral-900 py-3 rounded-full hover:bg-stone-50 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};