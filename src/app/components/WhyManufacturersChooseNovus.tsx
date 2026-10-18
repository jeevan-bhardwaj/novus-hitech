"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Handshake, MapPinned } from "lucide-react";

const pillars = [
  {
    title: "Robotics-native",
    description:
      "Founded by a Carnegie Mellon roboticist. 20+ years of autonomous systems and 150+ patents, built into every line.",
    Icon: BrainCircuit,
  },
  {
    title: "One contract owner",
    description:
      "Equipment, robotics, software, commissioning and performance. One partner. No finger-pointing.",
    Icon: Handshake,
  },
  {
    title: "Serviced in India",
    description:
      "India-based engineers, stocked spares and 24x7 support for the life of the line.",
    Icon: MapPinned,
  },
];

export default function WhyManufacturersChooseNovus() {
  return (
    <section
      className="bg-[#fff] px-5 py-16 sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="why-choose-novus-title"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mb-[42px] text-center">
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']">Why Novus</motion.p>
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[44px] tracking-[-0.8px] text-[#111]" id="why-choose-novus-title">
            Why manufacturers choose Novus
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map(({ title, description, Icon }, index) => (
            <motion.article
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              className="min-h-[250px] rounded-xl border border-border bg-white p-[26px] shadow-[0_8px_24px_rgba(8,31,58,0.045)] transition-all duration-200 hover:-translate-y-[3px] hover:border-primary/40 hover:shadow-[0_14px_30px_rgba(8,31,58,0.09)]" key={title}>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#8594a1]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#eaf4fb] text-primary" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
              </div>
              <h3 className="text-[19px] font-bold leading-[1.35] tracking-[-0.02em] text-secondary">{title}</h3>
              <p className="mt-[11px] text-sm leading-[1.7] text-[#5a6875]">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
