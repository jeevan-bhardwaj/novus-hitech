"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I book a meeting with Novus?",
    answer:
      "Use the Book a Meeting form at the top of this page. Choose a virtual meeting, an office visit in Gurugram or a site assessment, add your project details, and our solar team confirms your slot within one business day.",
  },
  {
    question: "How is a BESS line different from an EV battery line?",
    answer:
      "A BESS pack must last 15 to 20 years and thousands of cycles. EV lines tolerate weld, BMS and thermal variation that can cause grid storage failures after year three. A BESS line needs prismatic LFP setup, in-line cooling and leak testing, and IEC 62619, ALMM and UN 38.3 compliance from pack one.",
  },
  {
    question: "What throughput does a 12 PPM BESS line deliver?",
    answer:
      "The Novus 12 PPM reference line delivers 4.2 GWh per year using 314 Ah prismatic LFP cells, three shifts and 300 working days. Targets are first pass yield of 98% or more, final yield of 99.5% or more and uptime of 98% or more. Configurations scale from 50 MWh to 500+ MWh per year.",
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

export default function BessFaqSection() {
  return (
    <section
      className="bg-white px-5 py-16 sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
      aria-labelledby="bess-faq-title"
    >
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
            className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:flex-[0_0_auto] before:bg-current before:content-[''] after:h-px after:w-3 after:flex-[0_0_auto] after:bg-current after:content-['']"
          >
            BESS FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em] text-secondary"
            id="bess-faq-title"
          >
            Frequently Asked Questions
          </motion.h2>
        </header>

        <div className="grid gap-4">
          {faqs.map(({ question, answer }, index) => (
            <motion.details
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              className="group mx-1 overflow-hidden rounded-2xl border-2 border-[#cbd9e6] bg-white transition-colors open:border-primary open:bg-[#f7fbff] open:shadow-[0_8px_22px_rgba(8,31,58,0.045)] sm:mx-0 sm:border sm:border-[#d9e4ef] sm:open:border-[#91c5f5]"
              key={question}
              open={index === 0}
            >
              <summary className="flex min-h-[84px] cursor-pointer list-none items-center gap-4 px-4 py-5 text-base font-bold leading-[1.5] text-secondary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-3px] sm:px-6 [&::-webkit-details-marker]:hidden">
                <span className="w-6 flex-[0_0_24px] text-sm font-bold tracking-[0.02em] text-[#8c9caf]">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <span className="flex-1">{question}</span>
                <span
                  className="flex h-9 w-9 flex-[0_0_36px] items-center justify-center rounded-full bg-[#f0f4f8] text-[#60758b] transition-colors group-open:bg-primary group-open:text-white"
                  aria-hidden="true"
                >
                  <svg
                    className="h-4 w-4 fill-none stroke-current transition-transform group-open:rotate-180"
                    viewBox="0 0 20 20"
                  >
                    <path d="m5 7.5 5 5 5-5" />
                  </svg>
                </span>
              </summary>
              <p className="ml-10 px-0 pb-6 pr-4 text-[15px] leading-[1.65] text-[#52677c] sm:ml-14 sm:pr-14">
                {answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
