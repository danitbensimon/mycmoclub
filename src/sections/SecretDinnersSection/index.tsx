import { ImageCarousel } from "@/sections/SecretDinnersSection/components/ImageCarousel";
import { CompanyLogos } from "@/sections/SecretDinnersSection/components/CompanyLogos";

export const SecretDinnersSection = () => {
  return (
    <section id="dinners" className="relative bg-black overflow-hidden py-20">
      <div className="absolute bg-[radial-gradient(circle,rgba(20,60,120,0.7)_0%,rgba(0,80,160,0.4)_30%,rgba(0,113,227,0.2)_50%,rgba(0,113,227,0)_70%)] h-[700px] right-[-200px] top-[-200px] w-[700px] rounded-full"></div>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-neutral-100 text-5xl font-semibold tracking-tight leading-tight mb-3 md:text-6xl">
            The Secret Dinners
          </h2>
          <p className="text-zinc-400 text-xl leading-relaxed md:text-2xl">
            Good food, great swag, and no filters.
          </p>
        </div>
        <ImageCarousel />
        <div className="text-center my-10">
          <p className="text-neutral-100 text-3xl font-semibold tracking-tight leading-tight md:text-4xl">
            This can be you.
          </p>
        </div>
        <div className="mb-2">
          <p className="text-base font-semibold text-zinc-400 text-center mb-6 md:text-lg">
            Companies represented at our dinners
          </p>
          <CompanyLogos />
        </div>
      </div>
    </section>
  );
};
