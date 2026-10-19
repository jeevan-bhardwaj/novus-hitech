"use client";

import { Mail, Phone } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

const inputClass =
  "mt-1 block w-full rounded-lg border border-[#dce5ec] bg-white px-3 py-2.5 text-sm text-[#081f3a] outline-none transition-colors placeholder:text-[#92a0ad] focus:border-[#217ebe] focus:ring-2 focus:ring-[#217ebe]/15";

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          interest: formData.get("interest"),
          meeting_type: formData.get("preferredDay"),
          message: formData.get("message"),
          eventSource: "Contact_Page_Form",
          subject: "REI Expo 2026 - Meeting Request (Contact Page)",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error ?? "Failed to send meeting request. Please try again.");
      }

      setSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again or reach out to solar@novushitech.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-white pt-16 text-[#081f3a] min-[1024px]:pt-[82px]">
      <section className="bg-[#081f3a] px-5 py-14 text-white sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9fd4f5]">
            Contact the Solar Team
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
            Book a meeting with Novus Solar and BESS engineers
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Meet us at REI Expo 2026 or on a video call. The right engineer
            will reply within one business day.
          </p>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-[1100px] gap-7 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)]">
          <div className="rounded-2xl border border-[#dce7ee] bg-white p-5 shadow-[0_12px_35px_rgba(8,31,58,0.07)] sm:p-8">
            {submitted ? (
              <div
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
                role="status"
                aria-live="polite"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current">
                    <path d="m5 12 4 4L19 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h2 className="mt-5 text-2xl font-bold">Thank you.</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[#526272]">
                  Your meeting request has been submitted to our team. Our solar and BESS engineers will review your requirements and confirm your slot within one business day.
                </p>
                <p className="mt-2 text-xs text-[#718292]">
                  Need immediate assistance? Call us at{" "}
                  <a className="font-semibold text-primary underline" href="tel:+919311078767">
                    +91 9311078767
                  </a>
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold">Book a Meeting</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#637384]">
                  Share a few details so we can connect you with the right engineer.
                </p>
                <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                  <label className="text-sm font-semibold">
                    Full name*
                    <input className={inputClass} name="name" autoComplete="name" placeholder="Your full name" required />
                  </label>
                  <label className="text-sm font-semibold">
                    Company*
                    <input className={inputClass} name="company" autoComplete="organization" placeholder="Company name" required />
                  </label>
                  <label className="text-sm font-semibold">
                    Work email*
                    <input className={inputClass} name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
                  </label>
                  <label className="text-sm font-semibold">
                    Phone*
                    <input className={inputClass} name="phone" type="tel" autoComplete="tel" placeholder="+91" required />
                  </label>
                  <label className="text-sm font-semibold">
                    Interested in*
                    <select className={inputClass} name="interest" defaultValue="" required>
                      <option value="" disabled>Select a line</option>
                      <option>Solar PV line</option>
                      <option>BESS line</option>
                      <option>Both</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="text-sm font-semibold">
                    Preferred day*
                    <select className={inputClass} name="preferredDay" defaultValue="" required>
                      <option value="" disabled>Choose a day</option>
                      <option>22 Oct</option>
                      <option>23 Oct</option>
                      <option>24 Oct</option>
                      <option>Virtual meeting</option>
                    </select>
                  </label>
                  <label className="text-sm font-semibold sm:col-span-2">
                    Message
                    <textarea
                      className={`${inputClass} min-h-24 resize-y`}
                      name="message"
                      placeholder="Target capacity, site status, timeline"
                      rows={3}
                    />
                  </label>

                  {errorMessage && (
                    <p className="text-sm text-red-600 sm:col-span-2" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    disabled={isSubmitting}
                    className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-[#1a689e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-75 sm:col-span-2"
                    type="submit"
                  >
                    {isSubmitting ? "Submitting Request..." : "Book a Meeting"}
                  </button>
                </form>
              </>
            )}
          </div>

          <aside className="grid content-start gap-5">
            <section className="rounded-2xl bg-[#f1f7fb] p-6 sm:p-7" aria-labelledby="expo-card-title">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Meet us in person</p>
              <h2 className="mt-2 text-2xl font-bold" id="expo-card-title">Meet us at REI Expo 2026</h2>
              <p className="mt-4 text-base font-bold">Hall 16, Booth A01</p>
              <p className="mt-2 text-sm leading-relaxed text-[#526272]">
                India Expo Mart, Knowledge Park II, Greater Noida, Uttar Pradesh
              </p>
              <p className="mt-3 text-sm font-semibold text-[#354b60]">22 to 24 October 2026</p>
            </section>

            <section className="rounded-2xl border border-[#dce7ee] p-6 sm:p-7" aria-labelledby="direct-contact-title">
              <h2 className="text-xl font-bold" id="direct-contact-title">Reach Us Directly</h2>
              <div className="mt-4 grid gap-5 text-sm leading-relaxed">
                <div>
                  <h3 className="font-bold">Solar &amp; BESS team</h3>
                  <p className="mt-1 flex flex-wrap gap-x-2 text-[#526272]">
                    <a className="inline-flex items-center gap-1.5 text-primary hover:underline" href="mailto:solar@novushitech.com">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      solar@novushitech.com
                    </a>
                    <span aria-hidden="true">·</span>
                    <a className="inline-flex items-center gap-1.5 text-primary hover:underline" href="tel:+919311078767">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      +91 9311078767
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Head office</h3>
                  <p className="mt-1 text-[#526272]">
                    A-18, Infocity-1, Sector 34, Gurugram 122001, Haryana
                  </p>
                  <a className="mt-1 inline-block text-primary hover:underline" href="tel:+911244715300">
                    +91 124 4715300
                  </a>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </section>

      <section className="bg-[#f5f9fc] px-5 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-center text-[clamp(28px,4vw,36px)] font-bold tracking-[-0.03em]">
            What Happens Next
          </h2>
          <ol className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              "We confirm your slot within one business day.",
              "An engineer reviews your project before the meeting.",
              "You leave with a plan: line options, timeline and your 30-day milestone plan.",
            ].map((step, index) => (
              <li className="flex gap-4 rounded-xl border border-[#dce7ee] bg-white p-5" key={step}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7f3fb] text-sm font-bold text-primary">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-[#526272]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
