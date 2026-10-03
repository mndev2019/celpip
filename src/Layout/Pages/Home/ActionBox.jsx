import React from "react";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function ActionBox() {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-6 bg-[#F4F1FF]">
      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#15112B] via-[#24124D] to-[#3B1E78] px-8 py-14 md:px-14 md:py-16">

          {/* Decorative Glow */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#7C3AED]/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#FF6B4A]/20 rounded-full blur-3xl"></div>

          {/* Dotted Pattern */}
          <div className="absolute top-8 right-8 opacity-15">
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
              {Array.from({ length: 11 }).map((_, y) =>
                Array.from({ length: 11 }).map((_, x) => (
                  <circle
                    key={`${x}-${y}`}
                    cx={x * 16}
                    cy={y * 16}
                    r="2"
                    fill="white"
                  />
                ))
              )}
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* Left Content */}
            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-[#CBB8FF] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FiMapPin />
                Worldwide Test Network
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Find a Test Centre
                <span className="block text-[#B998FF]">
                  Near You
                </span>
              </h2>

              <p className="mt-6 text-[#D8D3F2] text-lg leading-8">
                Access over **200 certified test centres** across **40+ countries**
                and reserve an available exam date within approximately **two weeks**
                in many major cities.
              </p>

            </div>

            {/* Right CTA */}
            <div className="flex flex-col items-start lg:items-end gap-4">

              <button 
               onClick={()=> navigate('/contact')}
              className="group bg-[#FF6B4A] hover:bg-[#F15534] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-[0_15px_40px_rgba(255,107,74,0.35)] hover:-translate-y-1 flex items-center gap-3">
                Contact Us
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[#A99FCF] text-sm">
                Our team can help you choose the nearest available test location.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ActionBox;