export type HeaderActionsProps = {
  buttonText: string;
  href?: string;
};

export const HeaderActions = (props: HeaderActionsProps) => {
  const button = (
    <button className="text-white font-bold items-center bg-green-700 gap-x-2 inline-flex text-center m-2 px-7 py-3.5 rounded-full shadow-[0_4px_12px_rgba(22,163,74,0.3)] hover:bg-green-800 transition">
      {props.buttonText} →
    </button>
  );

  if (props.href) {
    return <a href={props.href} className="inline-block">{button}</a>;
  }

  return button;
};