"use client";

import { useState, type FormEvent } from "react";

const enquiryEmail = "solar@novushitech.com";
const brochureUrl = "/files/New-Solar-Brochure-Final-V4-for-Web.pdf";

const proofPoints = [
  { value: "1,400+", label: "Robots deployed" },
  { value: "150+", label: "Patents" },
  { value: "20+", label: "Years in autonomous systems" },
  { value: "100+", label: "Enterprise clients" },
];

const inputClass =
  "mt-1 block w-full rounded-lg border border-[#dce5ec] bg-white px-3 py-2.5 text-sm text-[#081f3a] outline-none transition-colors placeholder:text-[#92a0ad] focus:border-[#217ebe] focus:ring-2 focus:ring-[#217ebe]/15";

export default function SolarHero() {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fields = [
      ["Name", "name"],
      ["Company", "company"],
      ["Work email", "email"],
      ["Phone", "phone"],
      ["Interested in", "interest"],
      ["Preferred day", "preferredDay"],
      ["Message", "message"],
    ] as const;
    const body = fields
      .map(([label, name]) => `${label}: ${String(formData.get(name) ?? "")}`)
      .join("\n");
    const mailto = `mailto:${enquiryEmail}?subject=${encodeURIComponent(
      "REI Expo 2026 meeting request",
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-[#081f3a] text-white"
        id="home"
      >
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <img
            className="h-full w-full object-cover object-center"
            src="/images/hero/solar-banner.webp"
            alt=""
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081f3a]/95 via-[#081f3a]/80 to-[#081f3a]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#081f3a]/35 via-transparent to-[#081f3a]/80" />
        </div>

        <div className="absolute inset-x-0 top-16 z-10 border-y border-white/15 bg-[#081f3a]/75 px-4 py-2.5 backdrop-blur-sm lg:top-[82px]">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[11px] font-semibold text-white/90 sm:text-sm">
            <span>Meet Novus at REI Expo 2026</span>
            <span aria-hidden="true">·</span>
            <span>22 to 24 October</span>
            <span aria-hidden="true">·</span>
            <span>Hall 16, Booth A01</span>
            <span aria-hidden="true">·</span>
            <span>India Expo Mart, Greater Noida</span>
            <a
              className="ml-1 font-bold text-[#9fd4f5] underline underline-offset-4 transition-colors hover:text-white"
              href="#meeting-form"
            >
              Book a Meeting
            </a>
          </div>
        </div>

        <div className="mx-auto grid min-h-[780px] w-full max-w-[1440px] items-center gap-10 px-5 pb-14 pt-36 sm:px-8 sm:pt-40 lg:min-h-[790px] lg:grid-cols-[minmax(0,1.05fr)_minmax(370px,0.75fr)] lg:gap-16 lg:px-12 lg:pb-20 lg:pt-44">
          <div className="max-w-[680px] py-4">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#9fd4f5] sm:text-sm">
              REI Expo 2026 · Hall 16, Booth A01
            </p>
            <h1 className="text-5xl font-bold leading-[1.08] tracking-[-0.035em] text-white">
              Solar PV and BESS Manufacturing Lines, Built by Roboticists
            </h1>
            <p className="mt-6 max-w-[610px] text-base leading-[1.75] text-white/80 sm:text-lg">
              Engineered and serviced in India. Ingot to module, cell to
              container, delivered under one contract.
            </p>
            <ul className="mt-7 grid gap-3 text-sm font-medium text-white/90 sm:text-base">
              {[
                "Line delivery in 16 to 20 weeks",
                "PLI and ALMM documentation from Novus MES",
                "Novus robotics and MES built into every line",
              ].map((point) => (
                <li className="flex items-start gap-3" key={point}>
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2b93cf]/25 text-[#9fd4f5]"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-none stroke-current">
                      <path d="m4 10 4 4 8-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {point}
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
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current">
                    <path d="m5 12 4 4L19 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h2 className="mt-5 text-2xl font-bold">Thank you.</h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#5a6875]">
                  Our solar team will confirm your slot within one business day.
                  If your email app did not open, contact us at{" "}
                  <a className="font-semibold text-primary underline" href={`mailto:${enquiryEmail}`}>
                    {enquiryEmail}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                  Book a meeting at REI Expo 2026
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[#637384]">
                  Pick a day. Our solar team confirms your slot within one
                  business day.
                </p>
                <form className="mt-5 grid gap-3.5" onSubmit={handleFormSubmit}>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="text-xs font-semibold text-[#354b60]">
                      Full name*
                      <input className={inputClass} name="name" type="text" autoComplete="name" placeholder="Your full name" required />
                    </label>
                    <label className="text-xs font-semibold text-[#354b60]">
                      Company*
                      <input className={inputClass} name="company" type="text" autoComplete="organization" placeholder="Company name" required />
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
                      </select>
                    </label>
                    <label className="text-xs font-semibold text-[#354b60]">
                      Preferred day*
                      <select className={inputClass} name="preferredDay" defaultValue="" required>
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
                    <textarea
                      className={`${inputClass} min-h-[68px] resize-y`}
                      name="message"
                      placeholder="Target capacity, site status, timeline"
                      rows={2}
                    />
                  </label>
                  <button
                    className="mt-1 inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1a689e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    type="submit"
                  >
                    Book a Meeting
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

      <section className="border-b border-[#dce7ee] bg-white px-5 py-8 sm:px-6 sm:py-10" aria-label="About Novus Hi-Tech">
        <p className="mx-auto max-w-[1080px] text-center text-sm leading-[1.8] text-[#526272] sm:text-base">
          Novus Hi-Tech supplies turnkey solar PV manufacturing lines (ingot to
          module) and BESS assembly lines (cell to container), integrated with
          Novus robotics and Novus MES and delivered in 16 to 20 weeks. Meet the
          team at REI Expo 2026, Hall 16, Booth A01, India Expo Mart, Greater
          Noida, 22 to 24 October 2026.
        </p>
      </section>

      <section className="border-b border-[#dce7ee] bg-white px-5 py-9 sm:px-6 sm:py-12" aria-label="Novus at a glance">
        <dl className="mx-auto grid max-w-[1240px] grid-cols-2 divide-x divide-y divide-[#dce7ee] sm:grid-cols-4 sm:divide-y-0">
          {proofPoints.map((point) => (
            <div className="flex min-h-[100px] flex-col items-center justify-center px-3 py-4 text-center sm:min-h-[120px]" key={point.label}>
              <dt className="text-[clamp(30px,4vw,44px)] font-bold leading-none tracking-[-0.045em] text-[#081f3a]">
                {point.value}
              </dt>
              <dd className="mt-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#5b6875] sm:text-sm">
                {point.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}