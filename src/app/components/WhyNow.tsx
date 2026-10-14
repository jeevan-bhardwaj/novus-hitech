const marketMetrics = [
  {
    value: "132.85 GW",
    description:
      "Solar installed capacity, India, Nov 2025. Up 41% year on year. India is now third globally.",
  },
  {
    value: "500 GW",
    description:
      "Renewable target by 2030. MNRE national target, with solar at the core.",
  },
  {
    value: "236 GWh",
    description:
      "BESS capacity required by 2032. Against 8.6 GW today. Source: CEA, 2023.",
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
        <header className="mx-auto mb-[42px] max-w-[850px] text-center">
          <p className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']">Why Now</p>
          <h2 className="text-[clamp(32px,4vw,40px)] font-bold leading-[44px] tracking-[-0.8px] text-white" id="why-now-title">
            The window is open. commissioning takes 12 to 18 months.
          </h2>
          <p className="mx-auto mt-[18px] max-w-[760px] text-base leading-[1.75] text-white/80">
            PLI incentives are time-bound. Manufacturers who secure their line
            partner and begin engineering now are the ones producing when the
            incentives pay out. Those who wait miss the window.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {marketMetrics.map((metric) => (
            <article className="min-h-[190px] rounded-xl border border-white/15 bg-white/[0.06] p-7 shadow-[0_12px_30px_rgba(0,0,0,0.12)]" key={metric.value}>
              <p className="text-[clamp(34px,4.2vw,52px)] font-bold leading-none tracking-[-0.045em] text-white">{metric.value}</p>
              <p className="mt-5 max-w-[320px] text-sm leading-[1.7] text-white/75">{metric.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
