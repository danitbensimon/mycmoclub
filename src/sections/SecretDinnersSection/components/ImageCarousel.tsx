import { useState, useEffect } from 'react';

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = Array.from({ length: 27 }, (_, i) =>
    `/dinners/dinner-${String(i + 1).padStart(2, "0")}.jpg`
  );

  // Desktop: 3 images per slide, Mobile: 1 image per slide. With 27 photos,
  // desktop cleanly divides into 9 slides of 3 — no repeats or half-empty slides.
  const imagesPerSlide = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  const goToPrevious = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const goToNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const goToSlide = (index: number) => {
    setIsPaused(true);
    setCurrentIndex(index);
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <div className="relative box-border caret-transparent outline-neutral-950/50 mb-12">
      <div className="box-border caret-transparent outline-neutral-950/50 overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl">
        <div className="relative h-full overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex-shrink-0 w-full flex gap-2 p-2">
                {images.slice(slideIndex * imagesPerSlide, slideIndex * imagesPerSlide + imagesPerSlide).map((image, imgIndex) => (
                  <div
                    key={`${slideIndex}-${imgIndex}`}
                    className="flex-1 aspect-[3_/_4] box-border caret-transparent outline-neutral-950/50 overflow-hidden rounded-2xl"
                  >
                    <img
                      src={image}
                      alt={`CMO Club Dinner ${slideIndex * imagesPerSlide + imgIndex + 1}`}
                      loading={slideIndex === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="box-border caret-transparent h-full w-full object-cover outline-neutral-950/50 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute items-center backdrop-blur-md bg-white/20 caret-transparent flex h-12 justify-center outline-neutral-950/50 text-center translate-y-[-50.0%] w-12 p-0 rounded-full top-2/4 hover:bg-white/40 hover:scale-110 active:scale-95 transition-all shadow-lg left-4 md:left-6 border-2 border-white/30"
      >
        <img
          src="https://c.animaapp.com/mlf9rarde0lMWk/assets/icon-1.svg"
          alt="Previous"
          className="box-border caret-transparent h-6 outline-neutral-950/50 w-6"
        />
      </button>

      <button
        onClick={goToNext}
        className="absolute items-center backdrop-blur-md bg-white/20 caret-transparent flex h-12 justify-center outline-neutral-950/50 text-center translate-y-[-50.0%] w-12 p-0 rounded-full top-2/4 hover:bg-white/40 hover:scale-110 active:scale-95 transition-all shadow-lg right-4 md:right-6 border-2 border-white/30"
      >
        <img
          src="https://c.animaapp.com/mlf9rarde0lMWk/assets/icon-2.svg"
          alt="Next"
          className="box-border caret-transparent h-6 outline-neutral-950/50 w-6"
        />
      </button>

      <div className="absolute box-border caret-transparent gap-x-3 flex outline-neutral-950/50 gap-y-3 translate-x-[-50.0%] left-2/4 bottom-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`caret-transparent block h-2 outline-neutral-950/50 text-center p-0 rounded-full transition-all shadow-md hover:scale-110 ${
              index === currentIndex
                ? "bg-white w-10"
                : "bg-white/40 w-2 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
