"use client";

import { motion } from "framer-motion";

const supportStages = [
  {
    title: "Delivery",
    description:
      "Approximately 16 to 20 weeks from confirmed PO and advance payment.",
  },
  {
    title: "Installation & Commissioning",
    description:
      "On-site by Novus engineers. Included in the commercial offer. Full support through site acceptance testing.",
  },
  {
    title: "Training",
    description:
      "4-day programme covering operations and maintenance. Your team runs the line independently from day one.",
  },
  {
    title: "Warranty & Post-Warranty",
    description:
      "12 months from SAT or 15 months from delivery, whichever is earlier. Free replacement of parts with manufacturing defects. Spares, service, and AMC on paid basis. Novus service team is India-based for the life of your line.",
  },
];

export default function BessDeliverySupport() {
  return (
    <section
      className="bg-[#eaf4fb] px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="bess-delivery-support-title"
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
            Delivery, Warranty &amp; Support
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="bess-delivery-support-title"
          >
            Commissioned. Trained. Supported. Always.
          </motion.h2>
        </header>

        <ul className="grid gap-4 md:grid-cols-2">
          {supportStages.map((stage, index) => (
            <motion.li
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="flex items-start gap-4 rounded-xl border border-[#cfe2ef] bg-white p-6 shadow-[0_12px_30px_rgba(8,31,58,0.045)] sm:p-7"
              key={stage.title}
            >
              <span
                className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-base font-bold leading-[1.5] text-secondary sm:text-lg">
                  {stage.title}
                </h3>
                <p className="mt-1.5 text-sm leading-[1.7] text-[#526272]">
                  {stage.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
