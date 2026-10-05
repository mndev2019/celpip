import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function ImmigrateBanner(props) {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px] lg:min-h-[650px] overflow-hidden">

      {/* Background Image */}
      <img
        src={props.img}
        alt="Canadian Residency"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F120A]/95 via-[#351806]/75 to-[#351806]/20" />

      {/* Orange Glow */}
      <div className="absolute -top-32 -left-20 w-80 h-80 bg-[#fd6902]/25 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-[520px] md:min-h-[600px] lg:min-h-[650px] flex items-center">

        <div className="max-w-3xl">

          {/* Small Accent */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-16 h-1 rounded-full bg-[#fd6902]" />
            <span className="w-8 h-1 rounded-full bg-[#FF9A5C]" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.08] text-white">
            {props.title}

            <span className="block mt-2 bg-gradient-to-r from-[#FFB27D] via-[#FF9A5C] to-[#fd6902] bg-clip-text text-transparent">
              {props.subtitle}
            </span>
          </h1>

          {/* Contact Button */}
          <div className="mt-9">

            <button
              onClick={() => navigate("/contact")}
              className="
                group
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-[#fd6902]
                hover:bg-[#E85D00]
                text-white
                text-base
                md:text-lg
                font-semibold
                shadow-[0_15px_40px_rgba(253,105,2,0.35)]
                hover:shadow-[0_18px_45px_rgba(253,105,2,0.5)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Contact Us

              <FiArrowRight
                size={21}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>

          </div>

        </div>

      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FFF9F5] to-transparent" />

    </section>
  );
}

export default ImmigrateBanner;