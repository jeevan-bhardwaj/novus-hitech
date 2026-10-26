"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const inputClass =
  "mt-1 block w-full rounded-lg border border-[#dce5ec] bg-white px-3 py-2.5 text-sm text-[#081f3a] outline-none transition-colors placeholder:text-[#92a0ad] focus:border-[#217ebe] focus:ring-2 focus:ring-[#217ebe]/15";

interface EnquiryModalProps {
  onClose: () => void;
  eventSource?: string;
  title?: string;
  description?: string;
  submitLabel?: string;
  subject?: string;
  brochureUrl?: string;
}

export default function EnquiryModal({
  onClose,
  eventSource = "",
  title = "Speak to a Solar Expert",
  description = "Share your details and our solar team will get back to you.",
  submitLabel = "Send Enquiry",
  subject = "Solar PV & BESS manufacturing line enquiry",
  brochureUrl,
}: EnquiryModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const scrollPositionRef = useRef<{ x: number; y: number } | null>(null);
  const restoreFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (restoreFrameRef.current !== null) {
      window.cancelAnimationFrame(restoreFrameRef.current);
      restoreFrameRef.current = null;
    }

    scrollPositionRef.current ??= { x: window.scrollX, y: window.scrollY };
    const scrollPosition = scrollPositionRef.current;
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;
    const previousBodyStyles = {
      position: bodyStyle.position,
      top: bodyStyle.top,
      width: bodyStyle.width,
      overflow: bodyStyle.overflow,
    };
    const previousHtmlOverflow = htmlStyle.overflow;

    htmlStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollPosition.y}px`;
    bodyStyle.width = "100%";
    bodyStyle.overflow = "hidden";
    setMounted(true);

    return () => {
      htmlStyle.overflow = previousHtmlOverflow;
      bodyStyle.position = previousBodyStyles.position;
      bodyStyle.top = previousBodyStyles.top;
      bodyStyle.width = previousBodyStyles.width;
      bodyStyle.overflow = previousBodyStyles.overflow;
      restoreFrameRef.current = window.requestAnimationFrame(() => {
        window.scrollTo({
          left: scrollPosition.x,
          top: scrollPosition.y,
          behavior: "instant",
        });
        restoreFrameRef.current = null;
      });
    };
  }, []);

  const handleEnquirySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

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
          interest: data.get("interest"),
          meeting_type: data.get("preferredDay"),
          message: data.get("message"),
          eventSource: data.get("event_source") || "Enquiry_Modal_Popup",
          subject,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const result: { error?: string } = await response.json();
      if (!response.ok) {
        throw new Error(result.error ?? "We could not send your enquiry. Please try again.");
      }

      if (brochureUrl) {
        const downloadLink = document.createElement("a");
        downloadLink.href = brochureUrl;
        downloadLink.download = brochureUrl.split("/").pop() ?? "brochure.pdf";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();
        window.location.href = "/exclusive-thank-you";
        return;
      }

      setSubmitted(true);
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto overscroll-contain bg-black/60 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      onClick={onClose}
    >
      <div
        className="relative my-auto max-h-[calc(100dvh-3rem)] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="enquiry-modal-title"
              className="text-[22px] font-bold leading-[1.2] text-[#081F3A]"
            >
              {title}
            </h2>
            {!submitted && (
              <p className="mt-1 text-[13px] leading-relaxed text-[#55636E]">
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="rounded-[4px] border border-[#DCE7EE] px-2 py-1 text-[14px] font-bold text-[#081F3A] transition-colors hover:bg-[#EAF2FA]"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="mt-5 grid gap-4" role="status" aria-live="polite">
            <p className="text-base font-medium leading-relaxed text-[#334155]">
              Thank you. Your enquiry has been sent to our team.
              {brochureUrl ? " Your brochure download should begin shortly." : ""}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-[4px] bg-[#a3cd3a] px-6 py-3 text-[14px] font-semibold text-[#221f20] transition-all hover:bg-[#8db52e]"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="mt-5 grid gap-3.5" onSubmit={handleEnquirySubmit}>
            <input type="hidden" name="event_source" value={eventSource} />
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
                  name="interest"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a line
                  </option>
                  <option>Solar PV line</option>
                  <option>BESS line</option>
                  <option>Both</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="text-xs font-semibold text-[#354b60]">
                Preferred day*
                <select
                  className={inputClass}
                  name="preferredDay"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Choose a day</option>
                  <option>Virtual meeting</option>
                  <option>Office visit</option>
                  <option>Site assessment</option>
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

            {submissionError && (
              <p className="text-sm text-red-700" role="alert">
                {submissionError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#a3cd3a] px-6 py-3 text-[14px] font-semibold text-[#221f20] transition-all hover:bg-[#8db52e] disabled:cursor-wait disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : submitLabel}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body,
  );
}
