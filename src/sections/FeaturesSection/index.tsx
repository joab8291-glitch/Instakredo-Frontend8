import { FeatureCard } from "@/sections/FeaturesSection/components/FeatureCard";

export const FeaturesSection = () => {
  return (
    <section className="caret-transparent outline-[3px] text-center px-[5%] py-[50px] md:px-[10%] md:py-[100px]">
      <h2 className="text-[45px] font-bold caret-transparent outline-[3px] mt-[37.35px] mb-10 font-poppins">
        Why Choose InstaKredo
      </h2>
      <p className="caret-transparent outline-[3px] my-4">
        InstaKredo offers seamless airtime purchases, amazing discounts,
        <br className="caret-transparent outline-[3px]" />
        24/7 reliability, and affordable transaction fees.
      </p>
      <div className="caret-transparent gap-x-5 flex flex-wrap justify-center max-w-[1200px] outline-[3px] gap-y-5 mx-auto md:gap-x-10 md:gap-y-10">
        <FeatureCard
          imageUrl="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/discount.webp"
          imageAlt="Amazing discounts"
          title="Amazing discounts"
          description="Enjoy exclusive deals and save more with every airtime purchase."
        />
        <FeatureCard
          imageUrl="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/247.webp"
          imageAlt="24/7 Service"
          title="Reliable 24/7"
          description={
            <>
              Top up anytime, anywhere with our always-available platform.
              <br className="caret-transparent outline-[3px]" />
              Contact us at{" "}
              <a
                href="tel://+254722822256"
                className="text-blue-700 caret-transparent outline-[3px] underline"
              >
                0722 822 256
              </a>
              or reach us on WhatsApp at{" "}
              <a
                href="https://api.whatsapp.com/send?phone=254722822256"
                className="text-blue-700 caret-transparent outline-[3px] underline"
              >
                +254 722 822 256
              </a>
              or send us an email at{" "}
              <a
                href="mailto://packsonventures001@gmail.com"
                className="text-blue-700 caret-transparent outline-[3px] underline"
              >
                packsonventures001@gmail.com
              </a>
            </>
          }
        />
        <FeatureCard
          imageUrl="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/transaction.webp"
          imageAlt="No fees"
          title="No M-PESA transaction fees"
          description="Buy airtime via M-PESA without paying any extra fees."
        />
      </div>
    </section>
  );
};
