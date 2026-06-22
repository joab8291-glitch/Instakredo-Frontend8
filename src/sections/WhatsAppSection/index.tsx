export const WhatsAppCTA = () => {
  const phone = "254722822256";
  const message = encodeURIComponent("I want to buy airtime");

  return (
    <>
      <div className="bg-[#0d130f] text-center px-5 py-12 border-y border-amber-400/10">
        <h2 className="font-poppins text-2xl md:text-3xl font-extrabold mb-2 text-white">
          Need help? We're one tap away.
        </h2>
        <p className="text-[#6b8070] mb-5">Our support team is on WhatsApp 24/7.</p>
        <a
          href={`https://wa.me/${phone}?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#25d366] text-white font-bold px-7 py-3.5 rounded-full hover:opacity-90"
        >
          💬 Chat on WhatsApp
        </a>
      </div>
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25d366] w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition z-50"
      >
        💬
      </a>
    </>
  );
};