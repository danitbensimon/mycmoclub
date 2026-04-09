import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 z-[60] relative"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[55] md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black border-l-2 border-sky-600/30 z-[56] transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#000000' }}
      >
        <div className="flex flex-col p-8 pt-24 space-y-8">
          {isHome ? (
            <>
              <a
                href="#dinners"
                onClick={closeMenu}
                className="text-white text-xl font-semibold tracking-wide uppercase hover:text-sky-400 transition-colors border-b border-zinc-700 pb-4"
              >
                Dinners
              </a>
              <Link
                to="/vendors"
                onClick={closeMenu}
                className="text-white text-xl font-semibold tracking-wide uppercase hover:text-sky-400 transition-colors border-b border-zinc-700 pb-4"
              >
                Experts
              </Link>
              <Link
                to="/ambassador"
                onClick={closeMenu}
                className="text-white text-xl font-semibold tracking-wide uppercase hover:text-sky-400 transition-colors border-b border-zinc-700 pb-4"
              >
                Ambassadors
              </Link>
              <Link
                to="/membership"
                onClick={closeMenu}
                className="text-white text-xl font-semibold tracking-wide uppercase hover:text-sky-400 transition-colors border-b border-zinc-700 pb-4"
              >
                Apply
              </Link>
              <Link
                to="/login"
                onClick={closeMenu}
                className="text-white text-xl font-semibold tracking-wide uppercase hover:text-sky-400 transition-colors border-2 border-white/30 rounded-lg px-4 py-3 mt-4"
              >
                Member Log In
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/"
                onClick={closeMenu}
                className="text-white text-xl font-semibold tracking-wide uppercase hover:text-sky-400 transition-colors border-b border-zinc-700 pb-4"
              >
                Home
              </Link>
              <Link
                to="/vendors"
                onClick={closeMenu}
                className="text-white text-xl font-semibold tracking-wide uppercase hover:text-sky-400 transition-colors border-b border-zinc-700 pb-4"
              >
                Experts
              </Link>
              <Link
                to="/ambassador"
                onClick={closeMenu}
                className="text-white text-xl font-semibold tracking-wide uppercase hover:text-sky-400 transition-colors border-b border-zinc-700 pb-4"
              >
                Ambassador
              </Link>
              <Link
                to="/membership"
                onClick={closeMenu}
                className="text-white text-xl font-semibold tracking-wide uppercase hover:text-sky-400 transition-colors border-b border-zinc-700 pb-4"
              >
                Apply
              </Link>
              <Link
                to="/ambassador"
                onClick={closeMenu}
                className="text-white text-xl font-semibold tracking-wide uppercase hover:text-sky-400 transition-colors border-b border-zinc-700 pb-4"
              >
                Ambassadors
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
