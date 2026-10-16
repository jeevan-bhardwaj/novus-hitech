import { ArrowUpRight, BrainCircuit, Lightbulb, Recycle } from "lucide-react";

const statements = [
  {
    title: "Our Vision",
    description:
      "Lead a new industrial revolution through intelligent robotics for physical operations.",
    image: "/images/about/renewable energy.jpg",
    imageAlt: "Illustration of renewable energy powering sustainable communities",
    eyebrow: "A smarter, cleaner future",
    number: "01",
  },
  {
    title: "Our Mission",
    description:
      "Drive growth in clean energy and high-tech sectors through smart manufacturing and robotics.",
    image: "/images/about/manufacturing-capacity.webp",
    imageAlt: "Robotic equipment and people working on a manufacturing line",
    eyebrow: "Engineering progress on the factory floor",
    number: "02",
  },
];

const values = [
  {
    title: "Intelligence",
    description: "Smart technology for complex industrial operations.",
    icon: BrainCircuit,
  },
  {
    title: "Sustainability",
    description: "Building capability for a cleaner energy future.",
    icon: Recycle,
  },
  {
    title: "Innovation",
    description: "Continuously advancing how manufacturing works.",
    icon: Lightbulb,
  },
];

export default function VisionMissionSection() {
  return (
    <section
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="vision-mission-title"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mb-9 max-w-[720px] sm:mb-12">
          <p className="mb-4 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-7 bg-current" aria-hidden="true" />
            What guides us
          </p>
          <h2
            className="text-[clamp(32px,4vw,42px)] font-bold leading-[1.12] tracking-[-0.04em] text-secondary"
            id="vision-mission-title"
          >
            A clear purpose. A better way forward.
          </h2>
          <p className="mt-4 max-w-[620px] text-base leading-[1.75] text-[#64727d]">
            Our vision and mission shape how we bring technology, people and
            manufacturing together for the next era of industry.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-7">
          {statements.map((statement) => (
            <article
              className="group relative isolate flex min-h-[340px] flex-col justify-end overflow-hidden rounded-2xl bg-[#081f3a] p-6 text-white shadow-[0_14px_36px_rgba(8,31,58,0.14)] sm:p-8"
              key={statement.title}
            >
              <img
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                src={statement.image}
                alt={statement.imageAlt}
                loading="lazy"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06172b]/95 via-[#081f3a]/55 to-[#081f3a]/10" />
              <span className="absolute right-6 top-6 text-sm font-bold tracking-[0.16em] text-white/75 sm:right-8 sm:top-8">
                {statement.number}
              </span>
              <div className="max-w-[500px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9fd4f5] sm:text-[11px]">
                  {statement.eyebrow}
                </p>
                <h3 className="mt-3 text-[28px] font-bold leading-tight tracking-[-0.03em] sm:text-[34px]">
                  {statement.title}
                </h3>
                <p className="mt-3 max-w-[460px] text-sm leading-[1.75] text-white/85 sm:text-base">
                  {statement.description}
                </p>
                <ArrowUpRight
                  className="mt-6 h-5 w-5 text-[#9fd4f5] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 rounded-2xl border border-[#dce7ee] bg-[#f5f9fc] p-6 sm:grid-cols-3 sm:gap-7 sm:p-8">
          {values.map(({ title, description, icon: Icon }) => (
            <article className="flex items-start gap-4" key={title}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-secondary">{title}</h3>
                <p className="mt-1.5 text-sm leading-[1.6] text-[#64727d]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
