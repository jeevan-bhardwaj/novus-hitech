"use client";

import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    name: "Cell Receiving & Grading",
    description:
      "Cell inspection, capacity and internal-resistance grading, and controlled storage.",
  },
  {
    number: "02",
    name: "Module Assembly",
    description:
      "Prismatic LFP cell stacking, busbar welding, BMS integration and checks.",
  },
  {
    number: "03",
    name: "Pack & Rack Integration",
    description:
      "Module-to-rack assembly, cooling plate fit-out and rack-level BMS wiring.",
  },
  {
    number: "04",
    name: "Container Integration",
    description:
      "Integration of tested packs, cooling, HVAC and fire suppression into the container.",
  },
  {
    number: "05",
    name: "EOL Testing",
    description:
      "In-line cooling, leak, weld and electrical safety checks before dispatch.",
  },
  {
    number: "06",
    name: "Dispatch",
    description:
      "Serial-level traceability, compliance records, container staging and loading.",
  },
];

export default function BessLineCoverage() {
  return (
    <section
      className="bg-[#f5f9fc] px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="bess-line-coverage-title"
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
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-[18px] max-w-[820px] text-base leading-[1.75] text-[#526272]"
          >
            From cell receiving and grading to finished container dispatch,
            both halls operate under one accountable line partner.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="overflow-hidden rounded-xl border border-[#dce7ee] bg-white shadow-[0_12px_30px_rgba(8,31,58,0.06)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead className="bg-[#eaf4fb] text-secondary">
                <tr>
                  <th className="w-[12%] border-b border-r border-[#dce7ee] px-4 py-3 font-bold">
                    Stage
                  </th>
                  <th className="w-[32%] border-b border-r border-[#dce7ee] px-4 py-3 font-bold">
                    Name
                  </th>
                  <th className="border-b border-[#dce7ee] px-4 py-3 font-bold">
                    What happens
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5edf3]">
                {stages.map((stage) => (
                  <tr className="align-top" key={stage.number}>
                    <td className="border-r border-[#e5edf3] px-4 py-3 font-bold text-primary">
                      {stage.number}
                    </td>
                    <th
                      scope="row"
                      className="border-r border-[#e5edf3] px-4 py-3 font-semibold text-secondary"
                    >
                      {stage.name}
                    </th>
                    <td className="px-4 py-3 leading-[1.65] text-[#526272]">
                      {stage.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="mt-5 text-sm italic leading-[1.7] text-[#526272]">
          <span className="font-semibold not-italic text-secondary">
            Architecture:
          </span>{" "}
          Hall A: Pack Assembly <span aria-hidden="true">|</span>{" "}
          Hall B: Container Assembly
        </p>
        <p className="mt-2 text-sm leading-[1.7] text-[#526272]">
          Most vendors deliver one hall. Novus delivers both. Scales from 50
          MWh to 500+ MWh per year.
        </p>
      </div>
    </section>
  );
}
