"use client";

import { useState } from "react";
import EnquiryModal from "../../components/EnquiryModal";

const brochureUrl = "/files/New-Solar-Brochure-Final-V4-for-Web.pdf";

export default function SolarClosingCTA() {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#091e36] px-5 py-16 text-center sm:px-6 sm:py-[104px]">
        <div className="mx-auto w-full max-w-[850px]">
          <h2 className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Planning a solar PV factory?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.75] text-[#9bb0c3] sm:text-lg">
            Share your GW target and technology roadmap. We design the line and your first 30 days.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#meeting-form"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#2585c9] px-6 text-sm font-bold text-white transition-colors hover:bg-[#1a689e]"
            >
              Book a Meeting
              <span aria-hidden="true">→</span>
            </a>
            <button
              type="button"
              onClick={() => setBrochureModalOpen(true)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#445b73] bg-transparent px-6 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Download Brochure
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="mt-10">
            <a
              href="/bess"
              className="text-sm font-medium text-[#9bb0c3] transition-colors hover:text-white"
            >
              Building storage too? See BESS assembly lines
            </a>
          </div>
        </div>
      </section>
      {brochureModalOpen && (
        <EnquiryModal
          onClose={() => setBrochureModalOpen(false)}
          title="Download Brochure"
          description="Enter your contact details to download the Novus solar PV brochure."
          submitLabel="Download"
          subject="Solar PV brochure request"
          eventSource="Solar_PV_Closing_CTA_Brochure"
          brochureUrl={brochureUrl}
        />
      )}
    </>
  );
}