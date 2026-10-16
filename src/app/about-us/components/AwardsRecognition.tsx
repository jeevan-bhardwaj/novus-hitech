"use client";

import { useState } from "react";

const awards = [
  {
    org: "Aegis Graham Bell Awards",
    title: "Manufacturing Innovation",
    tag: "2026",
    logo: "/images/awards/aegis-logo.png", // Replace with actual path
    isLatest: true,
  },
  {
    org: "Ministry of MSME, Govt...",
    title: "National Award for Innovation",
    tag: "Govt Honor",
    logo: "/images/awards/msme-logo.png",
    isLatest: false,
  },
  {
    org: "AWS",
    title: "Generative AI Excellence Award",
    tag: "2023",
    logo: "/images/awards/aws-logo.png",
    isLatest: false,
  },
  {
    org: "Frost & Sullivan",
    title: "Most Innovative Product Award",
    tag: "Global Honor",
    logo: "/images/awards/frost-sullivan-logo.png",
    isLatest: false,
  },
  {
    org: "Entrepreneur",
    title: "Entrepreneur of the Year Award",
    tag: "2023",
    logo: "/images/awards/entrepreneur-logo.png",
    isLatest: false,
  },
  {
    org: "Daimler",
    title: "Excellence in Innovation Award",
    tag: "2018",
    logo: "/images/awards/daimler-logo.png",
    isLatest: false,
  },
  {
    org: "CII Industrial Innovation...",
    title: "Most Innovative Company",
    tag: "2017",
    logo: "/images/awards/cii-logo.png",
    isLatest: false,
  },
  {
    org: "APAC Insider",
    title: "Best Self Driving Technology",
    tag: "2017",
    logo: "/images/awards/apac-insider-logo.png",
    isLatest: false,
  },
  {
    org: "NASSCOM",
    title: "Most Promising Emerging Company",
    tag: "2016",
    logo: "/images/awards/nasscom-logo.png",
    isLatest: false,
  },
];

export default function AwardsRecognition() {
  // State to track if all cards should be shown
  const [showAll, setShowAll] = useState(false);

  // Only show the first 4 items if showAll is false
  const visibleAwards = showAll ? awards : awards.slice(0, 4);

  return (
    <section
      className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="awards-title"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        {/* Centered Header */}
        <div className="mb-14 text-center">
          <p className="mb-4 inline-flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1376f8] sm:text-xs sm:tracking-[0.2em]">
            <span className="h-px w-3 bg-current" aria-hidden="true" />
            Awards & Recognition
            <span className="h-px w-3 bg-current" aria-hidden="true" />
          </p>
          <h2
            className="mb-4 text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-[#081F3A]"
            id="awards-title"
          >
            Backed by industry, government, and IP.
          </h2>
          <p className="text-base leading-[1.7] text-[#52616c]">
            Recognition across innovation, entrepreneurship, and autonomous technology.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleAwards.map((award, index) => (
            <article
              className={`relative flex min-h-[280px] flex-col rounded-2xl border bg-white p-5 shadow-[0_8px_24px_rgba(8,31,58,0.04)] transition-shadow hover:shadow-[0_12px_32px_rgba(8,31,58,0.08)] ${
                award.isLatest ? "border-[#1376f8]" : "border-[#dce7ee]"
              }`}
              key={award.title + index}
            >
              {/* Top Left Badge */}
              {award.isLatest && (
                <span className="absolute -top-3 left-5 inline-flex items-center gap-1 rounded-full bg-[#1376f8] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                  ★ Latest Milestone
                </span>
              )}

              {/* Logo Container */}
              <div className="mb-5 flex h-[130px] w-full items-center justify-center rounded-xl bg-[#f8f9fc] p-4">
                <img
                  className="max-h-[60px] max-w-[120px] object-contain mix-blend-multiply"
                  src={award.logo}
                  alt={`${award.org} logo`}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="truncate pr-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#1376f8]">
                    {award.org}
                  </span>
                  <span className="whitespace-nowrap rounded bg-[#f4f7fa] px-2 py-1 text-[10px] font-bold text-[#52616c]">
                    {award.tag}
                  </span>
                </div>
                
                <h3 className="mb-6 text-[17px] font-bold leading-[1.3] text-[#081F3A]">
                  {award.title}
                </h3>
                
                {/* Bottom decorative line */}
                <div
                  className="mt-auto h-[2px] w-6 bg-[#dce7ee]"
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {awards.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#081F3A] px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[#081F3A] transition-colors hover:bg-[#081F3A] hover:text-white"
              aria-expanded={showAll}
            >
              {showAll ? "Show Less" : "Show More"}
              {/* Chevron SVG - Rotates based on state */}
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}