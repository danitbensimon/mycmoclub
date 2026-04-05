export type MembershipToggleProps = {
  activeTab: 'marketers' | 'vendors';
  onTabChange: (tab: 'marketers' | 'vendors') => void;
};

export const MembershipToggle = ({ activeTab, onTabChange }: MembershipToggleProps) => {
  return (
    <div
      role="tablist"
      className="text-neutral-500 items-center bg-zinc-200 box-border caret-transparent grid grid-cols-[repeat(2,minmax(0px,1fr))] h-9 justify-center max-w-md w-full mb-8 mx-auto p-1 rounded-full"
    >
      <button
        type="button"
        role="tab"
        onClick={() => onTabChange('marketers')}
        className={`text-sm font-medium items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] caret-transparent flex justify-center leading-5 outline-neutral-950/50 text-center text-nowrap px-3 py-2.5 rounded-full transition-all ${
          activeTab === 'marketers'
            ? 'text-white bg-zinc-900'
            : 'text-zinc-500 bg-transparent'
        }`}
      >
        B2B Senior Marketers
      </button>
      <button
        type="button"
        role="tab"
        onClick={() => onTabChange('vendors')}
        className={`text-sm font-medium items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] caret-transparent flex justify-center leading-5 outline-neutral-950/50 text-center text-nowrap px-3 py-2.5 rounded-full transition-all ${
          activeTab === 'vendors'
            ? 'text-white bg-zinc-900'
            : 'text-zinc-500 bg-transparent'
        }`}
      >
        Marketing Vendors
      </button>
    </div>
  );
};
