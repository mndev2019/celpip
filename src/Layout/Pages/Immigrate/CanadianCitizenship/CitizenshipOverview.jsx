import React from "react";
import {
  FiGlobe,
  FiHeadphones,
  FiMic,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

const CitizenshipOverview = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      {/* Background Decoration */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              <FiGlobe />
              Canadian Citizenship
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              What is{" "}
              <span className="text-purple-600">
                Madhav IT Services?
              </span>
            </h2>

            <div className="mt-6 space-y-5">
              <p className="text-lg leading-8 text-slate-600">
                Madhav IT Services provides guidance and support for English
                language requirements that may be relevant to your Canadian
                citizenship journey.
              </p>

              <p className="leading-8 text-slate-600">
                After obtaining permanent resident status in Canada, you may
                eventually become eligible to apply for Canadian citizenship.
                Our services can help you understand the Listening and
                Speaking requirements associated with the citizenship language
                requirement and prepare accordingly.
              </p>
            </div>

            {/* Note */}
            <div className="mt-7 flex gap-4 rounded-2xl border border-purple-100 bg-purple-50 p-5">
              <FiCheckCircle className="mt-1 shrink-0 text-xl text-purple-600" />

              <p className="text-sm leading-6 text-purple-900">
                <strong>Important:</strong> Eligibility and language
                requirements can vary based on individual circumstances.
                Applicants should review the official Government of Canada
                citizenship requirements before booking a test.
              </p>
            </div>

         
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-purple-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl sm:p-9">

              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Language Skills
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    Citizenship Requirement
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl text-purple-600">
                  <FiCheckCircle />
                </div>
              </div>

              {/* Skills */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-purple-200 hover:bg-purple-50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
                    <FiHeadphones />
                  </div>

                  <h4 className="mt-4 font-bold text-slate-900">
                    Listening
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Demonstrate your ability to understand spoken English.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-purple-200 hover:bg-purple-50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
                    <FiMic />
                  </div>

                  <h4 className="mt-4 font-bold text-slate-900">
                    Speaking
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Demonstrate your ability to communicate clearly in English.
                  </p>
                </div>

              </div>

              {/* Bottom Message */}
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-5 text-white">
                <p className="text-sm font-semibold">
                  Prepare with confidence
                </p>

                <p className="mt-1 text-sm leading-6 text-purple-100">
                  Understand the language requirements and get prepared for
                  your Canadian citizenship journey.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CitizenshipOverview;

