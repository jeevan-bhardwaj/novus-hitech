"use client";

import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    name: "Cell Receiving & Grading",
    description:
      "Incoming LFP/NMC inspection. Capacity and IR sorting. Climate-controlled dry-zone storage.",
  },
  {
    number: "02",
    name: "Module Assembly",
    description:
      "Cell stacking in fixtures. Laser and busbar welding. BMS slave board integration and test.",
  },
  {
    number: "03",
    name: "Pack & Rack Integration",
    description:
      "Module-to-rack assembly. Thermal management fit-out. Rack-level BMS wiring.",
  },
  {
    number: "04",
    name: "Container Integration",
    description:
      "Container / cabinet fit-out. HVAC and liquid cooling loops. Fire suppression installation.",
  },
  {
    number: "05",
    name: "EOL Testing",
    description:
      "Grid-tied charge / discharge cycling. Insulation and hipot. IEC 62619 / UL 9540 checks.",
  },
  {
    number: "06",
    name: "Dispatch",
    description:
      "Serial-level MES record closure. UN 38.3 compliance. Container staging and loading.",
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
            What the BESS line covers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="bess-line-coverage-title"
          >
            Cell to Container. One Continuous BESS Line.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-[18px] max-w-[820px] text-base leading-[1.75] text-[#526272]"
          >
            Turnkey scope from incoming cell testing to finished container
            dispatch. One partner. One contract. One data thread across six
            stages and two connected halls.
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
          Hall A: Module &amp; Pack Assembly <span aria-hidden="true">|</span>{" "}
          Hall B: Container Integration
        </p>
      </div>
    </section>
  );
}
