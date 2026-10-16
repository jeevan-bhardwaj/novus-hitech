const highlights = [
  {
    title: "Manufacturing Capacity",
    description:
      "Over 1 Lac square feet of production space dedicated to high-tech manufacturing.",
    // High-tech manufacturing / solar facility placeholder
    image: "/images/about/manufacturing-capacity.webp",
    imageAlt: "Automated solar PV manufacturing line with robotic equipment",
  },
  {
    title: "Innovation & R&D",
    description:
      "150+ patents filed. The Hi-Tech Group continuously invests in R&D, driving innovation in smart automation systems.",
    // Robotics and automation placeholder
    image: "/images/about/Innovation-Rd.webp",
    imageAlt: "Robotic arm at work on an automated production line",
  },
];

export default function GroupHighlightsSection() {
  return (
    <section
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-label="Manufacturing capacity and innovation"
    >
      <div className="mx-auto grid w-full max-w-[1240px] gap-6 md:grid-cols-2 md:gap-8">
        {highlights.map((highlight) => (
          <article
            className="group relative h-[340px] w-full overflow-hidden rounded-xl shadow-[0_12px_32px_rgba(8,31,58,0.15)]"
            key={highlight.title}
          >
            {/* Background Image */}
            <img
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={highlight.image}
              alt={highlight.imageAlt}
              loading="lazy"
            />
            
            {/* Theme Gradient Overlay - Dark blue to transparent */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081F3A]/95 via-[#081F3A]/40 to-transparent"></div>

            {/* Content Over Image */}
            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end">
              <h2 className="max-w-[420px] text-[26px] font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-[32px]">
                {highlight.title}
              </h2>
              <p className="mt-3 text-base leading-[1.65] text-gray-200 line-clamp-3">
                {highlight.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}