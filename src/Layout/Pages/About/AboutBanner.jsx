import React from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiUsers,
} from "react-icons/fi";

function AboutBanner() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8FF] py-16 sm:py-20 lg:min-h-[620px] lg:py-24">

      {/* ================= BACKGROUND DECORATIONS ================= */}

      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#E8DDFF] opacity-60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#E5D7FF] opacity-60 blur-3xl" />

      <div className="pointer-events-none absolute right-[35%] top-0 h-32 w-32 rounded-full bg-[#DCCBFF] opacity-40 blur-2xl" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-[8%] top-20 hidden h-24 w-24 rounded-full border border-[#D9CCF4] lg:block" />

      <div className="pointer-events-none absolute right-[11%] top-24 hidden h-16 w-16 rounded-full border border-[#D9CCF4] lg:block" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}

          <div>

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DDD2FF] bg-white px-4 py-2 shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EEE8FF] text-[#7C4DFF]">
                <FiUsers size={13} />
              </span>

              <span className="text-xs font-extrabold tracking-[0.15em] text-[#7C4DFF]">
                ABOUT US
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#211A3A] sm:text-5xl lg:text-[62px]">
              Building better
              <span className="block bg-gradient-to-r from-[#7C4DFF] to-[#A66CFF] bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#6B6680] sm:text-lg">
              Madhav IT Services is focused on creating reliable, innovative,
              and user-friendly digital solutions that help businesses grow,
              connect, and move forward with confidence.
            </p>

            {/* Small highlights */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-sm font-semibold text-[#4C4561]">
                <FiCheckCircle className="text-[#7C4DFF]" size={17} />
                Technology driven
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-[#4C4561]">
                <FiCheckCircle className="text-[#7C4DFF]" size={17} />
                Client focused
              </div>

            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#211A3A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#211A3A]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#7C4DFF] hover:shadow-[#7C4DFF]/25"
              >
              Contact Us

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowRight size={15} />
                </span>
              </a>

            </div>

          </div>


          {/* ================= RIGHT VISUAL ================= */}

          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">

            {/* Main visual container */}
            <div className="relative min-h-[430px] sm:min-h-[480px]">

              {/* Large gradient shape */}
              <div className="absolute right-0 top-5 h-[360px] w-[88%] rounded-[50px] bg-gradient-to-br from-[#7C4DFF] via-[#8E5CFF] to-[#B28AFF] rotate-3 shadow-2xl shadow-[#7C4DFF]/20 sm:h-[410px]" />

              {/* White inner card */}
              <div className="absolute left-0 top-12 z-10 w-[88%] overflow-hidden rounded-[35px] border border-white/70 bg-white p-6 shadow-[0_25px_70px_rgba(65,43,110,0.18)] sm:p-8">

                {/* Top mini label */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEE8FF] text-[#7C4DFF]">
                      <FiCode size={21} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#9A92AA]">
                        Our Focus
                      </p>

                      <p className="text-sm font-extrabold text-[#211A3A]">
                        Digital Solutions
                      </p>
                    </div>

                  </div>

                  <span className="h-3 w-3 rounded-full bg-[#7C4DFF] shadow-[0_0_0_6px_#EEE8FF]" />

                </div>

                {/* Fake dashboard visual */}
                <div className="mt-7 rounded-3xl bg-[#F7F4FC] p-5">

                  <div className="flex items-end gap-2">

                    <div className="h-16 w-1/5 rounded-t-xl bg-[#DDD2F8]" />

                    <div className="h-24 w-1/5 rounded-t-xl bg-[#C9B8F5]" />

                    <div className="h-20 w-1/5 rounded-t-xl bg-[#B59AFF]" />

                    <div className="h-32 w-1/5 rounded-t-xl bg-[#9670FF]" />

                    <div className="h-40 w-1/5 rounded-t-xl bg-[#7C4DFF]" />

                  </div>

                  <div className="mt-4 h-2 w-3/4 rounded-full bg-[#E6E0F1]" />

                  <div className="mt-2 h-2 w-1/2 rounded-full bg-[#ECE8F4]" />

                </div>

                {/* Cards */}
                <div className="mt-5 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl border border-[#EEEAF5] bg-white p-4">

                    <p className="text-xs text-[#91899F]">
                      Approach
                    </p>

                    <p className="mt-1 text-sm font-extrabold text-[#211A3A]">
                      Smart & Simple
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#211A3A] p-4">

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
              <div className="absolute bottom-8 right-0 z-20 w-[190px] rounded-3xl border border-white/80 bg-white p-4 shadow-[0_20px_50px_rgba(55,38,95,0.18)] sm:w-[210px]">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEE8FF] text-[#7C4DFF]">
                    <FiCheckCircle size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-[#938B9F]">
                      Our Promise
                    </p>

                    <p className="text-sm font-extrabold text-[#211A3A]">
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
                    className="h-1.5 w-1.5 rounded-full bg-[#B8A3E8]"
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