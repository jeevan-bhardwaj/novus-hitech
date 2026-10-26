"use client";

import { useState } from "react";
import EnquiryModal from "../../components/EnquiryModal";

type EventStripProps = {
  description: string;
};

export default function EventStrip({ description }: EventStripProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#f5f9fc] px-5 py-16 sm:px-6 sm:py-[clamp(64px,8vw,104px)]" aria-labelledby="rei-event-title">
        <div className="mx-auto flex min-h-0 w-full max-w-[1240px] flex-col items-start justify-between gap-6 rounded-[20px] bg-[linear-gradient(90deg,rgba(5,24,45,0.94),rgba(8,54,88,0.78)),url('/images/REI-Expo.jpg')] bg-cover bg-center px-6 py-8 text-white sm:min-h-[290px] sm:gap-9 sm:rounded-[28px] sm:px-9 sm:py-9 lg:flex-row lg:items-center lg:px-16 lg:py-[54px]">
          <div className="max-w-[800px]">
            {/* <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9fd4f5] sm:text-sm">
              Upcoming Event
            </p> */}
            <h2
              className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl"
              id="rei-event-title"
            >
              Book a meeting with our solar team
            </h2>
            <p className="mt-3.5 max-w-[800px] text-base leading-[1.6] text-white/85 sm:mt-4">
              {description}
            </p>
          </div>
          <button
            className="inline-flex min-h-[46px] flex-[0_0_auto] items-center justify-center gap-2.5 rounded-full border-0 bg-[#a3cd3a] px-5 text-[13px] font-bold text-[#221f20] transition-all hover:-translate-y-px hover:bg-[#8db52e] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-primary/35 focus-visible:outline-offset-[3px] sm:min-h-[50px] sm:px-6 sm:text-sm"
            type="button"
            onClick={() => setModalOpen(true)}
          >
            Book a Meeting
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