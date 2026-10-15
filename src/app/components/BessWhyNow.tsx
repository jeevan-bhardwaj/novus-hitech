"use client";

import { motion } from "framer-motion";

const bessMarketMetrics = [
  {
    value: "236 GWh",
    description:
      "BESS capacity required by 2032. Against 0.11 GW today. Source: CEA, 2023.",
  },
  {
    value: "₹18,100 Cr",
    description:
      "PLI scheme backing domestic manufacturing. 50 GWh target. Runs 2025 to 2029. Compliant line required to qualify.",
  },
  {
    value: "10% + 2 hrs",
    description:
      "Mandatory co-located storage. Ministry of Power, Feb 2025. Every new solar project creates demand for your packs.",
  },
];

export default function BessWhyNow() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#eaf4fb] px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="bess-why-now-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(33,126,190,0.12), transparent 62%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1240px]">
        <header className="mx-auto mb-[42px] max-w-[820px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']"
          >
            Why Now
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="bess-why-now-title"
          >
            Commission now. produce when it peaks.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-[18px] max-w-[820px] text-base leading-[1.75] text-[#526272]"
          >
            India&apos;s Ministry of Power has mandated co-located storage in
            every future solar tender. The CEA projects 236 GWh of BESS capacity
            needed by 2031-32 against 0.11 GW installed today. A BESS assembly
            line takes 12 to 18 months to commission. The companies whose lines
            are running in 2027 are making that decision now.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {bessMarketMetrics.map((metric, index) => (
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="flex h-full flex-col rounded-2xl border border-[#cfe2ef] bg-white p-6 shadow-[0_12px_30px_rgba(8,31,58,0.08)] sm:p-7"
              key={metric.value}
            >
              <h3 className="text-[clamp(26px,3vw,36px)] font-bold leading-tight tracking-[-0.04em] text-secondary">
                {metric.value}
              </h3>
              <p className="mt-4 text-sm leading-[1.7] text-[#5a6875]">
                {metric.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
