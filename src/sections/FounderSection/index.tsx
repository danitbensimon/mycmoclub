import { FounderProfile } from "@/sections/FounderSection/components/FounderProfile";

export const FounderSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-zinc-900 text-4xl font-semibold tracking-tight leading-tight md:text-5xl">
            A Note From The Founder
          </h2>
        </div>
        <div>
          <FounderProfile />
          <div className="bg-white border border-zinc-200 rounded-card p-8 max-w-screen-md mx-auto">
            <div className="text-zinc-700 text-center leading-relaxed space-y-4">
              <p className="text-lg leading-relaxed">
                I'm exactly where you are. In B2B SaaS, the challenges never stop.
              </p>
              <p className="text-lg leading-relaxed">
                After hundreds of conversations with marketers, I saw the gap. We need a small, high-trust circle.
              </p>
              <p className="text-lg leading-relaxed font-semibold">
                B2B marketers are the smartest people I know. It is time we start acting like an inner circle.
              </p>
            </div>
            <p className="text-zinc-700 text-lg text-center mt-6">
              — Danit Ben Simon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
