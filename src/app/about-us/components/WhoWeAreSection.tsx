export default function WhoWeAreSection() {
  return (
    <section
      className="bg-[#f5f9fc] px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      id="our-story"
      aria-labelledby="who-we-are-title"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="order-2 relative min-h-[280px] overflow-hidden rounded-2xl bg-[#081f3a] sm:min-h-[380px] lg:order-1 lg:min-h-[480px]">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/robotics-background.jpg"
              alt="Industrial robotics working in a modern manufacturing environment"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081f3a]/90 via-[#081f3a]/15 to-transparent" />
            <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-[#081f3a]/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
              Robotics meets clean energy
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-9 sm:left-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9fd4f5]">
                Built around what matters
              </p>
              <p className="mt-2 max-w-[440px] text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-[32px]">
                Smarter factories. A more sustainable future.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:py-6">
            <p className="mb-4 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-7 bg-current" aria-hidden="true" />
              Who we are
            </p>
            <h2
              className="max-w-[620px] text-[clamp(32px,4vw,42px)] font-bold leading-[1.12] tracking-[-0.04em] text-secondary"
              id="who-we-are-title"
            >
              Intelligent manufacturing for the energy transition.
            </h2>
            <p className="mt-5 text-base leading-[1.8] text-[#52616c]">
              Novus Hi-Tech brings together intelligent robotics, mobility
              solutions and clean-energy manufacturing. Our solar division
              delivers turnkey lines for ingot, wafer, cell and module
              production, alongside battery energy storage systems (BESS).
            </p>
            <p className="mt-4 text-base leading-[1.8] text-[#52616c]">
              We combine world-class process equipment with Novus automation,
              local engineering and ongoing support—helping manufacturers bring
              complex production systems together with confidence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
