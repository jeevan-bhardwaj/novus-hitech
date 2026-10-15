"use client";

import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export default function EventBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#f5f9fc] px-5 py-16 sm:px-6 sm:py-[clamp(64px,8vw,104px)]" aria-label="Meet Novus at REI Expo 2026">
        <div className="mx-auto flex min-h-0 w-full max-w-[1240px] flex-col items-start justify-between gap-6 rounded-[20px] bg-[linear-gradient(90deg,rgba(5,24,45,0.94),rgba(8,54,88,0.78)),url('/images/REI-Expo.jpg')] bg-cover bg-center px-6 py-8 text-white sm:min-h-[290px] sm:gap-9 sm:rounded-[28px] sm:px-9 sm:py-9 lg:flex-row lg:items-center lg:px-16 lg:py-[54px]">
          <div className="max-w-[600px]">
            <h2 className="max-w-[660px] text-[30px] font-bold leading-[1.12] tracking-[-0.8px] text-white sm:text-[clamp(30px,3.4vw,40px)] sm:leading-[1.1]">REI Expo 2026?</h2>
            <p className="mt-3.5 max-w-[800px] text-base leading-[1.6] text-white/85 sm:mt-[18px]">
              Meeting us at REI Expo 2026? Walk the full solar PV value chain and the BESS cell-to-container line in one conversation.
            </p>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9fd4f5] sm:mt-6">
              Event details
            </p>
            <p className="mt-1.5 text-[13px] font-semibold leading-[1.7] text-white/90 sm:text-sm">
              Meet us at REI Expo 2026 <span className="px-1 text-white/55">·</span>{" "}
              Booth A01, Hall 16 <span className="px-1 text-white/55">·</span>{" "}
              <a
                className="font-semibold text-[#9fd4f5] underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
                href="https://renewableenergyindiaexpo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.renewableenergyindiaexpo.com
              </a>
            </p>
          </div>
          <button
            className="inline-flex min-h-[46px] flex-[0_0_auto] items-center justify-center gap-2.5 rounded-full border-0 bg-primary px-5 text-[13px] font-bold text-white transition-all hover:-translate-y-px hover:bg-[#1a689e] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-primary/35 focus-visible:outline-offset-[3px] sm:min-h-[50px] sm:px-6 sm:text-sm"
            type="button"
            onClick={() => setModalOpen(true)}
          >
            Book a Meeting at the Expo
            <svg className="h-[17px] w-[17px] fill-none stroke-current" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h11m-4-4 4 4-4 4" />
            </svg>
          </button>
        </div>
      </section>
      {modalOpen && (
        <EnquiryModal
          onClose={() => setModalOpen(false)}
          eventSource="REI_Expo_2026"
        />
      )}
    </>
  );
}
