import { BatteryCharging, Boxes, PanelsTopLeft } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Ingot & Wafer",
    description:
      "Cz pulling. Diamond-wire slicing to 160–180 microns. AGV material movement, global process equipment and Novus automation.",
    icon: Boxes,
    href: "#ingot-wafer",
    linkLabel: "Explore Ingot & Wafer",
  },
  {
    number: "02",
    title: "Cell Production",
    description:
      "Full TOPCon-ready 14-step process flow with Novus Carry Solar Cell 500 AMRs moving cassettes between stations.",
    icon: BatteryCharging,
    href: "#cell",
    linkLabel: "Explore Cell Production",
  },
  {
    number: "03",
    title: "Module Production",
    description:
      "Fully automatic robotic 15-machine line: glass in, tested panel out.",
    icon: PanelsTopLeft,
    href: "#module",
    linkLabel: "Explore Module Production",
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
            What we deliver
          </p>
          <h2
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="solar-pv-scope-title"
          >
            End-to-End Turnkey Solutions Across the Solar PV Value Chain.
          </h2>
          <p className="mx-auto mt-[18px] max-w-[760px] text-base leading-[1.75] text-[#526272]">
            One partner across the full production sequence. Global process
            equipment is integrated with Novus robotics for autonomous
            material movement and Novus MES for real-time visibility and
            PLI-ready traceability.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-3">
          {stages.map(({ number, title, description, icon: Icon, href, linkLabel }) => (
            <article
              className="flex flex-col rounded-2xl border border-[#dce7ee] bg-white p-6 shadow-[0_10px_26px_rgba(8,31,58,0.05)] sm:p-7"
              key={number}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf4fb] text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold tracking-[0.14em] text-[#92a2af]">
                  {number}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-bold tracking-[-0.02em] text-secondary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-[#526272]">
                {description}
              </p>
              <a
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-[#1a689e]"
                href={href}
              >
                {linkLabel}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 rounded-xl border border-[#cfe2ef] bg-white px-5 py-4 text-center text-sm leading-[1.7] text-[#526272]">
          <span className="font-bold text-secondary">Novus MES</span> connects
          every stage. One data spine from ingot to finished module, with PLI
          and ALMM compliance built in.
        </p>
      </div>
    </section>
  );
}
