export const PrivacyPage = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">PRIVACY POLICY</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">The CMO Club</h2>
            <p className="text-sm text-gray-400 mb-6">Last updated: March 3, 2026</p>
            <p>
              The CMO Club ("we," "our," or "us") operates a private members network for senior B2B marketing executives. 
              This Privacy Policy explains how we collect, use, and protect your information when you use our website and members portal.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">A. Information You Provide Directly</h3>
            <p className="mb-3">When you apply for membership, register as an expert, or submit a form, we may collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company information</li>
              <li>Professional background</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">B. Members Portal Information</h3>
            <p className="mb-3">If you are an approved member and log into the Members Portal, we collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Email and password (for authentication)</li>
              <li>LinkedIn profile information (if you choose to connect LinkedIn), including:
                <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                  <li>Full name</li>
                  <li>Profile photo</li>
                  <li>Job title / headline</li>
                  <li>Company</li>
                  <li>LinkedIn profile URL</li>
                </ul>
              </li>
            </ul>
            <p className="mt-3">We do not access private LinkedIn data beyond what you explicitly authorize.</p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">C. Technical Information</h3>
            <p className="mb-3">We may collect limited technical information such as:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Basic usage data</li>
            </ul>
            <p className="mt-3">This information is used for security and performance purposes only.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Manage membership applications</li>
              <li>Provide access to the Members Portal</li>
              <li>Display approved member profiles in the private directory</li>
              <li>Facilitate expert sessions and introductions</li>
              <li>Improve the functionality and security of the platform</li>
            </ul>
            <p className="mt-4">
              If you choose to indicate that you are "open to contact," your LinkedIn profile may be visible to other approved members within the portal.
            </p>
            <p className="mt-3 font-semibold">We do not sell or rent your personal information.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Member Directory</h2>
            <p className="mb-3">The Members Directory is visible only to approved members.</p>
            <p className="mb-3">If you connect LinkedIn:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your public LinkedIn profile information may be displayed.</li>
              <li>Your email address is never shown.</li>
              <li>You may choose whether you are open to being contacted by other members.</li>
              <li>If you are not open to contact, no contact option will be displayed on your profile.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sharing</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>We do not sell personal data.</li>
              <li>We may share limited information with trusted service providers (e.g., authentication providers, hosting services) strictly to operate the platform.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p className="mb-3">
              We implement reasonable technical and organizational measures to protect your information from unauthorized access, misuse, or disclosure.
            </p>
            <p>However, no system can be guaranteed 100% secure.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p className="mb-3">You may request to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Update your information</li>
              <li>Disconnect your LinkedIn profile</li>
              <li>Remove your directory listing</li>
              <li>Delete your membership data</li>
            </ul>
            <p className="mt-4">
              To do so, contact us at:{' '}
              <a href="mailto:privacy@mycmoclub.com" className="text-blue-400 hover:text-blue-300 underline">
                privacy@mycmoclub.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Third-Party Services</h2>
            <p className="mb-3">The Members Portal may use:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>LinkedIn (for profile connection)</li>
              <li>Authentication providers</li>
              <li>Calendar or booking tools</li>
            </ul>
            <p className="mt-4">Your use of LinkedIn is also subject to LinkedIn's own privacy policy.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. The updated version will always be available on this page with the latest revision date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact</h2>
            <p className="mb-2">For privacy-related questions, contact:</p>
            <p className="font-semibold">The CMO Club</p>
            <p>
              Email:{' '}
              <a href="mailto:privacy@mycmoclub.com" className="text-blue-400 hover:text-blue-300 underline">
                privacy@mycmoclub.com
              </a>
            </p>
            <p>
              Website:{' '}
              <a href="https://mycmoclub.com" className="text-blue-400 hover:text-blue-300 underline">
                https://mycmoclub.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
