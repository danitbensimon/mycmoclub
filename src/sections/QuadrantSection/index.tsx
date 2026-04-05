import React from 'react';

export const QuadrantSection = () => {
  return (
    <section className="relative bg-[#0B1221] overflow-hidden py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0B1221] to-[#0B1221]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Title */}
          <div className="lg:col-span-4">
            <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              The<br />
              Marketing<br />
              Leadership<br />
              Quadrant
            </h2>
          </div>

          {/* Right Side: The Chart */}
          <div className="lg:col-span-8">
            <div className="relative">
              
              {/* Y-Axis Label (Rotated) - Moved Higher */}
              <div className="absolute -left-16 top-1/3 -translate-y-1/2 -rotate-90 flex items-center gap-4 text-white font-bold tracking-widest uppercase text-lg">
                <span>Focus</span>
                <div className="w-20 h-0.5 bg-white"></div>
                <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              </div>

              {/* Chart Box - Made Even Smaller */}
              <div className="bg-slate-200/90 backdrop-blur-sm rounded-lg aspect-square w-full max-w-md mx-auto relative shadow-2xl border border-white/10">
                
                {/* Grid Lines */}
                <div className="absolute inset-0">
                  {/* Vertical Center Line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-400/50"></div>
                  {/* Horizontal Center Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-400/50"></div>
                </div>

                {/* Axis Labels - Larger and More Visible */}
                <div className="absolute -left-2 bottom-4 text-sm md:text-base font-bold text-white text-right w-32 -translate-x-full">
                  B2B, B2C,<br/>VENDORS
                </div>
                <div className="absolute -left-2 top-4 text-sm md:text-base font-bold text-white text-right w-32 -translate-x-full">
                  B2B marketing<br/>executives
                </div>

                {/* Competitor Dots (Red) */}
                {/* Bottom Left */}
                <div className="absolute bottom-[20%] left-[25%] w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>
                <div className="absolute bottom-[35%] left-[15%] w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>
                <div className="absolute bottom-[45%] left-[30%] w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>
                
                {/* Top Left */}
                <div className="absolute top-[40%] left-[20%] w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>
                <div className="absolute top-[30%] left-[35%] w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>

                {/* Bottom Right */}
                <div className="absolute bottom-[30%] right-[35%] w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>
                <div className="absolute bottom-[15%] right-[20%] w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>
                <div className="absolute bottom-[40%] right-[25%] w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>

                {/* Top Right (Near Center) */}
                <div className="absolute top-[45%] right-[40%] w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>

                {/* THE CMO CLUB Logo (Top Right Quadrant) - Larger and Black */}
                <div className="absolute top-[15%] right-[10%] flex items-center justify-center">
                  <img
                    src="https://c.animaapp.com/mlf9rarde0lMWk/assets/f44dd4a0c_ChatGPTImageJan27202611_00_34AM-Picsart-BackgroundRemover.png"
                    alt="The CMO Club"
                    className="w-20 h-20 object-contain drop-shadow-xl hover:scale-110 transition-transform cursor-pointer brightness-0"
                    style={{ filter: 'brightness(0)' }}
                  />
                </div>

              </div>

              {/* X-Axis Labels - Larger and More Visible */}
              <div className="flex justify-between items-center mt-6 px-2 text-white text-sm md:text-base font-bold">
                <div className="flex items-center gap-2">
                  <span>Extra paid learning programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-20 bg-white"></div>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  <span>Included in membership</span>
                </div>
              </div>
              
              {/* X-Axis Title - Larger and More Visible */}
              <div className="text-center mt-8 text-white font-bold tracking-widest uppercase text-lg">
                Value
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
