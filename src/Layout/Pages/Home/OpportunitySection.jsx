import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import student from "../../../assets/Image/banner.jfif";
import passport from "../../../assets/Image/banner.jfif";
import family from "../../../assets/Image/banner.jfif";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "Canadian Residency",
    desc: "Madhav IT Services provides digital solutions and professional support to help businesses and individuals manage their technology needs for Canada-related opportunities.",
    image: student,
    color: "#FF8A00",
    path: "/canadian-residency",
  },
  {
    title: "Canadian Citizenship",
    desc: "Madhav IT Services offers reliable technology solutions and digital support designed to simplify processes for clients pursuing opportunities in Canada.",
    image: passport,
    color: "#FF6B4A",
    path: "/canadian-citizenship",
  },
  {
    title: "Australian Visa",
    desc: "Madhav IT Services delivers professional digital solutions and technology support for individuals and businesses exploring opportunities in Australia.",
    image: family,
    color: "#FF8A00", // Blue removed
    path: "/australian-visa",
  },
];

function OpportunitySection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FFF9F4] py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8A00]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#15112B] text-[#FFB066] text-sm font-semibold">
            Global Recognition
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#15112B] leading-tight">
            Your Gateway to
            <span className="text-[#fd6902]"> Global Opportunity</span>
          </h2>

          <div className="w-24 h-1 bg-[#fd6902] rounded-full mt-5 mb-6"></div>

          <p className="text-[#4A4565] text-lg leading-8">
            Madhav IT Services English exams are recognized by official
            immigration authorities, helping candidates meet language
            requirements for Canada and Australia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`group rounded-[30px] overflow-hidden bg-[#1F1A3A] text-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] ${
                i === 1 ? "lg:mt-10" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `linear-gradient(to top, ${card.color}, transparent)`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <div
                  onClick={() => navigate(card.path)}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 cursor-pointer"
                  style={{ backgroundColor: card.color }}
                >
                  <FiArrowUpRight size={24} />
                </div>

                <h3 className="text-2xl font-bold">{card.title}</h3>

                <p className="mt-4 text-[#D3CFE7] leading-7">
                  {card.desc}
                </p>

                <button
                  onClick={() => navigate(card.path)}
                  className="mt-7 flex items-center gap-2 font-semibold"
                  style={{ color: card.color }}
                >
                  Learn More
                  <FiArrowUpRight />
                </button>
              </div>

              {/* Bottom Accent */}
              <div
                className="h-1 w-full"
                style={{ backgroundColor: card.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpportunitySection;