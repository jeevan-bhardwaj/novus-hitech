"use client";

import { motion } from "framer-motion";

const testingSystems = [
  {
    model: "GTC",
    name: "Cell Testing System",
    image: "/images/cell-testing-system.jpg",
    imageAlt: "GTC battery cell testing system",
    description:
      "Laboratory and production-line battery cell testing, including charge/discharge testing with an integrated temperature chamber.",
    specifications: ["0–6 V · 0–5,000 A"],
    optionalFeature: undefined,
  },
  {
    model: "GTB",
    name: "Module/Pack Testing System",
    image: "/images/pack-testing-system.webp",
    imageAlt: "GTB battery module and pack testing system",
    description:
      "Testing solutions for modules and packs across battery-powered equipment, vehicles and energy storage applications.",
    specifications: ["0–200 V · 0.03–1,000 A", "0–500 V · 0.15–2,100 A"],
    optionalFeature: undefined,
  },
  {
    model: "GTA",
    name: "Pack EOL Testing System",
    image: "/images/pack-eol-testing-system.webp",
    imageAlt: "GTA battery pack end-of-line testing system",
    description:
      "End-of-line testing for commercial and industrial energy storage, large energy storage batteries and battery clusters.",
    specifications: ["0–1,650 V · 0.075–1,200 A"],
    optionalFeature: "Air-tightness testing optional",
  },
];

export default function BessTestingTraceability() {
  return (
    <section
      className="bg-white px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
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
            Testing &amp; Traceability
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="bess-testing-title"
          >
            High-Precision Testing. From Cell to Pack.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-[18px] max-w-[900px] text-base leading-[1.75] text-[#526272]"
          >
            Testing systems for battery cells, modules and packs—from
            laboratory and production-line testing to pack end-of-line
            verification.
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
              className="rounded-xl border border-[#cfe2ef] bg-[#eaf4fb] p-6 shadow-[0_12px_30px_rgba(8,31,58,0.06)] sm:p-7"
              key={system.name}
            >
              <div className="mb-5 flex aspect-[16/10] w-full items-center justify-center rounded-lg bg-white p-3">
                <img
                  className="h-full w-full rounded-lg object-contain"
                  src={system.image}
                  alt={system.imageAlt}
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold leading-[1.4] text-primary">
                <span>{system.model}</span>
                <span className="mx-2 text-[#91a8b9]">|</span>
                <span>{system.name}</span>
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-[#526272]">
                {system.description}
              </p>
              <ul className="mt-5 space-y-2">
                {system.specifications.map((specification) => (
                  <li
                    className="rounded-lg bg-white px-3 py-2 text-sm font-semibold leading-[1.5] text-secondary"
                    key={specification}
                  >
                    {specification}
                  </li>
                ))}
              </ul>
              {system.optionalFeature && (
                <p className="mt-3 text-xs font-semibold text-primary">
                  {system.optionalFeature}
                </p>
              )}
            </motion.article>
          ))}
        </div>

        <p className="mt-6 text-center text-sm font-semibold leading-[1.7] text-[#526272]">
          Connect testing and production records to support quality checks and
          traceability across the configured line.
        </p>
      </div>
    </section>
  );
}
