const faqs = [
  {
    question:
      "What is included in a turnkey solar PV manufacturing line from Novus Hi-Tech?",
    answer:
      "A Novus turnkey solar PV line covers Ingot and Wafer, Cell (TOPCon-ready 14-step process), and Module (fully automatic 15-machine robotic line). Scope includes global process equipment, Novus Carry Solar Cell 500 AMR integration, fork-based AGV for module transport, Novus MES connectivity for PLI-ready traceability, on-site commissioning, 4-day training, and 12 to 15-month warranty.",
  },
  {
    question:
      "What is a TOPCon-ready solar cell line and why does it matter?",
    answer:
      "TOPCon (Tunnel Oxide Passivated Contact) is a high-efficiency solar cell technology. A TOPCon-ready line helps prepare a facility for technology shifts and supports premium module production. The Novus line covers the full 14-step process from texture through LECO and sorting.",
  },
  {
    question:
      "Can Novus supply an individual stage instead of the full value chain?",
    answer:
      "Yes. Novus can supply the full value chain as one turnkey engagement or individual stages based on your existing setup. Both scopes can include layout planning, equipment integration, Novus Carry AMR deployment, Novus MES connectivity, commissioning and after-sales support.",
  },
  {
    question:
      "Can Novus integrate robots and AGVs into a solar PV line from another vendor?",
    answer:
      "Yes. The Novus Carry Solar Cell 500 AMR (500 kg payload, 3D LiDAR guidance) and fork-based module-transport AGV can be integrated into third-party solar lines. Novus MES can also be layered onto an existing line to enable PLI-ready traceability.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function SolarPvFaq() {
  return (
    <section
      className="bg-[#f5f9fc] px-5 py-16 sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="solar-pv-faq-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto w-full max-w-4xl">
        <header className="mb-[38px] text-center">
          <p className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:bg-current before:content-[''] after:h-px after:w-3 after:bg-current after:content-['']">
            Solar PV FAQ
          </p>
          <h2
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="solar-pv-faq-title"
          >
            Frequently asked questions
          </h2>
        </header>

        <div className="grid gap-4">
          {faqs.map(({ question, answer }, index) => (
            <details
              className="group overflow-hidden rounded-xl border border-[#d9e4ef] bg-white open:border-[#91c5f5] open:shadow-[0_8px_22px_rgba(8,31,58,0.045)]"
              key={question}
              open={index === 0}
            >
              <summary className="flex min-h-[72px] cursor-pointer list-none items-center gap-4 px-4 py-5 text-base font-bold leading-[1.5] text-secondary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-3px] sm:px-6 [&::-webkit-details-marker]:hidden">
                <span className="flex-1">{question}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0f4f8] text-[#60758b] transition-colors group-open:bg-primary group-open:text-white">
                  <svg
                    className="h-4 w-4 fill-none stroke-current transition-transform group-open:rotate-180"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="m5 7.5 5 5 5-5" />
                  </svg>
                </span>
              </summary>
              <p className="px-4 pb-6 text-sm leading-[1.75] text-[#52677c] sm:px-6">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
