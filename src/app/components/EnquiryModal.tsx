"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const enquiryEmail = "solar@novushitech.com";

const enquiryFields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { name: "phone", label: "Contact Number", type: "tel", placeholder: "+91" },
  { name: "company", label: "Company", type: "text", placeholder: "Company name" },
];

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

  const handleEnquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = enquiryFields
      .map(({ name, label }) => `${label}: ${String(data.get(name) ?? "")}`)
      .join("\n");
    const eventSourceValue = String(data.get("event_source") ?? "");
    const enquiryBody = eventSourceValue
      ? `${body}\nEvent source: ${eventSourceValue}`
      : body;

    if (brochureUrl) {
      window.open(brochureUrl, "_blank", "noopener,noreferrer");
    }

    window.location.href = `mailto:${enquiryEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(enquiryBody)}`;
    onClose();
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
        className="relative my-auto max-h-[calc(100dvh-3rem)] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
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
            <p className="mt-1 text-[13px] leading-relaxed text-[#55636E]">
              {description}
            </p>
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

        <form className="mt-5 grid gap-3.5" onSubmit={handleEnquirySubmit}>
          <input type="hidden" name="event_source" value={eventSource} />
          {enquiryFields.map((field) => (
            <label
              key={field.name}
              className="grid gap-1.5 text-[13px] font-semibold text-[#081F3A]"
            >
              {field.label}
              <input
                required
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="rounded-[4px] border border-[#DCE7EE] px-3 py-2.5 text-[14px] font-normal text-[#081F3A] outline-none transition-colors placeholder:text-[#9aa7b1] focus:border-[#217EBE]"
              />
            </label>
          ))}

          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#217EBE] px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-[#1a689e]"
          >
            {submitLabel}
          </button>
        </form>
      </div>
    </div>,
    document.body,
  );
}
