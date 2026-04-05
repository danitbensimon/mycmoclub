import { Logo } from "@/sections/Header/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";

export const Navbar = () => {
  return (
    <div className="items-center box-border caret-transparent flex justify-between max-w-screen-xl outline-neutral-950/50 mx-auto px-6 py-4">
      <Logo />
      <DesktopNav />
      <MobileMenu />
    </div>
  );
};
