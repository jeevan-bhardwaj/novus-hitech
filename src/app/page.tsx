import Header from "./components/Header";

const siteUrl = "https://solar.novushitech.com";

export default function Home() {
  return (
    <>
      <Header />
      <section className="hero w-full" id="home" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span />
            Solar PV manufacturing solutions
          </p>
          <h1 id="hero-title">
            From Blueprint
            <br />
            to <span>Gigawatt.</span>
          </h1>
          <p className="hero-description">
            Commission your solar PV manufacturing line faster, with less
            execution risk.
          </p>
          <p className="hero-caption">
            Ingot to Module. BESS under one roof.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={`${siteUrl}/about-us/`}>
              Discover Novus
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h11m-4-4 4 4-4 4" />
              </svg>
            </a>
            <a className="button button-secondary" href={`${siteUrl}/contact/`}>
              Talk to an expert
            </a>
          </div>
        </div>
        <div className="hero-footer" aria-hidden="true">
          <span>ENGINEERING THE FUTURE OF SOLAR</span>
          <span className="hero-footer-line" />
          <span>INGOT · WAFER · CELL · MODULE</span>
        </div>
      </section>
    </>
  );
}
