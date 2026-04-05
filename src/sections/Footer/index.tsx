export const Footer = () => {
  return (
    <footer className="bg-black box-border caret-transparent outline-neutral-950/50 py-6 border-t border-solid border-white/10">
      <div className="box-border caret-transparent max-w-screen-xl outline-neutral-950/50 mx-auto px-6">
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-between outline-neutral-950/50 gap-y-4 md:flex-row">
          <img
            src="https://c.animaapp.com/mlf9rarde0lMWk/assets/f44dd4a0c_ChatGPTImageJan27202611_00_34AM-Picsart-BackgroundRemover.png"
            alt="The CMO Club"
            className="box-border caret-transparent brightness-0 invert-[1] h-12 max-w-full opacity-60 outline-neutral-950/50"
          />
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-zinc-500 text-xs box-border caret-transparent leading-4 outline-neutral-950/50">
              © 2026 The CMO Club. All rights reserved.
            </p>
            <a 
              href="/privacy" 
              className="text-zinc-600 hover:text-zinc-400 text-xs underline transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
