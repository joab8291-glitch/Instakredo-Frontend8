export type HeaderActionsProps = {
  buttonText: string;
  href?: string;
};

export const HeaderActions = (props: HeaderActionsProps) => {
  const button = (
    <button className="text-[#0a0f0c] font-bold items-center bg-gradient-to-r from-green-400 to-green-600 gap-x-2 inline-flex text-center m-2 px-7 py-3.5 rounded-full shadow-[0_8px_24px_rgba(34,197,94,0.25)] hover:opacity-90">
      {props.buttonText} →
    </button>
  );

  if (props.href) {
    return <a href={props.href} className="inline-block">{button}</a>;
  }

  return button;
};