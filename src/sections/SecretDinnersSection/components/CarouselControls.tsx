export type CarouselControlsProps = {
  variant: "button-with-icon" | "pagination-dots";
  iconSrc?: string;
  iconAlt?: string;
  buttonClassName?: string;
  dotsCount?: number;
  activeIndex?: number;
};

export const CarouselControls = (props: CarouselControlsProps) => {
  if (props.variant === "button-with-icon") {
    return (
      <button
        className={`absolute items-center backdrop-blur-sm bg-white/10 caret-transparent flex h-10 justify-center outline-neutral-950/50 text-center translate-y-[-50.0%] w-10 p-0 rounded-full top-2/4 hover:bg-white/20 ${props.buttonClassName || ""}`}
      >
        <img
          src={props.iconSrc || ""}
          alt={props.iconAlt || "Icon"}
          className="box-border caret-transparent h-5 outline-neutral-950/50 w-5"
        />
      </button>
    );
  }

  if (props.variant === "pagination-dots") {
    const count = props.dotsCount || 8;
    const activeIdx = props.activeIndex || 2;

    return (
      <div className="absolute box-border caret-transparent gap-x-2 flex outline-neutral-950/50 gap-y-2 translate-x-[-50.0%] left-2/4 bottom-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={
              index === activeIdx
                ? "bg-white/30 caret-transparent block h-1 outline-neutral-950/50 text-center w-1 p-0 rounded-full md:bg-white md:w-8"
                : index === count - 3
                  ? "bg-white caret-transparent block h-1 outline-neutral-950/50 text-center w-8 p-0 rounded-full md:bg-white/30 md:w-1"
                  : "bg-white/30 caret-transparent block h-1 outline-neutral-950/50 text-center w-1 p-0 rounded-full"
            }
          />
        ))}
      </div>
    );
  }

  return null;
};
