"use client";

import { motion } from "framer-motion";

const testingSystems = [
  {
    name: "GTC — Cell Testing System",
    range:
      "0 to 6V, 0 to 5,000A. Laboratory high-precision battery cell testing. Production line cell testing. Laboratory charge and discharge power supply temperature chamber integrated machine.",
  },
  {
    name: "GTB — Module and Pack Testing System",
    range:
      "0 to 200V (0.03A to 1,000A) and 0 to 500V (0.15A to 2,100A). For power tools, drones, medical devices, electric two and three-wheeled vehicles, residential energy storage, low-speed EVs, and new energy vehicles.",
  },
  {
    name: "GTA — Pack EOL Testing System",
    range:
      "0 to 1,650V, 0.075A to 1,200A. Commercial and industrial energy storage, large energy storage batteries, and battery cluster testing. Air tightness testing optional.",
  },
];

export default function BessTestingTraceability() {
  return (
    <section
      className="bg-[#eaf4fb] px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="bess-testing-title"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mx-auto mb-10 max-w-[900px] text-center sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']"
          >
            Testing &amp; traceability — from cell to container
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="bess-testing-title"
          >
            High-Precision Testing at Every Stage.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-[18px] max-w-[900px] text-base leading-[1.75] text-[#526272]"
          >
            Testing and traceability run through all six stages. Every test
            result ties to a serial number, from the incoming cell to the
            shipped container.
          </motion.p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {testingSystems.map((system, index) => (
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="rounded-xl border border-[#cfe2ef] bg-white p-6 shadow-[0_12px_30px_rgba(8,31,58,0.06)] sm:p-7"
              key={system.name}
            >
              <h3 className="text-lg font-bold leading-[1.4] text-primary">
                {system.name}
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-[#526272]">
                {system.range}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
