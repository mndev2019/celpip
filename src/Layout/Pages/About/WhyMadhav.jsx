import React from "react";
import {
  FiArrowRight,
  FiClock,
  FiBookOpen,
  FiMessageCircle,
  FiZap,
} from "react-icons/fi";

function WhyMadhav() {
  const features = [
    {
      icon: FiClock,
      title: "Streamlined Solutions",
      description:
        "Our solutions are designed to simplify processes, save time, and help you complete your digital tasks efficiently.",
    },
    {
      icon: FiMessageCircle,
      title: "Everyday Technology",
      description:
        "We focus on practical, easy-to-use technology that fits naturally into everyday business needs and workflows.",
    },
    {
      icon: FiZap,
      title: "Quick & Reliable Support",
      description:
        "We aim to provide responsive support and dependable solutions so you can keep your digital operations moving.",
    },
    {
      icon: FiBookOpen,
      title: "Useful Digital Resources",
      description:
        "We provide helpful technology resources, guidance, and solutions designed to make digital experiences easier to understand and use.",
    },
  ];

  return (
    <section
      id="why-madhav"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F3] to-[#FFFCFA] py-20 sm:py-24 lg:py-28"
    >

      {/* Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#FFE1CC] opacity-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#FFE5D2] opacity-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-12 max-w-3xl sm:mb-14">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FFD9C2] bg-white px-4 py-2 shadow-sm">

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF0E6] text-[#fd6902]">
              <FiZap size={14} />
            </span>

            <span className="text-xs font-extrabold tracking-[0.16em] text-[#fd6902]">
              WHY MADHAV IT SERVICES?
            </span>

          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#2A1A12] sm:text-4xl lg:text-5xl">

            Technology made
            <span className="bg-gradient-to-r from-[#fd6902] to-[#FF9A5C] bg-clip-text text-transparent">
              {" "}simple and effective.
            </span>

          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#756B65] sm:text-lg">
            Our services are designed to make your digital journey simple,
            convenient, reliable, and effective.
          </p>

        </div>


        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[28px] border border-[#F0E3D9] bg-white p-6 shadow-[0_15px_45px_rgba(120,65,25,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(120,65,25,0.13)] sm:p-7"
              >

                {/* Number */}
                <span className="absolute right-5 top-5 text-xs font-extrabold text-[#EEDDD0]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#FFF0E6] to-[#FFE0CC] text-[#fd6902] transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">

                  <Icon size={27} strokeWidth={1.8} />

                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#FF9A5C]" />

                </div>

                {/* Content */}
                <h3 className="mt-7 text-xl font-extrabold leading-tight text-[#2A1A12]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#756B65]">
                  {feature.description}
                </p>


                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#fd6902] to-[#FF9A5C] transition-all duration-500 group-hover:w-full" />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WhyMadhav;