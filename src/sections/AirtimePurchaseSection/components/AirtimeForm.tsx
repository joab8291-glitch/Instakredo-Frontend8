import { useState } from "react";

const OPERATORS = [
  { name: "Safaricom", icon: "https://c.animaapp.com/mqh5jtbuMW9pRs/assets/safaricom.webp", color: "text-green-700" },
  { name: "Airtel", icon: "https://c.animaapp.com/mqh5jtbuMW9pRs/assets/airtel.webp", color: "text-red-600" },
  { name: "Telkom", icon: "https://c.animaapp.com/mqh5jtbuMW9pRs/assets/telcom.webp", color: "text-sky-600" },
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
      <form onSubmit={handleSubmit} className="caret-transparent outline-[3px]">
        <div className="caret-transparent outline-[3px] text-left mb-5 px-5">
          <label className="font-semibold caret-transparent block outline-[3px] mb-[5px]">
            Select Operator
          </label>
          <div className="relative caret-transparent outline-[3px] w-full">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="items-center bg-white caret-transparent flex justify-between outline-[3px] border border-stone-300 p-3 rounded-lg border-solid cursor-pointer"
            >
              <div className="items-center bg-white caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5">
                <img src={selectedOperator.icon} alt={selectedOperator.name} className="w-20" />
                <span>{selectedOperator.name}</span>
              </div>
              <span>▼</span>
            </div>
            {isDropdownOpen && (
              <div className="absolute bg-stone-50 shadow-[rgba(0,0,0,0.1)_0px_4px_12px_0px] flex flex-col z-10 py-[5px] rounded-lg top-full inset-x-0">
                {OPERATORS.map((op) => (
                  <div
                    key={op.name}
                    onClick={() => { setSelectedOperator(op); setIsDropdownOpen(false); }}
                    className="items-center gap-x-2.5 flex px-3 py-2.5 hover:bg-neutral-100 cursor-pointer"
                  >
                    <img src={op.icon} alt={op.name} className="w-20" />
                    <span>{op.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-left mb-5 px-5">
          <label className="font-semibold block mb-[5px]">From: Mobile number (To charge)</label>
          <input
            type="tel"
            value={fromPhone}
            onChange={(e) => setFromPhone(e.target.value)}
            placeholder="Enter phone number"
            className="text-black text-[17.6px] w-[90%] border border-stone-300 mt-[5px] p-3.5 rounded-lg font-arial md:w-[95%]"
          />
        </div>

        <div className="text-left mb-5 px-5">
          <label className="font-semibold block mb-[5px]">To: Enter Mobile number</label>
          <input
            type="tel"
            value={toPhone}
            onChange={(e) => setToPhone(e.target.value)}
            placeholder="Enter recipient's number"
            className="text-black text-[17.6px] w-[90%] border border-stone-300 mt-[5px] p-3.5 rounded-lg font-arial md:w-[95%]"
          />
        </div>

        <div className="text-left mb-5 px-5">
          <label className="font-semibold block mb-[5px]">Enter Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="text-black text-[17.6px] w-[90%] border border-stone-300 mt-[5px] p-3.5 rounded-lg font-arial md:w-[95%]"
          />
        </div>

        <div className="bg-green-50 border border-green-700/15 rounded-xl mx-5 p-4 flex justify-between items-center mb-5">
          <span className="text-sm text-stone-500">You pay</span>
          <span className="font-poppins text-xl font-extrabold text-green-700">
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
          className="text-white font-semibold items-center bg-green-600 gap-x-2 inline-flex m-5 px-7 py-3.5 rounded-[50px] hover:bg-green-700"
        >
          Buy Airtime now
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-4">
          <div className="bg-white max-w-[400px] w-full p-6 rounded-2xl text-center">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="font-bold text-lg mb-1">Order Received!</h3>
            <p className="text-stone-500 text-sm mb-4">
              Send payment via M-PESA to complete your order
            </p>
            <div className="bg-stone-50 rounded-xl p-4 text-left text-sm mb-4 space-y-1">
              <div><strong>M-PESA Till Number:</strong> <span className="text-green-700">[Placeholder — pending registration]</span></div>
              <div><strong>Amount to pay:</strong> <span className="text-green-700 font-bold">KES {payAmount.toLocaleString()}</span></div>
              <div><strong>You'll receive:</strong> KES {numericAmount.toLocaleString()} airtime</div>
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
              className="w-full border border-stone-300 py-3 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};