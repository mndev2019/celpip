import React from "react";
import {
  FiClock,
  FiBookOpen,
  FiMessageCircle,
  FiShield,
} from "react-icons/fi";

const features = [
  {
    title: "Quick & Convenient",
    desc: "Complete the English test in a single sitting of around three hours, with results typically available within a few days.",
    icon: FiClock,
    color: "#7C3AED",
    bg: "#2A1E4D",
  },
  {
    title: "Structured Test Preparation",
    desc: "Access practice tests, study materials, webinars, and guided learning resources designed to support your success.",
    icon: FiBookOpen,
    color: "#FF6B4A",
    bg: "#3A1E2A",
  },
  {
    title: "Practical English Skills",
    desc: "Develop communication skills that are useful for education, professional environments, and everyday life.",
    icon: FiMessageCircle,
    color: "#2563EB",
    bg: "#1C2A4A",
  },
  {
    title: "Recognized & Reliable",
    desc: "Created at the University of British Columbia and aligned with CLB and CEFR language standards.",
    icon: FiShield,
    color: "#14B8A6",
    bg: "#173A3A",
  },
];

function WhyChooseSection() {
  return (
    <section className="bg-[#FFF9F4] py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 right-0 w-80 h-80 bg-[#FFE0C2] rounded-full blur-3xl md:block hidden"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FFE0C2] rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block bg-[#15112B] text-[#FFB066] px-4 py-2 rounded-full text-sm font-semibold">
            Why Learners Trust Madhav IT Services
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#15112B] leading-tight">
            Move Forward With
            <span className="text-[#fd6902]"> Confidence</span>
          </h2>

          <div className="w-24 h-1 bg-[#fd6902] rounded-full mt-5 mb-6"></div>

          <p className="text-[#4A4565] text-lg leading-8">
            Madhav IT Services provides a faster, more flexible, and trusted English testing experience,
            giving you confidence during one of the most important stages of your immigration journey.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 top-[350px] h-[420px] w-1 bg-gradient-to-b from-[#7C3AED] via-[#FF6B4A] to-[#2563EB] rounded-full"></div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 relative">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`relative group ${
                  index % 2 === 0 ? "lg:mr-16" : "lg:ml-16 lg:mt-16"
                }`}
              >
                {/* Connector Dot */}
                <div
                  className="hidden lg:flex absolute top-10 -right-8 w-5 h-5 rounded-full border-4 border-[#F4F1FF]"
                  style={{
                    backgroundColor: item.color,
                    right: index % 2 === 0 ? "-34px" : "auto",
                    left: index % 2 !== 0 ? "-34px" : "auto",
                  }}
                />

                <div
                  className="rounded-[30px] p-8 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                  style={{ backgroundColor: item.bg }}
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                  <p className="text-white/80 leading-7">{item.desc}</p>

                  {/* Bottom Accent */}
                  <div
                    className="mt-7 h-1 w-16 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;