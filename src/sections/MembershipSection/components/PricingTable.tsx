import { useState } from 'react';

export type PricingTableProps = {
  type: 'marketers' | 'vendors';
};

type FeatureDetail = {
  title: string;
  description: string;
  tier1: boolean;
  tier2: boolean;
};

export const PricingTable = ({ type }: PricingTableProps) => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  const marketersFeatures: FeatureDetail[] = [
    {
      title: 'Monthly Private Dinners',
      description: 'This is the heartbeat of the club. We meet face-to-face for meals with 10+ senior peers. These dinners build the kind of trust you can never find on a screen.',
      tier1: true,
      tier2: false,
    },
    {
      title: 'Become a CMO',
      description: 'VPs and CMOs mentor the Directors. Every member gets a direct roadmap to the next stage of their startup career.',
      tier1: true,
      tier2: false,
    },
    {
      title: 'Expert Consultation',
      description: 'Every member gets one free hour each month with a domain expert. Use this time to fix a technical bottleneck or get a second opinion on a major campaign.',
      tier1: true,
      tier2: false,
    },
    {
      title: 'The Shared Library',
      description: 'Get access to the best B2B marketing books and frameworks. We study them together so the entire group stays ahead of the market.',
      tier1: true,
      tier2: false,
    },
    {
      title: 'Custom Wild Swag',
      description: 'Get surprised at every gathering with unique gifts you never get anywhere else, like Rémy Martin cognac or custom slippers.',
      tier1: true,
      tier2: false,
    },
    {
      title: 'GTM Tech Stack Credits',
      description: 'Access exclusive discounts and credits for essential GTM tools and platforms used by B2B marketers.',
      tier1: true,
      tier2: true,
    },
    {
      title: 'AI Growth Workshops',
      description: 'These are hands-on sessions. You actually build your own AI marketing stack to drive efficiency for your startup without the heavy price tag.',
      tier1: true,
      tier2: true,
    },
    {
      title: 'Monthly Round Tables',
      description: 'Join a small group of peers to solve your biggest strategic hurdles. It is a private forum to pressure-test your ideas before you take them to the board.',
      tier1: true,
      tier2: true,
    },
  ];

  const vendorsFeatures: FeatureDetail[] = [
    {
      title: 'Exclusive CMO Dinner Sponsorship',
      description: `• Receive the full guest list in advance and approve every attendee to ensure they match your ICP
• Share 5 minutes of your product demo on a big screen after the meal
• WhatsApp group interactions with the guests
• Follow up with an email`,
      tier1: true,
      tier2: false,
    },
    {
      title: 'Attend CMO Dinner as a Guest',
      description: 'Join our exclusive CMO dinners as a guest to network with senior B2B marketers and build meaningful relationships.',
      tier1: true,
      tier2: true,
    },
    {
      title: 'Brand Connections',
      description: 'Connect directly with B2B brands looking for solutions. Build relationships with decision-makers in your target market.',
      tier1: true,
      tier2: true,
    },
    {
      title: 'LIVE AI-GROWTH Workshop',
      description: 'Build growth engines that live in your CRM, not PowerPoint decks. Hands-on workshops focused on practical AI implementation. Includes 3 hours of live growth workshop with me.',
      tier1: true,
      tier2: true,
    },
    {
      title: 'Monthly Zoom Roundtable',
      description: 'Keep up with what B2B marketers actually need. Monthly insights into buyer challenges, trends, and what\'s working in the market.',
      tier1: true,
      tier2: true,
    },
    {
      title: 'B2B Marketing Bestseller',
      description: 'Stay aligned with how your buyers think. Quarterly books that your customers are reading to better understand their perspective.',
      tier1: true,
      tier2: true,
    },
    {
      title: 'Get 1:1 with our members',
      description: 'If you can offer B2B senior marketers free 1-hour consultation a month, you will get into our vendor app and be promoted to members.',
      tier1: true,
      tier2: true,
    },
  ];

  const features = type === 'marketers' ? marketersFeatures : vendorsFeatures;
  const tier1Title = 'Tier 1';
  const tier1Subtitle = type === 'marketers' ? 'Leadership & Team' : 'Exclusive Membership';
  const tier2Title = 'Tier 2';
  const tier2Subtitle = type === 'marketers' ? 'Starter Circle' : 'Standard Membership';
  const tier1Price = type === 'marketers' ? '$480' : null;
  const tier1AnnualPrice = type === 'marketers' ? '$1,344' : null;
  const tier2Price = type === 'marketers' ? '$140' : '$624';
  const tier2AnnualPrice = type === 'marketers' ? '$392' : '$1,747';

  return (
    <div className="box-border caret-transparent outline-neutral-950/50">
      <div className="hidden md:block overflow-auto">
        <table className="caret-transparent min-w-[600px] outline-neutral-950/50 w-full border-collapse">
          <thead className="box-border caret-transparent outline-neutral-950/50">
            <tr className="box-border caret-transparent outline-neutral-950/50 align-middle border-zinc-300 border-b-2 border-solid">
              <th className="text-zinc-500 text-sm font-semibold box-border caret-transparent tracking-[0.7px] leading-5 outline-neutral-950/50 text-left uppercase align-middle p-4 w-2/5">
                Features
              </th>
              <th className="font-bold box-border caret-transparent outline-neutral-950/50 text-center align-middle p-4 w-[30%]">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-zinc-900 text-xl font-bold leading-tight">
                    {tier1Title}
                  </p>
                  <p className="text-zinc-500 text-sm font-normal leading-tight">
                    {tier1Subtitle}
                  </p>
                </div>
              </th>
              <th className="font-bold box-border caret-transparent outline-neutral-950/50 text-center align-middle p-4 w-[30%]">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-zinc-900 text-xl font-bold leading-tight">
                    {tier2Title}
                  </p>
                  <p className="text-zinc-500 text-sm font-normal leading-tight">
                    {tier2Subtitle}
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="box-border caret-transparent outline-neutral-950/50">
            {features.map((feature, index) => (
              <>
                <tr
                  key={index}
                  className="box-border caret-transparent outline-neutral-950/50 align-middle border-zinc-200 border-b border-solid hover:bg-zinc-50 transition-colors"
                >
                  <td className="text-zinc-900 font-medium box-border caret-transparent outline-neutral-950/50 align-middle p-4">
                    <button
                      onClick={() => toggleFeature(index)}
                      className="items-center box-border caret-transparent gap-x-2 flex outline-neutral-950/50 gap-y-2 w-full text-left hover:text-sky-600 transition-colors group"
                    >
                      <span className="box-border caret-transparent block outline-neutral-950/50 flex-1">
                        {feature.title}
                      </span>
                      <div className="box-border caret-transparent outline-neutral-950/50 text-zinc-400 group-hover:text-sky-600">
                        <svg
                          className={`w-5 h-5 transition-transform ${expandedFeature === index ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>
                  </td>
                  <td className="box-border caret-transparent outline-neutral-950/50 text-center align-middle p-4">
                    {feature.tier1 ? (
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100">
                        <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    )}
                  </td>
                  <td className="box-border caret-transparent outline-neutral-950/50 text-center align-middle p-4">
                    {feature.tier2 ? (
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100">
                        <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    )}
                  </td>
                </tr>
                {expandedFeature === index && (
                  <tr className="box-border caret-transparent outline-neutral-950/50 bg-sky-50/50">
                    <td
                      colSpan={3}
                      className="box-border caret-transparent outline-neutral-950/50 p-6"
                    >
                      <div className="text-zinc-700 text-base box-border caret-transparent leading-relaxed outline-neutral-950/50 pl-6 border-l-4 border-sky-600">
                        {feature.description}
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
            
            <tr className="box-border caret-transparent outline-neutral-950/50 align-middle border-zinc-300 border-t-2 border-solid bg-zinc-50">
              <td className="text-zinc-900 text-lg font-bold box-border caret-transparent outline-neutral-950/50 align-middle p-6">
                Pricing
              </td>
              <td className="box-border caret-transparent outline-neutral-950/50 text-center align-middle p-6">
                {tier1Price ? (
                  <div className="flex flex-col gap-3">
                    <div className="box-border caret-transparent outline-neutral-950/50">
                      <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Quarterly</div>
                      <div className="text-zinc-900 text-4xl font-bold">{tier1Price}</div>
                      <div className="text-zinc-500 text-sm">/quarter</div>
                    </div>
                    <div className="box-border caret-transparent outline-neutral-950/50 pt-3 border-t border-zinc-200">
                      <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Annual</div>
                      <div className="text-zinc-900 text-4xl font-bold">{tier1AnnualPrice}</div>
                      <div className="text-sm">
                        <span className="text-zinc-500">/year</span>
                        <span className="ml-2 text-green-600 font-semibold">Save 30%</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="box-border caret-transparent outline-neutral-950/50">
                    <a 
                      href="https://wa.me/972546890011?text=im%20a%20marketing%20vendor%20and%20I'm%20Interested%20in%20the%20tier%201%20Package%20of%20the%20CMO%20CLUB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Contact for Pricing
                    </a>
                  </div>
                )}
              </td>
              <td className="box-border caret-transparent outline-neutral-950/50 text-center align-middle p-6">
                {tier2Price && (
                  <div className="flex flex-col gap-3">
                    <div className="box-border caret-transparent outline-neutral-950/50">
                      <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Quarterly</div>
                      <div className="text-zinc-900 text-4xl font-bold">{tier2Price}</div>
                      <div className="text-zinc-500 text-sm">/quarter</div>
                    </div>
                    <div className="box-border caret-transparent outline-neutral-950/50 pt-3 border-t border-zinc-200">
                      <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Annual</div>
                      <div className="text-zinc-900 text-4xl font-bold">{tier2AnnualPrice}</div>
                      <div className="text-sm">
                        <span className="text-zinc-500">/year</span>
                        <span className="ml-2 text-green-600 font-semibold">Save 30%</span>
                      </div>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-6">
        <div className="bg-white border-2 border-zinc-300 rounded-2xl p-6 shadow-lg">
          <div className="text-center mb-6 pb-6 border-b-2 border-zinc-200">
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">{tier1Title}</h3>
            <p className="text-zinc-500 text-sm mb-4">{tier1Subtitle}</p>
            {tier1Price ? (
              <div className="space-y-4">
                <div>
                  <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Quarterly</div>
                  <div className="text-zinc-900 text-3xl font-bold">{tier1Price}</div>
                  <div className="text-zinc-500 text-sm">/quarter</div>
                </div>
                <div className="pt-3 border-t border-zinc-200">
                  <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Annual</div>
                  <div className="text-zinc-900 text-3xl font-bold">{tier1AnnualPrice}</div>
                  <div className="text-sm">
                    <span className="text-zinc-500">/year</span>
                    <span className="ml-2 text-green-600 font-semibold">Save 30%</span>
                  </div>
                </div>
              </div>
            ) : (
              <a 
                href="https://wa.me/972546890011?text=im%20a%20marketing%20vendor%20and%20I'm%20Interested%20in%20the%20tier%201%20Package%20of%20the%20CMO%20CLUB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contact for Pricing
              </a>
            )}
          </div>
          <div className="space-y-3">
            {features.filter(f => f.tier1).map((feature, index) => (
              <div key={index} className="border-b border-zinc-200 pb-3 last:border-b-0">
                <button
                  onClick={() => toggleFeature(index)}
                  className="flex items-start gap-2 w-full text-left group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-zinc-900 font-semibold text-base group-hover:text-sky-600 transition-colors">
                      {feature.title}
                    </h4>
                  </div>
                  <svg
                    className={`w-5 h-5 text-zinc-400 group-hover:text-sky-600 transition-transform flex-shrink-0 ${expandedFeature === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFeature === index && (
                  <div className="mt-3 pl-8 text-zinc-600 text-sm leading-relaxed">
                    {feature.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-zinc-300 rounded-2xl p-6 shadow-lg">
          <div className="text-center mb-6 pb-6 border-b-2 border-zinc-200">
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">{tier2Title}</h3>
            <p className="text-zinc-500 text-sm mb-4">{tier2Subtitle}</p>
            {tier2Price && (
              <div className="space-y-4">
                <div>
                  <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Quarterly</div>
                  <div className="text-zinc-900 text-3xl font-bold">{tier2Price}</div>
                  <div className="text-zinc-500 text-sm">/quarter</div>
                </div>
                <div className="pt-3 border-t border-zinc-200">
                  <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Annual</div>
                  <div className="text-zinc-900 text-3xl font-bold">{tier2AnnualPrice}</div>
                  <div className="text-sm">
                    <span className="text-zinc-500">/year</span>
                    <span className="ml-2 text-green-600 font-semibold">Save 30%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="space-y-3">
            {features.filter(f => f.tier2).map((feature, index) => (
              <div key={index} className="border-b border-zinc-200 pb-3 last:border-b-0">
                <button
                  onClick={() => toggleFeature(index + 100)}
                  className="flex items-start gap-2 w-full text-left group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-zinc-900 font-semibold text-base group-hover:text-sky-600 transition-colors">
                      {feature.title}
                    </h4>
                  </div>
                  <svg
                    className={`w-5 h-5 text-zinc-400 group-hover:text-sky-600 transition-transform flex-shrink-0 ${expandedFeature === index + 100 ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFeature === index + 100 && (
                  <div className="mt-3 pl-8 text-zinc-600 text-sm leading-relaxed">
                    {feature.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
