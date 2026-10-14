const partnerRows = [
  [
    { name: "John Deere", logo: "john-deere.svg" },
    { name: "Tata Motors", logo: "tata-motors.svg" },
    { name: "Philips", logo: "philips.svg" },
    { name: "VinFast", logo: "vinfast.svg" },
    { name: "Mondelez", logo: "mondelez.svg" },
    { name: "Daikin", logo: "daikin.svg" },
  ],
  [
    { name: "JCB", logo: "jcb.svg" },
    { name: "Mahindra", logo: "mahindra.svg" },
    { name: "Ford", logo: "ford.svg" },
    { name: "AkzoNobel", logo: "akzonobel.svg" },
    { name: "Daimler", logo: "daimler.svg" },
    { name: "Havells", logo: "havells.svg" },
  ],
];

export default function TrustedByManufacturers() {
  return (
    <section
      className="overflow-hidden border-y border-[#dce7ee] bg-[#f5f9fc] pb-8 pt-11 sm:pb-10 sm:pt-14"
      aria-labelledby="trusted-manufacturers-title"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2 className="mb-7 flex items-center justify-center gap-2.5 px-5 text-center text-[10px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-primary sm:mb-9 sm:text-xs sm:tracking-[0.22em]" id="trusted-manufacturers-title">
          <span className="h-px w-3 shrink-0 bg-primary" aria-hidden="true" />
          Trusted by manufacturers across industries
          <span className="h-px w-3 shrink-0 bg-primary" aria-hidden="true" />
        </h2>

        <div className="grid gap-3.5 sm:gap-5">
          {partnerRows.map((row, rowIndex) => (
            <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_3%,#000_97%,transparent)]" key={rowIndex}>
              <div
                className="flex w-max animate-[partner-marquee_40s_linear_infinite] motion-reduce:animate-none hover:[animation-play-state:paused] sm:animate-[partner-marquee_34s_linear_infinite]"
                style={{ animationDirection: rowIndex === 0 ? "reverse" : "normal" }}
              >
                {[false, true].map((isDuplicate) => (
                  <div
                    className="flex gap-3.5 pr-3.5 sm:gap-6 sm:pr-6"
                    key={isDuplicate ? "duplicate" : "original"}
                    aria-hidden={isDuplicate}
                  >
                    {row.map((partner) => (
                      <div className="group flex h-20 w-[165px] flex-[0_0_auto] items-center justify-center overflow-hidden rounded-xl border border-[#dce8ed] bg-white p-4 shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-[0_8px_18px_rgba(15,23,42,0.08)] sm:h-[84px] sm:w-[180px]" key={partner.name}>
                        <img
                          className="block h-auto max-h-12 w-auto max-w-[80%] object-contain transition-transform duration-200 group-hover:scale-105"
                          src={`/images/partners/${partner.logo}`}
                          alt={isDuplicate ? "" : partner.name}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-[22px] max-w-[900px] px-6 text-center text-[11px] leading-relaxed text-[#5d6b77] sm:mt-7 sm:text-sm">
          100+ industrial customers across automotive, FMCG, pharma, paints & chemicals, e-commerce, 3PL, electronics, semiconductor, and petrochemicals.
        </p>
      </div>
    </section>
  );
}
