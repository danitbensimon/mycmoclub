import { MemberSidebar } from './MemberSidebar';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

type MemberLayoutProps = {
  children: React.ReactNode;
};

export const MemberLayout = ({ children }: MemberLayoutProps) => {
  const { signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/members', label: 'Dashboard', icon: '🏠' },
    { path: '/members/experts', label: 'Experts', icon: '🎯' },
    { path: '/members/roundtables', label: 'Roundtables', icon: '🗣️' },
    { path: '/members/directory', label: 'Directory', icon: '📇' },
    { path: '/members/calendar', label: 'Calendar', icon: '📅' },
    { path: '/members/library', label: 'Library', icon: '📚' },
  ];

  return (
    <div className="min-h-screen bg-black pt-16 flex">
      <MemberSidebar />

      {/* Mobile nav bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-900 border-t-2 border-zinc-800 z-50 px-2 py-2">
        <div className="flex justify-around">
          {navItems.slice(0, 5).map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-2 py-1 text-xs ${
                location.pathname === item.path ? 'text-sky-400' : 'text-zinc-500'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col items-center gap-1 px-2 py-1 text-xs text-zinc-500"
          >
            <span className="text-lg">⋯</span>
            <span>More</span>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="absolute bottom-full left-0 right-0 bg-zinc-900 border-t-2 border-zinc-800 p-4 space-y-2">
            {navItems.slice(5).map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white rounded-xl"
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}
            <button
              onClick={signOut}
              className="flex items-center gap-3 px-4 py-3 text-red-400 rounded-xl w-full"
            >
              <span>🚪</span>
              Sign Out
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 pb-24 md:pb-8">
        {children}
      </main>
    </div>
  );
};
