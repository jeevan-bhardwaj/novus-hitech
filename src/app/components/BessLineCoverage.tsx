"use client";

import { motion } from "framer-motion";

const halls = [
  {
    name: "Hall A: Pack Assembly",
    stages: [
      { name: "Cell receiving & grading" },
      { name: "Module assembly" },
      { name: "Pack & rack integration" },
    ],
  },
  {
    name: "Hall B: Container Assembly",
    stages: [
      { name: "Container integration" },
      { name: "EOL testing" },
      { name: "Dispatch" },
    ],
  },
];

export default function BessLineCoverage() {
  return (
    <section
      className="bg-[#f5f9fc] px-5 py-14 text-secondary sm:px-6 sm:py-16"
      aria-labelledby="bess-line-coverage-title"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mb-7 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']"
          >
            What the line covers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="bess-line-coverage-title"
          >
            Six stages. Two halls. One contract.
          </motion.h2>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto grid w-full max-w-[1000px] overflow-hidden rounded-xl border border-[#dce7ee] bg-white shadow-[0_12px_30px_rgba(8,31,58,0.06)] sm:grid-cols-2"
        >
          {halls.map((hall, index) => (
            <div
              className={index === 0 ? "sm:border-r sm:border-[#dce7ee]" : ""}
              key={hall.name}
            >
              <h3 className="border-b border-[#dce7ee] bg-[#081f3a] px-4 py-2.5 text-sm font-bold text-white">
                {hall.name}
              </h3>
              <ol className="list-inside list-decimal space-y-1 px-4 py-3 text-sm leading-[1.6] text-secondary">
                {hall.stages.map((stage) => (
                  <li key={stage.name}>{stage.name}</li>
                ))}
              </ol>
            </div>
          ))}
        </motion.div>

        <img
          className="mx-auto mt-6 block h-auto w-full rounded-xl"
          src="/images/bess-module-pack-assembly-line.png"
          alt="BESS module and pack assembly line"
          loading="lazy"
        />
        <p className="mx-auto mt-5 w-full max-w-[1000px] text-center text-sm leading-[1.7] text-[#526272]">
          Most vendors deliver one hall. Novus delivers both. Scales from 50
          MWh to 500+ MWh per year.
        </p>
      </div>
    </section>
  );
}
