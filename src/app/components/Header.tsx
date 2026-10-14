const siteUrl = "https://solar.novushitech.com";

const solutions = [
  { label: "Ingot & Wafer", href: `${siteUrl}/ingot-wafer/` },
  { label: "Cell Production", href: `${siteUrl}/cell-production-lines/` },
  { label: "Module Production", href: `${siteUrl}/module-production-lines/` },
  {
    label: "Battery Energy Storage",
    href: `${siteUrl}/battery-energy-storage-systems/`,
  },
];

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = mobile
    ? "inline-flex min-h-[46px] w-full items-center gap-1.5 whitespace-nowrap rounded-[5px] px-2.5 py-2 text-sm font-semibold text-[#081F3A] transition-colors hover:bg-[#081F3A]/[0.04] hover:text-black focus-visible:bg-[#081F3A]/[0.04] focus-visible:text-black"
    : "inline-flex min-h-10 items-center gap-1.5 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold text-[#081F3A] transition-colors hover:bg-[#081F3A]/[0.04] hover:text-black focus-visible:bg-[#081F3A]/[0.04] focus-visible:text-black";
  const dropdownPanelClass = mobile
    ? "hidden w-full gap-0 border-0 py-0 pl-3 shadow-none group-open:grid"
    : "absolute left-[-16px] top-full z-30 hidden w-[248px] gap-0.5 rounded-lg border border-[#e5e7eb] bg-white p-2 shadow-[0_16px_35px_rgba(8,31,58,0.14)] group-open:grid group-hover:grid group-focus-within:grid";

  return (
    <>
      <a className={linkClass} href="/#home">
        Home
      </a>
      <details className="group relative">
        <summary className={`${linkClass} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
          Solutions
          <svg className="h-3 w-3 fill-none stroke-current transition-transform group-open:rotate-180 group-hover:rotate-180" viewBox="0 0 12 12" aria-hidden="true">
            <path d="m2.5 4.5 3.5 3 3.5-3" />
          </svg>
        </summary>
        <div className={dropdownPanelClass}>
          {solutions.map((solution) => (
            <a className="rounded-[5px] px-3 py-[11px] text-[13px] text-[#263746] transition-colors hover:bg-[#f1f6fa] hover:text-primary focus-visible:bg-[#f1f6fa] focus-visible:text-primary" href={solution.href} key={solution.label}>
              {solution.label}
            </a>
          ))}
        </div>
      </details>
      <a className={linkClass} href={`${siteUrl}/about-us/`}>
        About Us
      </a>
      <a className={linkClass} href={`${siteUrl}/resources/`}>
        Resources
      </a>
      <a className={linkClass} href={`${siteUrl}/contact/`}>
        Contact
      </a>
    </>
  );
}

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-[9999] w-full border-b border-slate-400/35 bg-white text-[#081F3A] shadow-[0_1px_0_rgba(15,23,42,0.02),0_12px_26px_rgba(15,23,42,0.06)]">
      <div className="relative z-20 flex h-16 w-full max-w-full items-center justify-between px-4 min-[1024px]:h-[82px] min-[1024px]:px-12">
        <a className="relative z-[10001] inline-flex flex-[0_0_auto] items-center" href="/#home" aria-label="Novus Hi-Tech home">
          <img
            className="block h-auto w-28 min-[1024px]:w-[130px]"
            src={`${siteUrl}/wp-content/uploads/2024/10/flogo.png`}
            alt="Novus Hi-Tech"
            width="186"
            height="75"
          />
        </a>

        <nav className="hidden h-full items-center gap-1 min-[1024px]:flex" aria-label="Main navigation">
          <NavigationLinks />
        </nav>

        <div className="hidden flex-[0_0_auto] items-center gap-5 min-[1024px]:flex">
          <a className="inline-flex items-center justify-center whitespace-nowrap rounded-[6px] bg-primary px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-[#1a689e] hover:shadow-lg active:scale-95" href={`${siteUrl}/contact/`}>
            TALK TO AN EXPERT
          </a>
        </div>

        <details className="group relative block min-[1024px]:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-[5px] rounded-[5px] border border-[#d9e0e6] bg-white [&::-webkit-details-marker]:hidden" aria-label="Open navigation menu">
            <span className="h-0.5 w-[17px] rounded-sm bg-secondary transition-transform group-open:translate-y-[7px] group-open:rotate-45" />
            <span className="h-0.5 w-[17px] rounded-sm bg-secondary transition-opacity group-open:opacity-0" />
            <span className="h-0.5 w-[17px] rounded-sm bg-secondary transition-transform group-open:-translate-y-[7px] group-open:-rotate-45" />
          </summary>
          <nav className="absolute -right-4 -left-4 top-[calc(100%+1px)] hidden gap-1 border-t border-[#edf0f2] bg-white px-5 pb-[22px] pt-3.5 shadow-[0_18px_25px_rgba(8,31,58,0.13)] group-open:grid" aria-label="Mobile navigation">
            <NavigationLinks />
            <a className="ml-2.5 mt-2.5 inline-flex min-h-[39px] items-center justify-center justify-self-start whitespace-nowrap rounded-[6px] bg-primary px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-[#1a689e] hover:shadow-lg active:scale-95" href={`${siteUrl}/contact/`}>
              TALK TO AN EXPERT
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
