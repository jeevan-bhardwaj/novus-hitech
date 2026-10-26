const faqs = [
  {
    question: "How do I book a meeting with Novus?",
    answer:
      "Use the Book a Meeting form at the top of this page. Choose a virtual meeting, an office visit in Gurugram or a site assessment, add your project details, and our solar team confirms your slot within one business day.",
  },
  {
    question: "What is included in a Novus turnkey solar PV line?",
    answer:
      "A Novus turnkey solar PV line covers ingot and wafer, a TOPCon-ready 14-step cell line and a 15-machine automatic module line. Scope includes global process equipment, Novus Carry AMRs, a module-transport AGV, Novus MES, on-site commissioning, 4-day training and a 12 to 15 month warranty.",
  },
  {
    question: "Can Novus supply only one stage, such as the module line?",
    answer:
      "Yes. Novus supplies the full ingot-to-module value chain or a single stage, depending on your existing setup. Every scope includes layout planning, process equipment integration, Novus Carry AMR deployment, Novus MES connectivity, commissioning and pan-India after-sales support for the life of the line.",
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
      className="bg-white px-5 py-16 sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
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
            FAQ
          </p>
          <h2
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="solar-pv-faq-title"
          >
            Frequently Asked Questions
          </h2>
        </header>

        <div className="grid gap-4">
          {faqs.map(({ question, answer }, index) => (
            <details
              className="group mx-1 overflow-hidden rounded-2xl border-2 border-[#cbd9e6] bg-white transition-colors open:border-primary open:bg-[#f7fbff] open:shadow-[0_8px_22px_rgba(8,31,58,0.045)] sm:mx-0 sm:border sm:border-[#d9e4ef] sm:open:border-[#91c5f5]"
              key={question}
              open={index === 0}
            >
              <summary className="flex min-h-[84px] cursor-pointer list-none items-center gap-4 px-4 py-5 text-base font-bold leading-[1.5] text-secondary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-3px] sm:px-6 [&::-webkit-details-marker]:hidden">
                <span className="w-6 flex-[0_0_24px] text-sm font-bold tracking-[0.02em] text-[#8c9caf]">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <span className="flex-1">{question}</span>
                <span className="flex h-9 w-9 flex-[0_0_36px] shrink-0 items-center justify-center rounded-full bg-[#f0f4f8] text-[#60758b] transition-colors group-open:bg-primary group-open:text-white">
                  <svg
                    className="h-4 w-4 fill-none stroke-current transition-transform group-open:rotate-180"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="m5 7.5 5 5 5-5" />
                  </svg>
                </span>
              </summary>
              <p className="ml-10 px-0 pb-6 pr-4 text-[15px] leading-[1.65] text-[#52677c] sm:ml-14 sm:pr-14">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}