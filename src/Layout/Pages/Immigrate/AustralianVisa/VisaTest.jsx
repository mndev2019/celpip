import React from "react";
import {
  FiClock,
  FiHeadphones,
  FiBookOpen,
  FiEdit3,
  FiMic,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const VisaTest = () => {
  const navigate = useNavigate();

  const testParts = [
    {
      icon: <FiHeadphones />,
      title: "Listening",
      count: "38",
      label: "Questions",
      time: "46–55 Minutes",
    },
    {
      icon: <FiBookOpen />,
      title: "Reading",
      count: "38",
      label: "Questions",
      time: "43–56 Minutes",
    },
    {
      icon: <FiEdit3 />,
      title: "Writing",
      count: "2",
      label: "Questions",
      time: "53 Minutes",
    },
    {
      icon: <FiMic />,
      title: "Speaking",
      count: "8",
      label: "Tasks",
      time: "15 Minutes",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#fd6902]/20 blur-[110px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#FF9A5C]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#fd6902]/20 bg-[#fd6902]/10 px-4 py-2 text-sm font-semibold text-[#FFB27D]">
            <FiCheckCircle />
            Madhav IT Services
          </div>

          <h2 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl">
            About the{" "}
            <span className="text-[#fd6902]">Test</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Understand the complete test format, timing and the four English
            language skills assessed during the examination.
          </p>
        </div>

        {/* ================= TEST OVERVIEW ================= */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">

          {/* Duration Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fd6902]/10 text-2xl text-[#fd6902]">
              <FiClock />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Total Duration
            </p>

            <h3 className="mt-2 text-5xl font-extrabold text-white">
              2h 50m
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              The complete test takes approximately 2 hours and 50 minutes
              and is completed in one sitting.
            </p>

            <div className="mt-7 rounded-2xl border border-[#fd6902]/10 bg-[#fd6902]/5 p-5">
              <div className="flex items-start gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-[#fd6902]" />

                <p className="text-sm leading-6 text-slate-300">
                  All four language skills are assessed as part of the
                  complete test.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-5 sm:grid-cols-2">

            {testParts.map((part, index) => (
              <div
                key={part.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#fd6902]/30 hover:bg-white/[0.07]"
              >
                {/* Number */}
                <span className="absolute right-5 top-5 text-xs font-bold text-slate-700">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fd6902]/10 text-xl text-[#fd6902] transition duration-300 group-hover:bg-[#fd6902] group-hover:text-white">
                  {part.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {part.title}
                </h3>

                <div className="mt-4 flex items-end gap-2">
                  <span className="text-3xl font-bold text-white">
                    {part.count}
                  </span>

                  <span className="mb-1 text-sm text-slate-500">
                    {part.label}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                  <FiClock className="text-[#fd6902]" />
                  {part.time}
                </div>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#fd6902] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}

          </div>
        </div>

        {/* ================= BOTTOM INFORMATION ================= */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Description */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fd6902]/10 text-[#fd6902]">
                <FiCheckCircle />
              </div>

              <h3 className="text-xl font-bold text-white">
                What the Test Evaluates
              </h3>
            </div>

            <p className="mt-5 leading-8 text-slate-400">
              The assessment measures English proficiency across speaking,
              reading, listening and writing. The results may be used for
              permanent residence applications, professional designation
              requirements, and by eligible universities, colleges and
              vocational institutions.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Acceptance and requirements can differ depending on the
              immigration pathway or institution.
            </p>
          </div>

          {/* Australian Pricing */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E85D00] via-[#fd6902] to-[#FF9A5C] p-7 shadow-2xl sm:p-8">

            <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-[#B84B00]/20" />

            <div className="relative">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FFF0E6]">
                Australian Pricing
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-white">
                AUD $355
              </h3>

              <p className="mt-1 text-sm text-[#FFF0E6]">
                + applicable taxes
              </p>

              <p className="mt-5 text-sm leading-6 text-[#FFF5EF]">
                This price represents the Australian pricing provided for
                the test. Fees in other countries or regions may vary.
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#C54F00] transition hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Us
                <FiArrowRight />
              </button>

            </div>
          </div>
        </div>

        {/* ================= BRAND FOOTER ================= */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm leading-6 text-slate-500">
            Madhav IT Services helps you understand test requirements and
            prepare for your English language assessment journey.
          </p>
        </div>

      </div>
    </section>
  );
};

export default VisaTest;