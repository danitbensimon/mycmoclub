import { Link } from 'react-router-dom';

export type CTASectionProps = {
  onApplyClick: () => void;
};

export const CTASection = ({ onApplyClick }: CTASectionProps) => {
  return (
    <section id="apply" className="relative bg-white overflow-hidden py-16">
      <div className="max-w-screen-md text-center mx-auto px-6">
        <div>
          <h2 className="text-zinc-900 text-4xl font-semibold tracking-tight leading-tight mb-3 md:text-5xl">
            Ready to Join?
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl mb-8 mx-auto md:text-xl">
            We vet every member to ensure quality conversations. If this sounds
            like the room you&#39;ve been looking for, you&#39;re likely a fit.
          </p>
          <div className="relative items-center gap-x-4 flex flex-col justify-center gap-y-4 z-10">
            <button 
              onClick={onApplyClick}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-zinc-900 rounded-full hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900"
            >
              Apply for Membership
            </button>
            <p className="text-sm text-zinc-500">
              Invite-only. We review every application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
