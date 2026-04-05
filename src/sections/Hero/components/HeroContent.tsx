import { HeroButton } from "@/sections/Hero/components/HeroButton";

export type HeroContentProps = {
  onApplyClick: () => void;
};

export const HeroContent = ({ onApplyClick }: HeroContentProps) => {
  return (
    <div className="relative box-border caret-transparent outline-neutral-950/50 text-center z-10 px-4 sm:px-6 flex flex-col items-center">
      {/* Invite Only Badge */}
      <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/25 rounded-full text-white text-[13px] font-medium tracking-wide inline-flex items-center gap-2 whitespace-nowrap mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        INVITE ONLY
      </span>

      {/* Headline */}
      <h1 className="text-neutral-100 text-5xl sm:text-6xl md:text-7xl lg:text-[72px] font-light box-border caret-transparent tracking-[0.02em] sm:tracking-[0.05em] md:tracking-[0.08em] lg:tracking-[0.1em] leading-tight outline-neutral-950/50 mb-4">
        THE C<span className="inline-block">M</span>O CLUB
      </h1>

      {/* Subheadline */}
      <p className="text-zinc-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] box-border caret-transparent leading-snug outline-neutral-950/50 mb-8 mx-auto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl md:whitespace-nowrap">
        The Inner Circle for B2B Tech Marketing Executives
      </p>

      {/* Apply Button */}
      <div className="box-border caret-transparent outline-neutral-950/50 mt-32">
        <HeroButton onClick={onApplyClick} />
      </div>
    </div>
  );
};
