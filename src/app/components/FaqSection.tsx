"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Who supplies turnkey solar PV and BESS manufacturing lines in India?",
    answer:
      "Novus Hi-Tech supplies turnkey solar PV manufacturing lines (Ingot to Module, TOPCon-ready) and BESS assembly lines (Cell to Container, six stages across two halls). Process equipment is integrated with Novus robotics and Novus MES under one contract. Commissioning takes 16 to 20 weeks. Pan-India 24x7 support is included for the life of the line.",
  },
  {
    question:
      "What is the difference between buying equipment from a Chinese vendor directly and using a turnkey Indian partner?",
    answer:
      "A direct Chinese purchase leaves integration, layout, robotics, software, PLI documentation, and after-sales on the buyer's team. When a machine fails 18 months in, the engineer is in Shenzhen and one week of lost production erases the saving. Novus supplies the same or equivalent process equipment under one turnkey contract, integrates it with Novus robotics and MES, commissions on the buyer's floor, and provides pan-India on-ground service for the life of the line.",
  },
  {
    question: "Are Novus lines PLI-compliant?",
    answer:
      "Yes. Novus solar PV and BESS lines are designed to meet Production Linked Incentive scheme requirements. Novus MES generates the compliance documentation trail (batch records, equipment parameters, QC gates, pack-level serialisation) that MNRE and ALMM auditors expect, from first cell to shipped module or pack.",
  },
  {
    question:
      "How long does it take to commission a Novus solar or BESS manufacturing line?",
    answer:
      "Approximately 16 to 20 weeks from confirmed PO and advance payment. Installation, commissioning, and site acceptance testing are included in the commercial offer.",
  },
  {
    question: "What after-sales support does Novus provide?",
    answer:
      "Pan-India 24x7 support through India-based engineers, stocked spare parts from local inventory, and O&M and AMC programmes on paid basis. Novus service team is India-based for the life of the line. No dependence on international fly-in engineers or time-zone alignment.",
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

export default function FaqSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 sm:py-[clamp(64px,8vw,104px)]" aria-labelledby="faq-section-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto w-full max-w-4xl">
        <header className="mb-[38px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']">FAQ</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[44px] tracking-[-0.8px] text-[#111]" id="faq-section-title">
            Frequently Asked Questions
          </motion.h2>
        </header>

        <div className="grid gap-4">
          {faqs.map(({ question, answer }, index) => (
            <motion.details
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl border border-[#d9e4ef] bg-white transition-colors open:border-[#91c5f5] open:bg-[#f7fbff] open:shadow-[0_8px_22px_rgba(8,31,58,0.045)]" key={question} open={index === 0}>
              <summary className="flex min-h-[84px] cursor-pointer list-none items-center gap-4 px-4 py-5 text-base font-bold leading-[1.5] text-secondary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-3px] sm:px-6 [&::-webkit-details-marker]:hidden">
                <span className="w-6 flex-[0_0_24px] text-sm font-bold tracking-[0.02em] text-[#8c9caf]">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <span className="flex-1">{question}</span>
                <span className="flex h-9 w-9 flex-[0_0_36px] items-center justify-center rounded-full bg-[#f0f4f8] text-[#60758b] transition-colors group-open:bg-primary group-open:text-white" aria-hidden="true">
                  <svg className="h-4 w-4 fill-none stroke-current transition-transform group-open:rotate-180" viewBox="0 0 20 20">
                    <path d="m5 7.5 5 5 5-5" />
                  </svg>
                </span>
              </summary>
              <p className="ml-10 px-0 pb-6 text-[15px] leading-[1.65] text-[#52677c] sm:ml-14 sm:pr-14">{answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
