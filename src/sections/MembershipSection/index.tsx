import { useState } from 'react';
import { MembershipToggle } from "@/sections/MembershipSection/components/MembershipToggle";
import { PricingTable } from "@/sections/MembershipSection/components/PricingTable";

export type MembershipSectionProps = {
  onApplyClick: () => void;
};

export const MembershipSection = ({ onApplyClick }: MembershipSectionProps) => {
  const [activeTab, setActiveTab] = useState<'marketers' | 'vendors'>('marketers');

  return (
    <section id="membership" className="relative bg-white box-border caret-transparent outline-neutral-950/50 overflow-hidden py-24">
      <div className="absolute bg-[radial-gradient(circle,rgba(20,60,120,0.7)_0%,rgba(0,80,160,0.5)_30%,rgba(0,113,227,0.25)_50%,rgba(0,113,227,0)_70%)] shadow-[rgba(0,113,227,0.3)_0px_0px_200px_80px] box-border caret-transparent h-[800px] left-[-300px] outline-neutral-950/50 translate-y-[-50.0%] w-[800px] rounded-full top-2/4 -z-10 pointer-events-none"></div>
      <div className="box-border caret-transparent max-w-6xl outline-neutral-950/50 mx-auto px-6">
        <div className="box-border caret-transparent outline-neutral-950/50 text-center mb-12">
          <h2 className="text-zinc-900 text-5xl font-semibold box-border caret-transparent tracking-[-0.96px] leading-[48px] outline-neutral-950/50 mb-3 md:text-6xl md:tracking-[-1.2px] md:leading-[60px]">
            Membership Options
          </h2>
          <p className="text-zinc-500 text-xl box-border caret-transparent leading-7 outline-neutral-950/50 md:text-2xl md:leading-8">
            3-month minimum • Save 30% annually
          </p>
        </div>
        <div className="box-border caret-transparent outline-neutral-950/50 w-full">
          <MembershipToggle activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent outline-neutral-950/50 border border-zinc-300 p-6 rounded-2xl border-solid md:p-8">
            <div
              role="tabpanel"
              className="box-border caret-transparent outline-neutral-950/50"
            >
              <PricingTable type={activeTab} />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent outline-neutral-950/50 text-center mt-8">
          <button 
            onClick={onApplyClick}
            className="font-medium items-center bg-zinc-900 text-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] caret-transparent gap-x-2 inline-flex h-10 justify-center outline-neutral-950/50 gap-y-2 text-nowrap px-10 py-6 rounded-full hover:bg-zinc-800 transition-colors"
          >
            Apply for Membership
          </button>
        </div>
      </div>
    </section>
  );
};
