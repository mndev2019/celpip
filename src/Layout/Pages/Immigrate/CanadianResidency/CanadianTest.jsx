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

const CanadianTest = () => {
  const navigate = useNavigate();

  const testParts = [
    {
      icon: <FiHeadphones />,
      title: "Listening",
      number: "38",
      label: "Questions",
      duration: "46–55 min",
    },
    {
      icon: <FiBookOpen />,
      title: "Reading",
      number: "38",
      label: "Questions",
      duration: "43–56 min",
    },
    {
      icon: <FiEdit3 />,
      title: "Writing",
      number: "2",
      label: "Questions",
      duration: "53 min",
    },
    {
      icon: <FiMic />,
      title: "Speaking",
      number: "8",
      label: "Tasks",
      duration: "15 min",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">

      {/* Background Decorations */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#fd6902]/20 blur-[100px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#FF9A5C]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#fd6902]/20 bg-[#fd6902]/10 px-4 py-2 text-sm font-semibold text-[#FFB27D]">
            <FiCheckCircle />
            Madhav IT Services
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            About the{" "}
            <span className="text-[#fd6902]">Test</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Get a clear overview of the test format, timing and different
            language skills evaluated throughout the assessment.
          </p>
        </div>

        {/* ================= TOP INFO ================= */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">

          {/* Total Time */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#fd6902]/30 hover:bg-white/[0.07]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                  Total Test Time
                </p>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">
                    2h 50m
                  </span>
                </div>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fd6902]/10 text-2xl text-[#fd6902]">
                <FiClock />
              </div>
            </div>

            <div className="mt-6 h-px bg-white/10" />

            <p className="mt-5 text-sm leading-6 text-slate-400">
              The complete assessment is designed to be completed in a
              single sitting.
            </p>
          </div>

          {/* Skills */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm lg:col-span-2">
            <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
              Skills Evaluated
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {["Speaking", "Reading", "Listening", "Writing"].map(
                (skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200"
                  >
                    <FiCheckCircle className="text-[#fd6902]" />
                    {skill}
                  </div>
                )
              )}
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400">
              The assessment measures practical English communication skills
              across the four key language areas.
            </p>
          </div>
        </div>

        {/* ================= TEST CARDS ================= */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {testParts.map((part, index) => (
            <div
              key={part.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#fd6902]/40 hover:bg-[#fd6902]/[0.06]"
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

              <div className="mt-5 flex items-end gap-2">
                <span className="text-3xl font-bold text-white">
                  {part.number}
                </span>

                <span className="mb-1 text-sm text-slate-500">
                  {part.label}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <FiClock className="text-[#fd6902]" />
                {part.duration}
              </div>

              {/* Bottom Line */}
              <div className="mt-6 h-1 w-10 rounded-full bg-[#fd6902] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* ================= BOTTOM INFORMATION ================= */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.75fr]">

          {/* Description */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fd6902]/10 text-[#fd6902]">
                <FiCheckCircle />
              </div>

              <h3 className="text-xl font-bold text-white">
                What the Assessment Covers
              </h3>
            </div>

            <p className="mt-5 leading-8 text-slate-400">
              The assessment evaluates English speaking, reading, listening
              and writing abilities. These skills can be relevant for
              permanent residence applications, professional designation
              requirements, and certain university, college and vocational
              programs.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Requirements and acceptance criteria can vary depending on the
              specific program or institution.
            </p>
          </div>

          {/* Pricing */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E85D00] via-[#fd6902] to-[#FF9A5C] p-7 shadow-2xl sm:p-8">

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#B84B00]/20" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#FFF0E6]">
                Test Fee
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-white">
                $299
                <span className="ml-2 text-sm font-medium text-[#FFF0E6]">
                  + applicable taxes
                </span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#FFF5EF]">
                The amount shown represents the Canadian pricing. Fees for
                international locations may differ.
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#C54F00] transition hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Madhav IT Services
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* ================= BRAND FOOTER ================= */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Madhav IT Services
          </p>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="h-2 w-2 rounded-full bg-[#fd6902]" />
            Learn. Prepare. Progress.
          </div>
        </div>

      </div>
    </section>
  );
};

export default CanadianTest;