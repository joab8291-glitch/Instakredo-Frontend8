export const SocialLinks = () => {
  return (
    <div className="caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-right">
      <p className="text-stone-700 text-sm caret-transparent outline-[3px] text-center mt-3.5 mb-3 md:text-right">
        Share on social
      </p>
      <div className="caret-transparent gap-x-3 flex justify-center outline-[3px] gap-y-3 text-center md:justify-normal md:text-right">
        <a
          href="https://www.tiktok.com/@packsonventures"
          className="text-blue-700 items-center box-border caret-transparent flex h-[50px] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center underline w-[50px] border border-stone-300 rounded-[50%] border-solid md:text-right"
        >
          <img
            src="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/tiktok.webp"
            alt="TikTok"
            className="caret-transparent h-[50px] min-h-[auto] min-w-[auto] outline-[3px] text-center align-baseline w-[50px] md:text-right"
          />
        </a>
        <a
          href="https://www.facebook.com/packsonventures"
          className="text-blue-700 items-center box-border caret-transparent flex h-[50px] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center underline w-[50px] border border-stone-300 rounded-[50%] border-solid md:text-right"
        >
          <img
            src="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/facebook.webp"
            alt="Facebook"
            className="caret-transparent h-[50px] min-h-[auto] min-w-[auto] outline-[3px] text-center align-baseline w-[50px] md:text-right"
          />
        </a>
        <a
          href="https://x.com/packsonventures"
          className="text-blue-700 items-center box-border caret-transparent flex h-[50px] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center underline w-[50px] border border-stone-300 rounded-[50%] border-solid md:text-right"
        >
          <img
            src="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/X.webp"
            alt="X"
            className="caret-transparent h-[50px] min-h-[auto] min-w-[auto] outline-[3px] text-center align-baseline w-[50px] md:text-right"
          />
        </a>
        <a
          href="https://www.instagram.com/packsonventures"
          className="text-blue-700 items-center box-border caret-transparent flex h-[50px] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center underline w-[50px] border border-stone-300 rounded-[50%] border-solid md:text-right"
        >
          <img
            src="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/instagram.webp"
            alt="Instagram"
            className="caret-transparent h-[50px] min-h-[auto] min-w-[auto] outline-[3px] text-center align-baseline w-[50px] md:text-right"
          />
        </a>
      </div>
    </div>
  );
};