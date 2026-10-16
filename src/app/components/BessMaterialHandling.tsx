"use client";

import { motion } from "framer-motion";

const specifications = [
  { parameter: "Model", specification: "Novus AGV" },
  { parameter: "Payload capacity", specification: "10,000 kg" },
  {
    parameter: "Type",
    specification: "Automated Guided Vehicle (AGV)",
  },
  { parameter: "Guidance", specification: "Magnetic tape based" },
  {
    parameter: "Battery charging",
    specification: "On-ground opportunity charging",
  },
  { parameter: "Operation hours", specification: "One shift (8 hours)" },
];

export default function BessMaterialHandling() {
  return (
    <section
      className="bg-[#f5f9fc] px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="bess-material-handling-title"
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
            Stop Yield Leaks
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="bess-material-handling-title"
          >
            BESS-Grade Material Handling.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-[18px] max-w-[900px] text-base leading-[1.75] text-[#526272]"
          >
            The same AMR and AGV fleet proven in 1,400+ deployments, engineered
            for your BESS assembly line.
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
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead className="bg-[#eaf4fb] text-secondary">
                <tr>
                  <th
                    scope="col"
                    className="w-[35%] border-b border-r border-[#dce7ee] px-4 py-3 font-bold"
                  >
                    Parameter
                  </th>
                  <th
                    scope="col"
                    className="border-b border-[#dce7ee] px-4 py-3 font-bold"
                  >
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5edf3]">
                {specifications.map(({ parameter, specification }) => (
                  <tr className="align-top" key={parameter}>
                    <th
                      scope="row"
                      className="border-r border-[#e5edf3] px-4 py-3 font-semibold text-secondary"
                    >
                      {parameter}
                    </th>
                    <td className="px-4 py-3 leading-[1.65] text-[#526272]">
                      {specification}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
