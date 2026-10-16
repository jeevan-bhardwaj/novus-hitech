"use client";

import { motion } from "framer-motion";

const qualityControlPoints = [
  "Incoming material inspection in batches",
  "Code scanning, OCV test, and thickness measurement at cell loading",
  "Taping inspection after cell taping",
  "Pressing pressure and length measurement at module compression",
  "End plate code scanning inspection",
  "Pole addressing and polarity re-test",
  "Post-weld quality inspection (CCD camera)",
  "Module EOL test and Pack-level EOL test",
  "Whole pack airtightness test",
];

const safetyControlPoints = [
  "Safety fencing with safety door locks around all robotic cells",
  "Safety grating at operator access points",
  "Module bottom holding mechanism to prevent drop",
  "Self-lock grippers that hold during power or gas outage",
  "Insulated pallet and jig design throughout the line",
  "Welding booth smoke sensor and temperature sensor",
  "Two-hand control buttons at manual stations",
  "Safety monitoring cameras across the full line",
];

const controlGroups = [
  {
    title: "Quality Control Points (9)",
    points: qualityControlPoints,
  },
  {
    title: "Safety Control Points (8)",
    points: safetyControlPoints,
  },
];

export default function BessQualitySafety() {
  return (
    <section
      className="bg-white px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="bess-quality-safety-title"
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
            Quality &amp; Safety at Every Station
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="bess-quality-safety-title"
          >
            Quality Checked. Safety Enforced. Every Station.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-[18px] max-w-[900px] text-base leading-[1.75] text-[#526272]"
          >
            Quality and safety are not post-production audits. They are built
            into the line at every critical station.
          </motion.p>
        </header>

        <div className="grid items-start gap-5 lg:grid-cols-2 lg:gap-6">
          {controlGroups.map((group, index) => (
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="rounded-xl border border-[#dce7ee] bg-[#f5f9fc] p-6 sm:p-7"
              key={group.title}
            >
              <h3 className="text-base font-bold leading-[1.5] text-primary sm:text-lg">
                {group.title}
              </h3>
              <ol className="mt-4 grid gap-2.5">
                {group.points.map((point, pointIndex) => (
                  <li
                    className="flex items-start gap-3 text-sm leading-[1.7] text-[#526272]"
                    key={point}
                  >
                    <span
                      className="min-w-5 pt-px text-right font-bold tabular-nums text-primary"
                      aria-hidden="true"
                    >
                      {pointIndex + 1}.
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
