import React from "react";
import {
  FiClock,
  FiHeadphones,
  FiMic,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CitizenshipTest = () => {
  const navigate = useNavigate();

  const testSections = [
    {
      icon: <FiHeadphones />,
      title: "Listening",
      questions: "38 Questions",
      duration: "46–55 Minutes",
    },
    {
      icon: <FiMic />,
      title: "Speaking",
      questions: "8 Tasks",
      duration: "15 Minutes",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* Background Effects */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#fd6902]/20 blur-[110px]" />
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
            Get familiar with the test format, duration and language skills
            assessed as part of the Canadian citizenship language requirement.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left Information Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-8">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fd6902]/10 text-2xl text-[#fd6902]">
              <FiClock />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Test Duration
            </p>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-white">
                1h 10m
              </span>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              The assessment takes approximately one hour and ten minutes
              and can be completed in a single sitting without a separate
              speaking session.
            </p>

            {/* Highlight */}
            <div className="mt-7 rounded-2xl border border-[#fd6902]/10 bg-[#fd6902]/5 p-5">
              <div className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-[#fd6902]" />

                <p className="text-sm leading-6 text-slate-300">
                  Both listening and speaking abilities are assessed as part
                  of the test.
                </p>
              </div>
            </div>
          </div>

          {/* Right Test Cards */}
          <div className="grid gap-5 sm:grid-cols-2">

            {testSections.map((section, index) => (
              <div
                key={section.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#fd6902]/30 hover:bg-white/[0.07]"
              >
                <span className="absolute right-6 top-5 text-xs font-bold text-slate-700">
                  0{index + 1}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fd6902]/10 text-2xl text-[#fd6902] transition group-hover:bg-[#fd6902] group-hover:text-white">
                  {section.icon}
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  {section.title}
                </h3>

                <div className="mt-5 space-y-2">
                  <p className="text-sm font-medium text-slate-300">
                    {section.questions}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <FiClock className="text-[#fd6902]" />
                    {section.duration}
                  </div>
                </div>

                <div className="mt-7 h-1 w-10 rounded-full bg-[#fd6902] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}

          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Purpose */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fd6902]/10 text-[#fd6902]">
                <FiCheckCircle />
              </div>

              <h3 className="text-xl font-bold text-white">
                What Does the Test Assess?
              </h3>
            </div>

            <p className="mt-5 leading-8 text-slate-400">
              The test measures a candidate's English listening and speaking
              abilities and is intended to support the language requirement
              for Canadian citizenship applications.
            </p>
          </div>

          {/* Price */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E85D00] via-[#fd6902] to-[#FF9A5C] p-7 shadow-2xl sm:p-8">

            <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-white/10" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#FFF0E6]">
                Test Fee
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-white">
                $199
                <span className="ml-2 text-sm font-medium text-[#FFF0E6]">
                  + applicable taxes
                </span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#FFF5EF]">
                The listed fee is presented as the test price provided in the
                supplied information.
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#C54F00] transition hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Us
                <FiArrowRight />
              </button>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm leading-6 text-slate-500">
            Madhav IT Services can help you understand the test format and
            prepare for the language skills required for your Canadian
            citizenship journey.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CitizenshipTest;