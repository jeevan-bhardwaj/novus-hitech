"use client";

import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

const siteUrl = "https://solar.novushitech.com";
const brochureUrl = `${siteUrl}/wp-content/uploads/2026/04/New-Solar-Brochure-Final-V4-for-Web.pdf`;

const proofPoints = [
  { value: "1,400+", label: "Robots deployed" },
  { value: "2,600+", label: "Professionals" },
  { value: "100+", label: "Enterprise clients" },
];

export default function BessHero() {
  const [expertModalOpen, setExpertModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#081F3A] text-white">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          src="/images/hero/BESS-pack-assembly.webp"
          alt=""
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06172b]/95 via-[#081F3A]/85 to-[#081F3A]/50"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[#081F3A]/20 via-transparent to-[#081F3A]/75"
          aria-hidden="true"
        />

        <div className="mx-auto flex min-h-[620px] w-full max-w-[1440px] items-center px-6 pb-16 pt-28 sm:min-h-[680px] sm:px-8 sm:pt-36 lg:min-h-[720px] lg:px-12 lg:pb-20 lg:pt-40">
          <div className="max-w-[680px]">
            <p className="text-[11px] font-bold uppercase leading-relaxed tracking-[0.16em] text-[#9fd4f5] sm:text-xs sm:tracking-[0.2em]">
              Turnkey BESS manufacturing lines, engineered and
              serviced in India
            </p>
            <h1 className="mt-4 text-[34px] font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-[40px] lg:text-[40px]">
              Turnkey BESS Manufacturing Lines. Cell to Container.
            </h1>
            <p className="mt-5 max-w-[590px] text-[16px] leading-[26px] text-white/80">
              Six stages across two halls. Purpose-built for grid-scale energy
              storage, not adapted from EV. 4.2 GWh per year at 12 PPM.
              Delivered under one contract, engineered and serviced in India.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 max-[600px]:flex-col max-[600px]:items-stretch">
              <button
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[6px] bg-primary px-6 py-0 text-[13px] font-bold text-white transition-all hover:bg-[#1a689e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                type="button"
                onClick={() => setExpertModalOpen(true)}
              >
                Speak to a BESS Expert
                <svg className="h-[17px] w-[17px] fill-none stroke-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11m-4-4 4 4-4 4" />
                </svg>
              </button>
              <button
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[4px] border border-white/70 bg-transparent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                type="button"
                onClick={() => setBrochureModalOpen(true)}
              >
                Download BESS Brochure
                <svg className="h-[17px] w-[17px] fill-none stroke-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11m-4-4 4 4-4 4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-[#dce7ee] bg-white px-6 py-8 sm:py-10 lg:py-12"
        aria-label="Novus deployment experience"
      >
        <dl className="mx-auto grid max-w-[1120px] grid-cols-1 divide-y divide-[#dce7ee] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {proofPoints.map((point) => (
            <div
              className="flex min-h-[84px] flex-col items-center justify-center gap-2 px-2 py-4 text-center sm:min-h-0 sm:py-0"
              key={point.label}
            >
              <dt className="text-[32px] font-bold leading-none tracking-[-0.045em] text-secondary sm:text-[40px] lg:text-5xl">
                {point.value}
              </dt>
              <dd className="text-[15px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-[#5b6875]">
                {point.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {expertModalOpen && (
        <EnquiryModal
          onClose={() => setExpertModalOpen(false)}
          title="Speak to a BESS Expert"
          description="Share your details and our team will discuss your grid-scale BESS manufacturing requirements."
          subject="BESS manufacturing line enquiry"
          eventSource="BESS_Hero_Expert"
        />
      )}
      {brochureModalOpen && (
        <EnquiryModal
          onClose={() => setBrochureModalOpen(false)}
          title="Download the BESS Brochure"
          description="Enter your details to download information about Novus BESS assembly lines."
          submitLabel="Download BESS Brochure"
          subject="BESS brochure request"
          eventSource="BESS_Hero_Brochure"
          brochureUrl={brochureUrl}
        />
      )}
    </>
  );
}
