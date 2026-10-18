"use client";

import { motion } from "framer-motion";

const marketMetrics = [
  {
    value: "132.85 GW",
    description:
      "Solar installed in India, Nov 2025. Source: MNRE",
    image: "/images/why-now/solar-installed-capacity.jpg",
    imageAlt: "Solar panels contributing to India's installed capacity",
  },
  {
    value: "500 GW",
    description:
      "Non-fossil capacity target by 2030. Source: MNRE",
    image: "/images/why-now/renewable-energy-target.jpg",
    imageAlt: "Renewable energy infrastructure behind India's 2030 target",
  },
  {
    value: "236 GWh",
    description:
      "Storage India needs by 2031-32. Source: CEA",
    image: "/images/why-now/battery-energy-storage.jpg",
    imageAlt: "Battery energy storage systems for grid-scale capacity",
  },
];

export default function WhyNow() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0b2d4c] via-secondary to-[#06172b] px-5 py-16 text-white sm:px-6 sm:py-[clamp(64px,8vw,104px)]" aria-labelledby="why-now-title">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(33,126,190,0.22), transparent 62%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1240px]">
        <header className="mx-auto mb-[42px] max-w-[750px] text-center">
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']">Why Now</motion.p>
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[44px] tracking-[-0.8px] text-white" id="why-now-title">
            Projects take 12 to 18 months. Your line takes 16 to 20 weeks.
          </motion.h2>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-[18px] max-w-[760px] text-base leading-[1.75] text-white/80">
            PLI incentives are time-bound. Lock your line partner now and you are producing when demand peaks.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {marketMetrics.map((metric, index) => (
            <motion.article
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)]" key={metric.value}>
              <div className="overflow-hidden rounded-xl bg-[#0b2d4c]">
                <img
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  src={metric.image}
                  alt={metric.imageAlt}
                  loading="lazy"
                />
              </div>
              <div className="px-3 pb-4 pt-5 sm:px-4">
                <p className="text-[clamp(28px,3vw,38px)] font-bold leading-none tracking-[-0.045em] text-secondary">{metric.value}</p>
                <p className="mt-3.5 text-sm leading-[1.7] text-[#5a6875]">{metric.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
