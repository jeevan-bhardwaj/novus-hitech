import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import SolarPvHero from "./components/SolarPvHero";
import SolarPvLineScope from "./components/SolarPvLineScope";
import SolarPvIntegration from "./components/SolarPvIntegration";
import SolarPvFaq from "./components/SolarPvFaq";
import SolarPvStageDetails from "./components/SolarPvStageDetails";

const pageTitle =
  "Turnkey Solar PV Manufacturing Line India | Ingot to Module | Novus Hi-Tech";
const pageDescription =
  "Turnkey solar PV manufacturing lines from Ingot & Wafer through Cell (TOPCon-ready) and Module. Novus Carry AMR inside the line. Novus MES for PLI-ready traceability. Delivered in 16 to 20 weeks.";
const canonicalUrl = "https://www.novushitech.com/solar/solar-pv-manufacturing";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
};

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: pageTitle,
  description: pageDescription,
  image: "https://solar.novushitech.com/images/hero/solar-manufacturing.webp",
  brand: {
    "@type": "Brand",
    name: "Novus Hi-Tech",
  },
  url: canonicalUrl,
};

export default function SolarPvManufacturingPage() {
  return (
    <main className="overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SolarPvHero />
      <SolarPvLineScope />
      <SolarPvStageDetails />
      <SolarPvIntegration />

      <section
        className="bg-[#eaf4fb] px-5 py-16 text-secondary sm:px-6 sm:py-[clamp(64px,8vw,104px)]"
        aria-labelledby="solar-pv-delivery-title"
      >
        <div className="mx-auto w-full max-w-[1240px]">
          <header className="mx-auto mb-10 max-w-[850px] text-center sm:mb-12">
            <p className="mb-3.5 inline-flex items-center justify-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.2em] text-primary before:h-px before:w-3 before:bg-current before:content-[''] after:h-px after:w-3 after:bg-current after:content-['']">
              Delivery &amp; support
            </p>
            <h2
              className="text-[clamp(32px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.035em]"
              id="solar-pv-delivery-title"
            >
              Commissioned. Trained. Supported. Always.
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-base leading-[1.75] text-[#526272]">
              End-to-end delivery from installation through ongoing,
              India-based service support.
            </p>
          </header>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Delivery",
                description:
                  "Approximately 16 to 20 weeks from confirmed PO and advance payment.",
              },
              {
                title: "Installation & Commissioning",
                description:
                  "On-site by Novus engineers. Included in the commercial offer, with support through site acceptance testing.",
              },
              {
                title: "Training",
                description:
                  "A 4-day operations and maintenance programme equips your team to run the line independently.",
              },
              {
                title: "Warranty & Post-Warranty",
                description:
                  "12 months from SAT or 15 months from delivery, whichever is earlier. Manufacturing-defect replacement is included; spares, service and AMC are available on a paid basis.",
              },
            ].map((step) => (
              <article
                className="rounded-xl border border-[#cfe2ef] bg-white p-6 shadow-[0_12px_30px_rgba(8,31,58,0.045)] sm:p-7"
                key={step.title}
              >
                <h3 className="text-base font-bold leading-[1.5] text-secondary sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.7] text-[#526272]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SolarPvFaq />

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start justify-between gap-6 rounded-2xl bg-[#eaf4fb] p-6 sm:p-10 md:flex-row md:items-center">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              The future is now
            </p>
            <h2 className="mt-3 text-[clamp(28px,3.5vw,38px)] font-bold leading-[1.12] tracking-[-0.035em] text-secondary">
              Setting Up a Solar PV Manufacturing Facility?
            </h2>
            <p className="mt-3 text-base leading-[1.75] text-[#526272]">
              Our team will review your capacity plan, technology roadmap and
              PLI requirements, then design the right line configuration for
              your factory.
            </p>
          </div>
          <a
            className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-md bg-secondary px-5 text-sm font-bold text-white transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
            href="https://solar.novushitech.com/contact/"
          >
            Talk to our team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
