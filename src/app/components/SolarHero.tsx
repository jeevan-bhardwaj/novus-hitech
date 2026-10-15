"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EnquiryModal from "./EnquiryModal";

const siteUrl = "https://solar.novushitech.com";
const brochureUrl = `${siteUrl}/wp-content/uploads/2026/04/New-Solar-Brochure-Final-V4-for-Web.pdf`;

const heroSlides = [
  {
    image: `/images/hero/solar-manufacturing.webp`,
    alt: "Automated solar module production line at scale",
    label: "Solar module line at scale",
  },
  {
    image: `/images/hero/BESS-pack-assembly.webp`,
    alt: "Battery energy storage pack assembly line",
    label: "BESS pack assembly hall",
  },
  {
    image: "/images/hero/novus-carry-amr.avif",
    alt: "Novus Carry autonomous mobile robot for production-line material movement",
    label: "Novus Carry AMR inside a cell line",
  },
  {
    image: `${siteUrl}/wp-content/uploads/2025/10/Frame-49.png`,
    alt: "Battery energy storage container assembly hall",
    label: "Container assembly hall",
  },
];

const proofPoints = [
  { value: "1,400+", label: "Robots deployed" },
  { value: "2600+", label: "Professionals" },
  { value: "100+", label: "Enterprise clients" },
];

export default function SolarHero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);

  useEffect(() => {
    if (
      carouselPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [carouselPaused]);

  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-[#081F3A] text-white"
        id="home"
      >
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <img
            className="h-full w-full object-cover object-center scale-105 transform transition-transform duration-1000"
            src="/images/hero/solar-banner.webp"
            alt=""
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081F3A]/95 via-[#081F3A]/75 to-[#081F3A]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#081F3A]/50 via-transparent to-[#081F3A]/90" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-50"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 85% 45%, rgba(33,126,190,0.35), transparent 50%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-16 z-10 h-9 overflow-hidden border-y border-white/15 bg-[#081F3A]/65 backdrop-blur-sm lg:top-[82px]"
          aria-label="REI Expo 2026 event details"
          role="region"
        >
          <div className="flex h-full w-max animate-[partner-marquee_32s_linear_infinite] items-center hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[false, true].map((isDuplicate) => (
              <div
                className="flex shrink-0 items-center gap-3 py-0 pl-6 pr-20 text-xs font-semibold text-white sm:gap-5 sm:pr-32 sm:text-sm"
                key={isDuplicate ? "duplicate" : "original"}
                aria-hidden={isDuplicate}
              >
                <span>Meet us at REI Expo 2026</span>
                <span className="text-white/60" aria-hidden="true">
                  ·
                </span>
                <span>Booth A01, Hall 16</span>
                <span className="text-white/60" aria-hidden="true">
                  ·
                </span>
                <a
                  className="text-[#9fd4f5] transition-colors hover:text-white hover:underline"
                  href="https://renewableenergyindiaexpo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isDuplicate ? -1 : undefined}
                >
                  www.renewableenergyindiaexpo.com
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-[1440px] items-center gap-12 px-6 pb-16 pt-28 sm:px-8 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:pb-24 lg:pt-40">
          <div className="min-w-0 max-w-[680px]">
            {/* <p className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#c8e7fb] sm:text-xs sm:tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8cc63f] shadow-[0_0_14px_rgba(140,198,63,0.8)]" />
              Turnkey solar PV and BESS lines, engineered and serviced in India
            </p> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-4 max-w-[680px] text-[34px] font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-[40px] lg:text-[40px]"
            >
              Turnkey solar PV &amp; BESS manufacturing lines. engineered and
              serviced in India.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="mt-5 max-w-[590px] text-[16px] leading-[26px] text-white/80"
            >
              Built by roboticists, not equipment traders. 20+ years of
              autonomous systems engineering behind every line. World-leading
              process equipment, integrated with Novus robotics and Novus MES,
              delivered under one contract.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[6px] bg-primary px-6 py-0 text-[13px] font-bold text-white transition-all hover:bg-[#1a689e]"
              >
                Speak to a Solar Expert
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10h11m-4-4 4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => setBrochureModalOpen(true)}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[4px] border border-white/70 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white hover:text-secondary"
              >
                Download Brochure
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10h11m-4-4 4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
              className="mt-8 max-w-full py-2"
            >
              <span className="mb-1.5 block text-sm font-bold uppercase tracking-[0.14em] text-[#9fd4f5]">
                Event details
              </span>
              <span className="flex w-full max-w-full flex-wrap items-center gap-x-1.5 gap-y-1 text-sm sm:gap-x-2 sm:text-[13px] lg:text-[14px]">
                <span className="inline-flex items-center gap-1 font-bold text-white sm:gap-2.5">
                  {/* <span className="h-2.5 w-2.5 rounded-full bg-[#55b4ed] shadow-[0_0_14px_rgba(85,180,237,0.9)] animate-pulse" aria-hidden="true" /> */}
                  Meet us at REI Expo 2026
                </span>
                <span className="text-white/60">·</span>
                <span className="font-semibold text-white/90">
                  Booth A01, Hall 16
                </span>
                <span className="text-white/60">·</span>
                <a
                  className="inline-flex max-w-full items-center gap-1.5 font-semibold text-[#9fd4f5] [overflow-wrap:anywhere] transition-colors hover:text-white hover:underline"
                  href="https://renewableenergyindiaexpo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.renewableenergyindiaexpo.com
                </a>
              </span>
            </motion.div>
          </div>

          <div className="relative mx-auto w-full min-w-0 max-w-[600px] lg:ml-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative w-full min-w-0"
              role="region"
              aria-label="Solar and BESS manufacturing photography"
              aria-roledescription="carousel"
              onMouseEnter={() => setCarouselPaused(true)}
              onMouseLeave={() => setCarouselPaused(false)}
              onFocus={() => setCarouselPaused(true)}
            >
            <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-[#f5f9fc] p-1 shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[15px] bg-[#0a2d4a] sm:aspect-[3/2] sm:rounded-[18px]">
                {heroSlides.map((slide, index) => (
                  <img
                    key={slide.image}
                    src={slide.image}
                    alt={slide.alt}
                    aria-hidden={index !== activeSlide}
                    className={`absolute inset-0 h-full w-full object-cover object-left transition-opacity duration-700 ${
                      index === activeSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06172b]/95 via-[#0b2d4c]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between gap-3 sm:bottom-5 sm:left-6 sm:right-6">
                  <p
                    className="min-w-0 truncate text-[17px] font-bold leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] sm:text-lg"
                    aria-live="polite"
                  >
                    {heroSlides[activeSlide].label}
                  </p>
                  <div
                    className="flex shrink-0 items-center gap-2 rounded-full bg-[#1684c7]/90 px-2 py-1.5 shadow-sm backdrop-blur-sm"
                    role="group"
                    aria-label="Choose a slide"
                  >
                    {heroSlides.map((slide, index) => (
                      <button
                        key={slide.label}
                        type="button"
                        aria-label={`Show image ${index + 1}: ${slide.label}`}
                        aria-current={index === activeSlide}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                          index === activeSlide
                            ? "w-7 bg-white"
                            : "w-2 bg-white/55 hover:bg-white/85"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-[#dce7ee] bg-white px-6 py-10 sm:py-14 lg:py-[72px]"
        aria-label="Novus deployment experience"
      >
        <dl className="mx-auto grid max-w-[1120px] grid-cols-1 divide-y divide-[#dce7ee] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {proofPoints.map((point, index) => (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
              className="flex min-h-[84px] flex-col items-center justify-center gap-2 px-2 py-4 text-center sm:min-h-0 sm:gap-2.5 sm:py-0"
              key={point.label}
            >
              <dt className="text-[32px] font-bold leading-none tracking-[-0.045em] text-secondary sm:text-[40px] lg:text-5xl">
                {point.value}
              </dt>
              <dd className="text-[15px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-[#5b6875]">
                {point.label}
              </dd>
            </motion.div>
          ))}
        </dl>
      </section>

      {modalOpen && <EnquiryModal onClose={() => setModalOpen(false)} />}
      {brochureModalOpen && (
        <EnquiryModal
          onClose={() => setBrochureModalOpen(false)}
          title="Download the Solar & BESS Brochure"
          description="Enter your details to download the brochure on Solar PV manufacturing or BESS assembly lines."
          submitLabel="Download Brochure"
          subject="Solar PV & BESS brochure request"
          eventSource="Solar_Hero_Brochure_Gate"
          brochureUrl={brochureUrl}
        />
      )}
    </>
  );
}