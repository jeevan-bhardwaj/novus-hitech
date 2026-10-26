import type { Metadata } from "next";
import SolarPvHero from "./components/SolarPvHero";
import SolarPvLineScope from "./components/SolarPvLineScope";
import SolarPvIntegration from "./components/SolarPvIntegration";
import SolarPvFaq from "./components/SolarPvFaq";
import SolarPvStageDetails from "./components/SolarPvStageDetails";
import SolarClosingCTA from "./components/SolarClosingCTA";
import EventStrip from "./components/EventStrip";


const pageTitle =
  "Turnkey Solar PV Manufacturing Line India | REI 2026";
const pageDescription =
  "Turnkey solar PV lines, ingot to module: TOPCon-ready cells, a 15-machine robotic module line, Novus MES. Delivered in 16 to 20 weeks. Meet us at REI 2026.";
const canonicalUrl = "https://www.novushitech.com/solar-pv-manufacturing";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
};

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: pageTitle,
  description: pageDescription,
  image: "https://solar.novushitech.com/images/hero/solar-manufacturing.webp",
  brand: {
    "@type": "Brand",
    name: "Novus Hi-Tech",
  },
  url: canonicalUrl,
};

export default function SolarPvManufacturingPage() {
  return (
    <main className="overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SolarPvHero />
      <SolarPvLineScope />
      <SolarPvStageDetails />
      <SolarPvIntegration />
      <EventStrip description="Talk to our Novus Solar and BESS engineers on a video call or book an office visit." />
      <SolarPvFaq />
      <SolarClosingCTA />
    </main>
  );
}
