import React from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";

const pathways = [
  "Express Entry – Canadian Experience Class (CEC)",
  "Express Entry – Federal Skilled Worker Program (FSWP)",
  "Express Entry – Federal Skilled Trades Program (FSTP)",
  "Provincial Nominee Programs (PNP)",
  "Post-Graduation Work Permit (PGWP)",
  "Start-Up Visa",
];

function ResidencyOverview() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F5] py-20 md:py-24">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-[#fd6902]/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#FF9A5C]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#211A3A] px-4 py-2 text-sm font-semibold text-[#FFB27D]">
              <FiGlobe size={16} />
              Canadian Residency
            </div>

            <h2 className="text-4xl font-bold leading-tight text-[#2A1A12] md:text-5xl">
              Understand Your
              <span className="block text-[#fd6902]">
                Canadian Residency Pathway
              </span>
            </h2>

            <div className="mt-6 flex gap-2">
              <span className="h-1.5 w-14 rounded-full bg-[#fd6902]" />
              <span className="h-1.5 w-7 rounded-full bg-[#FF9A5C]" />
            </div>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#756B65]">
              Madhav IT Services helps you understand the English-language
              requirements and available pathways involved in the Canadian
              residency process.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#847A73]">
              Your requirements may vary depending on the immigration pathway
              you choose and your individual circumstances.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* Immigration Pathways Box */}
            <div className="rounded-[32px] bg-[#18132F] p-7 shadow-[0_25px_70px_rgba(24,19,47,0.22)] md:p-9">

              <div className="mb-7 flex items-center justify-between">

                <div>
                  <p className="text-sm font-medium text-[#AFA5C9]">
                    Explore available
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Immigration Pathways
                  </h3>
                </div>

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {pathways.map((pathway, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#fd6902]/50 hover:bg-white/[0.1]"
                  >
                    <div className="mt-0.5 flex-shrink-0 text-[#FF9A5C]">
                      <FiCheckCircle size={19} />
                    </div>

                    <span className="text-sm leading-6 text-[#E4E0EF]">
                      {pathway}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-sm leading-6 text-[#AAA2BD]">
                  English-language requirements and required scores can vary
                  depending on your selected immigration program and individual
                  circumstances.
                </p>
              </div>

            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-5 -right-5 -z-0 h-24 w-24 rounded-full border border-[#fd6902]/30" />

          </div>

        </div>
      </div>
    </section>
  );
}

export default ResidencyOverview;