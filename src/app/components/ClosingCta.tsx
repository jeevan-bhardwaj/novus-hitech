"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import EnquiryModal from "./EnquiryModal";

const brochureUrl = "/files/novus-solar-brochure.pdf";

type ModalMode = "meeting" | "brochure" | null;

export default function ClosingCta() {
  const [modalMode, setModalMode] = useState<ModalMode>(null);

  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-gradient-to-br from-[#0b2d4c] via-secondary to-[#06172b] px-5 py-16 text-white sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
        aria-labelledby="closing-cta-title"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(33,126,190,0.22), transparent 62%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[820px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.15] tracking-[-0.8px] text-white"
            id="closing-cta-title"
          >
            Bring us your capacity plan.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-[18px] max-w-[780px] text-base leading-[1.75] text-white/80"
          >
            Tell us your target GW or GWh, site status and timeline. We size
            the line and map your first 30 days.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.45, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 max-[600px]:flex-col max-[600px]:items-stretch"
          >
            <button
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[5px] border border-transparent bg-[#a3cd3a] px-[18px] text-center text-[11px] font-bold leading-[1.3] text-[#221f20] transition-all hover:-translate-y-0.5 hover:bg-[#8db52e] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#55b4ed]/70 focus-visible:outline-offset-[3px] sm:text-xs"
              type="button"
              onClick={() => setModalMode("meeting")}
            >
              Book a Meeting
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
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 0.45, ease: "easeOut" }}
            className="mt-7 text-sm text-white/70"
          >
            <a
              className="transition-colors hover:text-white hover:underline hover:underline-offset-[3px]"
              href="mailto:solar@novushitech.com"
            >
              solar@novushitech.com
            </a>
            <span className="px-2 text-white/40" aria-hidden="true">
              &middot;
            </span>
            <a
              className="transition-colors hover:text-white hover:underline hover:underline-offset-[3px]"
              href="tel:+919311078767"
            >
              +91 9311078767
            </a>
          </motion.p>
        </div>
      </section>

      {modalMode === "meeting" && (
        <EnquiryModal
          onClose={() => setModalMode(null)}
          title="Book a meeting with our solar team"
          description="Pick a day. Our solar team confirms your slot within one business day."
          submitLabel="Book a Meeting"
          subject="REI Expo 2026 meeting request"
          eventSource="Solar_Closing_CTA_Meeting"
        />
      )}

      {modalMode === "brochure" && (
        <EnquiryModal
          onClose={() => setModalMode(null)}
          title="Get the Solar & BESS Brochure"
          description="Enter your contact details to download the Novus solar and BESS brochure."
          submitLabel="Download Brochure"
          subject="Solar & BESS brochure request"
          eventSource="Solar_Closing_CTA_Brochure"
          brochureUrl={brochureUrl}
        />
      )}
    </>
  );
}
