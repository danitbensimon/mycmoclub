import { useState } from 'react';
import { SuccessScreen } from '@/components/SuccessScreen';
import { experts, vendors } from '@/data/experts';

export type VendorPageProps = {
  onApplyClick: () => void;
};

export const VendorPage = ({ onApplyClick }: VendorPageProps) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [showExpertApplicationModal, setShowExpertApplicationModal] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    expertise: '',
    consultationLink: '',
    linkedinUrl: '',
    websiteUrl: '',
    referenceLogos: '',
    commitmentConfirmed: false,
  });
  
  const publishedExperts = experts.filter(e => e.isPublished).sort((a, b) => a.domain.localeCompare(b.domain));
  const sortedVendors = [...vendors].sort((a, b) => a.domain.localeCompare(b.domain));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<{ message: string } | null>(null);

  const handleExpertApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.commitmentConfirmed) {
      alert('Please confirm your commitment to provide 1 consulting hour per student.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Split name into first and last name for HubSpot
      const nameParts = formData.name.trim().split(' ');
      const firstname = nameParts[0] || '';
      const lastname = nameParts.slice(1).join(' ') || '';

      // Submit to HubSpot Forms API
      const hubspotFormData = {
        fields: [
          { name: 'firstname', value: firstname },
          { name: 'lastname', value: lastname },
          { name: 'email', value: formData.email },
          { name: 'phone', value: formData.phoneNumber },
          { name: 'hs_linkedin_url', value: formData.linkedinUrl || '' },
          { name: 'website', value: formData.websiteUrl || '' },
          { name: 'consult_link', value: formData.consultationLink },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      };

      console.log('🚀 Submitting to HubSpot Forms API...');
      console.log('Form ID: 79741b5e-ddf2-4bd4-a534-55a8101d5621');
      console.log('Portal ID: 147616801');
      console.log('Payload:', JSON.stringify(hubspotFormData, null, 2));

      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/147616801/79741b5e-ddf2-4bd4-a534-55a8101d5621',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(hubspotFormData),
        }
      );

      console.log('📡 HubSpot Response Status:', response.status, response.statusText);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ HubSpot submission failed:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData,
        });
        setSubmitError({ message: errorData.message || 'Unknown error' });
        alert(`⚠️ Warning: HubSpot sync failed. Error: ${errorData.message || 'Unknown error'}`);
      } else {
        const successData = await response.json();
        console.log('✅ HubSpot submission successful:', successData);
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        expertise: '',
        consultationLink: '',
        linkedinUrl: '',
        websiteUrl: '',
        referenceLogos: '',
        commitmentConfirmed: false,
      });

      setShowExpertApplicationModal(false);
      setShowSuccessScreen(true);
    } catch (err) {
      console.error('Error submitting expert application:', err);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Combine experts and vendors into a unified list
  const allExperts = [
    ...publishedExperts.map(expert => ({
      id: expert.id,
      name: expert.name,
      domain: expert.domain,
      description: expert.shortBio,
      imageUrl: expert.photoUrl,
      linkedinUrl: expert.linkedinUrl,
      websiteUrl: expert.websiteUrl,
      bookingUrl: expert.bookingUrl,
      categoryTag: expert.categoryTag,
    })),
    ...sortedVendors.map(vendor => {
      // Get all domains for this vendor and replace "Messaging" with "Messaging & Positioning"
      const vendorDomains = vendor.domain.split(',').map(d => {
        const trimmed = d.trim();
        return trimmed === 'Messaging' ? 'Messaging & Positioning' : trimmed;
      });
      
      return {
        id: vendor.id,
        name: vendor.name,
        domain: vendorDomains.join(', '),
        description: vendor.description,
        imageUrl: vendor.imageUrl,
        linkedinUrl: vendor.linkedinUrl,
        websiteUrl: vendor.websiteUrl,
        bookingUrl: undefined,
        categoryTag: vendorDomains[0],
      };
    })
  ];

  // Remove duplicates by name (keep first occurrence)
  const uniqueExperts = allExperts.filter((expert, index, self) => 
    index === self.findIndex(e => e.name === expert.name)
  );

  // Get unique domains from all experts
  const allDomainsSet = new Set<string>();
  uniqueExperts.forEach(expert => {
    const domains = expert.domain.split(',').map(d => d.trim());
    domains.forEach(domain => allDomainsSet.add(domain));
  });
  const uniqueDomains = ['all', ...Array.from(allDomainsSet).sort()];
  
  // Filter experts by selected domain
  const filteredExperts = selectedDomain === 'all' 
    ? uniqueExperts 
    : uniqueExperts.filter(e => {
        const expertDomains = e.domain.split(',').map(d => d.trim());
        return expertDomains.includes(selectedDomain);
      });

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative bg-black overflow-hidden py-24">
        <div className="absolute bg-[radial-gradient(circle,rgba(14,165,233,0.4)_0%,rgba(2,132,199,0.3)_30%,rgba(3,105,161,0.2)_50%,rgba(3,105,161,0)_70%)] shadow-[rgba(14,165,233,0.3)_0px_0px_200px_80px] h-[800px] left-[-200px] w-[800px] rounded-full top-0 animate-float pointer-events-none"></div>
        <div className="absolute bg-[radial-gradient(circle,rgba(59,130,246,0.35)_0%,rgba(37,99,235,0.25)_30%,rgba(29,78,216,0.15)_50%,rgba(29,78,216,0)_70%)] shadow-[rgba(59,130,246,0.25)_0px_0px_180px_70px] h-[600px] right-[-150px] w-[600px] rounded-full top-[30%] animate-float-slow pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="text-sky-400 text-sm font-semibold tracking-[2px] uppercase mb-4">Expert Network</p>
            <h1 className="text-white text-6xl font-bold tracking-[-1.2px] leading-[64px] mb-6 md:text-7xl md:tracking-[-1.4px] md:leading-[72px]">
              B2B Marketing Experts
            </h1>
            <p className="text-zinc-400 text-xl leading-8 max-w-4xl mx-auto md:text-2xl md:leading-9">
              Get free 1:1 consultations with top B2B marketing experts. Each member receives one free hour per month with any expert.
            </p>
          </div>

          {/* Expert Application Banner */}
          <div className="mb-16 bg-gradient-to-r from-sky-900/50 to-blue-900/50 border-2 border-sky-500/50 rounded-3xl p-8 text-center">
            <h2 className="text-white text-3xl font-bold mb-4">Want to be CMO CLUB Expert?</h2>
            <p className="text-zinc-300 text-lg mb-6 max-w-2xl mx-auto">
              Share your expertise with senior B2B marketers and become part of our exclusive expert network.
            </p>
            <button
              onClick={() => setShowExpertApplicationModal(true)}
              className="px-8 py-4 bg-white text-zinc-900 text-lg font-semibold rounded-full hover:bg-zinc-100 transition-colors shadow-lg"
            >
              Apply Here
            </button>
          </div>

          {/* Domain Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {uniqueDomains.map(domain => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedDomain === domain
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/50'
                    : 'bg-zinc-900/80 text-zinc-400 border-2 border-zinc-800 hover:border-sky-600 hover:text-white'
                }`}
              >
                {domain === 'all' ? 'All Experts' : domain}
              </button>
            ))}
          </div>

          {/* Experts Grid - Unified 3-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperts?.map(expert => {
              const expertDomains = expert.domain.split(',').map(d => d.trim());

              return (
                <div
                  key={expert.id}
                  className="bg-zinc-900/80 backdrop-blur-sm border-2 border-zinc-800 rounded-2xl p-6 hover:border-sky-600 transition-all hover:shadow-lg hover:shadow-sky-600/20 flex flex-col"
                >
                  {/* Expert Image */}
                  {expert.imageUrl && (
                    <div className="mb-4 w-24 h-24 mx-auto rounded-full overflow-hidden bg-zinc-800">
                      <img
                        src={expert.imageUrl}
                        alt={expert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Expert Name */}
                  <h3 className="text-white text-xl font-bold mb-2 text-center">
                    {expert.name}
                  </h3>

                  {/* Domain Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {expertDomains.map((domain, index) => (
                      <span key={index} className="px-3 py-1 bg-sky-600/20 text-sky-400 text-sm font-semibold rounded-full">
                        {domain}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  {expert.description && (
                    <p className="text-zinc-400 text-sm mb-4 text-center leading-relaxed">
                      {expert.description}
                    </p>
                  )}

                  {/* Links */}
                  <div className="flex justify-center gap-3 mb-4">
                    {expert.linkedinUrl && (
                      <a
                        href={expert.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-800 hover:bg-sky-600 rounded-lg transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
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
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={onApplyClick}
                    className="w-full px-6 py-3 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-100 transition-colors shadow-lg mt-auto"
                  >
                    Book a Free 1:1 Session
                  </button>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredExperts?.length === 0 && (
            <div className="text-center py-16">
              <p className="text-zinc-400 text-xl">No experts found in this domain.</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-24 text-center bg-zinc-900/80 backdrop-blur-sm border-2 border-sky-600/30 rounded-3xl p-12">
            <h2 className="text-white text-4xl font-bold mb-4">
              Ready to Book Your Free Session?
            </h2>
            <p className="text-zinc-400 text-xl mb-8 max-w-2xl mx-auto">
              Join THE CMO CLUB to get one free hour per month with any B2B marketing expert.
            </p>
            <button
              onClick={onApplyClick}
              className="px-8 py-4 bg-white text-zinc-900 text-lg font-semibold rounded-full hover:bg-zinc-100 transition-colors shadow-lg"
            >
              Book a Free 1:1 Session
            </button>
          </div>
        </div>
      </section>

      {/* Expert Application Modal */}
      {showExpertApplicationModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowExpertApplicationModal(false)}
        >
          <div 
            className="relative bg-zinc-900 border-2 border-sky-600/30 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowExpertApplicationModal(false)}
              className="absolute right-4 top-4 text-zinc-400 hover:text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-2">Apply as an Expert</h2>
              <p className="text-zinc-400 text-lg mb-4">Join our network of B2B marketing experts</p>
              <div className="bg-sky-900/30 border-2 border-sky-500/50 rounded-xl p-4 mb-8">
                <p className="text-sky-200 text-sm">
                  📧 <strong>How it works:</strong> Fill in your details below and submit. You'll receive a confirmation email, and Danit will review your application and contact you with next steps.
                </p>
              </div>

              {submitError && (
                <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-xl text-red-200">
                  {submitError.message}
                </div>
              )}

              <form onSubmit={handleExpertApplicationSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-base font-semibold text-white mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-base font-semibold text-white mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-base font-semibold text-white mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500"
                  />
                </div>

                {/* Expertise */}
                <div>
                  <label className="block text-base font-semibold text-white mb-2">
                    Area of Expertise <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Reddit Marketing, Meta Ads, AI Agents"
                    value={formData.expertise}
                    onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500"
                  />
                </div>

                {/* Consultation Link */}
                <div>
                  <label className="block text-base font-semibold text-white mb-2">
                    Free 1-Hour Consultation Link <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://calendly.com/yourlink"
                    value={formData.consultationLink}
                    onChange={(e) => setFormData({ ...formData, consultationLink: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500"
                  />
                  <p className="text-zinc-500 text-sm mt-2">Provide a link where members can book their free consultation</p>
                </div>

                {/* LinkedIn URL */}
                <div>
                  <label className="block text-base font-semibold text-white mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500"
                  />
                </div>

                {/* Website URL */}
                <div>
                  <label className="block text-base font-semibold text-white mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500"
                  />
                </div>

                {/* Reference Logos */}
                <div>
                  <label className="block text-base font-semibold text-white mb-2">
                    Three Company Logos That Would Recommend You <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    placeholder="e.g., Google, Microsoft, Amazon"
                    value={formData.referenceLogos}
                    onChange={(e) => setFormData({ ...formData, referenceLogos: e.target.value })}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500 resize-none"
                  />
                  <p className="text-zinc-500 text-sm mt-2">List three companies that would recommend your expertise</p>
                </div>

                {/* Commitment Confirmation */}
                <div className="bg-sky-900/30 border-2 border-sky-500/50 rounded-xl p-4">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.commitmentConfirmed}
                      onChange={(e) => setFormData({ ...formData, commitmentConfirmed: e.target.checked })}
                      required
                      className="mt-1 w-5 h-5 text-sky-600 border-zinc-300 focus:ring-sky-600 rounded"
                    />
                    <span className="ml-3 text-base font-semibold text-sky-200">
                      I'm willing to commit to 1 consulting hour per student (B2B) <span className="text-red-400">*</span>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-white text-zinc-900 text-lg font-semibold rounded-full hover:bg-zinc-100 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Screen */}
      {showSuccessScreen && <SuccessScreen onClose={() => setShowSuccessScreen(false)} />}
    </div>
  );
};
