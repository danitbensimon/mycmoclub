import { useState } from 'react';
import { MemberLayout } from '@/components/MemberLayout';
import { experts } from '@/data/experts';

export const MemberExpertsPage = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  const publishedExperts = experts.filter(e => e.isPublished);

  // Get unique domains
  const allDomainsSet = new Set<string>();
  publishedExperts.forEach(expert => {
    expert.domain.split(',').map(d => d.trim()).forEach(d => allDomainsSet.add(d));
  });
  const uniqueDomains = ['all', ...Array.from(allDomainsSet).sort()];

  // Filter
  const filteredExperts = selectedDomain === 'all'
    ? publishedExperts
    : publishedExperts.filter(e =>
        e.domain.split(',').map(d => d.trim()).includes(selectedDomain)
      );

  return (
    <MemberLayout>
      {/* Header */}
      <div className="mb-8">
        <p className="text-sky-400 text-sm font-semibold tracking-[2px] uppercase mb-2">Member Benefit</p>
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">Expert Consultations</h1>
        <p className="text-zinc-400 text-lg">
          Book your free 1:1 session with any expert below. Each member gets one free hour per month.
        </p>
      </div>

      {/* Domain Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {uniqueDomains.map(domain => (
          <button
            key={domain}
            onClick={() => setSelectedDomain(domain)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedDomain === domain
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/50'
                : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:border-sky-600 hover:text-white'
            }`}
          >
            {domain === 'all' ? 'All Experts' : domain}
          </button>
        ))}
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperts.map(expert => {
          const domains = expert.domain.split(',').map(d => d.trim());

          return (
            <div
              key={expert.id}
              className="bg-zinc-900/80 backdrop-blur-sm border-2 border-zinc-800 rounded-2xl p-6 hover:border-sky-600 transition-all hover:shadow-lg hover:shadow-sky-600/20 flex flex-col"
            >
              {/* Expert Image */}
              {expert.photoUrl ? (
                <div className="mb-4 w-20 h-20 mx-auto rounded-full overflow-hidden bg-zinc-800">
                  <img src={expert.photoUrl} alt={expert.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="mb-4 w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-sky-600 to-blue-700 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {expert.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </span>
                </div>
              )}

              {/* Name */}
              <h3 className="text-white text-lg font-bold mb-2 text-center">{expert.name}</h3>

              {/* Domain Badges */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                {domains.map((domain, i) => (
                  <span key={i} className="px-2.5 py-0.5 bg-sky-600/20 text-sky-400 text-xs font-semibold rounded-full">
                    {domain}
                  </span>
                ))}
              </div>

              {/* Bio */}
              {expert.shortBio && (
                <p className="text-zinc-400 text-sm mb-4 text-center leading-relaxed">{expert.shortBio}</p>
              )}

              {/* Links */}
              <div className="flex justify-center gap-3 mb-4">
                {expert.linkedinUrl && (
                  <a
                    href={expert.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-zinc-800 hover:bg-sky-600 rounded-lg transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
                {expert.websiteUrl && (
                  <a
                    href={expert.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-zinc-800 hover:bg-sky-600 rounded-lg transition-colors"
                    aria-label="Website"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Booking Button — real link for members */}
              {expert.bookingUrl ? (
                <a
                  href={expert.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-sky-600 text-white font-semibold rounded-full hover:bg-sky-500 transition-colors shadow-lg text-center mt-auto"
                >
                  Book Free 1:1 Session
                </a>
              ) : (
                <div className="w-full px-6 py-3 bg-zinc-800 text-zinc-500 font-semibold rounded-full text-center mt-auto cursor-default">
                  Booking Link Coming Soon
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredExperts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-zinc-400 text-xl">No experts found in this domain.</p>
        </div>
      )}
    </MemberLayout>
  );
};
