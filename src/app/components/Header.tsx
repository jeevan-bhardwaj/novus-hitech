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

function NavigationLinks() {
  return (
    <>
      <a className="nav-link nav-link-active" href="#home">
        Home
      </a>
      <details className="nav-dropdown">
        <summary className="nav-link">
          Solutions
          <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="m2.5 4.5 3.5 3 3.5-3" />
          </svg>
        </summary>
        <div className="dropdown-panel">
          {solutions.map((solution) => (
            <a href={solution.href} key={solution.label}>
              {solution.label}
            </a>
          ))}
        </div>
      </details>
      <a className="nav-link" href={`${siteUrl}/about-us/`}>
        About Us
      </a>
      <a className="nav-link" href={`${siteUrl}/resources/`}>
        Resources
      </a>
      <a className="nav-link" href={`${siteUrl}/contact/`}>
        Contact
      </a>
    </>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Novus Hi-Tech home">
          <img
            src={`${siteUrl}/wp-content/uploads/2024/10/flogo.png`}
            alt="Novus Hi-Tech"
            width="186"
            height="75"
          />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <NavigationLinks />
        </nav>

        <div className="header-actions">
          <img
            className="certification-badge"
            src={`${siteUrl}/wp-content/uploads/2024/07/Certification-Badge-Dec-2023-2024.png`}
            alt="Great Place to Work certified"
            width="2500"
            height="3750"
          />
          <a className="header-cta" href={`${siteUrl}/contact/`}>
            Talk to an expert
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h11m-4-4 4 4-4 4" />
            </svg>
          </a>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <NavigationLinks />
            <a className="mobile-nav-cta" href={`${siteUrl}/contact/`}>
              Talk to an expert
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h11m-4-4 4 4-4 4" />
              </svg>
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
