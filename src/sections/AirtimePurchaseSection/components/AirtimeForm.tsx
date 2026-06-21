import { useState } from "react";

const OPERATORS = [
  { name: "Safaricom", icon: "https://c.animaapp.com/mqh5jtbuMW9pRs/assets/safaricom.webp", color: "text-green-400" },
  { name: "Airtel", icon: "https://c.animaapp.com/mqh5jtbuMW9pRs/assets/airtel.webp", color: "text-red-400" },
  { name: "Telkom", icon: "https://c.animaapp.com/mqh5jtbuMW9pRs/assets/telcom.webp", color: "text-sky-400" },
];

const DISCOUNT = 0.025;

export const AirtimeForm = () => {
  const [selectedOperator, setSelectedOperator] = useState(OPERATORS[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toPhone, setToPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const numericAmount = parseFloat(amount) || 0;
  const payAmount = Math.ceil(numericAmount * (1 - DISCOUNT));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^0[17]\d{8}$/.test(toPhone.trim())) {
      setError("Please enter a valid Kenyan phone number.");
      return;
    }
    if (!numericAmount || numericAmount < 20 || numericAmount > 10000) {
      setError("Amount must be between KES 20 and KES 10000!");
      return;
    }
    setError("");
    setShowModal(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="text-left mb-5 px-5">
          <label className="font-semibold block mb-[5px] text-[#94a89c] text-sm">
            Select Operator
          </label>
          <div className="relative w-full">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="items-center bg-[#121810] flex justify-between border border-amber-400/15 p-3 rounded-lg cursor-pointer"
            >
              <div className="items-center flex gap-x-2.5">
                <img src={selectedOperator.icon} alt={selectedOperator.name} className="w-16 rounded" />
                <span className="text-white">{selectedOperator.name}</span>
              </div>
              <span className="text-amber-300">▼</span>
            </div>
            {isDropdownOpen && (
              <div className="absolute bg-[#121810] border border-amber-400/15 flex flex-col z-10 py-[5px] rounded-lg top-full inset-x-0">
                {OPERATORS.map((op) => (
                  <div
                    key={op.name}
                    onClick={() => { setSelectedOperator(op); setIsDropdownOpen(false); }}
                    className="items-center gap-x-2.5 flex px-3 py-2.5 hover:bg-[#1a221c] cursor-pointer"
                  >
                    <img src={op.icon} alt={op.name} className="w-16 rounded" />
                    <span className="text-white">{op.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-left mb-5 px-5">
          <label className="font-semibold block mb-[5px] text-[#94a89c] text-sm">
            To: Enter Mobile number
          </label>
          <input
            type="tel"
            value={toPhone}
            onChange={(e) => setToPhone(e.target.value)}
            placeholder="07XX XXX XXX"
            className="bg-[#121810] text-white w-full border border-amber-400/15 mt-[5px] p-3.5 rounded-lg outline-none focus:border-green-400"
          />
        </div>

        <div className="text-left mb-5 px-5">
          <label className="font-semibold block mb-[5px] text-[#94a89c] text-sm">
            Enter Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Min 20"
            className="bg-[#121810] text-white w-full border border-amber-400/15 mt-[5px] p-3.5 rounded-lg outline-none focus:border-green-400"
          />
        </div>

        <div className="bg-[#0d130f] border border-amber-400/15 rounded-xl mx-5 p-4 flex justify-between items-center mb-5">
          <span className="text-sm text-[#6b8070]">You pay</span>
          <span className="font-poppins text-xl font-extrabold text-amber-300">
            KES {payAmount.toLocaleString()}
          </span>
        </div>

        {error && (
          <div className="text-white bg-red-600 mx-5 mb-5 p-[15px] rounded-[5px]">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="text-[#0a0f0c] font-bold items-center bg-gradient-to-r from-green-400 to-green-600 gap-x-2 inline-flex m-5 px-7 py-3.5 rounded-full hover:opacity-90"
        >
          Buy Airtime now
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] p-4">
          <div className="bg-[#121810] border border-amber-400/20 max-w-[400px] w-full p-6 rounded-2xl text-center">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="font-bold text-lg mb-1 text-white">Order Received!</h3>
            <p className="text-[#6b8070] text-sm mb-4">
              Send payment via M-PESA to complete your order
            </p>
            <div className="bg-[#0d130f] rounded-xl p-4 text-left text-sm mb-4 space-y-1 text-[#94a89c]">
              <div><strong className="text-white">M-PESA Till Number:</strong> <span className="text-amber-300">[Placeholder — pending registration]</span></div>
              <div><strong className="text-white">Amount to pay:</strong> <span className="text-amber-300 font-bold">KES {payAmount.toLocaleString()}</span></div>
              <div><strong className="text-white">You'll receive:</strong> KES {numericAmount.toLocaleString()} airtime</div>
            </div>
            <a
              href={`https://wa.me/254722822256?text=${encodeURIComponent(
                `Hello InstaKredo, I have placed an order for KES ${numericAmount} ${selectedOperator.name} airtime to ${toPhone}.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="block bg-[#25d366] text-white font-bold py-3 rounded-full mb-3"
            >
              📲 Notify us on WhatsApp
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="w-full border border-amber-400/20 text-white py-3 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};