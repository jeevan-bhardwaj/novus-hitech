import { BatteryCharging, Boxes, PanelsTopLeft } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Ingot & Wafer",
    description:
      "Cz pulling, diamond-wire slicing and automated material movement between processing stages.",
    icon: Boxes,
    image: "/images/Ingot-Wafer.png",
    imageAlt: "Ingot and wafer manufacturing equipment",
    href: "#ingot-wafer",
    linkLabel: "Explore Ingot & Wafer",
  },
  {
    number: "02",
    title: "TOPCon Cell",
    description:
      "A 14-step TOPCon-ready line. 500 kg AMRs move cassettes between stations with no human handling.",
    icon: BatteryCharging,
    image: "/images/cell.png",
    imageAlt: "TOPCon solar cell production equipment",
    href: "#cell",
    linkLabel: "Explore TOPCon Cell",
  },
  {
    number: "03",
    title: "Module",
    description:
      "A 15-machine sequential production flow, from glass input through tested module output",
    icon: PanelsTopLeft,
    image: "/images/Cell-Solar-PV.png",
    imageAlt: "Solar PV module production line",
    href: "#module",
    linkLabel: "Explore Module",
  },
];

export default function SolarPvLineScope() {
  return (
    <section
      className="bg-[#f5f9fc] px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      id="solar-pv-scope"
      aria-labelledby="solar-pv-scope-title"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mx-auto mb-10 max-w-[850px] text-center sm:mb-12">
          <p className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:bg-current before:content-[''] after:h-px after:w-3 after:bg-current after:content-['']">
            WHAT WE DELIVER
          </p>
          <h2
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="solar-pv-scope-title"
          >
            One partner from ingot to module
          </h2>
        </header>

        <div className="grid gap-8">
          {stages.map(({ number, title, description, image, imageAlt }) => {
            return (
              <article
                className="grid overflow-hidden rounded-2xl border border-[#dce7ee] bg-white shadow-[0_10px_26px_rgba(8,31,58,0.05)]"
                key={number}
              >
                {/* Text Content Block (Top & Center Aligned with reduced bottom padding) */}
                <div className="flex flex-col items-center text-center px-6 pt-6 pb-2 sm:px-10 sm:pt-8 sm:pb-2">
                  {/* <span className="text-sm font-bold tracking-wider text-primary">
                    {number}
                  </span> */}
                  <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-secondary sm:text-3xl">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-[750px] text-sm leading-[1.75] text-[#526272] sm:text-base">
                    {description}
                  </p>
                </div>

                {/* Full Width Image Block with reduced top padding */}
                <div className="w-full bg-white px-4 pb-4 pt-0 sm:px-6 sm:pb-6 lg:px-8">
                  <img
                    className="block h-auto max-h-[520px] w-full rounded-xl object-contain mx-auto"
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                  />
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 rounded-xl border border-[#cfe2ef] bg-white px-5 py-4 text-center text-sm leading-[1.7] text-[#526272]">
          <span className="font-bold text-secondary">Novus MES</span> connects
          every stage. One data spine from ingot to finished module.
        </p>
      </div>
    </section>
  );
}