"use client";

import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

const siteUrl = "https://solar.novushitech.com";
const brochureUrl = `${siteUrl}/wp-content/uploads/2026/04/New-Solar-Brochure-Final-V4-for-Web.pdf`;

type ModalMode = "milestone-plan" | "brochure" | null;

export default function BottomCta() {
  const [modalMode, setModalMode] = useState<ModalMode>(null);

  return (
    <>
      <section className="bg-gradient-to-br from-[#0b2d4c] via-secondary to-secondary px-5 py-16 sm:px-6 sm:py-[clamp(64px,8vw,104px)]" aria-labelledby="bottom-cta-title">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-[clamp(36px,6vw,84px)]">
          <div className="max-w-[820px]">
            <p className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-[#55b4ed] before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']">The Future Is Now</p>
            <h2 className="text-[clamp(32px,4vw,40px)] font-bold leading-[44px] tracking-[-0.8px] text-white" id="bottom-cta-title">
              Let&apos;s Benchmark Your Production.
            </h2>
            <p className="mt-[18px] max-w-[760px] text-sm leading-[1.75] text-white/80 sm:text-base">
              Whether you are specifying a full ingot-to-module line, a
              cell-to-container BESS line, or a first material handling
              investment, Novus will assess your factory, size the right
              configuration, and give you a milestone plan you can take to your
              board.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 max-[600px]:flex-col max-[600px]:items-stretch">
              <button
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[5px] border border-transparent bg-primary px-[18px] text-center text-[11px] font-bold leading-[1.3] text-white transition-all hover:-translate-y-0.5 hover:bg-[#1a689e] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#55b4ed]/70 focus-visible:outline-offset-[3px] sm:text-xs"
                type="button"
                onClick={() => setModalMode("milestone-plan")}
              >
                Request Your 30-Day Milestone Plan
                <svg className="h-[17px] w-[17px] flex-[0_0_auto] fill-none stroke-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11m-4-4 4 4-4 4" />
                </svg>
              </button>
              <button
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[5px] border border-white/60 bg-transparent px-[18px] text-center text-[11px] font-bold leading-[1.3] text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#55b4ed]/70 focus-visible:outline-offset-[3px] sm:text-xs"
                type="button"
                onClick={() => setModalMode("brochure")}
              >
                Download Brochure
                <svg className="h-[17px] w-[17px] flex-[0_0_auto] fill-none stroke-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11m-4-4 4 4-4 4" />
                </svg>
              </button>
            </div>
          </div>

          <address className="grid justify-items-start gap-3 border-t border-white/20 pt-[22px] text-[13px] not-italic text-white/85 lg:gap-[15px] lg:border-l lg:border-t-0 lg:py-[26px] lg:pl-5 lg:text-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#55b4ed]">Talk to our solar team</p>
            <a className="transition-colors hover:text-white hover:underline hover:underline-offset-[3px]" href="mailto:solar@novushitech.com">solar@novushitech.com</a>
            <a className="transition-colors hover:text-white hover:underline hover:underline-offset-[3px]" href="tel:+919311078767">+91 9311078767</a>
            <a className="transition-colors hover:text-white hover:underline hover:underline-offset-[3px]" href="https://www.novushitech.com">www.novushitech.com</a>
          </address>
        </div>
      </section>

      {modalMode === "milestone-plan" && (
        <EnquiryModal
          onClose={() => setModalMode(null)}
          title="Request Your 30-Day Milestone Plan"
          description="Share your details and our team will discuss the right production-line configuration for your factory."
          submitLabel="Request Milestone Plan"
          subject="30-Day Solar Manufacturing Milestone Plan"
          eventSource="Solar_Bottom_CTA_Milestone_Plan"
        />
      )}

      {modalMode === "brochure" && (
        <EnquiryModal
          onClose={() => setModalMode(null)}
          title="Get the Solar & BESS Brochure"
          description="Enter your contact details to open the Novus solar and BESS brochure."
          submitLabel="Continue to Brochure"
          subject="Solar & BESS brochure request"
          eventSource="Solar_Brochure_Gate"
          brochureUrl={brochureUrl}
        />
      )}
    </>
  );
}
