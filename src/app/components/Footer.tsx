const siteUrl = "https://solar.novushitech.com";

const solutionLinks = [
  { label: "Ingot & Wafer", href: `${siteUrl}/ingot-wafer/` },
  { label: "Cell Production", href: `${siteUrl}/cell-production-lines/` },
  { label: "Module Production", href: `${siteUrl}/module-production-lines/` },
  {
    label: "Battery Energy Storage",
    href: "/bess",
  },
];

const companyLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: `${siteUrl}/about-us/` },
  { label: "Resources", href: `${siteUrl}/resources/` },
  { label: "Contact", href: `${siteUrl}/contact/` },
];

const contactLinks = [
  { label: "solar@novushitech.com", href: "mailto:solar@novushitech.com" },
  { label: "+91-9311078767", href: "tel:+919311078767" },
  { label: "+91 (124) 4715300", href: "tel:+911244715300" },
  { label: "solar.novushitech.com", href: "https://solar.novushitech.com/" },
];

const linkClass =
  "text-sm leading-[1.6] text-white/75 transition-colors hover:text-white focus-visible:text-white";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.25fr_1fr_1fr_1.1fr] lg:gap-12 lg:px-0">
        <div>
          <a className="inline-flex items-center" href="/#home" aria-label="Novus Hi-Tech home">
            <img
              className="block h-auto w-32"
              src="/images/novus-logo-light.png"
              alt="Novus Hi-Tech"
            />
          </a>
          <p className="mt-5 max-w-[300px] text-sm leading-[1.7] text-white/70">
            Turnkey solar PV &amp; BESS manufacturing lines. World-leading
            process equipment integrated with Novus robotics and Novus MES.
            Engineered, commissioned, and serviced in India.
          </p>
        </div>

        <nav aria-label="Solutions">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[#55b4ed]">
            Solutions
          </p>
          <ul className="grid gap-3">
            {solutionLinks.map((link) => (
              <li key={link.label}>
                <a className={linkClass} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[#55b4ed]">
            Company
          </p>
          <ul className="grid gap-3">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a className={linkClass} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[#55b4ed]">
            Get In Touch
          </p>
          <ul className="grid gap-3">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a className={linkClass} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-3 px-5 py-6 text-center sm:flex-row sm:px-6 sm:text-left lg:px-0">
          <p className="text-[13px] text-white/60">
            &copy; 2026 Novus Hi-Tech. All rights reserved.
          </p>
          <a
            className="text-[13px] text-white/75 transition-colors hover:text-white"
            href="https://renewableenergyindiaexpo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find us at REI Expo 2026 &middot; Booth A01, Hall 16{" "}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
