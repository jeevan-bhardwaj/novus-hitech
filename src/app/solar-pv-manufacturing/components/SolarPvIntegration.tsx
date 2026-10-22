import { GraduationCap, Settings2, ShieldCheck, Truck } from "lucide-react";

const inclusions = [
  {
    text: "Delivery in 16 to 20 weeks from confirmed PO",
    icon: Truck,
  },
  {
    text: "On-site installation and commissioning through site acceptance testing",
    icon: Settings2,
  },
  {
    text: "4-day operations and maintenance training",
    icon: GraduationCap,
  },
  {
    text: "Warranty of 12 months from SAT or 15 months from delivery, then pan-India service",
    icon: ShieldCheck,
  },
];

export default function SolarPvWhatsIncluded() {
  return (
    <section
      className="bg-[#081f3a] px-5 py-16 sm:px-6 sm:py-[clamp(64px,8vw,96px)]"
      id="whats-included"
      aria-labelledby="whats-included-title"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        {/* Centered Top Eyebrow & Header */}
        <header className="mx-auto mb-10 max-w-[850px] text-center sm:mb-14">
          <p className="mb-3 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-[#38bdf8] before:h-px before:w-3 before:bg-current before:content-[''] after:h-px after:w-3 after:bg-current after:content-['']">
            WHAT'S INCLUDED
          </p>
          <h2
            className="text-[clamp(32px,4vw,42px)] font-bold leading-[1.1] tracking-[-0.035em] text-white"
            id="whats-included-title"
          >
            Commissioned. Trained. Supported.
          </h2>
        </header>

        {/* 2-Column Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          
          {/* Left Column: Image */}
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0f2a4a] shadow-2xl lg:col-span-5">
            <div className="relative h-[320px] w-full sm:h-[400px] lg:h-[480px]">
              <img
                src="/images/hero/solar-manufacturing.webp"
                alt="Novus robotic equipment on a solar module production line"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081f3a]/70 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Clean Cards without bottom border */}
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {inclusions.map(({ text, icon: Icon }) => (
                <li
                  key={text}
                  className="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-white p-4 sm:p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#38bdf8] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)]"
                >
                  {/* Icon Accent Box */}
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#e0f2fe] text-[#0284c7] transition-colors duration-200 group-hover:bg-[#0284c7] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  </span>

                  {/* Feature Text */}
                  <span className="text-sm font-semibold leading-snug text-[#0f172a] sm:text-[15px]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}