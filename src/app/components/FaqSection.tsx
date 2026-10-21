"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: " Where is Novus Hi-Tech at REI Expo 2026?",
    answer:
      "Novus Hi-Tech is at Hall 16, Booth A01 at Renewable Energy India Expo 2026, India Expo Mart, Greater Noida, from 22 to 24 October 2026. Our solar and BESS engineers walk visitors through turnkey ingot-to-module and cell-to-container lines. Book a slot in advance to meet a line specialist.",
  },
  {
    question:
      "How do I book a meeting with Novus at REI Expo 2026?",
    answer:
      "Use the Book a Meeting form at the top of this page. Choose 22, 23 or 24 October, add your project details in the message field, and our solar team confirms your slot within one business day. Visitors who cannot attend can choose a virtual meeting instead.",
  },
  {
    question: "Who supplies turnkey solar PV and BESS manufacturing lines in India?",
    answer:
      "Novus Hi-Tech supplies turnkey solar PV lines, from ingot to module, and BESS assembly lines, from cell to container. Global process equipment is integrated with Novus robotics and Novus MES under one contract, commissioned on your floor and serviced pan-India for the life of the line.",
  },
  {
    question:
      "How long does Novus take to deliver a solar or BESS line?",
    answer:
      "Novus delivers a solar PV or BESS line in approximately 16 to 20 weeks from confirmed PO and advance payment. Installation, commissioning, site acceptance testing and a 4-day training programme are included in the commercial offer, so your team runs the line independently from day one.",
  },
  {
    question: "Are Novus lines designed for PLI and ALMM compliance?",
    answer:
      "Yes. Novus solar PV and BESS lines are designed to meet Production Linked Incentive scheme requirements. Novus MES records batch data, equipment parameters, QC gates and serial-level traceability, creating the documentation trail MNRE and ALMM audits expect from first cell to shipped module or pack.",
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
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']">FAQ</motion.p>
          <motion.h2
            initial={false}
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
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
              className="group mx-1 overflow-hidden rounded-2xl border-2 border-[#cbd9e6] bg-white transition-colors open:border-primary open:bg-[#f7fbff] open:shadow-[0_8px_22px_rgba(8,31,58,0.045)] sm:mx-0 sm:border sm:border-[#d9e4ef] sm:open:border-[#91c5f5]" key={question} open={index === 0}>
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
              <p className="ml-10 px-0 pb-6 pr-4 text-[15px] leading-[1.65] text-[#52677c] sm:ml-14 sm:pr-14">{answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
