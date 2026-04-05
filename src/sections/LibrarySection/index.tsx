import { BookCarousel } from "@/sections/LibrarySection/components/BookCarousel";

export const LibrarySection = () => {
  return (
    <section className="bg-neutral-100 box-border caret-transparent outline-neutral-950/50 py-24">
      <div className="box-border caret-transparent max-w-6xl outline-neutral-950/50 mx-auto px-6">
        <div className="box-border caret-transparent outline-neutral-950/50 text-center mb-12">
          <p className="text-zinc-500 text-xs box-border caret-transparent tracking-[1.2px] leading-4 outline-neutral-950/50 uppercase mb-3">
            The B2B Library
          </p>
          <h2 className="text-zinc-900 text-4xl font-semibold box-border caret-transparent tracking-[-0.72px] leading-10 outline-neutral-950/50 mb-3 md:text-5xl md:tracking-[-0.96px] md:leading-[48px]">
            Learn from the best
          </h2>
          <p className="text-zinc-500 text-lg box-border caret-transparent leading-7 max-w-screen-md outline-neutral-950/50 mx-auto md:text-xl">
            Tier 1 members receive a digital copy of a new bestseller every
            quarter
          </p>
        </div>
        <div className="box-border caret-transparent outline-neutral-950/50 max-w-5xl mx-auto">
          <BookCarousel />
        </div>
      </div>
    </section>
  );
};
