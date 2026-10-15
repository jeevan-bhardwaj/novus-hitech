"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question:
      "What is included in a turnkey BESS manufacturing line from Novus Hi-Tech?",
    answer:
      "A Novus turnkey BESS line covers six stages across two halls. Hall A: cell receiving and grading, module assembly, pack and rack integration. Hall B: container integration, EOL testing, dispatch. Scope includes battery testing systems (GTC, GTB, GTA), Novus AGV material handling (10,000 kg payload), Novus MES for PLI-compliant traceability, on-site commissioning, 4-day training, and 12 to 15-month warranty. Delivery in 16 to 20 weeks.",
  },
  {
    question: "How is a BESS manufacturing line different from an EV battery line?",
    answer:
      "A BESS pack must survive 15 to 20 years and 4,000-6,000+ cycles. An EV line is optimised for shorter-life, higher-rate applications and tolerates weld, BMS, and thermal defects that cause field failures in grid storage after year three. A BESS line must be built for prismatic LFP chemistry, in-line cooling plate and leak testing, and IEC 62619 / MNRE ALMM / UN 38.3 compliance from pack one. These cannot be retrofitted onto an EV-adapted line.",
  },
  {
    question: "What is the throughput of a 12 PPM BESS assembly line?",
    answer:
      "The Novus 12 PPM reference line delivers 4.2 GWh per year (314Ah prismatic LFP cells, three-shift operation, 300 working days). First pass yield ≥98%, final line yield ≥99.5%, machine uptime ≥98%, changeover time ≤5 hours. Line configuration scales from 50 MWh/year (semi-automated) to 500+ MWh/year (fully automated).",
  },
  {
    question: "What cell chemistries and formats does the Novus BESS line support?",
    answer:
      "The reference line is optimised for prismatic LFP cells at 200 Ah, 280 Ah, 314 Ah, 587 Ah, and 628 Ah. Cell envelope: 30-80 mm thick, 130-350 mm long, 100-250 mm high, 3-12 kg. Module envelope: 700-1,200 mm long. Pack envelope: 1,000-2,300 mm long. Other cells and chemistries evaluated on request.",
  },
  {
    question:
      "What is the difference between the pack assembly line and the container assembly line?",
    answer:
      "The pack assembly line (Hall A) takes cells and produces tested finished packs. The container assembly line (Hall B) takes those packs and produces a fully deployable containerised storage system with liquid cooling, fire suppression, HVAC, and software loading. One MES thread and one contract connect both halls. Most vendors deliver one hall. Novus delivers both.",
  },
  {
    question:
      "Can Novus supply a BESS line that qualifies for India's PLI (ACC) scheme?",
    answer:
      "Yes. Novus BESS lines are designed for India-based production and can be configured to meet PLI for Advanced Chemistry Cell storage under the ₹18,100 Cr scheme (50 GWh target, running 2025 to 2029). Novus MES generates the compliance trail (batch records, equipment parameters, QC gates, pack-level serialisation) required for MNRE and ALMM audits.",
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
              className="group overflow-hidden rounded-2xl border border-[#d9e4ef] bg-white transition-colors open:border-[#91c5f5] open:bg-[#f7fbff] open:shadow-[0_8px_22px_rgba(8,31,58,0.045)]"
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
              <p className="ml-10 px-0 pb-6 text-[15px] leading-[1.65] text-[#52677c] sm:ml-14 sm:pr-14">
                {answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
