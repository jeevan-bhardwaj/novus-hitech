"use client";

import type { FormEvent } from "react";

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

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="enquiry-modal-title"
              className="text-[22px] font-bold text-[#081F3A]"
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
    </div>
  );
}
