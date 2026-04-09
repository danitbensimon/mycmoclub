import { MemberLayout } from '@/components/MemberLayout';

type MemberPlaceholderPageProps = {
  title: string;
  description?: string;
  icon?: string;
};

export const MemberPlaceholderPage = ({
  title,
  description = 'This section is coming soon. We\'re building something great for you.',
  icon = '🚧',
}: MemberPlaceholderPageProps) => {
  return (
    <MemberLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <span className="text-6xl mb-6">{icon}</span>
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-3">{title}</h1>
        <p className="text-zinc-400 text-lg max-w-md">{description}</p>
      </div>
    </MemberLayout>
  );
};
