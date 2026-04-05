export type FeatureGridProps = {
  items: Array<{
    title: string;
    description?: string;
  }>;
  itemVariant: string;
  titleVariant: string;
};

export const FeatureGrid = (props: FeatureGridProps) => {
  return (
    <div className="relative box-border caret-transparent gap-4 sm:gap-5 md:gap-6 grid grid-cols-1 sm:grid-cols-2 outline-neutral-950/50 z-10">
      {props.items.map((item, index) => (
        <div
          key={index}
          className={`box-border caret-transparent outline-neutral-950/50 border-2 p-6 sm:p-7 md:p-8 rounded-2xl border-solid transition-all hover:border-white/30 hover:shadow-lg hover:shadow-white/10 ${props.itemVariant}`}
        >
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-semibold box-border caret-transparent leading-7 sm:leading-8 md:leading-9 outline-neutral-950/50 ${props.titleVariant}`}
          >
            {item.title}
          </h3>
          {item.description && (
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl box-border caret-transparent leading-6 sm:leading-7 md:leading-8 outline-neutral-950/50">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
