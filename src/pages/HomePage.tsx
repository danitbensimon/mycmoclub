import { Hero } from "@/sections/Hero";
import { IntroSection } from "@/sections/IntroSection";
import { SecretDinnersSection } from "@/sections/SecretDinnersSection";
import { StatsSection } from "@/sections/StatsSection";
import { ChallengesSection } from "@/sections/ChallengesSection";
import { GrowthSection } from "@/sections/GrowthSection";
import { QuadrantSection } from "@/sections/QuadrantSection";
import { CalendarSection } from "@/sections/CalendarSection";
import { StoreSection } from "@/sections/StoreSection";
import { FounderSection } from "@/sections/FounderSection";
import { ShareSection } from "@/sections/ShareSection";
import { CTASection } from "@/sections/CTASection";

export type HomePageProps = {
  onApplyClick: () => void;
};

export const HomePage = ({ onApplyClick }: HomePageProps) => {
  return (
    <>
      <Hero onApplyClick={onApplyClick} />
      <IntroSection />
      <SecretDinnersSection />
      <StatsSection />
      <StoreSection />
      <ChallengesSection />
      <GrowthSection />
      <CalendarSection onApplyClick={onApplyClick} />
      <FounderSection />
      <ShareSection />
      <CTASection onApplyClick={onApplyClick} />
    </>
  );
};
