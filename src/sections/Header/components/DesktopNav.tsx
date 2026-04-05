import { Link, useLocation } from 'react-router-dom';

export const DesktopNav = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="items-center box-border caret-transparent gap-x-8 hidden min-h-0 min-w-0 outline-neutral-950/50 gap-y-8 md:flex md:min-h-[auto] md:min-w-[auto]">
      {isHome ? (
        <>
          <a
            href="#dinners"
            className="text-zinc-500 text-xs font-medium box-border caret-transparent inline tracking-[0.6px] leading-4 min-h-0 min-w-0 outline-neutral-950/50 uppercase md:block md:min-h-[auto] md:min-w-[auto] hover:text-white"
          >
            Dinners
          </a>
        </>
      ) : (
        <>
          <Link
            to="/"
            className="text-zinc-500 text-xs font-medium box-border caret-transparent inline tracking-[0.6px] leading-4 min-h-0 min-w-0 outline-neutral-950/50 uppercase md:block md:min-h-[auto] md:min-w-[auto] hover:text-white"
          >
            Home
          </Link>
        </>
      )}
      <Link
        to="/vendors"
        className="text-zinc-500 text-xs font-medium box-border caret-transparent inline tracking-[0.6px] leading-4 min-h-0 min-w-0 outline-neutral-950/50 uppercase md:block md:min-h-[auto] md:min-w-[auto] hover:text-white"
      >
        Experts
      </Link>
      <Link
        to="/ambassador"
        className="text-zinc-500 text-xs font-medium box-border caret-transparent inline tracking-[0.6px] leading-4 min-h-0 min-w-0 outline-neutral-950/50 uppercase md:block md:min-h-[auto] md:min-w-[auto] hover:text-white"
      >
        Ambassadors
      </Link>
      <Link
        to="/membership"
        className="text-zinc-500 text-xs font-medium box-border caret-transparent inline tracking-[0.6px] leading-4 min-h-0 min-w-0 outline-neutral-950/50 uppercase md:block md:min-h-[auto] md:min-w-[auto] hover:text-white"
      >
        Apply
      </Link>
      <Link
        to="/members"
        className="text-white text-xs font-medium box-border caret-transparent inline tracking-[0.6px] leading-4 min-h-0 min-w-0 outline-neutral-950/50 uppercase md:block md:min-h-[auto] md:min-w-[auto] hover:text-sky-400 border-2 border-white/30 px-4 py-2 rounded-lg transition-all hover:border-sky-400"
      >
        Member Log In
      </Link>
    </nav>
  );
};
