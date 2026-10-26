"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import EnquiryModal from "./EnquiryModal";

const tiles = [
  {
    title: "Walk the solar value chain",
    description: "From ingot to module, with the engineering and automation that connect the line.",
  },
  {
    title: "See a BESS line end to end",
    description: "From battery pack assembly to energy storage container assembly.",
  },
  {
    title: "Leave with a next step",
    description:
      "Share your target GW or GWh and request a 30-day milestone plan.",
  },
];

export default function ReiExpoVideo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <>
      <section
        className="bg-white px-5 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-[clamp(64px,8vw,104px)]"
        aria-labelledby="rei-expo-video-title"
      >
        <div className="mx-auto w-full max-w-[1240px]">
          <header className="mb-[42px] text-center">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']"
            >
              REI Expo 2025 &rarr; 2026
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
              className="text-[clamp(32px,4vw,40px)] font-bold leading-[44px] tracking-[-0.8px] text-[#111]"
              id="rei-expo-video-title"
            >
               Revisit REI Expo 2025. Meet Us Again in 2026
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
              className="mx-auto mt-[18px] max-w-[720px] text-base leading-[1.75] text-[#5a6875]"
            >
              Watch our REI Expo 2025 highlights, then see what&apos;s waiting at
              Hall 16, Booth A01.
            </motion.p>
          </header>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="overflow-hidden rounded-[20px] bg-secondary shadow-[0_18px_40px_rgba(8,31,58,0.16)]"
            >
              <div className="relative aspect-video w-full">
                {videoPlaying ? (
                  <video
                    className="absolute inset-0 h-full w-full"
                    autoPlay
                    controls
                    playsInline
                    poster="/videos/REI-2025-showreel-placeholder.webp"
                    title="REI Expo 2025 highlights — Autonomous Intralogistics in Action | Novus Hi-Tech"
                    onEnded={() => setVideoPlaying(false)}
                  >
                    <source src="/videos/REI-2025-showreel.mp4" type="video/mp4" />
                    Your browser does not support the video element.
                  </video>
                ) : (
                  <button
                    className="group absolute inset-0 flex h-full w-full items-center justify-center bg-secondary"
                    type="button"
                    onClick={() => setVideoPlaying(true)}
                    aria-label="Play REI Expo 2025 highlights"
                  >
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src="/videos/REI-2025-showreel-placeholder.webp"
                      alt=""
                    />
                    <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform group-hover:scale-110">
                      <svg
                        className="ml-1 h-7 w-7 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </motion.div>

            <div className="grid gap-4">
              {tiles.map(({ title, description }, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="rounded-xl border border-border bg-[#f5f9fc] p-5 transition-all duration-200 hover:-translate-y-[2px] hover:border-primary/40 hover:shadow-[0_12px_26px_rgba(8,31,58,0.08)]"
                  key={title}
                >
                  <div className="mb-2 flex items-center gap-2.5">
                    <span
                      className="flex h-6 w-6 flex-[0_0_auto] items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <h3 className="text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-secondary">
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm leading-[1.7] text-[#5a6875]">
                    {description}
                  </p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.28, duration: 0.4, ease: "easeOut" }}
                className="pt-1"
              >
                <button
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[5px] border border-transparent bg-[#a3cd3a] px-[18px] text-center text-[11px] font-bold leading-[1.3] text-[#221f20] transition-all hover:-translate-y-0.5 hover:bg-[#8db52e] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#55b4ed]/70 focus-visible:outline-offset-[3px] sm:text-xs"
                  type="button"
                  onClick={() => setModalOpen(true)}
                >
                  Book a Meeting
                  <svg
                    className="h-[17px] w-[17px] flex-[0_0_auto] fill-none stroke-current"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M4 10h11m-4-4 4 4-4 4" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <EnquiryModal
          onClose={() => setModalOpen(false)}
          title="Book a meeting with our solar team"
          description="Share your details and our team will set up a meeting at REI Expo 2026, Hall 16, Booth A01."
          submitLabel="Book a Meeting"
          subject="REI Expo 2026 meeting request"
          eventSource="Solar_REI_Expo_Video_Meeting"
        />
      )}
    </>
  );
}
