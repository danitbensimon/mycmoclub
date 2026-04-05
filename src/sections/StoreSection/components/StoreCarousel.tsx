import { useEffect, useRef, useState } from 'react';

export const StoreCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const swagItems = [
    {
      id: 1,
      image: "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1772466849766-0.png",
      title: "Premium Gift Set",
      description: "Coffee cup and wireless charger set"
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1772466849796-1.png",
      title: "Neck Fan",
      description: "Branded portable neck fan"
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1772466849809-2.png",
      title: "Coffee Mug Set",
      description: "Luxury branded coffee mug with warmer"
    },
    {
      id: 4,
      image: "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1772467117792-0.png",
      title: "Rémy Martin VSOP",
      description: "Exclusive branded cognac bottle"
    },
    {
      id: 5,
      image: "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1772467117810-1.png",
      title: "Luxury Slippers - White",
      description: "Premium branded comfort slippers"
    },
    {
      id: 6,
      image: "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1772467117831-2.png",
      title: "Luxury Slippers - Grey",
      description: "Premium branded comfort slippers"
    },
    {
      id: 7,
      image: "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1772467196737-0.png",
      title: "CMO Club Coffee Mug",
      description: "Signature black coffee mug with warmer"
    },
    {
      id: 8,
      image: "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1772467196756-1.png",
      title: "Coffee Set - White Edition",
      description: "Premium coffee cup and saucer gift set"
    }
  ];

  // Duplicate items for seamless loop
  const allItems = [...swagItems, ...swagItems];
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.4; // pixels per frame (50% slower)

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        // Reset position when we've scrolled through half the content (one full set of items)
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  const handlePrevious = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    scrollContainer.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const handleNext = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    scrollContainer.scrollBy({ left: 350, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-sky-600/60 hover:bg-sky-600 text-white rounded-full p-2.5 shadow-lg transition-all duration-300 opacity-60 hover:opacity-100"
        aria-label="Previous items"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-sky-600/60 hover:bg-sky-600 text-white rounded-full p-2.5 shadow-lg transition-all duration-300 opacity-60 hover:opacity-100"
        aria-label="Next items"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div 
        className="overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={scrollRef}
          className="relative overflow-hidden h-96 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex h-full gap-6 p-6">
            {allItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className="flex-shrink-0 h-full w-80 group"
              >
                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-sky-600/30 to-[#0a0a0a] border border-sky-600/40 shadow-xl">
                  <div className="h-full flex items-center justify-center p-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: '10%',
            top: '20%',
            animationDuration: '3s'
          }}
        />
        <div 
                  className="absolute w-80 h-80 bg-sky-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            right: '10%',
            bottom: '20%',
            animationDuration: '4s',
            animationDelay: '1s'
          }}
        />
      </div>
    </div>
  );
};
