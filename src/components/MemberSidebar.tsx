import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const MemberSidebar = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navItems = [
    { path: '/members', label: 'Dashboard', icon: '🏠' },
    { path: '/members/experts', label: 'Experts', icon: '🎯' },
    { path: '/members/roundtables', label: 'Roundtables', icon: '🗣️' },
    { path: '/members/directory', label: 'Directory', icon: '📇' },
    { path: '/members/calendar', label: 'Calendar', icon: '📅' },
    { path: '/members/library', label: 'Library', icon: '📚' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 bg-zinc-900/80 border-r-2 border-zinc-800 min-h-[calc(100vh-64px)] p-6 hidden md:block">
      {/* User Info */}
      <div className="mb-8 pb-6 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          {user?.user_metadata?.avatar_url ? (
            <img
              src={user.user_metadata.avatar_url}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold">
              {user?.email?.[0]?.toUpperCase() || 'M'}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm truncate">
              {user?.user_metadata?.full_name || user?.email || 'Member'}
            </p>
            <p className="text-zinc-500 text-xs truncate">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              isActive(item.path)
                ? 'bg-sky-600/20 text-sky-400 border border-sky-600/30'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Sign Out */}
      <div className="mt-8 pt-6 border-t border-zinc-800">
        <button
          onClick={signOut}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-zinc-500 hover:text-red-400 hover:bg-red-900/20 transition-colors w-full"
        >
          <span className="text-lg">🚪</span>
          Sign Out
        </button>
      </div>
    </aside>
  );
};
