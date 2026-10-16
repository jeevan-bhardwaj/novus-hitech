import FaqSection from "./components/FaqSection";
import EventBanner from "./components/EventBanner";
import BottomCta from "./components/BottomCta";
import ProductionLines from "./components/ProductionLines";
import RoboticsHeritage from "./components/RoboticsHeritage";
import SolarHero from "./components/SolarHero";
import TrustedByManufacturers from "./components/TrustedByManufacturers";
import WhyNow from "./components/WhyNow";
import WhyManufacturersChooseNovus from "./components/WhyManufacturersChooseNovus";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal>
        <SolarHero />
      </ScrollReveal>
      <ScrollReveal>
        <ProductionLines />
      </ScrollReveal>
      <ScrollReveal>
        <WhyNow />
      </ScrollReveal>
      <ScrollReveal>
        <WhyManufacturersChooseNovus />
      </ScrollReveal>
      <ScrollReveal>
        <RoboticsHeritage />
      </ScrollReveal>
        <ScrollReveal>
        <TrustedByManufacturers />
      </ScrollReveal>
      <ScrollReveal>
        <EventBanner />
      </ScrollReveal>
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>

      {/* <ScrollReveal>
      <BottomCta />
      </ScrollReveal> */}
    </>
  );
}
