import React from "react";
import {
  FiGlobe,
  FiCheckCircle,
  FiArrowRight,
  FiBriefcase,
  FiFileText,
  FiUsers,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AustralianVisaOverview = () => {
  const navigate = useNavigate();

  const visaPathways = [
    {
      icon: <FiGlobe />,
      title: "Permanent Visas",
      description:
        "English proficiency may be an important part of eligibility for a range of permanent visa pathways.",
    },
    {
      icon: <FiBriefcase />,
      title: "Skilled & Employer-Sponsored Visas",
      description:
        "English language evidence may be required for skilled and employer-sponsored visa categories.",
    },
    {
      icon: <FiFileText />,
      title: "Temporary Graduate Visa",
      description:
        "English language requirements may apply to the Temporary Graduate Visa (Subclass 485).",
    },
    {
      icon: <FiUsers />,
      title: "Other Eligible Visas",
      description:
        "Certain other Australian visa categories may also have specific English language requirements.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Background Decorations */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#FFE1CC]/40 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#FFD5B8]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD9C2] bg-[#FFF7F2] px-4 py-2 text-sm font-semibold text-[#C54F00]">
              <FiGlobe />
              Australian Immigration
            </div>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              English Language{" "}
              <span className="text-[#fd6902]">
                Requirements
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Madhav IT Services helps applicants understand English
              proficiency requirements that may be relevant to their
              Australian immigration and visa journey.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              English language evidence can be required for different
              Australian visa pathways. The specific requirements depend on
              the visa category and the applicant's individual circumstances.
            </p>

            {/* Info Box */}
            <div className="mt-7 flex gap-4 rounded-2xl border border-[#FFD9C2] bg-[#FFF7F2] p-5">
              <FiCheckCircle className="mt-1 shrink-0 text-xl text-[#fd6902]" />

              <p className="text-sm leading-6 text-[#6B3A1E]">
                <strong>Important:</strong> The English score or level you
                need can vary depending on the immigration program and your
                individual circumstances.
              </p>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#fd6902] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#fd6902]/20 transition hover:-translate-y-1 hover:bg-[#E85D00]"
            >
              Contact Us
              <FiArrowRight />
            </button>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-[#fd6902]/10 blur-2xl" />

            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Madhav IT Services
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    Australian Visa Pathways
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF0E6] text-2xl text-[#fd6902]">
                  <FiGlobe />
                </div>
              </div>

              {/* Visa Cards */}
              <div className="mt-6 space-y-4">
                {visaPathways.map((visa) => (
                  <div
                    key={visa.title}
                    className="group flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#FFD0B3] hover:bg-[#FFF7F2] hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E6] text-xl text-[#fd6902] transition group-hover:bg-[#fd6902] group-hover:text-white">
                      {visa.icon}
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900">
                        {visa.title}
                      </h4>

                      <p className="mt-1.5 text-sm leading-6 text-slate-500">
                        {visa.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Highlight */}
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#E85D00] via-[#fd6902] to-[#FF9A5C] p-5">
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 shrink-0 text-white" />

                  <div>
                    <p className="font-semibold text-white">
                      Plan Your Australian Immigration Journey
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#FFF0E6]">
                      Understand the English language requirements that may
                      apply to your chosen visa pathway.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AustralianVisaOverview;