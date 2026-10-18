"use client";

import { motion } from "framer-motion";

const productionLines = [
  {
    eyebrow: "SECTION ONE",
    title: "Solar PV Manufacturing",
    tagline: "Ingot to module. One line. One partner.",
    description:
      "TOPCon-ready cell lines, a 15-machine automatic module line, Novus Carry AMRs inside the line.",
    image: "/images/production/solar-pv-manufacturing.webp",
    imageAlt: "Robotic equipment on a solar PV module production line",
    href: "/solar-pv-manufacturing",
    linkText: "Explore Solar PV Manufacturing",
  },
  {
    eyebrow: "SECTION TWO",
    title: "Battery Energy Storage Systems",
    tagline: "Cell to shipped pack. One line. One partner.",
    description:
      "Six stages across two halls, built for 20-year grid storage, not adapted from EV.",
    image: "/images/production/battery-energy-storage.jpg",
    imageAlt: "Battery packs assembled along an energy storage production line",
    href: "/bess",
    linkText: "Explore BESS Manufacturing",
  },
];

export default function ProductionLines() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 sm:py-[clamp(64px,8vw,112px)]" aria-labelledby="production-lines-title">
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mx-auto mb-10 max-w-[820px] text-center sm:mb-12">
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']"
          >
            What We Deliver
          </motion.p>
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45 }}
            className="text-[clamp(32px,4vw,42px)] font-bold leading-[1.12] tracking-[-0.035em] text-secondary"
            id="production-lines-title"
          >
            Two production lines. One contract.
          </motion.h2>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="mx-auto mt-4 max-w-[760px] text-base leading-[1.75] text-[#5a6875]"
          >
             Process equipment from global technology leaders. Robotics and MES from Novus. Commissioned and serviced by India-based engineers.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {productionLines.map((line, index) => (
            <motion.article
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#dce7ee] bg-white shadow-[0_10px_30px_rgba(8,31,58,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(8,31,58,0.12)]" key={line.title}>
              <div className="relative h-[clamp(210px,27vw,290px)] overflow-hidden bg-[#0b2d4c] after:absolute after:inset-x-0 after:bottom-0 after:top-1/3 after:bg-gradient-to-b after:from-transparent after:to-[#081F3A]/80 after:content-['']">
                <img className="block h-full w-full object-cover object-center transition-transform duration-[400ms] group-hover:scale-[1.04]" src={line.image} alt={line.imageAlt} loading="lazy" />
                {/* <span className="absolute left-5 top-5 z-[1] rounded-full border border-white/30 bg-[#081F3A]/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">{line.eyebrow}</span> */}
              </div>
              <div className="flex flex-1 flex-col items-start px-6 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-7">
                <h3 className="text-[clamp(22px,2.3vw,28px)] font-bold leading-[1.2] tracking-[-0.025em] text-secondary">{line.title}</h3>
                <p className="mt-2.5 text-[15px] font-semibold leading-normal text-primary">{line.tagline}</p>
                <p className="mt-3.5 text-sm leading-[1.75] text-[#5a6875]">
                  {line.description}
                </p>
                <a className="mt-6 inline-flex min-h-11 items-center justify-center gap-2.5 whitespace-nowrap rounded-[4px] bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.04em] text-white transition-all duration-200 hover:bg-[#1a689e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" href={line.href}>
                  {line.linkText}
                  <svg className="h-[18px] w-[18px] fill-none stroke-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M4 10h11m-4-4 4 4-4 4" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.aside
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="mt-7 rounded-2xl border border-[#dce7ee] bg-[#f5f9fc] p-6 shadow-[0_8px_24px_rgba(8,31,58,0.04)] sm:p-8">
          <p className="mx-auto max-w-[1050px] text-center text-sm leading-[1.75] text-[#526272] sm:text-base">
            Every line ships with Novus MES. Real-time visibility, full traceability, PLI and ALMM documentation built in.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
