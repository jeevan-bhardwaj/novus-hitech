import { Activity, PackageCheck, ShieldCheck } from "lucide-react";

const whyItMatters = [
  {
    title: "Fewer micro-cracks",
    description: "Vibration-free transfers protect fragile 160-micron wafers.",
    icon: ShieldCheck,
  },
  {
    title: "Steady cadence",
    description: "AMRs hold inter-station timing across every shift.",
    icon: Activity,
  },
  {
    title: "Zero corner chips",
    description: "AGVs replace manual forklifts for finished modules.",
    icon: PackageCheck,
  },
];

export default function SolarPvWhyItMatters() {
  return (
    <section
      className="relative overflow-hidden bg-white px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,96px)]"
      id="why-it-matters"
      aria-labelledby="why-it-matters-title"
    >
      <div className="relative mx-auto w-full max-w-[1240px]">
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

        <div className="grid gap-6 sm:grid-cols-3">
          {whyItMatters.map(({ title, description, icon: Icon }) => (
            <article
              className="group relative flex flex-col rounded-2xl border border-[#dce7ee] bg-white p-7 shadow-[0_8px_24px_rgba(8,31,58,0.035)] transition duration-200 hover:-translate-y-1 hover:border-[#b9d8eb] hover:shadow-[0_16px_34px_rgba(8,31,58,0.08)]"
              key={title}
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf4fb] text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
              </div>

              {/* Text Details */}
              <h3 className="text-[22px] font-bold tracking-[-0.02em] text-secondary">
                {title}
              </h3>
              <p className="mt-2.5 text-[16px] leading-[1.5] text-[#526272]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}