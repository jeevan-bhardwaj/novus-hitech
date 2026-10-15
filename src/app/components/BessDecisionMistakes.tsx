"use client";

import { motion } from "framer-motion";

const riskPillars = [
  {
    title: "Wrong chemistry setup",
    description:
      "Your line must be built for prismatic LFP, not pouch NMC. Otherwise you ship failures you cannot see until year three.",
  },
  {
    title: "Wrong quality thresholds",
    description:
      "Your customer needs 20 years of life. Weld and BMS tolerances your assembly line accepts today become your warranty claims later.",
  },
  {
    title: "Missing quality gates",
    description:
      "Cooling plate, leak test, and TIM application must be checked in-line, not after. Skip this and you cannot hold quality across thousands of packs.",
  },
  {
    title: "No compliance built in",
    description:
      "IEC 62619, CEA Safety Regulations, MNRE ALMM, and UN 38.3 cannot be added later. Your PLI claim depends on it being there from pack one.",
  },
];

export default function BessDecisionMistakes() {
  return (
    <section
      className="bg-white px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="bess-decision-title"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mx-auto mb-10 max-w-[820px] text-center sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']"
          >
            The assembly line decision most BESS manufacturers get wrong
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="bess-decision-title"
          >
            A Storage Pack Has to Survive 15 to 20 Years. An EV Line Was Not
            Built for That.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-[18px] max-w-[820px] text-base leading-[1.75] text-[#526272]"
          >
            The most common mistake in BESS manufacturing is treating the line
            as a variant of an EV battery line. The chemistry is different. The
            quality gates are different. The compliance architecture is
            different. And the cost of getting it wrong compounds over the
            lifetime of every pack you ship.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {riskPillars.map((pillar, index) => (
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              className="rounded-xl border border-[#dce7ee] bg-[#f5f9fc] p-6 sm:p-7"
              key={pillar.title}
            >
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                Risk {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-[19px] font-bold leading-[1.35] tracking-[-0.02em] text-secondary">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm leading-[1.7] text-[#5a6875]">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-[900px] text-center text-base italic leading-[1.75] text-[#526272]"
        >
          Most lines in India are imported, EV-adapted, or split across five
          vendors. None are built for 20-year grid quality. That is the gap you
          must close.
        </motion.p>
      </div>
    </section>
  );
}
