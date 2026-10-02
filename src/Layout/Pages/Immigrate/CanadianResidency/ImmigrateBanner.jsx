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
      <div className="absolute inset-0 bg-gradient-to-r from-[#100C2B]/95 via-[#18133B]/75 to-[#18133B]/20" />

      {/* Purple Glow */}
      <div className="absolute -top-32 -left-20 w-80 h-80 bg-[#7C3AED]/25 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-[520px] md:min-h-[600px] lg:min-h-[650px] flex items-center">

        <div className="max-w-3xl">

          {/* Small Accent */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-16 h-1 rounded-full bg-[#8B5CF6]" />
            <span className="w-8 h-1 rounded-full bg-[#FF6B4A]" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.08] text-white">
{props.title}
        

            <span className="block mt-2 bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#FF8066] bg-clip-text text-transparent">
              {props.subtitle}
          
            </span>

          </h1>

          {/* Contact Button */}
          <div className="mt-9">

            <button
            onClick={()=> navigate('/contact')}
              className="
                group
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-[#FF6B4A]
                hover:bg-[#FF5633]
                text-white
                text-base
                md:text-lg
                font-semibold
                shadow-[0_15px_40px_rgba(255,107,74,0.35)]
                hover:shadow-[0_18px_45px_rgba(255,107,74,0.5)]
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
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#F4F1FF] to-transparent" />

    </section>
  );
}

export default ImmigrateBanner;