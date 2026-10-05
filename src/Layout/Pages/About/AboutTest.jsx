import React from "react";
import {
  FiClock,
  FiHeadphones,
  FiBookOpen,
  FiEdit3,
  FiMic,
  FiDollarSign,
} from "react-icons/fi";

const testSections = [
  {
    title: "Listening",
    questions: "38 Questions",
    time: "46–55 Minutes",
    icon: <FiHeadphones />,
  },
  {
    title: "Reading",
    questions: "38 Questions",
    time: "43–56 Minutes",
    icon: <FiBookOpen />,
  },
  {
    title: "Writing",
    questions: "2 Questions",
    time: "53 Minutes",
    icon: <FiEdit3 />,
  },
  {
    title: "Speaking",
    questions: "8 Tasks",
    time: "15 Minutes",
    icon: <FiMic />,
  },
];

function AboutTest() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F5] py-20">
      {/* Background Shapes */}
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#FFE1CC]/50 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#FFE5D2]/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF0E6] px-4 py-2 text-sm font-semibold text-[#fd6902]">
            <FiClock />
            About the Test
          </span>

          <h2 className="text-3xl font-bold leading-tight text-[#2A1A12] sm:text-4xl lg:text-5xl">
            Your Complete{" "}
            <span className="text-[#fd6902]">
              English Language Test
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#756B65] sm:text-lg">
            At Madhav IT Services, we provide information and preparation
            support for an English language test that takes approximately
            2 hours and 50 minutes and is completed in a single sitting.
          </p>
        </div>

        {/* Test Format */}
        <div className="mb-8 rounded-3xl border border-[#FFE0CC] bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#2A1A12]">
                Test Format & Duration
              </h3>

              <p className="mt-1 text-sm text-[#8A7F77]">
                The test evaluates four essential areas of English communication.
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full bg-[#FFF0E6] px-4 py-2 text-sm font-semibold text-[#fd6902]">
              <FiClock />
              Total Time: 2h 50m
            </div>
          </div>

          {/* Test Sections */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testSections.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#F0E7E1] bg-[#FFF9F5] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFCBAA] hover:bg-white hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-xl text-[#fd6902] transition-all duration-300 group-hover:bg-[#fd6902] group-hover:text-white">
                  {item.icon}
                </div>

                <h4 className="text-lg font-bold text-[#2A1A12]">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm font-medium text-[#756B65]">
                  {item.questions}
                </p>

                <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#fd6902] shadow-sm">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Pricing */}
          <div className="rounded-3xl bg-gradient-to-br from-[#E85D00] to-[#FF8A3D] p-7 text-white shadow-xl sm:p-8">
            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl">
                <FiDollarSign />
              </div>

              <div>
                <p className="text-sm font-medium text-[#FFF0E6]">
                  Test Registration
                </p>

                <h3 className="mt-1 text-3xl font-bold">
                  $299
                  <span className="ml-1 text-base font-medium text-[#FFF0E6]">
                    + applicable taxes
                  </span>
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#FFF0E6]">
                  The displayed fee applies to the Canadian test price.
                  Pricing may vary depending on the international test
                  location.
                </p>
              </div>

            </div>
          </div>

          {/* Purpose */}
          <div className="rounded-3xl border border-[#F0E3D9] bg-white p-7 shadow-sm sm:p-8">

            <h3 className="text-xl font-bold text-[#2A1A12]">
              What Does the Test Assess?
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#756B65]">
              The test measures English proficiency across speaking, reading,
              listening, and writing. It can be used for permanent residence
              applications, professional designations, and admission to
              universities, colleges, and vocational programs.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Speaking",
                "Reading",
                "Listening",
                "Writing",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#FFF0E6] px-4 py-2 text-sm font-semibold text-[#fd6902]"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Company Branding */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#8A7F77]">
            English test information and preparation support by{" "}
            <span className="font-bold text-[#fd6902]">
              Madhav IT Services
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutTest;