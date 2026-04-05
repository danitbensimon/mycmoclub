import { useState } from 'react';
import { SuccessScreen } from '@/components/SuccessScreen';

export const AmbassadorSection = () => {
  const [selectedLane, setSelectedLane] = useState<'social' | 'bring-marketers' | 'introduce-vendors'>('social');
  const [showAITool, setShowAITool] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [generatedPost, setGeneratedPost] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedinUrl: '',
    phoneNumber: '',
    location: '',
    contributionLane: '',
    linkedinActivity: '',
    jobTitle: '',
    reason: '',
  });

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    try {
      // Map contribution lane to HubSpot values
      let ambassadorLaneValue = '';
      if (formData.contributionLane === 'social') {
        ambassadorLaneValue = 'Social Lane';
      } else if (formData.contributionLane === 'bring-marketers') {
        ambassadorLaneValue = 'Bring Marketers';
      } else if (formData.contributionLane === 'introduce-vendors') {
        ambassadorLaneValue = 'Introduce Vendors';
      }

      // Submit to HubSpot Forms API
      const hubspotPayload = {
        fields: [
          { name: 'email', value: formData.email },
          { name: 'phone', value: formData.phoneNumber },
          { name: 'hs_linkedin_url', value: formData.linkedinUrl },
          { name: 'jobtitle', value: formData.jobTitle || '' },
          { name: 'city', value: formData.location || '' },
          { name: 'contact_type', value: 'Ambassador' },
          { name: 'why_do_you_want_to_join_the_cmo_club', value: formData.reason || '' },
          { name: 'ambassador_lane', value: ambassadorLaneValue },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      };

      const hubspotResponse = await fetch(
        'https://api-eu1.hsforms.com/submissions/v3/integration/submit/147616801/ab1b9fd7-bfaa-4733-b05a-aeab4d1c9931',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(hubspotPayload),
        }
      );

      if (!hubspotResponse.ok) {
        const errorData = await hubspotResponse.json();
        console.error('HubSpot API Error:', {
          status: hubspotResponse.status,
          statusText: hubspotResponse.statusText,
          body: errorData,
        });
      } else {
        console.log('Successfully submitted to HubSpot');
      }

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        linkedinUrl: '',
        phoneNumber: '',
        location: '',
        contributionLane: '',
        linkedinActivity: '',
        jobTitle: '',
        reason: '',
      });

      // Show success screen
      setShowSuccessScreen(true);
    } catch (err) {
      console.error('Error submitting ambassador application:', err);
    } finally {
      setIsPending(false);
    }
  };

  const handleGeneratePost = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const post = `🎯 Excited to share my experience with THE CMO CLUB - an inner circle for B2B senior marketers!

${aiPrompt}

This community brings together Directors, VPs, and CMOs to solve real startup challenges through:
✨ Monthly Private Dinners with trusted peers
🚀 AI Growth Workshops that drive efficiency
💡 Expert Consultation hours
📚 Shared B2B Marketing Library

If you're a senior B2B marketer looking for genuine connections and growth, this is the space you've been searching for.

@THE CMO CLUB @danit ben simon

#B2BMarketing #CMOClub #MarketingLeadership`;
      
      setGeneratedPost(post);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPost);
    alert('Post copied to clipboard!');
  };

  return (
    <section className="relative bg-black box-border caret-transparent outline-neutral-950/50 overflow-hidden py-24">
      {/* Animated Background Circles */}
      <div className="absolute bg-[radial-gradient(circle,rgba(14,165,233,0.4)_0%,rgba(2,132,199,0.3)_30%,rgba(3,105,161,0.2)_50%,rgba(3,105,161,0)_70%)] shadow-[rgba(14,165,233,0.3)_0px_0px_200px_80px] box-border caret-transparent h-[800px] left-[-200px] outline-neutral-950/50 w-[800px] rounded-full top-0 animate-float pointer-events-none"></div>
      <div className="absolute bg-[radial-gradient(circle,rgba(59,130,246,0.35)_0%,rgba(37,99,235,0.25)_30%,rgba(29,78,216,0.15)_50%,rgba(29,78,216,0)_70%)] shadow-[rgba(59,130,246,0.25)_0px_0px_180px_70px] box-border caret-transparent h-[600px] outline-neutral-950/50 right-[-150px] w-[600px] rounded-full top-[30%] animate-float-slow pointer-events-none"></div>
      <div className="absolute bg-[radial-gradient(circle,rgba(14,165,233,0.3)_0%,rgba(2,132,199,0.2)_30%,rgba(3,105,161,0.15)_50%,rgba(3,105,161,0)_70%)] shadow-[rgba(14,165,233,0.2)_0px_0px_150px_60px] box-border caret-transparent h-[500px] left-[20%] outline-neutral-950/50 w-[500px] rounded-full bottom-[10%] animate-float pointer-events-none"></div>
      
      <div className="box-border caret-transparent max-w-screen-xl outline-neutral-950/50 mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="box-border caret-transparent outline-neutral-950/50 text-center mb-20">
          <p className="text-sky-400 text-sm font-semibold tracking-[2px] uppercase mb-4">CMO CLUB</p>
          <h1 className="text-white text-6xl font-bold box-border caret-transparent tracking-[-1.2px] leading-[64px] outline-neutral-950/50 mb-6 md:text-7xl md:tracking-[-1.4px] md:leading-[72px]">
            Ambassador
          </h1>
          <h2 className="text-white text-4xl font-semibold box-border caret-transparent tracking-[-0.8px] leading-[44px] outline-neutral-950/50 mb-6 md:text-5xl md:tracking-[-1px] md:leading-[52px]">
            Join the Inner Circle
          </h2>
          <p className="text-zinc-400 text-xl box-border caret-transparent leading-8 max-w-4xl outline-neutral-950/50 mx-auto md:text-2xl md:leading-9">
            You are inviting other high-performing peers into our inner circle. You are the filter that ensures we remain a space for senior B2B marketers.
          </p>
        </div>

        {/* What You Get Section */}
        <div className="box-border caret-transparent outline-neutral-950/50 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl font-semibold box-border caret-transparent tracking-[-0.8px] leading-10 outline-neutral-950/50 mb-3 md:text-5xl md:tracking-[-1px] md:leading-[48px]">
              What You Get
            </h2>
            <p className="text-sky-400 text-2xl font-bold">$1,920/year value — completely free for active ambassadors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900/80 backdrop-blur-sm shadow-lg box-border caret-transparent outline-neutral-950/50 border-2 border-sky-600/30 p-6 rounded-2xl border-solid hover:border-sky-500 transition-all hover:shadow-sky-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-600/20">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold">Complimentary Membership</h3>
              </div>
              <p className="text-zinc-400 text-base">Full Tier 1 access ($1,920/year value)</p>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm shadow-lg box-border caret-transparent outline-neutral-950/50 border-2 border-sky-600/30 p-6 rounded-2xl border-solid hover:border-sky-500 transition-all hover:shadow-sky-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-600/20">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold">The Secret Dinners</h3>
              </div>
              <p className="text-zinc-400 text-base">Intimate gatherings with good food & real talk</p>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm shadow-lg box-border caret-transparent outline-neutral-950/50 border-2 border-sky-600/30 p-6 rounded-2xl border-solid hover:border-sky-500 transition-all hover:shadow-sky-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-600/20">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold">GTM Tech Credits</h3>
              </div>
              <p className="text-zinc-400 text-base">$2,000 free credits per quarter</p>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm shadow-lg box-border caret-transparent outline-neutral-950/50 border-2 border-sky-600/30 p-6 rounded-2xl border-solid hover:border-sky-500 transition-all hover:shadow-sky-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-600/20">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold">AI-Growth Workshops</h3>
              </div>
              <p className="text-zinc-400 text-base">Live & on-demand technical sessions</p>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm shadow-lg box-border caret-transparent outline-neutral-950/50 border-2 border-sky-600/30 p-6 rounded-2xl border-solid hover:border-sky-500 transition-all hover:shadow-sky-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-600/20">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold">The B2B Library</h3>
              </div>
              <p className="text-zinc-400 text-base">Marketing bestseller delivered quarterly</p>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm shadow-lg box-border caret-transparent outline-neutral-950/50 border-2 border-sky-600/30 p-6 rounded-2xl border-solid hover:border-sky-500 transition-all hover:shadow-sky-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-600/20">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold">Inner Circle Access</h3>
              </div>
              <p className="text-zinc-400 text-base">Private WhatsApp & Monthly Trust Roundtables</p>
            </div>
          </div>
        </div>

        {/* Your Commitment Section */}
        <div className="box-border caret-transparent outline-neutral-950/50 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl font-semibold box-border caret-transparent tracking-[-0.8px] leading-10 outline-neutral-950/50 mb-3 md:text-5xl md:tracking-[-1px] md:leading-[48px]">
              Your Commitment
            </h2>
            <p className="text-zinc-400 text-xl">Choose how you want to contribute and keep your membership free</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-zinc-900/80 backdrop-blur-sm border-2 border-sky-600/30 p-1 rounded-full">
              <button
                onClick={() => setSelectedLane('social')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  selectedLane === 'social'
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/50'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Social Lane
              </button>
              <button
                onClick={() => setSelectedLane('bring-marketers')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  selectedLane === 'bring-marketers'
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/50'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Bring Marketers
              </button>
              <button
                onClick={() => setSelectedLane('introduce-vendors')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  selectedLane === 'introduce-vendors'
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/50'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Introduce Vendors
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-zinc-900/80 backdrop-blur-sm shadow-xl box-border caret-transparent outline-neutral-950/50 border-2 border-sky-600/30 p-8 rounded-2xl border-solid max-w-4xl mx-auto">
            {selectedLane === 'social' && (
              <div>
                <h3 className="text-white text-2xl font-bold mb-6">Social Lane</h3>
                <p className="text-zinc-400 text-lg mb-6">Share at least twice a month and keep your membership free</p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="text-white text-lg font-bold mb-2">LinkedIn Posts</h4>
                      <p className="text-zinc-400">Share a takeaway from a dinner, workshop win, or why you value the inner circle. Tag @THE CMO CLUB and @danit ben simon.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="text-white text-lg font-bold mb-2">Comment and Share</h4>
                      <p className="text-zinc-400">Comment and share CMO CLUB posts from Danit Ben Simon's LinkedIn account.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="text-white text-lg font-bold mb-2">Use Our App to Create Posts</h4>
                      <ul className="text-zinc-400 space-y-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span>📝</span>
                          <span>Pre-written templates for LinkedIn and WhatsApp</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>🤖</span>
                          <span>AI-powered generator to create personalized posts based on your experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>📊</span>
                          <span>Track your contributions and see your progress each month</span>
                        </li>
                      </ul>
                      <p className="text-zinc-400 mt-3 italic">Making it super easy to stay active and keep your free membership!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedLane === 'bring-marketers' && (
              <div>
                <h3 className="text-white text-2xl font-bold mb-6">Bring Marketers</h3>
                <p className="text-zinc-400 text-lg mb-6">Introduce qualified B2B senior marketers to the club</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-zinc-400">Refer at least 2 qualified B2B senior marketers per month</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-zinc-400">Ensure they meet our criteria: senior B2B marketing roles at tech companies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-zinc-400">Help maintain the quality and exclusivity of our inner circle</p>
                  </div>
                </div>
              </div>
            )}

            {selectedLane === 'introduce-vendors' && (
              <div>
                <h3 className="text-white text-2xl font-bold mb-6">Introduce Vendors</h3>
                <p className="text-zinc-400 text-lg mb-6">Connect us with marketing vendors who want to reach B2B marketers</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-zinc-400">Introduce at least 1 qualified vendor per month</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-zinc-400">Vendors should offer solutions relevant to B2B marketing teams</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-zinc-400">Help us build valuable partnerships that benefit all members</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Terms & Conditions Section */}
        <div className="box-border caret-transparent outline-neutral-950/50 mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="text-white text-4xl font-semibold box-border caret-transparent tracking-[-0.8px] leading-10 outline-neutral-950/50 md:text-5xl md:tracking-[-1px] md:leading-[48px]">
                Terms & Conditions
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-zinc-900/80 backdrop-blur-sm shadow-xl box-border caret-transparent outline-neutral-950/50 border-2 border-sky-600/30 p-8 rounded-2xl border-solid hover:border-sky-500 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🏷️</span>
                <h3 className="text-white text-xl font-bold">Tagging Required</h3>
              </div>
              <p className="text-zinc-400 text-base leading-relaxed">
                In each post you need to tag <span className="text-sky-400 font-semibold">@THE CMO CLUB</span> and <span className="text-sky-400 font-semibold">@danit ben simon</span>.
              </p>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm shadow-xl box-border caret-transparent outline-neutral-950/50 border-2 border-sky-600/30 p-8 rounded-2xl border-solid hover:border-sky-500 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🎯</span>
                <h3 className="text-white text-xl font-bold">Mention Inner Circle</h3>
              </div>
              <p className="text-zinc-400 text-base leading-relaxed">
                In each post you need to mention this is an <span className="text-sky-400 font-semibold">inner circle for B2B senior marketers</span>.
              </p>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm shadow-xl box-border caret-transparent outline-neutral-950/50 border-2 border-sky-600/30 p-8 rounded-2xl border-solid hover:border-sky-500 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">📅</span>
                <h3 className="text-white text-xl font-bold">Quarterly Review</h3>
              </div>
              <p className="text-zinc-400 text-base leading-relaxed">
                We review activity quarterly. Stay active <span className="text-sky-400 font-semibold">(2x monthly)</span>, stay free!
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl font-semibold mb-6">Want to Learn More About CMO CLUB?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowAITool(true)}
              className="px-8 py-4 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-100 transition-colors shadow-lg"
            >
              Start writing your first post
            </button>
            <button 
              onClick={() => setShowAITool(true)}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
            >
              Learn About The Club
            </button>
          </div>
        </div>

        {/* Application Form */}
        <div className="box-border caret-transparent outline-neutral-950/50 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-white text-4xl font-semibold box-border caret-transparent tracking-[-0.8px] leading-10 outline-neutral-950/50 mb-3 md:text-5xl md:tracking-[-1px] md:leading-[48px]">
              Apply as Ambassador
            </h2>
            <p className="text-zinc-400 text-lg">Fill in your details to join the program</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-zinc-900/80 backdrop-blur-sm shadow-xl border-2 border-sky-600/30 rounded-2xl p-8 space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-base font-semibold text-white mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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

            {/* LinkedIn Profile URL */}
            <div>
              <label className="block text-base font-semibold text-white mb-2">
                LinkedIn Profile URL <span className="text-red-400">*</span>
              </label>
              <input
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
                value={formData.linkedinUrl}
                onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                required
                className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500"
              />
            </div>

            {/* Phone Number and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-base font-semibold text-white mb-2">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+972 50 123 4567"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500"
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-white mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Tel Aviv, New York..."
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500"
                />
              </div>
            </div>

            {/* Contribution Lane */}
            <div>
              <label className="block text-base font-semibold text-white mb-2">
                Which contribution lane do you choose? <span className="text-red-400">*</span>
              </label>
              <select
                value={formData.contributionLane}
                onChange={(e) => setFormData({ ...formData, contributionLane: e.target.value })}
                required
                className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white"
              >
                <option value="">Select your preferred lane</option>
                <option value="social">Social Lane</option>
                <option value="bring-marketers">Bring Marketers</option>
                <option value="introduce-vendors">Introduce Vendors</option>
              </select>
            </div>

            {/* LinkedIn Activity */}
            <div>
              <label className="block text-base font-semibold text-white mb-2">
                Are you currently active on LinkedIn? <span className="text-red-400">*</span>
              </label>
              <select
                value={formData.linkedinActivity}
                onChange={(e) => setFormData({ ...formData, linkedinActivity: e.target.value })}
                required
                className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white"
              >
                <option value="">Select your posting frequency</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="rarely">Rarely</option>
              </select>
            </div>

            {/* Job Title */}
            <div>
              <label className="block text-base font-semibold text-white mb-2">
                Job Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Marketing Director, CMO, Head of Growth..."
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                required
                className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500"
              />
            </div>

            {/* Why Join */}
            <div>
              <label className="block text-base font-semibold text-white mb-2">
                Why do you want to be an ambassador of the CMO Club?
              </label>
              <textarea
                placeholder="Share what excites you about connecting with fellow B2B marketers..."
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500 resize-none"
              />
            </div>

            {/* Note */}
            <div className="bg-sky-900/30 border-2 border-sky-500/50 rounded-xl p-4">
              <p className="text-sky-200 text-sm">
                📧 After you apply, Danit Ben Simon will reach out and let you know the next steps
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isPending}
                className="w-full px-6 py-4 bg-white text-zinc-900 text-lg font-semibold rounded-full hover:bg-zinc-100 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? 'Submitting...' : 'Apply as Ambassador'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* AI Writing Tool Modal */}
      {showAITool && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowAITool(false)}
        >
          <div 
            className="relative bg-zinc-900 border-2 border-sky-600/30 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAITool(false)}
              className="absolute right-4 top-4 text-zinc-400 hover:text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-2">AI Post Generator</h2>
              <p className="text-zinc-400 text-lg mb-8">Create engaging LinkedIn posts about THE CMO CLUB</p>

              {/* CMO Club Values */}
              <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/50 border-2 border-sky-500/50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">What is The CMO Club?</h3>
                <p className="text-zinc-300 mb-4">
                  The CMO Club is a private inner circle for <strong>Senior B2B Marketers in Startups</strong>. We bring together Directors, VPs, and CMOs to solve the unique challenges of the startup world through human connection and growth.
                </p>
                
                <h4 className="text-lg font-bold text-white mb-3 mt-6">The Six Pillars of the Club</h4>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span><strong>Monthly Private Dinners:</strong> Face-to-face meals with 10+ approved senior peers to build deep trust.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span><strong>Become a CMO:</strong> VPs and CMOs mentor Directors with a direct roadmap to the next stage.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span><strong>AI Growth Workshops:</strong> Build your own AI marketing stack to drive real efficiency.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span><strong>Monthly Round Tables:</strong> Small peer groups to solve specific strategic hurdles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span><strong>Expert Consultation:</strong> One free hour each month with domain experts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span><strong>The Shared Library:</strong> Access to the best B2B marketing books and frameworks.</span>
                  </li>
                </ul>
              </div>

              {/* Input Field */}
              <div className="mb-6">
                <label className="block text-base font-semibold text-white mb-2">
                  Share your experience or thoughts
                </label>
                <textarea
                  placeholder="Example: I attended my first CMO Club dinner last week and the conversations about AI in marketing were incredibly valuable..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 rounded-xl focus:border-sky-500 focus:outline-none transition-colors text-white placeholder:text-zinc-500 resize-none"
                />
              </div>

              <button
                onClick={handleGeneratePost}
                disabled={!aiPrompt || isGenerating}
                className="w-full px-6 py-4 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-100 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mb-6"
              >
                {isGenerating ? 'Generating...' : 'Generate Post'}
              </button>

              {/* Generated Post */}
              {generatedPost && (
                <div className="bg-zinc-800/50 border-2 border-zinc-700 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">Your Generated Post</h3>
                    <button
                      onClick={copyToClipboard}
                      className="px-4 py-2 bg-white text-zinc-900 text-sm font-semibold rounded-full hover:bg-zinc-100 transition-colors"
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-4">
                    <pre className="whitespace-pre-wrap text-zinc-300 font-sans text-base leading-relaxed">
                      {generatedPost}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Success Screen */}
      {showSuccessScreen && <SuccessScreen onClose={() => setShowSuccessScreen(false)} />}
    </section>
  );
};
