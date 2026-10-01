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
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background Shapes */}
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            <FiClock />
            About the Test
          </span>

          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Your Complete{" "}
            <span className="text-purple-600">
              English Language Test
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            At Madhav IT Services, we provide information and preparation
            support for an English language test that takes approximately
            2 hours and 50 minutes and is completed in a single sitting.
          </p>
        </div>

        {/* Test Format */}
        <div className="mb-8 rounded-3xl border border-purple-100 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Test Format & Duration
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                The test evaluates four essential areas of English communication.
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
              <FiClock />
              Total Time: 2h 50m
            </div>
          </div>

          {/* Test Sections */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testSections.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
                  {item.icon}
                </div>

                <h4 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm font-medium text-slate-600">
                  {item.questions}
                </p>

                <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-purple-600 shadow-sm">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Pricing */}
          <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 p-7 text-white shadow-xl sm:p-8">
            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl">
                <FiDollarSign />
              </div>

              <div>
                <p className="text-sm font-medium text-purple-100">
                  Test Registration
                </p>

                <h3 className="mt-1 text-3xl font-bold">
                  $299
                  <span className="ml-1 text-base font-medium text-purple-100">
                    + applicable taxes
                  </span>
                </h3>

                <p className="mt-3 text-sm leading-6 text-purple-100">
                  The displayed fee applies to the Canadian test price.
                  Pricing may vary depending on the international test
                  location.
                </p>
              </div>

            </div>
          </div>

          {/* Purpose */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">

            <h3 className="text-xl font-bold text-slate-900">
              What Does the Test Assess?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
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
                  className="rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Company Branding */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            English test information and preparation support by{" "}
            <span className="font-bold text-purple-600">
              Madhav IT Services
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutTest;