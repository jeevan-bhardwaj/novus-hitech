import { CheckCircle2 } from "lucide-react";

const inclusions = [
  "Delivery in 16 to 20 weeks from confirmed PO",
  "On-site installation and commissioning through site acceptance testing",
  "4-day operations and maintenance training",
  "Warranty of 12 months from SAT or 15 months from delivery, then pan-India service",
];

export default function SolarPvWhatsIncluded() {
  return (
    <section
      className="bg-white px-5 pt-10 pb-16 text-secondary sm:px-6 sm:pt-12 sm:pb-[clamp(64px,8vw,104px)]"
      id="whats-included"
      aria-labelledby="whats-included-title"
    >
      <div className="mx-auto w-full max-w-[850px]">
        <header className="mb-10 text-center sm:mb-12">
          <p className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:bg-current before:content-[''] after:h-px after:w-3 after:bg-current after:content-['']">
            WHAT'S INCLUDED
          </p>
          <h2
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="whats-included-title"
          >
            Commissioned. Trained. Supported.
          </h2>
        </header>

        <div className="rounded-2xl border border-[#dce7ee] bg-[#f5f9fc] p-6 shadow-[0_8px_22px_rgba(8,31,58,0.035)] sm:p-10">
          <ul className="grid gap-5 sm:gap-6">
            {inclusions.map((item, index) => (
              <li className="flex items-start gap-4" key={index}>
                <CheckCircle2
                  className="mt-0.5 h-6 w-6 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-base leading-[1.7] text-[#526272] sm:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}