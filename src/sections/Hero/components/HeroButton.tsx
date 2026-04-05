export type HeroButtonProps = {
  onClick: () => void;
};

export const HeroButton = ({ onClick }: HeroButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="font-semibold items-center bg-white text-[#111] shadow-[rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] caret-transparent inline-flex justify-center outline-neutral-950/50 text-nowrap px-8 py-3.5 rounded-full hover:bg-zinc-100 transition-all duration-300 hover:scale-105"
    >
      Apply Now
    </button>
  );
};
