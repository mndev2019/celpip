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
    <section className="relative overflow-hidden bg-[#F4F1FF] py-20 md:py-24">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-[#7C3AED]/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#FF6B4A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#18132F] px-4 py-2 text-sm font-semibold text-[#CBB8FF]">
              <FiGlobe size={16} />
              Canadian Residency
            </div>

            <h2 className="text-4xl font-bold leading-tight text-[#18132F] md:text-5xl">
              Understand Your
              <span className="block text-[#7C3AED]">
                Canadian Residency Pathway
              </span>
            </h2>

            <div className="mt-6 flex gap-2">
              <span className="h-1.5 w-14 rounded-full bg-[#7C3AED]" />
              <span className="h-1.5 w-7 rounded-full bg-[#FF6B4A]" />
            </div>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#5B536F]">
              Madhav IT Services helps you understand the English-language
              requirements and available pathways involved in the Canadian
              residency process.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#6D6580]">
              Your requirements may vary depending on the immigration pathway
              you choose and your individual circumstances.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative">

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
                    className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/50 hover:bg-white/[0.1]"
                  >
                    <div className="mt-0.5 flex-shrink-0 text-[#A78BFA]">
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
            <div className="absolute -bottom-5 -right-5 -z-0 h-24 w-24 rounded-full border border-[#7C3AED]/30" />

          </div>

        </div>
      </div>
    </section>
  );
}

export default ResidencyOverview;