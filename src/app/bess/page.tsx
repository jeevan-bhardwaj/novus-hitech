import type { Metadata } from "next";
import BessHero from "../components/BessHero";
import BessWhyNow from "../components/BessWhyNow";
import BessDecisionMistakes from "../components/BessDecisionMistakes";
import BessLineCoverage from "../components/BessLineCoverage";
import BessTwoLines from "../components/BessTwoLines";
import BessTestingTraceability from "../components/BessTestingTraceability";
import BessFaqSection from "../components/BessFaqSection";
import BessClosingCta from "../components/BessClosingCta";
import BessDeliverySupport from "../components/BessDeliverySupport";
import BessUtilityInfrastructure from "../components/BessUtilityInfrastructure";
import BessMaterialHandling from "../components/BessMaterialHandling";
import BessQualitySafety from "../components/BessQualitySafety";

const pageTitle =
  "Turnkey BESS Manufacturing Line India | Cell to Container | Novus Hi-Tech";
const pageDescription =
  "Turnkey BESS manufacturing lines. Six stages across two halls. Cell to container. Purpose-built for grid-scale energy storage, not adapted from EV. 4.2 GWh per year at 12 PPM. Delivered and serviced in India.";
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
      <BessDecisionMistakes />
      <BessLineCoverage />
      <BessTwoLines />
      <BessTestingTraceability />
      <BessQualitySafety />
      <BessMaterialHandling />
      <BessUtilityInfrastructure />
      <BessDeliverySupport />
      <BessFaqSection />
      {/* <BessClosingCta /> */}
    </>
  );
}
