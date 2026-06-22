export type FeatureCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: React.ReactNode;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_12px_0px] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full mx-2.5 p-[30px] rounded-2xl md:w-[calc(33.33%_-_40px)] md:mx-0">
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className="caret-transparent inline outline-[3px] align-baseline w-[110px] mb-5"
      />
      <h3 className="text-[18.72px] font-bold caret-transparent outline-[3px] my-[18.72px]">
        {props.title}
      </h3>
      <p className="caret-transparent outline-[3px] my-4">
        {props.description}
      </p>
    </div>
  );
};