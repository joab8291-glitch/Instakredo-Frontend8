import heroImage from "@/assets/instakredo-hero.png";

export const HeaderImage = () => {
  return (
    <div className="caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] text-right mt-0 md:mt-[-60px]">
      <img
        src={heroImage}
        alt="InstaKredo app preview with a happy customer"
        className="caret-transparent inline max-w-[500px] outline-[3px] align-baseline w-full mt-5 rounded-[10px] md:max-w-[700px] md:mt-0"
      />
    </div>
  );
};