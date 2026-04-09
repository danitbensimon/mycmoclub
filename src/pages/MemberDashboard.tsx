import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { MemberLayout } from '@/components/MemberLayout';

export const MemberDashboard = () => {
  const { user } = useAuth();
  const firstName = user?.user_metadata?.full_name?.split(' ')[0] || 'Member';

  const quickLinks = [
    {
      title: 'Book Expert Consultation',
      description: 'Browse our expert network and book your free 1:1 session.',
      path: '/members/experts',
      icon: '🎯',
      cta: 'Browse Experts',
    },
    {
      title: 'Roundtables',
      description: 'Join intimate roundtable discussions with fellow senior marketers.',
      path: '/members/roundtables',
      icon: '🗣️',
      cta: 'View Roundtables',
    },
    {
      title: 'Member Directory',
      description: 'Connect with other CMO Club members in the B2B community.',
      path: '/members/directory',
      icon: '📇',
      cta: 'Browse Members',
    },
    {
      title: 'Events Calendar',
      description: 'See upcoming dinners, events, and community meetups.',
      path: '/members/calendar',
      icon: '📅',
      cta: 'View Calendar',
    },
    {
      title: 'Resource Library',
      description: 'Access templates, playbooks, and marketing resources.',
      path: '/members/library',
      icon: '📚',
      cta: 'Explore Library',
    },
  ];

  return (
    <MemberLayout>
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
          Welcome back, {firstName}
        </h1>
        <p className="text-zinc-400 text-lg">
          Here's your CMO Club member dashboard. Explore expert consultations, events, and resources.
        </p>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className="bg-zinc-900/80 backdrop-blur-sm border-2 border-zinc-800 rounded-2xl p-6 hover:border-sky-600 transition-all hover:shadow-lg hover:shadow-sky-600/20 flex flex-col"
          >
            <span className="text-3xl mb-4">{link.icon}</span>
            <h3 className="text-white text-xl font-bold mb-2">{link.title}</h3>
            <p className="text-zinc-400 text-sm mb-4 flex-1">{link.description}</p>
            <span className="text-sky-400 font-semibold text-sm">
              {link.cta} →
            </span>
          </Link>
        ))}
      </div>
    </MemberLayout>
  );
};
