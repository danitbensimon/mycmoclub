import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export type SuccessScreenProps = {
  onClose: () => void;
};

export const SuccessScreen = ({ onClose }: SuccessScreenProps) => {
  useEffect(() => {
    // Fire confetti
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 200 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-12 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">
            🎉 Application Submitted!
          </h2>
          <p className="text-xl text-zinc-600 mb-6">
            Thank you for applying to THE CMO CLUB!
          </p>
          <div className="bg-sky-50 border-2 border-sky-200 rounded-xl p-6 mb-8">
            <p className="text-zinc-700 text-lg leading-relaxed">
              We've received your application and sent a confirmation email to your inbox. 
              Our team will review your application carefully and get back to you soon with the next steps.
            </p>
          </div>
          <p className="text-zinc-600 text-base mb-8">
            Welcome to the inner circle for senior B2B marketers! 🚀
          </p>
        </div>
        <button
          onClick={onClose}
          className="px-8 py-4 bg-sky-600 text-white text-lg font-semibold rounded-full hover:bg-sky-700 transition-colors shadow-lg"
        >
          Continue Exploring
        </button>
      </div>
    </div>
  );
};
