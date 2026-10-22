export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-[9999] w-full border-b border-slate-400/35 bg-white text-[#081F3A] shadow-[0_1px_0_rgba(15,23,42,0.02),0_12px_26px_rgba(15,23,42,0.06)]">
      <div className="relative z-20 flex h-16 w-full max-w-full items-center justify-between px-4 min-[1024px]:h-[82px] min-[1024px]:px-12">
        <a className="relative z-[10001] inline-flex flex-[0_0_auto] items-center" href="/#home" aria-label="Novus Hi-Tech home">
          <img
            className="block h-auto w-24 min-[1024px]:w-[130px]"
            src="/images/novus-logo.png"
            alt="Novus Hi-Tech"
            width="186"
            height="75"
          />
        </a>

        <div className="flex-[0_0_auto] items-center gap-5">
          <a className="inline-flex items-center justify-center whitespace-nowrap rounded-[6px] bg-[#a3cd3a] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#221f20] shadow-md transition-all duration-200 hover:bg-[#8db52e] hover:shadow-lg active:scale-95 min-[1024px]:px-5 min-[1024px]:py-2.5 min-[1024px]:text-[12px]" href="/contact">
            TALK TO AN EXPERT
          </a>
        </div>
      </div>
    </header>
  );
}
