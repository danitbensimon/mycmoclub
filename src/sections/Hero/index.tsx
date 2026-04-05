import { HeroContent } from "@/sections/Hero/components/HeroContent";

export type HeroProps = {
  onApplyClick: () => void;
};

export const Hero = ({ onApplyClick }: HeroProps) => {
  return (
    <section className="relative items-center box-border caret-transparent flex h-[720px] justify-center outline-neutral-950/50 overflow-hidden pt-16">
      <div className="absolute bg-[radial-gradient(circle,rgba(20,60,120,0.8)_0%,rgba(0,80,160,0.5)_30%,rgba(0,113,227,0.3)_50%,rgba(0,113,227,0)_70%)] shadow-[rgba(0,113,227,0.3)_0px_0px_200px_80px] box-border caret-transparent h-[800px] left-[-200px] outline-neutral-950/50 w-[800px] rounded-full top-2/4 animate-float"></div>
      <div className="absolute bg-[radial-gradient(circle,rgba(20,60,120,0.6)_0%,rgba(0,80,160,0.4)_30%,rgba(0,113,227,0.2)_50%,rgba(0,113,227,0)_70%)] bottom-[-100px] shadow-[rgba(0,113,227,0.25)_0px_0px_150px_60px] box-border caret-transparent h-[500px] outline-neutral-950/50 right-[-100px] w-[500px] rounded-full animate-float-slow"></div>
      <HeroContent onApplyClick={onApplyClick} />
    </section>
  );
};
