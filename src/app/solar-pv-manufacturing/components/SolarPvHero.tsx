"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const enquiryEmail = "solar@novushitech.com";

const proofPoints = [
  { value: "14-step", label: "TOPCon-ready cell line" },
  { value: "15-machine", label: "Fully automatic module line" },
  { value: "16–20 weeks", label: "Typical delivery window" },
];

const companyStats = [
  { value: "1,400+", label: "Robots deployed" },
  { value: "150+", label: "Patents" },
  { value: "20+", label: "Years in autonomous systems" },
  { value: "100+", label: "Enterprise clients" },
];

const bullets = [
  "One contract from ingot to module",
  "Novus Carry Solar Cell 500 AMR for material movement",
  "PLI and ALMM documentation from Novus MES",
];

const inputClass =
  "mt-1 block w-full rounded-lg border border-[#dce5ec] bg-white px-3 py-2.5 text-sm text-[#081f3a] outline-none transition-colors placeholder:text-[#92a0ad] focus:border-[#217ebe] focus:ring-2 focus:ring-[#217ebe]/15";

export default function SolarPvHero() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          interest: data.get("interested_in"),
          meeting_type: data.get("preferred_day"),
          message: data.get("message"),
          eventSource: "Solar_PV_Hero_Meeting_Form",
          subject: "REI Expo 2026 - Solar PV Meeting Request",
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
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#081F3A] text-white">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          src="/images/hero/solar-manufacturing.webp"
          alt=""
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06172b]/90 via-[#081F3A]/75 to-[#081F3A]/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[#081F3A]/15 via-transparent to-[#081F3A]/75"
          aria-hidden="true"
        />

        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[minmax(0,1.05fr)_minmax(370px,0.75fr)] lg:items-center lg:gap-16 lg:px-12 lg:pb-20 lg:pt-36">
          <div className="max-w-[720px]">
            <p className="text-[11px] font-bold uppercase leading-relaxed tracking-[0.16em] text-[#9fd4f5] sm:text-xs sm:tracking-[0.2em]">
              SOLAR PV MANUFACTURING - REI EXPO 2026, BOOTH A01
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-5xl">
              Solar PV Manufacturing Lines, Ingot to Module
            </h1>
            <p className="mt-5 max-w-[610px] text-[16px] leading-[26px] text-white/85">
              TOPCon-ready cells, a 15-machine robotic module line and Novus
              MES. Engineered and serviced in India, delivered in 16 to 20
              weeks.
            </p>
            <ul className="mt-6 grid gap-2.5">
              {bullets.map((bullet) => (
                <li
                  className="flex items-start gap-2.5 text-[15px] font-semibold leading-[1.5] text-white/90"
                  key={bullet}
                >
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2b93cf]/25 text-[#9fd4f5]"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-none stroke-current">
                      <path d="m4 10 4 4 8-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="w-full rounded-2xl bg-white p-5 text-[#081f3a] shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:p-7"
            id="meeting-form"
          >
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current">
                    <path d="m5 12 4 4L19 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h2 className="mt-5 text-2xl font-bold">Thank you.</h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#5a6875]">
                  Your meeting request has been received. Our solar PV team will confirm your slot within one business day.
                </p>
                <p className="mt-2 text-xs text-[#718292]">
                  Direct contact:{" "}
                  <a
                    className="font-semibold text-primary underline"
                    href={`mailto:${enquiryEmail}`}
                  >
                    {enquiryEmail}
                  </a>
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                  Book a solar PV meeting at REI Expo 2026
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[#637384]">
                  Pick a day. Our solar team confirms your slot within one
                  business day.
                </p>

                <form className="mt-5 grid gap-3.5" onSubmit={handleSubmit}>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="text-xs font-semibold text-[#354b60]">
                      Full name*
                      <input
                        className={inputClass}
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        required
                      />
                    </label>
                    <label className="text-xs font-semibold text-[#354b60]">
                      Company*
                      <input
                        className={inputClass}
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Company name"
                        required
                      />
                    </label>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="text-xs font-semibold text-[#354b60]">
                      Work email*
                      <input
                        className={inputClass}
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        required
                      />
                    </label>
                    <label className="text-xs font-semibold text-[#354b60]">
                      Phone*
                      <input
                        className={inputClass}
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91"
                        required
                      />
                    </label>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="text-xs font-semibold text-[#354b60]">
                      Interested in*
                      <select
                        className={inputClass}
                        name="interested_in"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>Select a line</option>
                        <option value="Solar PV line">Solar PV line</option>
                        <option value="BESS line">BESS line</option>
                        <option value="Both">Both</option>
                        <option value="Other">Other</option>
                      </select>
                    </label>
                    <label className="text-xs font-semibold text-[#354b60]">
                      Preferred day*
                      <select
                        className={inputClass}
                        name="preferred_day"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Choose a day
                        </option>
                        <option value="22 Oct">22 Oct</option>
                        <option value="23 Oct">23 Oct</option>
                        <option value="24 Oct">24 Oct</option>
                        <option value="Virtual meeting">Virtual meeting</option>
                      </select>
                    </label>
                  </div>
                  <label className="text-xs font-semibold text-[#354b60]">
                    Message
                    <textarea
                      className={`${inputClass} min-h-[68px] resize-y`}
                      name="message"
                      placeholder="Target capacity, site status, timeline"
                      rows={2}
                    />
                  </label>

                  {errorMessage && (
                    <p className="text-xs text-red-600" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    disabled={isSubmitting}
                    className="mt-1 inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1a689e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-75"
                    type="submit"
                  >
                    {isSubmitting ? "Submitting..." : "Book a Meeting"}
                  </button>
                  <p className="text-center text-xs leading-relaxed text-[#657686]">
                    Can&apos;t make it to Greater Noida? Choose &quot;Virtual
                    meeting&quot; and we&apos;ll call you.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section
        className="border-b border-[#dce7ee] bg-white px-5 py-9 sm:px-6 sm:py-12"
        aria-label="Novus at a glance"
      >
        <dl className="mx-auto grid max-w-[1240px] grid-cols-1 divide-y divide-[#dce7ee] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {companyStats.map((point) => (
            <div
              className="flex min-h-[134px] flex-col items-center justify-center px-3 py-5 text-center sm:min-h-[120px] sm:py-4"
              key={point.label}
            >
              <dt className="text-[40px] font-bold leading-none tracking-[-0.045em] text-[#081f3a] sm:text-[clamp(30px,4vw,44px)]">
                {point.value}
              </dt>
              <dd className="mt-5 text-xs font-semibold uppercase leading-[1.4] tracking-[0.08em] text-[#5b6875] sm:mt-2.5 sm:text-sm">
                {point.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
