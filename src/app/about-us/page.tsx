import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  Building2,
  Globe2,
  Lightbulb,
  UsersRound,
} from "lucide-react";
import GroupHighlightsSection from "./components/GroupHighlightsSection";
import LeadershipSection from "./components/LeadershipSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import VisionMissionSection from "./components/VisionMissionSection";
import ScrollReveal from "../components/ScrollReveal";
import BottomCta from "../components/BottomCta";
import AwardsRecognition from "./components/AwardsRecognition";

export const metadata: Metadata = {
  title: "About Novus Hi-Tech | Robotics, Automation & Solar Manufacturing",
  description:
    "Meet Novus Hi-Tech: a global automation and technology group bringing robotics, AI and manufacturing expertise to solar PV and energy storage.",
  alternates: {
    canonical: "https://solar.novushitech.com/about-us/",
  },
};

const groupStats = [
  { value: "$250M", label: "Hi-Tech Group" },
  { value: "26+", label: "Years of operation" },
  { value: "2,600+", label: "Employees" },
  { value: "10+", label: "Countries" },
];

const capabilities = [
  {
    icon: Bot,
    number: "01",
    title: "Robotics at our core",
    description:
      "Our roots in robotics and automation shape how we think about every production challenge: make it smarter, safer and more consistent.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Built to keep evolving",
    description:
      "With research, engineering and 150+ patents filed across the group, we keep developing technology for the factories of tomorrow.",
  },
  {
    icon: Building2,
    number: "03",
    title: "Made for real factories",
    description:
      "We connect global manufacturing experience with local delivery, bringing equipment, automation and expertise together on the factory floor.",
  },
];

const principles = [
  {
    number: "01",
    title: "Start with the whole picture",
    description:
      "Understand the production goal, the people and the process before shaping the technology.",
  },
  {
    number: "02",
    title: "Connect the moving parts",
    description:
      "Bring equipment, automation and intelligence together as one considered manufacturing system.",
  },
  {
    number: "03",
    title: "Build for what comes next",
    description:
      "Design for reliable operations today and the changing demands of tomorrow’s energy industry.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden bg-white text-secondary">
      <ScrollReveal>
      <section
        className="relative isolate overflow-hidden bg-[#081F3A] text-white"
        aria-labelledby="about-hero-title"
      >
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[62%_center]"
          src="/images/about/about-banner.webp"
          alt=""
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06172b]/85 via-[#081F3A]/70 to-[#081F3A]/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[#081F3A]/10 via-transparent to-[#081F3A]/60"
          aria-hidden="true"
        />

        <div className="mx-auto flex min-h-[520px] w-full max-w-[1440px] items-center px-6 pb-12 pt-24 sm:min-h-[540px] sm:px-8 sm:pt-28 lg:min-h-[576px] lg:px-12 lg:pb-16 lg:pt-32">
          <div className="max-w-[680px]">
            <p className="mb-5 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase leading-relaxed tracking-[0.18em] text-[#55b4ed] sm:text-xs sm:tracking-[0.2em]">
              <span className="h-px w-3 bg-current" aria-hidden="true" />
              About Novus Hi-Tech
              <span className="h-px w-3 bg-current" aria-hidden="true" />
            </p>
            <h1
              className="text-4xl font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-5xl"
              id="about-hero-title"
            >
              Elevate solar manufacturing to new heights with Novus Hi-Tech.
            </h1>
            <p className="mt-5 max-w-[590px] text-[16px] leading-[26px] text-white/80">
              In the solar industry, meeting the increasing demand for renewable energy solutions hinges on innovation and operational efficiency. Nouvs Hi-Tech’s smart factory solutions revolutionize solar component production. 
            </p>
            <div className="mt-8 flex flex-wrap gap-3 max-[600px]:flex-col max-[600px]:items-stretch">
              <a
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[6px] bg-[#a3cd3a] px-6 py-0 text-[13px] font-bold text-[#221f20] transition-all hover:bg-[#8db52e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href="#our-story"
              >
                Discover our story
                <ArrowRight className="h-[17px] w-[17px]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section
        className="border-b border-[#dce7ee] bg-white px-6 py-10 sm:py-14 lg:py-[72px]"
        aria-label="Novus Hi-Tech at a glance"
      >
        <div className="mx-auto w-full max-w-[1240px]">
          <dl className="grid grid-cols-1 divide-y divide-[#dce7ee] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {groupStats.map((stat) => (
              <div
                className="flex min-h-[100px] flex-col items-center justify-center gap-2 px-2 py-4 text-center sm:min-h-[100px] sm:gap-2.5 sm:py-0"
                key={stat.label}
              >
                <dt className="text-[32px] font-bold leading-none tracking-[-0.045em] text-secondary sm:text-[40px] lg:text-5xl">
                  {stat.value}
                </dt>
                <dd className="text-[15px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-[#5b6875]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
        <WhoWeAreSection />
      </ScrollReveal>

      {/* <ScrollReveal>
        <VisionMissionSection />
      </ScrollReveal> */}

      <ScrollReveal>
        <GroupHighlightsSection />
      </ScrollReveal>

      
      <ScrollReveal>
        <AwardsRecognition />
      </ScrollReveal>

      <ScrollReveal>
        <LeadershipSection />
      </ScrollReveal>

      <ScrollReveal>
      <BottomCta />
      </ScrollReveal>
    </main>
  );
}
