import { useEffect, useRef } from 'react';

export const BookCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const books = [
    "https://c.animaapp.com/mlf9rarde0lMWk/assets/42fc623fc_CourageousMarketing.jpg",
    "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1770799391353-0.jpeg",
    "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1770799391363-1.png",
    "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1770799391366-2.jpeg",
    "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1770801782814-0.webp",
    "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1770801782815-1.webp",
    "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1770801782815-2.webp",
    "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1770802105723-0.webp",
    "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1770802105726-1.webp",
    "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1770802105727-2.webp",
    "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1770802323586-0.webp",
    "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1770802323590-1.webp",
    "https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1770802323591-2.webp",
  ];

  // Duplicate books for seamless loop
  const allBooks = [...books, ...books];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through half the content (one full set of books)
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="relative box-border caret-transparent outline-neutral-950/50">
      <div className="box-border caret-transparent outline-neutral-950/50 overflow-hidden rounded-3xl border-4 border-zinc-300 shadow-2xl bg-white">
        <div 
          ref={scrollRef}
          className="relative overflow-hidden h-80 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex h-full gap-6 p-6">
            {allBooks.map((book, index) => (
              <div 
                key={index}
                className="flex-shrink-0 h-full w-64 box-border caret-transparent outline-neutral-950/50 overflow-hidden rounded-xl shadow-lg flex items-center justify-center bg-zinc-50"
              >
                <img
                  src={book}
                  alt={`Book ${(index % books.length) + 1}`}
                  className="box-border caret-transparent h-full w-auto object-contain outline-neutral-950/50"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
