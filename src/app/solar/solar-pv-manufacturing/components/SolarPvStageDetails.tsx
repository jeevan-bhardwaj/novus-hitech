const solarPvBrochureUrl =
  "https://solar.novushitech.com/wp-content/uploads/2026/04/New-Solar-Brochure-Final-V4-for-Web.pdf";

const cellProcess = [
  "Texture",
  "Primary B Diffusion",
  "Secondary B Diffusion",
  "BSG Removal + Alkali Polishing",
  "Tunnel Oxide",
  "Poly-Si Deposition",
  "Anneal / P Diffusion",
  "PSG Removal + RCA",
  "ALD",
  "Front SiNx",
  "Back SiNx",
  "Printing",
  "Firing + Light Injection",
  "LECO + Sorting",
];

const moduleMachines = [
  "Automatic Glass Loading (Four Robotic Arms)",
  "Stringer Machine",
  "Automatic Robot Layup",
  "Automatic Taping",
  "Lead Line Bending, High-Temperature Cloth & Labelling",
  "Automatic Junction-Box Installation & Gluing",
  "Automatic Junction-Box Soldering",
  "Automatic Gluing & Framing",
  "Automatic Trimming",
  "Automatic Edge Taping",
  "Automatic Module Handler for Curing Line",
  "Automatic Filing Corner",
  "Automatic Robot Loading to Testing Tools",
  "Automatic Corner Protector Inserting",
  "Automatic Sorting System",
];

const ingotCapabilities = [
  "Cz pulling and directional solidification",
  "Cropping, squaring and grinding",
  "Diamond-wire slicing to 160–180 microns",
  "AGV material movement between stations",
  "Global process equipment integration",
  "Novus MES smart-factory connectivity",
];

const cellEquipment = [
  "High-temperature processing tools",
  "Wet processing tools",
  "Metallisation and test-sorting tools",
];

const amrSpecs = [
  ["Model", "Novus Carry Solar Cell 500"],
  ["Payload capacity", "500 kg"],
  ["Type", "Autonomous Mobile Robot (AMR)"],
  ["Guidance", "Natural Navigation 3D LiDAR"],
  ["Battery charging", "Auto Dock Charge"],
  ["Max speed (no load)", "2.0 m/s"],
  ["Operation hours", "One shift (8 hours)"],
  ["Drive mechanism", "Differential Drive"],
];

export default function SolarPvStageDetails() {
  return (
    <>
      <section
        className="bg-white px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
        id="ingot-wafer"
        aria-labelledby="ingot-wafer-title"
      >
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <header>
            <p className="mb-3.5 inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:bg-current before:content-['']">
              Value chain: stages 1 &amp; 2
            </p>
            <h2
              className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em]"
              id="ingot-wafer-title"
            >
              Efficiency Is Set Upstream.
            </h2>
            <p className="mt-4 text-base leading-[1.75] text-[#526272]">
              Every wafer carries the quality signature of its ingot. Handling
              stress introduced before diamond-wire slicing cannot be recovered
              downstream. Novus automates handling from step one to protect
              your efficiency ceiling before cell fabrication begins.
            </p>
          </header>

          <div>
            <h3 className="text-base font-bold text-secondary">
              Line capability
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {ingotCapabilities.map((capability) => (
                <li
                  className="flex items-start gap-3 rounded-lg border border-[#dce7ee] bg-[#f5f9fc] p-4 text-sm leading-[1.65] text-[#526272]"
                  key={capability}
                >
                  <span
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {capability}
                </li>
              ))}
            </ul>
            <aside className="mt-5 rounded-xl border-l-4 border-primary bg-[#eaf4fb] p-5">
              <p className="text-sm leading-[1.7] text-[#526272]">
                <span className="font-bold text-secondary">
                  Technology partner
                </span>
                <br />
                Equipment from a global leader in photovoltaic industry-chain
                equipment, with nearly 40,000 fully automatic Czochralski
                pullers deployed worldwide and more than 60% global market
                share. Novus provides local integration, engineering and
                after-sales support.
              </p>
            </aside>
            <a
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-bold text-white transition-colors hover:bg-[#1a689e]"
              href={solarPvBrochureUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download Ingot &amp; Wafer Brochure
            </a>
          </div>
        </div>
      </section>

      <section
        className="bg-[#f5f9fc] px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
        id="cell"
        aria-labelledby="cell-title"
      >
        <div className="mx-auto w-full max-w-[1240px]">
          <header className="mx-auto mb-9 max-w-[850px] text-center">
            <p className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:bg-current before:content-[''] after:h-px after:w-3 after:bg-current after:content-['']">
              Value chain: stage 3
            </p>
            <h2
              className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em]"
              id="cell-title"
            >
              TOPCon-Ready Cell Production Lines.
            </h2>
            <p className="mt-4 text-base leading-[1.75] text-[#526272]">
              Turnkey 14-step TOPCon-ready cell lines. Novus Carry Solar Cell
              500 AMRs execute vibration-free cassette transfers between
              stations, while Novus MES connects the line for real-time yield
              and quality tracking.
            </p>
          </header>

          <div className="rounded-2xl border border-[#dce7ee] bg-white p-5 shadow-[0_10px_26px_rgba(8,31,58,0.05)] sm:p-7">
            <h3 className="text-base font-bold text-secondary">
              14-step TOPCon process flow
            </h3>
            <ol className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {cellProcess.map((step, index) => (
                <li
                  className="flex min-h-[62px] items-center gap-3 rounded-lg bg-[#f5f9fc] px-3 py-3"
                  key={step}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eaf4fb] text-[11px] font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-semibold leading-[1.5] text-[#526272]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-xl border border-[#dce7ee] bg-white p-5 sm:p-6">
              <h3 className="font-bold text-secondary">Equipment families</h3>
              <ul className="mt-4 grid gap-3">
                {cellEquipment.map((equipment) => (
                  <li
                    className="flex items-start gap-3 text-sm leading-[1.65] text-[#526272]"
                    key={equipment}
                  >
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {equipment}
                  </li>
                ))}
              </ul>
              <a
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-bold text-white transition-colors hover:bg-[#1a689e]"
                href={solarPvBrochureUrl}
                target="_blank"
                rel="noreferrer"
              >
                Download Cell Line Brochure
              </a>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#dce7ee] bg-white">
              <div className="border-b border-[#dce7ee] bg-[#eaf4fb] px-5 py-4">
                <h3 className="font-bold text-secondary">
                  Novus Carry Solar Cell 500
                </h3>
                <p className="mt-1 text-xs text-[#64727d]">
                  Autonomous cassette transfer within the cell line
                </p>
              </div>
              <dl className="grid grid-cols-1 divide-y divide-[#e5edf3] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                {amrSpecs.map(([label, value]) => (
                  <div
                    className="flex justify-between gap-3 px-5 py-3 text-sm sm:border-b sm:border-[#e5edf3] [&:nth-last-child(-n+2)]:sm:border-b-0"
                    key={label}
                  >
                    <dt className="text-[#64727d]">{label}</dt>
                    <dd className="text-right font-semibold text-secondary">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
        id="module"
        aria-labelledby="module-title"
      >
        <div className="mx-auto w-full max-w-[1240px]">
          <header className="mx-auto mb-9 max-w-[850px] text-center">
            <p className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:bg-current before:content-[''] after:h-px after:w-3 after:bg-current after:content-['']">
              Value chain: stage 4
            </p>
            <h2
              className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em]"
              id="module-title"
            >
              Fully Automatic Robotic Module Lines.
            </h2>
            <p className="mt-4 text-base leading-[1.75] text-[#526272]">
              At maximum volume, handling risk matters. Our robotic line moves
              finished modules up to 25 kg through a 15-machine sequence from
              glass loading to dispatch, minimizing human contact. Automated
              testing and sorting are integrated into the flow.
            </p>
          </header>

          <div className="rounded-2xl border border-[#dce7ee] bg-[#f5f9fc] p-5 sm:p-7">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <h3 className="text-base font-bold text-secondary">
                15-machine sequential flow
              </h3>
              <p className="text-xs font-semibold text-[#64727d]">
                Glass in. Tested panel out.
              </p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {moduleMachines.map((machine, index) => (
                <li
                  className="flex min-h-[64px] items-start gap-3 rounded-lg border border-[#dce7ee] bg-white p-3"
                  key={machine}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eaf4fb] text-[11px] font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-xs font-semibold leading-[1.5] text-[#526272]">
                    {machine}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-5 rounded-lg bg-[#eaf4fb] px-4 py-3 text-sm leading-[1.7] text-[#526272]">
              <span className="font-bold text-secondary">Novus integration:</span>{" "}
              Robotic arms across the line, fork-based AGV transport for
              finished modules, automated testing and sorting, and Novus MES
              connected end to end.
            </p>
            <a
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-bold text-white transition-colors hover:bg-[#1a689e]"
              href={solarPvBrochureUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download Module Line Brochure
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
