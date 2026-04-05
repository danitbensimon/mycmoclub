import { useState } from 'react';

export const ShareSection = () => {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const handleCopyLink = async () => {
    try {
      // Copy the current page URL to clipboard
      await navigator.clipboard.writeText(window.location.href);
      
      // Show success message
      setShowCopiedMessage(true);
      
      // Hide message after 3 seconds
      setTimeout(() => {
        setShowCopiedMessage(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <section className="bg-black py-16">
      <div className="max-w-screen-md text-center mx-auto px-6">
        <div>
          <h2 className="text-neutral-100 text-3xl font-semibold tracking-tight leading-tight mb-2 md:text-4xl">
            Know someone who&#39;d fit?
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6 md:text-xl">
            Share the CMO Club with your network
          </p>
          <div className="relative inline-block">
            <button 
              onClick={handleCopyLink}
              className="font-medium items-center bg-white text-zinc-900 gap-x-2 inline-flex justify-center gap-y-2 text-nowrap px-8 py-3 rounded-full hover:bg-zinc-100 transition-colors"
            >
              Copy Link to Share
            </button>
            
            {/* Success Message */}
            {showCopiedMessage && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-card shadow-lg animate-fade-in">
                ✓ Link copied to clipboard!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
