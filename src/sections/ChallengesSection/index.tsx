import { useState } from 'react';
import { FeatureGrid } from "@/components/FeatureGrid";

export const ChallengesSection = () => {
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(null);

  const challenges = [
    {
      title: "Solving in a vacuum",
      description: "Avoid expensive mistakes by getting direct answers from peers who have already dealt with your specific problem."
    },
    {
      title: "Chasing high targets with a tight budget",
      description: "Hit aggressive growth KPIs while budgets shrink by seeing what is actually working for other startups right now."
    },
    {
      title: "Doing the work of three",
      description: "Stop drowning in granular execution and start leading with strategies that win back your time."
    },
    {
      title: "Cutting through AI noise",
      description: "Identify the few AI tools that drive real revenue instead of wasting time on generic hype."
    }
  ];

  const toggleChallenge = (index: number) => {
    setExpandedChallenge(expandedChallenge === index ? null : index);
  };

  return (
    <section className="relative bg-white overflow-hidden py-16">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-zinc-900 text-4xl font-semibold tracking-tight leading-tight mb-2 md:text-5xl">
            The mess we&#39;re all dealing with
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed md:text-xl">
            Don&#39;t tackle high-stakes decisions alone
          </p>
        </div>
        
        <div className="relative gap-x-3 grid grid-cols-none gap-y-3 z-10 md:grid-cols-2">
          {challenges.map((challenge, index) => (
            <div key={index}>
              <div className="border border-zinc-200 p-5 rounded-card bg-white">
                <button
                  onClick={() => toggleChallenge(index)}
                  className="items-center gap-x-2 flex gap-y-2 w-full text-left hover:text-sky-600 transition-colors group"
                >
                  <h3 className="text-lg font-medium leading-snug text-zinc-900 flex-1">
                    {challenge.title}
                  </h3>
                  <div className="text-zinc-300 group-hover:text-sky-600">
                    <svg
                      className={`w-4 h-4 transition-transform ${expandedChallenge === index ? 'rotate-180' : ''}`}
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
              </div>
              
              {expandedChallenge === index && (
                <div className="bg-sky-50/50 border border-sky-200 rounded-card p-5 mt-2">
                  <p className="text-zinc-700 text-base leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
