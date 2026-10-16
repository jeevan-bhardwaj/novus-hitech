import {
  Activity,
  Bot,
  Boxes,
  ClipboardCheck,
  Database,
  Factory,
  ScanLine,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const handlingCapabilities = [
  {
    title: "Wafer carrier handling",
    description:
      "Vibration-conscious automated transfers help protect fragile 160-micron wafers from manual handling stress.",
    icon: Boxes,
  },
  {
    title: "Cell cassette handling",
    description:
      "Automated station-to-station transfers help maintain process cadence and reduce thermal queue delays.",
    icon: Factory,
  },
  {
    title: "Intra-factory logistics",
    description:
      "Move work-in-process and consumables while adapting to layout changes without civil retrofits.",
    icon: Bot,
  },
  {
    title: "Pallet handling to dispatch",
    description:
      "Fork-based AGV transport moves finished modules toward dispatch and reduces manual forklift handling.",
    icon: ScanLine,
  },
  {
    title: "Trolley and conveyor transfer",
    description:
      "Automated transfer helps remove manual trolleys from busy production routes.",
    icon: Activity,
  },
];

const mesSystems = [
  {
    acronym: "Drive & FMS",
    name: "Robotics-native fleet coordination",
    description:
      "Coordinates robot fleets to reduce bottlenecks and manual intervention.",
    icon: Bot,
  },
  {
    acronym: "MES",
    name: "Production visibility",
    description:
      "Connects shop-floor equipment and ERP for a single, real-time view of production.",
    icon: Database,
  },
  {
    acronym: "QMS",
    name: "Quality traceability",
    description:
      "Traces quality issues to stations and process records to support root-cause analysis.",
    icon: ClipboardCheck,
  },
  {
    acronym: "MCS",
    name: "Material flow",
    description:
      "Coordinates material movement to help prevent line stalls and logistics delays.",
    icon: Boxes,
  },
  {
    acronym: "EAP & FDC",
    name: "Equipment intelligence",
    description:
      "Collects equipment data to identify abnormal conditions and support process control.",
    icon: Activity,
  },
  {
    acronym: "EAM",
    name: "Asset maintenance",
    description:
      "Supports planned maintenance and asset lifecycle visibility.",
    icon: Wrench,
  },
];

export default function SolarPvIntegration() {
  return (
    <section
      className="bg-[#f5f9fc] px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="solar-pv-integration-title"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mx-auto mb-10 max-w-[900px] text-center sm:mb-12">
          <p className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:bg-current before:content-[''] after:h-px after:w-3 after:bg-current after:content-['']">
            Robotics &amp; software layer
          </p>
          <h2
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em]"
            id="solar-pv-integration-title"
          >
            A smarter line, from material movement to manufacturing data.
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-base leading-[1.75] text-[#526272]">
            The AMR and AGV fleet brings robotics-native material handling into
            the solar factory. Novus MES connects equipment, people, materials
            and production data, supporting real-time visibility and PLI-ready
            traceability.
          </p>
        </header>

        <div className="mb-10 overflow-hidden rounded-2xl bg-[#081f3a] shadow-[0_12px_30px_rgba(8,31,58,0.1)]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[220px] bg-[#081f3a] sm:min-h-[280px]">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/images/hero/novus-carry-amr.avif"
                alt="Novus Carry autonomous mobile robot for factory material movement"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06172b]/55 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#081f3a]/45" />
            </div>
            <div className="flex flex-col justify-center p-6 text-white sm:p-8 lg:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9fd4f5]">
                Stop yield leaks
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-[30px]">
                Robotics-Native Material Handling.
              </h3>
              <p className="mt-3 max-w-[600px] text-sm leading-[1.7] text-white/75">
                The same AMR and AGV fleet proven in 1,400+ deployments, now
                engineered to move material through your solar line.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {handlingCapabilities.map(({ title, description, icon: Icon }) => (
            <article
              className="rounded-xl border border-[#dce7ee] bg-white p-5 shadow-[0_8px_22px_rgba(8,31,58,0.035)] sm:p-6"
              key={title}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf4fb] text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold text-secondary">{title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-[#64727d]">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.7fr)] md:items-end md:gap-10">
            <div>
              <p className="mb-3.5 inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:bg-current before:content-['']">
                The software layer
              </p>
              <h3 className="text-[clamp(28px,3.5vw,36px)] font-bold leading-[1.12] tracking-[-0.035em]">
                Digital Factory Intelligence, Built Into Your Solar Line.
              </h3>
            </div>
            <p className="text-sm leading-[1.75] text-[#64727d]">
              Novus MES connects equipment, people, materials and data in one
              production system—supporting real-time visibility and traceable
              manufacturing records.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mesSystems.map(({ acronym, name, description, icon: Icon }) => (
              <article
                className="rounded-xl border border-[#dce7ee] bg-white p-5 sm:p-6"
                key={acronym}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf4fb] text-primary">
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="rounded-full bg-[#f5f9fc] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-primary">
                    {acronym}
                  </span>
                </div>
                <h4 className="mt-4 text-sm font-bold text-secondary">{name}</h4>
                <p className="mt-2 text-sm leading-[1.65] text-[#64727d]">
                  {description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-5 flex items-start gap-3 rounded-xl border border-[#cfe2ef] bg-white p-5 text-sm leading-[1.7] text-[#526272]">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            Novus MES provides one data spine across the line, with PLI-ready
            traceability and production records.
          </p>
        </div>
      </div>
    </section>
  );
}
