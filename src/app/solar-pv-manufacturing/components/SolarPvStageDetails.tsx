const whyItMatters = [
  {
    title: "Fewer micro-cracks",
    description: "Vibration-free transfers protect fragile 160-micron wafers.",
  },
  {
    title: "Steady cadence",
    description: "AMRs hold inter-station timing across every shift.",
  },
  {
    title: "Zero corner chips",
    description: "AGVs replace manual forklifts for finished modules.",
  },
];

export default function SolarPvWhyItMatters() {
  return (
    <section
      className="bg-white px-5 pt-16 pb-10 text-secondary sm:px-6 sm:pt-[clamp(64px,8vw,104px)] sm:pb-12"
      id="why-it-matters"
      aria-labelledby="why-it-matters-title"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mx-auto mb-10 max-w-[850px] text-center sm:mb-12">
          <p className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:bg-current before:content-[''] after:h-px after:w-3 after:bg-current after:content-['']">
            STOP YIELD LEAKS
          </p>
          <h2
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em]"
            id="why-it-matters-title"
          >
            Robots inside the line, not beside it
          </h2>
        </header>

        <div className="grid gap-4 sm:grid-cols-3">
          {whyItMatters.map(({ title, description }) => (
            <article
              className="flex flex-col rounded-2xl border border-[#dce7ee] bg-[#f5f9fc] p-6 sm:p-7"
              key={title}
            >
              <h3 className="text-lg font-bold tracking-[-0.02em] text-secondary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-[#526272]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}