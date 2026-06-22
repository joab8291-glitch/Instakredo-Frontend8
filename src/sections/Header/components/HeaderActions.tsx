export type HeaderActionsProps = {
  buttonText: string;
  href?: string;
};

export const HeaderActions = (props: HeaderActionsProps) => {
  const button = (
    <button className="text-white font-semibold items-center bg-green-600 caret-transparent gap-x-2 inline-flex outline-[3px] gap-y-2 text-center m-5 px-7 py-3.5 rounded-[50px] hover:bg-green-700">
      {props.buttonText}
      <img
        src="https://c.animaapp.com/mqh5jtbuMW9pRs/assets/icon-1.svg"
        alt="Icon"
        className="caret-transparent h-6 outline-[3px] align-baseline w-6"
      />
    </button>
  );

  if (props.href) {
    return (
      <a
        href={props.href}
        className="text-blue-700 caret-transparent outline-[3px] text-center underline md:text-left"
      >
        {button}
      </a>
    );
  }

  return button;
};