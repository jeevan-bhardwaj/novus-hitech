const reasons = [
  {
    title: "Right chemistry",
    description:
      "Built for prismatic LFP, not pouch NMC. No failures surfacing in year three.",
  },
  {
    title: "Right quality gates",
    description:
      "Cooling plate, leak test and weld checks run in-line, not after.",
  },
  {
    title: "Compliance from pack one",
    description:
      "IEC 62619, ALMM and UN 38.3 built into the line. Your PLI claim depends on it.",
  },
];

export default function BessWhyNow() {
  return (
    <section className="bg-white px-5 py-14 text-secondary sm:px-6 sm:py-16" aria-labelledby="bess-why-now-title">
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mx-auto mb-8 max-w-[900px] text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            The decision most BESS makers get wrong
          </p>
          <h2 className="text-[clamp(30px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em]" id="bess-why-now-title">
            A storage pack must last 20 years. An EV line was not built for that.
          </h2>
        </header>
        <div className="relative mb-5 h-[220px] overflow-hidden rounded-2xl sm:h-[300px]">
          <img
            className="h-full w-full object-cover"
            src="/images/production/battery-energy-storage.jpg"
            alt="Prismatic battery packs on an automated energy storage assembly line"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06172b]/70 to-transparent" aria-hidden="true" />
          <p className="absolute bottom-5 left-5 max-w-lg text-xl font-bold text-white sm:bottom-8 sm:left-8 sm:text-2xl">
            Built for grid storage from cell to container.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {reasons.map(({ title, description }) => (
            <article className="rounded-xl border border-[#dce7ee] bg-[#f5f9fc] p-5 sm:p-6" key={title}>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-[#526272]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
