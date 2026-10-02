import React from "react";
import {
  FiBookOpen,
  FiHeadphones,
  FiEdit3,
  FiMic,
  FiAward,
 FiGlobe, 
  FiArrowRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function AboutServices() {
  const navigate = useNavigate();
  const services = [
    {
      icon: FiBookOpen,
      title: "English Test Preparation",
      description:
        "Get structured preparation support to understand the test format, question types, and key requirements before your exam.",
    },
    {
      icon: FiHeadphones,
      title: "Listening & Reading Practice",
      description:
        "Build stronger comprehension skills through focused practice designed around common listening and reading question formats.",
    },
    {
      icon: FiEdit3,
      title: "Writing Support",
      description:
        "Improve your written English with practical guidance on organizing ideas, expressing information clearly, and completing writing tasks effectively.",
    },
    {
      icon: FiMic,
      title: "Speaking Practice",
      description:
        "Develop greater confidence in spoken English with practice activities focused on clear communication and effective responses.",
    },
    // {
    //   icon: FiAward,
    //   title: "Test Information & Guidance",
    //   description:
    //     "Understand test sections, timing, preparation requirements, scoring information, and other important details in one place.",
    // },
    // {
    //   icon: FiGlobe,
    //   title: "Immigration Language Support",
    //   description:
    //     "Access helpful guidance for understanding English language requirements related to Canadian and Australian immigration pathways.",
    // },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#EEE7FF] opacity-60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#E9DEFF] opacity-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADING ================= */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <span className="inline-flex items-center rounded-full border border-[#DDD2FF] bg-[#FAF8FF] px-4 py-2 text-xs font-extrabold tracking-[0.16em] text-[#7C4DFF]">
              OUR SERVICES
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#211A3A] sm:text-4xl lg:text-5xl">
              What we
              <span className="block bg-gradient-to-r from-[#7C4DFF] to-[#A66CFF] bg-clip-text text-transparent">
                bring to the table.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-[#6B6680] lg:ml-auto lg:pb-1 lg:text-lg">
            Madhav IT Services delivers technology solutions across different
            digital needs, helping businesses simplify their processes,
            improve efficiency, and build dependable digital experiences.
          </p>

        </div>


        {/* ================= SERVICE CARDS ================= */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[28px] border border-[#E8E1F3] bg-[#FCFBFF] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#D9CCF5] hover:bg-white hover:shadow-[0_25px_60px_rgba(88,61,145,0.12)] sm:p-7"
              >

                {/* Number */}
                <div className="absolute right-5 top-5 text-sm font-extrabold text-[#E5DEF1]">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEE8FF] text-[#7C4DFF] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#7C4DFF] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mt-7 text-xl font-extrabold text-[#211A3A]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-[#6B6680]">
                  {service.description}
                </p>



              </div>
            );
          })}

        </div>


        {/* ================= BOTTOM INFO ================= */}

        <div className="mt-10 rounded-[28px] bg-[#211A3A] p-7 sm:p-8 lg:flex lg:items-center lg:justify-between lg:px-10">

          <div className="max-w-3xl">

            <p className="text-xs font-extrabold tracking-[0.16em] text-[#B79AFF]">
              OUR APPROACH
            </p>

            <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              Technology built around your needs.
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/55 sm:text-base">
              From development to ongoing technology support, our focus is on
              delivering solutions that are practical, dependable, and easy to
              use.
            </p>

          </div>

          <button
            onClick={() => navigate('/contact')}
            className="group mt-6 inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#211A3A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EEE8FF] lg:mt-0"
          >
            Talk to Us

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EEE8FF] text-[#7C4DFF] transition-transform duration-300 group-hover:translate-x-1">
              <FiArrowRight size={15} />
            </span>
          </button>

        </div>

      </div>
    </section>
  );
}

export default AboutServices;