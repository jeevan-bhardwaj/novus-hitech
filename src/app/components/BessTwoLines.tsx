"use client";

import { motion } from "framer-motion";

const lineDetails = [
  {
    title: "Battery Module and Pack Assembly Line (Hall A)",
    points: [
      <>
        <span className="font-semibold text-secondary">Scope:</span> cell
        loading and cleaning through pack off-line.
      </>,
      <>
        <span className="font-semibold text-secondary">Applications:</span> EV
        batteries for passenger vehicles, commercial vehicles, and two-wheeled
        vehicles. Portable, residential, commercial &amp; industrial, and
        containerized energy storage.
      </>,
      <>
        <span className="font-semibold text-secondary">Automation:</span>{" "}
        configurable from semi-automated to fully automated.
      </>,
      <>
        <span className="font-semibold text-secondary">Throughput:</span> 50
        MWh per year to 500+ MWh per year.
      </>,
    ],
  },
  {
    title: "Energy Storage Container Assembly Line (Hall B)",
    points: [
      <>
        <span className="font-semibold text-secondary">Scope:</span> empty
        container online through finished product off-line.
      </>,
      <>
        <span className="font-semibold text-secondary">Key stages:</span>{" "}
        busbar cabinet and liquid cooling unit installation, cluster control
        box installation, liquid cooling pack installation, pack storage
        racking, automatic liquid injection, full water testing, safety testing
        and software loading, final inspection and labelling.
      </>,
    ],
  },
];

export default function BessTwoLines() {
  return (
    <section
      className="bg-white px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="bess-two-lines-title"
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
            The BESS assembly line
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="bess-two-lines-title"
          >
            One Accountable BESS Line Owner.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-[18px] max-w-[900px] text-base leading-[1.75] text-[#526272]"
          >
            A complete BESS manufacturing capability spans two distinct but
            connected lines. The pack assembly line takes cells and produces
            tested finished packs. The container assembly line takes those
            packs and produces a deployable storage system. Most vendors deliver
            one. Novus delivers both under one contract.
          </motion.p>
        </header>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {lineDetails.map((line, index) => (
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="rounded-xl border border-[#dce7ee] bg-[#f5f9fc] p-6 sm:p-7"
              key={line.title}
            >
              <h3 className="text-lg font-bold leading-[1.4] text-primary sm:text-xl">
                {line.title}
              </h3>
              <ul className="mt-4 grid gap-3">
                {line.points.map((point, pointIndex) => (
                  <li
                    className="flex items-start gap-3 text-sm leading-[1.7] text-[#526272]"
                    key={pointIndex}
                  >
                    <span
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
