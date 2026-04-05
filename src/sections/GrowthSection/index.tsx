import { FeatureGrid } from "@/components/FeatureGrid";

export const GrowthSection = () => {
  return (
    <section className="relative bg-black overflow-hidden py-16">
      <div className="absolute bg-[radial-gradient(circle,rgba(20,60,120,0.6)_0%,rgba(0,80,160,0.4)_30%,rgba(0,113,227,0.2)_50%,rgba(0,113,227,0)_70%)] h-[700px] translate-x-[-50.0%] translate-y-[-50.0%] w-[700px] rounded-full left-2/4 top-2/4"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-neutral-100 text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-2">
            How we grow together
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed md:text-xl">
            Honest talk and actual solutions that move the needle
          </p>
        </div>
        <FeatureGrid
          items={[
            {
              title: "Secret Dinners",
              description:
                "Intimate gatherings to share wins and flops.",
            },
            {
              title: "AI-Growth Workshops",
              description:
                "Build growth engines that live in your CRM.",
            },
            {
              title: "Expert Sessions",
              description:
                "1:1 time with experts in AEO, Reddit, Meta, PPC, AI Agents.",
            },
            {
              title: "Peer Knowledge",
              description:
                "What worked, what failed, what was quietly rolled back.",
            },
          ]}
          itemVariant="bg-zinc-900/50 border-white/10 backdrop-blur-sm"
          titleVariant="text-neutral-100 mb-2"
        />
      </div>
    </section>
  );
};
