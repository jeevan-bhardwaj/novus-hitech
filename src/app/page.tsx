import type { Metadata } from "next";
import FaqSection from "./components/FaqSection";;
import ClosingCta from "./components/ClosingCta";
import ProductionLines from "./components/ProductionLines";
import ReiExpoVideo from "./components/ReiExpoVideo";
import SolarHero from "./components/SolarHero";
import TrustedByManufacturers from "./components/TrustedByManufacturers";
import WhyNow from "./components/WhyNow";
import WhyManufacturersChooseNovus from "./components/WhyManufacturersChooseNovus";
import ScrollReveal from "./components/ScrollReveal";

export const metadata: Metadata = {
  title: "Turnkey Solar PV & BESS Lines: Proven Partner | REI 2026",
  description:
    "Turnkey solar PV (ingot to module) and BESS (cell to container) lines, delivered in 16 to 20 weeks. Meet Novus at REI Expo 2026, Hall 16, Booth A01.",
};

export default function Home() {
  return (
    <>
      <ScrollReveal>
        <SolarHero />
      </ScrollReveal>
      <ScrollReveal>
        <ProductionLines />
      </ScrollReveal>
      {/* <ScrollReveal>
        <ReiExpoVideo />
      </ScrollReveal> */}
      <ScrollReveal>
        <WhyNow />
      </ScrollReveal>
      <ScrollReveal>
        <WhyManufacturersChooseNovus />
      </ScrollReveal>
      <ScrollReveal>
        <TrustedByManufacturers />
      </ScrollReveal>
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>
      <ScrollReveal>
        <ClosingCta />
      </ScrollReveal>
    </>
  );
}
