import { useState } from 'react';

export type SignupModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export const SignupModal = ({ isOpen, onClose, onSuccess }: SignupModalProps) => {
  const [formData, setFormData] = useState({
    workEmail: '',
    linkedinUrl: '',
    phoneNumber: '',
    location: '',
    confirmB2B: false,
    status: [] as string[],
    jobTitle: '',
    reason: '',
    plan: 'B2B Senior Marketer',
  });

  const [isPending, setIsPending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    // Validation
    if (!formData.workEmail || !formData.linkedinUrl || !formData.phoneNumber || !formData.confirmB2B || formData.status.length === 0 || !formData.plan) {
      setSubmitError('Please fill in all required fields');
      return;
    }

    setIsPending(true);
    try {
      // Submit to HubSpot Forms API
      const hubspotPayload = {
        fields: [
          { name: 'email', value: formData.workEmail },
          { name: 'phone', value: formData.phoneNumber },
          { name: 'hs_linkedin_url', value: formData.linkedinUrl },
          { name: 'jobtitle', value: formData.jobTitle || '' },
          { name: 'city', value: formData.location || '' },
          { name: 'contact_type', value: formData.status.join(', ') },
          { name: 'why_do_you_want_to_join_the_cmo_club', value: formData.reason || '' },
          { name: 'b2b_confirmed', value: formData.confirmB2B ? 'Yes' : 'No' },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      };

      const hubspotResponse = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/147616801/52d246ac-2b3f-4d00-8413-175caef1fd9b',
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
        setSubmitError(`HubSpot submission failed: ${errorData.message || hubspotResponse.statusText}`);
        setIsPending(false);
        return;
      }

      console.log('Successfully submitted to HubSpot');

      // Reset form
      setFormData({
        workEmail: '',
        linkedinUrl: '',
        phoneNumber: '',
        location: '',
        confirmB2B: false,
        status: [],
        jobTitle: '',
        reason: '',
        plan: 'B2B Senior Marketer',
      });

      // Show success screen
      onSuccess();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your application. Please try again.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-900 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-zinc-900 mb-2">Join the CMO Club</h2>
          <p className="text-zinc-600 text-lg mb-8">Apply for a seat at our intimate marketing dinners.</p>

          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
              {submitError}
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
              {error.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Work Email */}
            <div>
              <label className="block text-base font-semibold text-zinc-900 mb-2">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                value={formData.workEmail}
                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-zinc-300 rounded-xl focus:border-sky-600 focus:outline-none transition-colors text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            {/* LinkedIn Profile URL */}
            <div>
              <label className="block text-base font-semibold text-zinc-900 mb-2">
                LinkedIn Profile URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
                value={formData.linkedinUrl}
                onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-zinc-300 rounded-xl focus:border-sky-600 focus:outline-none transition-colors text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            {/* Phone Number and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-base font-semibold text-zinc-900 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-zinc-300 rounded-xl focus:border-sky-600 focus:outline-none transition-colors text-zinc-900 placeholder:text-zinc-400"
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-zinc-900 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Tel Aviv, New York..."
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-zinc-300 rounded-xl focus:border-sky-600 focus:outline-none transition-colors text-zinc-900 placeholder:text-zinc-400"
                />
              </div>
            </div>

            {/* B2B Confirmation Checkbox */}
            <div className="p-4 bg-amber-50 border-2 border-amber-400 rounded-xl">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.confirmB2B}
                  onChange={(e) => setFormData({ ...formData, confirmB2B: e.target.checked })}
                  required
                  className="mt-1 w-5 h-5 text-sky-600 border-zinc-300 focus:ring-sky-600 rounded"
                />
                <span className="ml-3 text-base font-semibold text-amber-900">
                  I confirm I work in B2B (This is a B2B-only club) <span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            {/* Current Status */}
            <div>
              <label className="block text-base font-semibold text-zinc-900 mb-3">
                What's your current status? <span className="text-red-500">*</span>
                <span className="text-sm font-normal text-zinc-600 ml-2">(Select all that apply)</span>
              </label>
              <div className="space-y-3">
                <label className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                  formData.status.includes('vendor') ? 'border-sky-600 bg-sky-50' : 'border-zinc-200 hover:border-sky-600'
                }`}>
                  <input
                    type="checkbox"
                    value="vendor"
                    checked={formData.status.includes('vendor')}
                    onChange={(e) => {
                      const newStatus = e.target.checked
                        ? [...formData.status, e.target.value]
                        : formData.status.filter(s => s !== e.target.value);
                      setFormData({ ...formData, status: newStatus });
                    }}
                    className="mt-1 w-5 h-5 text-sky-600 border-zinc-300 focus:ring-sky-600 rounded"
                  />
                  <div className="ml-4">
                    <div className="text-base font-semibold text-zinc-900">Vendor</div>
                    <div className="text-sm text-zinc-600">I work at a company that sells to marketers.</div>
                  </div>
                </label>

                <label className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                  formData.status.includes('brand') ? 'border-sky-600 bg-sky-50' : 'border-zinc-200 hover:border-sky-600'
                }`}>
                  <input
                    type="checkbox"
                    value="brand"
                    checked={formData.status.includes('brand')}
                    onChange={(e) => {
                      const newStatus = e.target.checked
                        ? [...formData.status, e.target.value]
                        : formData.status.filter(s => s !== e.target.value);
                      setFormData({ ...formData, status: newStatus });
                    }}
                    className="mt-1 w-5 h-5 text-sky-600 border-zinc-300 focus:ring-sky-600 rounded"
                  />
                  <div className="ml-4">
                    <div className="text-base font-semibold text-zinc-900">Brand</div>
                    <div className="text-sm text-zinc-600">I am a marketer at a B2B tech company.</div>
                  </div>
                </label>

                <label className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                  formData.status.includes('looking') ? 'border-sky-600 bg-sky-50' : 'border-zinc-200 hover:border-sky-600'
                }`}>
                  <input
                    type="checkbox"
                    value="looking"
                    checked={formData.status.includes('looking')}
                    onChange={(e) => {
                      const newStatus = e.target.checked
                        ? [...formData.status, e.target.value]
                        : formData.status.filter(s => s !== e.target.value);
                      setFormData({ ...formData, status: newStatus });
                    }}
                    className="mt-1 w-5 h-5 text-sky-600 border-zinc-300 focus:ring-sky-600 rounded"
                  />
                  <div className="ml-4">
                    <div className="text-base font-semibold text-zinc-900">Looking for my next challenge</div>
                    <div className="text-sm text-zinc-600">I'm currently exploring new opportunities.</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Job Title */}
            <div>
              <label className="block text-base font-semibold text-zinc-900 mb-2">
                Job Title
              </label>
              <input
                type="text"
                placeholder="Marketing Director, CMO, Head of Growth..."
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                className="w-full px-4 py-3 border-2 border-zinc-200 rounded-xl focus:border-sky-600 focus:outline-none transition-colors text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            {/* Why Join */}
            <div>
              <label className="block text-base font-semibold text-zinc-900 mb-2">
                Why do you want to join the CMO Club?
              </label>
              <textarea
                placeholder="Share what excites you about connecting with fellow B2B marketers..."
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border-2 border-zinc-200 rounded-xl focus:border-sky-600 focus:outline-none transition-colors text-zinc-900 placeholder:text-zinc-400 resize-none"
              />
            </div>

            {/* Choose Plan */}
            <div>
              <label className="block text-base font-semibold text-zinc-900 mb-2">
                Choose Your Plan <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-zinc-600 mb-3">
                This club is for B2B Marketers that are currently employed or Marketing vendors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center p-4 border-2 border-zinc-900 bg-zinc-900 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    name="plan"
                    value="B2B Senior Marketer"
                    checked={formData.plan === 'B2B Senior Marketer'}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    required
                    className="w-5 h-5 text-sky-600 border-zinc-300 focus:ring-sky-600"
                  />
                  <div className="ml-3 text-base font-semibold text-white">B2B Senior Marketer</div>
                </label>

                <label className="flex items-center p-4 border-2 border-zinc-200 rounded-xl cursor-pointer hover:border-sky-600 transition-colors">
                  <input
                    type="radio"
                    name="plan"
                    value="Marketing Vendor"
                    checked={formData.plan === 'Marketing Vendor'}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    required
                    className="w-5 h-5 text-sky-600 border-zinc-300 focus:ring-sky-600"
                  />
                  <div className="ml-3 text-base font-semibold text-zinc-900">Marketing Vendor</div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isPending}
                className="w-full px-6 py-3 bg-sky-600 text-white font-medium rounded-full hover:bg-sky-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
