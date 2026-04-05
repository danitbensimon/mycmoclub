import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="fixed backdrop-blur-xl bg-black/80 box-border caret-transparent outline-neutral-950/50 z-50 border-b border-solid border-white/10 top-0 inset-x-0">
      <Navbar />
    </header>
  );
};
