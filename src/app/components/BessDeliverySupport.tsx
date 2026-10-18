import { CheckCircle2 } from "lucide-react";

const inclusions = [
  "Cell, module and pack EOL testing systems",
  "Novus AGV material handling for packs up to 10,000 kg",
  "Novus MES with serial-level traceability for PLI and ALMM audits",
  "On-site commissioning, 4-day training and a 12 to 15 month warranty",
];

export default function BessDeliverySupport() {
  return (
    <section className="bg-[#eaf4fb] px-5 py-14 text-secondary sm:px-6 sm:py-16" aria-labelledby="bess-delivery-support-title">
      <div className="mx-auto w-full max-w-[900px]">
        <header className="mb-7 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            What&apos;s included
          </p>
          <h2 className="text-[clamp(30px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em]" id="bess-delivery-support-title">
            Commissioned. Trained. Supported.
          </h2>
        </header>
        <ul className="grid gap-4 rounded-2xl border border-[#cfe2ef] bg-white p-5 sm:grid-cols-2 sm:p-8">
          {inclusions.map((item) => (
            <li className="flex items-start gap-3" key={item}>
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm leading-[1.7] text-[#526272] sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
