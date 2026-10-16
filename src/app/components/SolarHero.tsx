"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import EnquiryModal from "./EnquiryModal";

const siteUrl = "https://solar.novushitech.com";
const brochureUrl = `${siteUrl}/wp-content/uploads/2026/04/New-Solar-Brochure-Final-V4-for-Web.pdf`;

const proofPoints = [
  { value: "1,400+", label: "Robots deployed" },
  { value: "2600+", label: "Professionals" },
  { value: "100+", label: "Enterprise clients" },
];

export default function SolarHero() {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  
  // Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-[#081F3A] text-white"
        id="home"
      >
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <img
            className="h-full w-full object-cover object-center scale-105 transform transition-transform duration-1000"
            src="/images/hero/solar-banner.webp"
            alt=""
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081F3A]/95 via-[#081F3A]/75 to-[#081F3A]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#081F3A]/50 via-transparent to-[#081F3A]/90" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-50"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 85% 45%, rgba(33,126,190,0.35), transparent 50%)",
          }}
        />
        
        {/* Banner */}
        <div
          className="absolute inset-x-0 top-16 z-10 h-9 overflow-hidden border-y border-white/15 bg-[#081F3A]/65 backdrop-blur-sm lg:top-[82px]"
          aria-label="REI Expo 2026 event details"
          role="region"
        >
          <div className="flex h-full w-max animate-[partner-marquee_32s_linear_infinite] items-center hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[false, true].map((isDuplicate) => (
              <div
                className="flex shrink-0 items-center gap-3 py-0 pl-6 pr-20 text-xs font-semibold text-white sm:gap-5 sm:pr-32 sm:text-sm"
                key={isDuplicate ? "duplicate" : "original"}
                aria-hidden={isDuplicate}
              >
                <span>Meet us at REI Expo 2026</span>
                <span className="text-white/60" aria-hidden="true">·</span>
                <span>22nd–24th October 2026</span>
                <span className="text-white/60" aria-hidden="true">·</span>
                <span>Booth A01, Hall 16</span>
                <span className="text-white/60" aria-hidden="true">·</span>
                <a
                  className="text-[#9fd4f5] transition-colors hover:text-white hover:underline"
                  href="https://renewableenergyindiaexpo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isDuplicate ? -1 : undefined}
                >
                  www.renewableenergyindiaexpo.com
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 mx-auto grid min-h-[100vh] w-full min-w-0 max-w-[1440px] items-center gap-12 px-6 pb-16 pt-36 sm:px-8 sm:pt-44 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12 lg:pb-24 lg:pt-48">
          
          {/* Left Side Content */}
          <div className="min-w-0 max-w-[680px]">
            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="max-w-[680px] text-[34px] font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-[44px] lg:text-[48px]"
            >
              Turnkey Solar PV & BESS Manufacturing Lines
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="mt-6 max-w-[590px] text-[17px] leading-[28px] text-white/80"
            >
              Built by roboticists, not equipment traders. 20+ years of
              autonomous systems engineering behind every line. World-leading
              process equipment, integrated with Novus robotics and Novus MES,
              delivered under one contract.
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => setBrochureModalOpen(true)}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[4px] border border-white/70 bg-white/10 px-6 py-2 text-[15px] font-medium text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#081F3A]"
              >
                Download Brochure
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10h11m-4-4 4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Event Details Restored */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
              className="mt-8 max-w-full py-2"
            >
              <span className="mb-1.5 block text-sm font-bold uppercase tracking-[0.14em] text-[#9fd4f5]">
                Event details
              </span>
              <span className="flex w-full max-w-full flex-wrap items-center gap-x-1.5 gap-y-1 text-sm sm:gap-x-2 sm:text-[13px] lg:text-[14px]">
                <span className="inline-flex items-center gap-1 font-bold text-white sm:gap-2.5">
                  Meet us at REI Expo 2026
                </span>
                <span className="text-white/60">·</span>
                <span className="font-semibold text-white/90">
                  22nd–24th October 2026
                </span>
                <span className="text-white/60">·</span>
                <span className="font-semibold text-white/90">
                  Booth A01, Hall 16
                </span>
                <span className="text-white/60">·</span>
                <span className="font-semibold text-white/90">
                  Visit this website to register:
                  <a
                    className="ml-1 inline-flex max-w-full items-center gap-1.5 font-semibold text-[#9fd4f5] [overflow-wrap:anywhere] transition-colors hover:text-white hover:underline"
                    href="https://renewableenergyindiaexpo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.renewableenergyindiaexpo.com
                  </a>
                </span>
              </span>
            </motion.div>
          </div>

          {/* Right Side Lead Generation Form */}
          <div className="relative mx-auto w-full min-w-0 max-w-[500px] lg:ml-auto lg:mt-0 mt-8">
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative w-full rounded-[16px] bg-white p-5 shadow-[0_20px_45px_rgba(0,0,0,0.35)] sm:p-6"
            >
              {isSubmitted ? (
                <div className="flex h-full min-h-[260px] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Thank you!</h3>
                  <p className="text-[14px] text-gray-600">
                    A member of the Novus solar team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="mb-4 text-xl font-bold text-[#081F3A]">Speak to a Solar Expert</h3>
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-[13px] font-medium text-gray-700">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 focus:border-[#1684c7] focus:outline-none focus:ring-1 focus:ring-[#1684c7]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="mb-1 block text-[13px] font-medium text-gray-700">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 focus:border-[#1684c7] focus:outline-none focus:ring-1 focus:ring-[#1684c7]"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="mb-1 block text-[13px] font-medium text-gray-700">Contact Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 focus:border-[#1684c7] focus:outline-none focus:ring-1 focus:ring-[#1684c7]"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="mb-1 block text-[13px] font-medium text-gray-700">Company *</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 focus:border-[#1684c7] focus:outline-none focus:ring-1 focus:ring-[#1684c7]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="mb-1 block text-[13px] font-medium text-gray-700">Project type *</label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 focus:border-[#1684c7] focus:outline-none focus:ring-1 focus:ring-[#1684c7]"
                      >
                        <option value="" disabled>Select your project type</option>
                        <option value="Solar PV Manufacturing">Solar PV Manufacturing (Ingot to Module)</option>
                        <option value="BESS Assembly">BESS Assembly (Cell to Container)</option>
                        <option value="MES Integration">MES Integration</option>
                        <option value="Material Handling Only">Material Handling Only</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1 block text-[13px] font-medium text-gray-700">Message (optional)</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={2}
                        placeholder="Tell us about your project"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full resize-none rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 focus:border-[#1684c7] focus:outline-none focus:ring-1 focus:ring-[#1684c7]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-1 w-full rounded-md bg-[#1684c7] py-2.5 text-[15px] font-bold text-white transition-colors hover:bg-[#11669c] disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Send Enquiry"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-[#dce7ee] bg-white px-6 py-10 sm:py-14 lg:py-[72px]"
        aria-label="Novus deployment experience"
      >
        <dl className="mx-auto grid max-w-[1120px] grid-cols-1 divide-y divide-[#dce7ee] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {proofPoints.map((point, index) => (
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
              className="flex min-h-[84px] flex-col items-center justify-center gap-2 px-2 py-4 text-center sm:min-h-0 sm:gap-2.5 sm:py-0"
              key={point.label}
            >
              <dt className="text-[32px] font-bold leading-none tracking-[-0.045em] text-[#081F3A] sm:text-[40px] lg:text-5xl">
                {point.value}
              </dt>
              <dd className="text-[15px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-[#5b6875]">
                {point.label}
              </dd>
            </motion.div>
          ))}
        </dl>
      </section>

      {brochureModalOpen && (
        <EnquiryModal
          onClose={() => setBrochureModalOpen(false)}
          title="Download the Solar & BESS Brochure"
          description="Enter your details to download the brochure on Solar PV manufacturing or BESS assembly lines."
          submitLabel="Download Brochure"
          subject="Solar PV & BESS brochure request"
          eventSource="Solar_Hero_Brochure_Gate"
          brochureUrl={brochureUrl}
        />
      )}
    </>
  );
}