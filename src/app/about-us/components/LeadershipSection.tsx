const leaders = [
  {
    name: "Anuj Kapuria",
    role: "Founder, CEO & CTO",
    description:
      "Founded Novus Hi-Tech and leads product and technology direction across Physical AI, AMR, and fleet safety.",
    image: "https://novushitech.com/wp-content/uploads/2024/02/Asset-16@2x.png",
  },
  {
    name: "Deep Kapuria",
    role: "Board of Directors",
    description:
      "Guides governance and long-range strategy across the group.",
    image: "https://novushitech.com/wp-content/uploads/2024/02/Asset-14@2x.png",
  },
  {
    name: "Pranav Kapuria",
    role: "Board of Directors",
    description:
      "Provides board oversight across growth, partnerships, and industrial strategy.",
    image: "https://novushitech.com/wp-content/uploads/2024/02/Asset-15@2x.png",
  },
  {
    name: "Ramesh C. Jain",
    role: "Executive Director",
    description: "Provides executive leadership across operations and delivery.",
    image: "https://novushitech.com/wp-content/uploads/2024/02/Asset-13@2x.png",
  },
];

export default function LeadershipSection() {
  return (
    <section
      className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="leadership-title"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mb-10 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.65fr)] md:items-end md:gap-10">
          <div>
            <p className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.2em]">
              <span className="h-px w-3 bg-current" aria-hidden="true" />
              Leadership
              <span className="h-px w-3 bg-current" aria-hidden="true" />
            </p>
            <h2
              className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
              id="leadership-title"
            >
              Builders behind the platform.
            </h2>
          </div>
          <p className="pb-1 text-sm leading-[1.7] text-[#52616c] sm:text-base">
            The team steering Physical AI, mobility, and fleet safety at Novus.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <article
              className="flex min-h-[300px] flex-col items-center rounded-2xl border border-[#dce7ee] bg-white px-5 py-7 text-center shadow-[0_8px_24px_rgba(8,31,58,0.04)]"
              key={leader.name}
            >
              <img
                className="h-[108px] w-[108px] rounded-full border-2 border-white bg-[#e5f1f6] object-cover object-top shadow-[0_4px_16px_rgba(8,31,58,0.12)]"
                src={leader.image}
                alt={leader.name}
                loading="lazy"
              />
              <h3 className="mt-5 text-lg font-bold leading-tight text-secondary">
                {leader.name}
              </h3>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                {leader.role}
              </p>
              <p className="mt-3 text-[13px] leading-[1.65] text-[#52616c]">
                {leader.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
