export type ComingSoonPageProps = {
  title?: string;
};

export const ComingSoonPage = ({ title = "Members Area" }: ComingSoonPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black pt-16 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-zinc-400 text-lg md:text-xl mb-8">
          Coming soon. Our members area is under construction.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold transition-colors"
        >
          Back to home
        </a>
      </div>
    </div>
  );
};
