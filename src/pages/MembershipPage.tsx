import { MembershipSection } from "@/sections/MembershipSection";

export type MembershipPageProps = {
  onApplyClick: () => void;
};

export const MembershipPage = ({ onApplyClick }: MembershipPageProps) => {
  return (
    <div className="pt-16">
      <MembershipSection onApplyClick={onApplyClick} />
    </div>
  );
};
