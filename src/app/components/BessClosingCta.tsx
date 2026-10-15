"use client";

import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

const siteUrl = "https://solar.novushitech.com";
const brochureUrl = `${siteUrl}/wp-content/uploads/2026/04/New-Solar-Brochure-Final-V4-for-Web.pdf`;

type ModalMode = "milestone-plan" | "brochure" | null;

export default function BessClosingCta() {
  const [modalMode, setModalMode] = useState<ModalMode>(null);

  return (
    <>
      <section
        className="bg-white px-5 py-8 sm:px-6 sm:py-10"
        aria-labelledby="bess-closing-cta-title"
      >
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="relative isolate grid min-h-[260px] items-center gap-8 overflow-hidden rounded-[28px] bg-[#081F3A] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12 xl:grid-cols-[minmax(0,1fr)_auto] xl:gap-10 xl:px-16">
            <img
              className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
              src="/images/hero/BESS-pack-assembly.webp"
              alt=""
              loading="lazy"
            />
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06172b]/95 via-[#081F3A]/85 to-[#0a3c63]/75"
              aria-hidden="true"
            />
            <div className="max-w-[680px]">
              <p className="mb-3.5 inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-[#63c8ff] before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']">
                The Future Is Now
              </p>
              <h2
                className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-white"
                id="bess-closing-cta-title"
              >
                Let&apos;s Scope Your BESS Line.
              </h2>
              <p className="mt-4 max-w-[680px] text-[15px] leading-[1.65] text-white/80 sm:text-base">
                Whether you are specifying a full pack and container line,
                scaling an existing configuration, or making your first BESS
                assembly investment, Novus will assess your requirements, size
                the right configuration, and deliver a milestone plan you can
                take to your board.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 max-[600px]:flex-col max-[600px]:items-stretch xl:justify-end">
              <button
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-transparent bg-[#2588c4] px-5 text-center text-[13px] font-bold leading-[1.3] text-white transition-all hover:-translate-y-0.5 hover:bg-[#1a78b2] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-white/50 focus-visible:outline-offset-[3px] sm:text-sm"
                type="button"
                onClick={() => setModalMode("milestone-plan")}
              >
                Request Your 30-Day Milestone Plan
                <svg
                  className="h-[17px] w-[17px] flex-[0_0_auto] fill-none stroke-current"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M4 10h11m-4-4 4 4-4 4" />
                </svg>
              </button>
              <button
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/35 bg-white/[0.04] px-5 text-center text-[13px] font-bold leading-[1.3] text-white transition-all hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-white/50 focus-visible:outline-offset-[3px] sm:text-sm"
                type="button"
                onClick={() => setModalMode("brochure")}
              >
                Download BESS Brochure
                <svg
                  className="h-[17px] w-[17px] flex-[0_0_auto] fill-none stroke-current"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M4 10h11m-4-4 4 4-4 4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {modalMode === "milestone-plan" && (
        <EnquiryModal
          onClose={() => setModalMode(null)}
          title="Request Your 30-Day Milestone Plan"
          description="Share your details and our team will discuss the right BESS line configuration for your factory."
          submitLabel="Request Milestone Plan"
          subject="30-Day BESS Manufacturing Milestone Plan"
          eventSource="BESS_Closing_CTA_Milestone_Plan"
        />
      )}

      {modalMode === "brochure" && (
        <EnquiryModal
          onClose={() => setModalMode(null)}
          title="Download the BESS Brochure"
          description="Enter your contact details to open information about Novus BESS assembly lines."
          submitLabel="Download BESS Brochure"
          subject="BESS brochure request"
          eventSource="BESS_Closing_CTA_Brochure"
          brochureUrl={brochureUrl}
        />
      )}
    </>
  );
}
