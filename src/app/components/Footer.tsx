import { Mail, MapPin, Phone } from "lucide-react";

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
  { label: "About Us", href: "/about-us" },
  { label: "Resources", href: `${siteUrl}/resources/` },
  { label: "Contact", href: `${siteUrl}/contact/` },
];

const legalLinks = [
  { label: "Privacy Policy", href: "https://novushitech.com/privacy-policy/" },
  { label: "Terms of Use", href: "https://novushitech.com/terms-of-use/" },
  { label: "Cookie Policy", href: "https://novushitech.com/cookie-policy/" },
];

const linkClass =
  "text-sm leading-[1.6] text-white/75 transition-colors hover:text-white focus-visible:text-white";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.25fr_1fr_1fr_1.25fr] lg:gap-10 lg:px-0">
        <div>
          <a className="inline-flex items-center" href="/#home" aria-label="Novus Hi-Tech home">
            <img
              className="block h-auto w-32"
              src="/images/novus-logo-light.png"
              alt="Novus Hi-Tech"
            />
          </a>
          <p className="mt-5 max-w-[300px] text-sm leading-[1.7] text-white/70">
            Turnkey solar PV &amp; BESS lines, powered by Novus automation.
          </p>
          <p className="mt-4 max-w-[320px] text-sm leading-[1.7] text-white/70">
            Novus Hi-Tech &middot; Part of The Hi-Tech Group &middot; Gurugram,
            Haryana, India
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

        <address className="not-italic">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[#55b4ed]">
            Get In Touch
          </p>
          {/* <p className="text-sm font-semibold leading-[1.6] text-white/85">
            India Office
          </p> */}
          <div className="mt-3 flex items-start gap-2.5 text-sm leading-[1.6] text-white/75">
            <MapPin
              className="mt-0.5 h-4 w-4 shrink-0 text-[#55b4ed]"
              aria-hidden="true"
            />
            <p>
              A-18 Infocity-1, Sector-34,
              <br />
              Gurgaon 122001 Haryana, India
              <br />
              Tel: <a className={linkClass} href="tel:+911244715300">+91 (124) 4715300</a>
              <br />
              Fax: +91 (124) 4715398
            </p>
          </div>
          <div className="mt-4 grid gap-3 text-sm leading-[1.6]">
            <a
              className={`${linkClass} inline-flex items-center gap-2.5`}
              href="tel:+919311078767"
            >
              <Phone className="h-4 w-4 shrink-0 text-[#55b4ed]" aria-hidden="true" />
              +91 9311078767
            </a>
            <a
              className={`${linkClass} inline-flex items-center gap-2.5`}
              href="mailto:solar@novushitech.com"
            >
              <Mail className="h-4 w-4 shrink-0 text-[#55b4ed]" aria-hidden="true" />
              solar@novushitech.com
            </a>
          </div>
        </address>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:flex-row sm:px-6 sm:text-left lg:px-0">
          <p className="text-[13px] text-white/60">
            &copy; 2026 Novus Hi-Tech. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:justify-end" aria-label="Legal">
            {legalLinks.map((link, index) => (
              <span className="inline-flex items-center gap-3" key={link.label}>
                {index > 0 && (
                  <span className="text-[13px] text-white/40" aria-hidden="true">
                    &middot;
                  </span>
                )}
                <a
                  className="text-[13px] text-white/75 transition-colors hover:text-white focus-visible:text-white"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
