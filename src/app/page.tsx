import FaqSection from "./components/FaqSection";
import EventBanner from "./components/EventBanner";
import BottomCta from "./components/BottomCta";
import ProductionLines from "./components/ProductionLines";
import RoboticsHeritage from "./components/RoboticsHeritage";
import SolarHero from "./components/SolarHero";
import TrustedByManufacturers from "./components/TrustedByManufacturers";
import WhyNow from "./components/WhyNow";
import WhyManufacturersChooseNovus from "./components/WhyManufacturersChooseNovus";

export default function Home() {
  return (
    <>
      <SolarHero />
      <TrustedByManufacturers />
      <ProductionLines />
      <WhyNow />
      <WhyManufacturersChooseNovus />
      <RoboticsHeritage />
      <FaqSection />
      {/* <EventBanner /> */}
      {/* <BottomCta /> */}
    </>
  );
}
