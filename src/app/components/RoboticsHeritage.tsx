"use client";

import { motion } from "framer-motion";

const researchStats = [
  { value: "150+", label: "Patents" },
  { value: "1,000+", label: "Man-Years R&D" },
  { value: "300+", label: "Engineers" },
  { value: "70+", label: "Postgraduate" },
  { value: "5+", label: "Doctoral" },
];

export default function RoboticsHeritage() {
  return (
    <section
      className="relative isolate overflow-hidden bg-secondary px-5 py-16 text-white sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="robotics-heritage-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <img
          className="h-full w-full object-cover object-center"
          src="/images/robotics-background.jpg"
          alt=""
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b2d4c]/80 via-secondary/70 to-secondary/85" />
      </div>
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mx-auto max-w-[850px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-[#55b4ed] before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']">Your Partner for the Build-Out</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[44px] tracking-[-0.8px] text-white"
            id="robotics-heritage-title"
          >
            We came from robotics.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-[22px] grid max-w-[800px] gap-3.5 text-base leading-[1.8] text-white/80">
            <p>
              Founded by a Carnegie Mellon roboticist who co-authored India&apos;s
              National AI Vision, Novus has built and deployed autonomous
              systems since the DARPA Grand Challenge and NASA Mars era.
            </p>
            <p>
              Novus did not come to solar and BESS from process engineering.
              Novus came from robotics. 20+ years of autonomous systems
              engineering, brought into every turnkey line we deliver. The only
              Indian partner integrating native robotics into your solar and
              BESS production flow.
            </p>
          </motion.div>
        </div>

        <dl className="mt-12 grid grid-cols-2 border-y border-white/20 sm:grid-cols-3 lg:grid-cols-5">
          {researchStats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              className="flex min-h-[132px] flex-col items-center justify-center gap-2.5 border-t border-white/20 px-3 py-5 text-center first:border-t-0 last:col-span-2 sm:border-t-0 sm:last:col-span-1 sm:[&:nth-child(n+4)]:border-t lg:border-t-0 lg:border-l lg:first:border-l-0 lg:[&:nth-child(n+4)]:border-t-0" key={stat.label}>
              <dt className="text-[clamp(30px,3.5vw,42px)] font-bold leading-none tracking-[-0.04em] text-white">{stat.value}</dt>
              <dd className="text-[15px] font-semibold tracking-[0.04em] text-white/75">{stat.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
