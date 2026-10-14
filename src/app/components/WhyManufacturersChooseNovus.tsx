import {
  BadgeCheck,
  BrainCircuit,
  Cpu,
  Handshake,
  MapPinned,
  Network,
} from "lucide-react";

const pillars = [
  {
    title: "Robotics-Native Engineering",
    description:
      "20+ years of robotics, AI, and autonomous systems engineering powering smarter, more reliable manufacturing from day one.",
    Icon: BrainCircuit,
  },
  {
    title: "Pan-India Support",
    description:
      "When something goes wrong, your engineering partner is already here. Local experts, stocked spares, and faster response across India.",
    Icon: MapPinned,
  },
  {
    title: "World-Class Technology",
    description:
      "We integrate proven global process equipment under one turnkey contract. You get leading technology while we manage integration and commissioning.",
    Icon: Cpu,
  },
  {
    title: "One Contract Owner",
    description:
      "One partner responsible for engineering, automation, software, commissioning, and performance. No vendor coordination. No finger-pointing.",
    Icon: Handshake,
  },
  {
    title: "Intelligence Built In",
    description:
      "Novus MES connects equipment, materials, and production data into one intelligent platform with complete traceability and predictive insights.",
    Icon: Network,
  },
  {
    title: "Proven At Scale",
    description:
      "Two decades of industrial automation. 1,400+ deployed systems. 100+ enterprise customers. 150+ patents behind every solution.",
    Icon: BadgeCheck,
  },
];

export default function WhyManufacturersChooseNovus() {
  return (
    <section
      className="bg-[#f5f9fc] px-5 py-16 sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="why-choose-novus-title"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mb-[42px] text-center">
          <p className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']">Why Manufacturers Choose Novus</p>
          <h2 className="text-[clamp(32px,4vw,40px)] font-bold leading-[44px] tracking-[-0.8px] text-[#111]" id="why-choose-novus-title">
            Choose risk we own.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ title, description, Icon }, index) => (
            <article className="min-h-[250px] rounded-xl border border-border bg-white p-[26px] shadow-[0_8px_24px_rgba(8,31,58,0.045)] transition-all duration-200 hover:-translate-y-[3px] hover:border-primary/40 hover:shadow-[0_14px_30px_rgba(8,31,58,0.09)]" key={title}>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#8594a1]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#eaf4fb] text-primary" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
              </div>
              <h3 className="text-[19px] font-bold leading-[1.35] tracking-[-0.02em] text-secondary">{title}</h3>
              <p className="mt-[11px] text-sm leading-[1.7] text-[#5a6875]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
