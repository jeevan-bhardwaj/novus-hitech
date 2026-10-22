"use client";

import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

const brochureUrl = "/files/New-Solar-Brochure-Final-V4-for-Web.pdf";

export default function BessClosingCta() {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#081f3a] px-5 py-14 text-center text-white sm:px-6 sm:py-16" aria-labelledby="bess-closing-cta-title">
        <div className="mx-auto w-full max-w-[850px]">
          <h2 className="text-[clamp(30px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em]" id="bess-closing-cta-title">
            Let&apos;s scope your BESS line.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.75] text-white/80">
            Share your cell format, GWh target and site status. We size the
            line and map your first 30 days.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#a3cd3a] px-6 text-sm font-bold text-[#221f20] transition-colors hover:bg-[#8db52e]" href="#bess-meeting-form">
              Book a Meeting
            </a>
            <button className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10" type="button" onClick={() => setBrochureModalOpen(true)}>
              Download BESS Brochure
            </button>
          </div>
          <a className="mt-6 inline-block text-sm font-medium text-white/75 transition-colors hover:text-white" href="/solar-pv-manufacturing">
            Making modules too? See solar PV manufacturing lines
          </a>
        </div>
      </section>
      {brochureModalOpen && (
        <EnquiryModal
          onClose={() => setBrochureModalOpen(false)}
          title="Download the BESS Brochure"
          description="Enter your contact details to download the Novus BESS brochure."
          submitLabel="Download"
          subject="BESS brochure request"
          eventSource="BESS_Closing_CTA_Brochure"
          brochureUrl={brochureUrl}
        />
      )}
    </>
  );
}
