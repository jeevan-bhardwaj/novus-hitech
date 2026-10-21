"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const inputClass =
  "mt-1 block w-full rounded-lg border border-[#dce5ec] bg-white px-3 py-2.5 text-sm text-[#081f3a] outline-none transition-colors placeholder:text-[#92a0ad] focus:border-[#217ebe] focus:ring-2 focus:ring-[#217ebe]/15";

const stats = [
  { value: "236 GWh", label: "Storage India needs by 2031-32 (CEA)" },
  { value: "4.2 GWh", label: "Per year from one 12 PPM line" },
  { value: "16 to 20 weeks", label: "Line delivery from confirmed PO" },
];

export default function BessHero() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          company: form.get("company"),
          email: form.get("email"),
          phone: form.get("phone"),
          interest: form.get("interest"),
          meeting_type: form.get("preferred_day"),
          message: form.get("message"),
          eventSource: "BESS_Hero_Meeting_Form",
          subject: "REI Expo 2026 - BESS Meeting Request",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error ?? "Failed to book meeting. Please try again.");
      }

      setSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again or email solar@novushitech.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#081f3a] text-white">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          src="/images/hero/BESS-pack-assembly.webp"
          alt="Automated battery energy storage pack assembly line"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06172b]/95 via-[#081f3a]/85 to-[#081f3a]/60" aria-hidden="true" />
        <div className="mx-auto grid w-full max-w-[1440px] gap-9 px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.78fr)] lg:items-center lg:gap-14 lg:px-12 lg:pb-16 lg:pt-36">
          <div className="max-w-[690px]">
            <p className="text-xs font-bold uppercase leading-relaxed tracking-[0.18em] text-[#9fd4f5]">
              BESS Manufacturing · REI Expo 2026, Booth A01
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl">
              BESS Manufacturing Lines Built for 20-Year Grid Storage
            </h1>
            <p className="mt-5 max-w-[620px] text-base leading-7 text-white/85">
              Cell to container across six stages and two halls. 4.2 GWh per
              year at 12 PPM. Engineered and serviced in India.
            </p>
            <ul className="mt-6 grid gap-3">
              {[
                "Built for prismatic LFP, not adapted from EV",
                "Pack and container lines under one contract",
                "Serial-level traceability for PLI and ALMM audits",
              ].map((point) => (
                <li
                  className="flex items-start gap-3 text-sm font-medium text-white/90 sm:text-base"
                  key={point}
                >
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2b93cf]/25 text-[#9fd4f5]"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-none stroke-current"><path d="m4 10 4 4 8-8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-5 text-[#081f3a] shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:p-7" id="bess-meeting-form">
            {submitted ? (
              <div className="flex min-h-[470px] flex-col items-center justify-center text-center" role="status" aria-live="polite">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700" aria-hidden="true">✓</span>
                <h2 className="mt-5 text-2xl font-bold">Thank you.</h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#526272]">
                  Your meeting request has been received. Our BESS engineering team will confirm your slot within one business day.
                </p>
                <p className="mt-2 text-xs text-[#718292]">
                  Direct contact:{" "}
                  <a className="font-semibold text-primary underline" href="mailto:solar@novushitech.com">
                    solar@novushitech.com
                  </a>
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold sm:text-2xl">Book a BESS meeting at REI Expo 2026</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[#637384]">
                  Pick a day. Our solar team confirms your slot within one business day.
                </p>
                <form className="mt-5 grid gap-3.5" onSubmit={handleSubmit}>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="text-xs font-semibold text-[#354b60]">
                      Full name*
                      <input className={inputClass} name="name" autoComplete="name" placeholder="Your full name" required />
                    </label>
                    <label className="text-xs font-semibold text-[#354b60]">
                      Company*
                      <input className={inputClass} name="company" autoComplete="organization" placeholder="Company name" required />
                    </label>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="text-xs font-semibold text-[#354b60]">
                      Work email*
                      <input className={inputClass} name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
                    </label>
                    <label className="text-xs font-semibold text-[#354b60]">
                      Phone*
                      <input className={inputClass} name="phone" type="tel" autoComplete="tel" placeholder="+91" required />
                    </label>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="text-xs font-semibold text-[#354b60]">
                      Interested in*
                      <select className={inputClass} name="interest" defaultValue="" required>
                        <option value="" disabled>Select a line</option>
                        <option>Solar PV line</option>
                        <option>BESS line</option>
                        <option>Both</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label className="text-xs font-semibold text-[#354b60]">
                      Preferred day*
                      <select className={inputClass} name="preferred_day" defaultValue="" required>
                        <option value="" disabled>Choose a day</option>
                        <option>22 Oct</option>
                        <option>23 Oct</option>
                        <option>24 Oct</option>
                        <option>Virtual meeting</option>
                      </select>
                    </label>
                  </div>
                  <label className="text-xs font-semibold text-[#354b60]">
                    Message
                    <textarea className={`${inputClass} min-h-20 resize-y`} name="message" placeholder="Target capacity, site status, timeline" rows={2} />
                  </label>

                  {errorMessage && (
                    <p className="text-xs text-red-600" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    disabled={isSubmitting}
                    className="mt-1 inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-[#1a689e] disabled:cursor-wait disabled:opacity-75"
                    type="submit"
                  >
                    {isSubmitting ? "Submitting..." : "Book a Meeting"}
                  </button>
                  <p className="text-center text-xs leading-relaxed text-[#637384]">
                    Can&apos;t make it to Greater Noida? Choose &quot;Virtual
                    meeting&quot; and we&apos;ll call you.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-[#dce7ee] bg-white px-5 py-7 sm:px-6 sm:py-9" aria-label="BESS manufacturing line metrics">
        <dl className="mx-auto grid max-w-[1120px] divide-y divide-[#dce7ee] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map(({ value, label }) => (
            <div className="flex min-h-[134px] flex-col items-center justify-center px-3 py-5 text-center sm:min-h-[120px] sm:py-4" key={value}>
              <dt className="text-[40px] font-bold leading-none tracking-[-0.045em] text-secondary sm:text-4xl">{value}</dt>
              <dd className="mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-[#5b6875] sm:mt-2.5 sm:text-sm">{label}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
