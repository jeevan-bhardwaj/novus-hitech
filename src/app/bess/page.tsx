import type { Metadata } from "next";
import BessHero from "../components/BessHero";
import BessWhyNow from "../components/BessWhyNow";
import BessLineCoverage from "../components/BessLineCoverage";
import BessFaqSection from "../components/BessFaqSection";
import BessClosingCta from "../components/BessClosingCta";
import BessDeliverySupport from "../components/BessDeliverySupport";
import EventStrip from "../solar-pv-manufacturing/components/EventStrip";

const pageTitle =
  "Turnkey BESS Manufacturing Line India: Proven, REI 2026";
const pageDescription =
  "Turnkey BESS lines, cell to container: six stages, two halls, 4.2 GWh per year at 12 PPM. Built for 20-year grid storage. Meet us at REI Expo 2026.";
const canonicalUrl = "https://www.novushitech.com/bess";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalUrl,
  },
};

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: pageTitle,
  description: pageDescription,
  image: "https://solar.novushitech.com/images/hero/BESS-pack-assembly.webp",
  brand: {
    "@type": "Brand",
    name: "Novus Hi-Tech",
  },
  url: canonicalUrl,
};

export default function BessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
      <BessHero />
      <BessWhyNow />
      <BessLineCoverage />
      <BessDeliverySupport />
      <EventStrip description="Bring your cell format and GWh target to REI Expo 2026, Hall 16, Booth A01, 22 to 24 October. Our BESS engineers will size the line with you." />
      <BessFaqSection />
      <BessClosingCta />
    </>
  );
}
