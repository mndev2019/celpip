import React from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiUsers,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function AboutBanner() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#FFF9F5] py-16 sm:py-20 lg:min-h-[620px] lg:py-24">

      {/* ================= BACKGROUND DECORATIONS ================= */}

      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#FFE5D2] opacity-60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#FFE1CC] opacity-60 blur-3xl" />

      <div className="pointer-events-none absolute right-[35%] top-0 h-32 w-32 rounded-full bg-[#FFD5B8] opacity-40 blur-2xl" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-[8%] top-20 hidden h-24 w-24 rounded-full border border-[#F5D2BC] lg:block" />

      <div className="pointer-events-none absolute right-[11%] top-24 hidden h-16 w-16 rounded-full border border-[#F5D2BC] lg:block" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}

          <div>

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FFD9C2] bg-white px-4 py-2 shadow-sm">

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF0E6] text-[#fd6902]">
                <FiUsers size={13} />
              </span>

              <span className="text-xs font-extrabold tracking-[0.15em] text-[#fd6902]">
                ABOUT US
              </span>

            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#2A1A12] sm:text-5xl lg:text-[62px]">

              Building better

              <span className="block bg-gradient-to-r from-[#fd6902] to-[#FF9A5C] bg-clip-text text-transparent">
                digital experiences.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#756B65] sm:text-lg">
              Madhav IT Services is focused on creating reliable, innovative,
              and user-friendly digital solutions that help businesses grow,
              connect, and move forward with confidence.
            </p>

            {/* Small highlights */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-sm font-semibold text-[#51463F]">
                <FiCheckCircle className="text-[#fd6902]" size={17} />
                Technology driven
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-[#51463F]">
                <FiCheckCircle className="text-[#fd6902]" size={17} />
                Client focused
              </div>

            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">

              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center gap-3 rounded-full bg-[#2A1A12] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2A1A12]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#fd6902] hover:shadow-[#fd6902]/25"
              >
                Contact Us

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowRight size={15} />
                </span>

              </button>

            </div>

          </div>


          {/* ================= RIGHT VISUAL ================= */}

          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">

            {/* Main visual container */}
            <div className="relative min-h-[430px] sm:min-h-[480px]">

              {/* Large gradient shape */}
              <div className="absolute right-0 top-5 h-[360px] w-[88%] rotate-3 rounded-[50px] bg-gradient-to-br from-[#fd6902] via-[#FF7B21] to-[#FFB27D] shadow-2xl shadow-[#fd6902]/20 sm:h-[410px]" />

              {/* White inner card */}
              <div className="absolute left-0 top-12 z-10 w-[88%] overflow-hidden rounded-[35px] border border-white/70 bg-white p-6 shadow-[0_25px_70px_rgba(120,55,20,0.18)] sm:p-8">

                {/* Top mini label */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF0E6] text-[#fd6902]">
                      <FiCode size={21} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#9B918A]">
                        Our Focus
                      </p>

                      <p className="text-sm font-extrabold text-[#2A1A12]">
                        Digital Solutions
                      </p>
                    </div>

                  </div>

                  <span className="h-3 w-3 rounded-full bg-[#fd6902] shadow-[0_0_0_6px_#FFF0E6]" />

                </div>

                {/* Fake dashboard visual */}
                <div className="mt-7 rounded-3xl bg-[#FFF8F3] p-5">

                  <div className="flex items-end gap-2">

                    <div className="h-16 w-1/5 rounded-t-xl bg-[#FFE0CC]" />

                    <div className="h-24 w-1/5 rounded-t-xl bg-[#FFC9A6]" />

                    <div className="h-20 w-1/5 rounded-t-xl bg-[#FFB27D]" />

                    <div className="h-32 w-1/5 rounded-t-xl bg-[#FF9147]" />

                    <div className="h-40 w-1/5 rounded-t-xl bg-[#fd6902]" />

                  </div>

                  <div className="mt-4 h-2 w-3/4 rounded-full bg-[#F2E3D8]" />

                  <div className="mt-2 h-2 w-1/2 rounded-full bg-[#F6EBE4]" />

                </div>

                {/* Cards */}
                <div className="mt-5 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl border border-[#F1E7E0] bg-white p-4">

                    <p className="text-xs text-[#948A83]">
                      Approach
                    </p>

                    <p className="mt-1 text-sm font-extrabold text-[#2A1A12]">
                      Smart & Simple
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#2A1A12] p-4">

                    <p className="text-xs text-white/45">
                      Commitment
                    </p>

                    <p className="mt-1 text-sm font-extrabold text-white">
                      Built Around You
                    </p>

                  </div>

                </div>

              </div>


              {/* Floating card */}
              <div className="absolute bottom-8 right-0 z-20 w-[190px] rounded-3xl border border-white/80 bg-white p-4 shadow-[0_20px_50px_rgba(120,55,20,0.18)] sm:w-[210px]">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0E6] text-[#fd6902]">
                    <FiCheckCircle size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-[#948A83]">
                      Our Promise
                    </p>

                    <p className="text-sm font-extrabold text-[#2A1A12]">
                      Quality First
                    </p>
                  </div>

                </div>

              </div>


              {/* Decorative dots */}
              <div className="absolute bottom-5 left-5 z-20 grid grid-cols-4 gap-2">

                {Array.from({ length: 16 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-1.5 w-1.5 rounded-full bg-[#F2A06D]"
                  />
                ))}

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutBanner;