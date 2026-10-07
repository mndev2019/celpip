import React from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiPlayCircle,
} from "react-icons/fi";

import practiceImg from "../../../assets/Image/practice.jfif";
import expertImg from "../../../assets/Image/webinar.jfif";
import studyImg from "../../../assets/Image/selfplaced.jfif";
import { useNavigate } from "react-router-dom";

function PreparationSection() {
  const navigate = useNavigate();
const preparationOptions = [
  {
    number: "01",
    tag: "PRACTICE",
    title: "Take a Free Practice Test",
    description:
      "Get comfortable with the test format, timing, and real question types through our free online practice tests. Review answers and build your confidence in Listening and Reading.",
    button: "Contact Us",
    image: practiceImg,
    icon: FiPlayCircle,
    iconBg: "bg-[#FFF3E0]",
    iconColor: "text-[#F97316]",
  },
  {
    number: "02",
    tag: "EXPERT GUIDANCE",
    title: "Get Help From Experts",
    description:
      "Learn directly from experienced instructors through expert-led webinars with useful tips, strategies, and live Q&A.",
    button: "Contact Us",
    image: expertImg,
    icon: FiCheckCircle,
    iconBg: "bg-[#FFEDD5]",
    iconColor: "text-[#EA580C]",
  },
  {
    number: "03",
    tag: "SELF-PACED",
    title: "Study at Your Own Pace",
    description:
      "Learn whenever it works for you with self-paced courses featuring 50+ instructional videos, quizzes, and sample response analysis.",
    button: "Contact Us",
    image: studyImg,
    icon: FiBookOpen,
    iconBg: "bg-[#FFF7ED]",
    iconColor: "text-[#F59E0B]",
  },
];

  return (
    <section className="relative overflow-hidden bg-[#FFF9F4] py-20 sm:py-24 lg:py-28">
      
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#FF8A00]/10 opacity-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#FF8A00]/10 opacity-50 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-[#FF8A00]/10 blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ebcdb7] bg-white px-4 py-2 text-xs font-bold tracking-[0.16em] text-[#F56700] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#F56700]" />
            WAYS TO PREPARE
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#211A3A] sm:text-4xl lg:text-5xl">
            Prepare Your Way.
            <span className="block bg-gradient-to-r from-[#E85D00] to-[#FF8A3D] bg-clip-text text-transparent">
              Perform With Confidence.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6B6680] sm:text-lg">
            Choose the learning option that works best for you and build the
            skills, strategies, and confidence you need for test day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 lg:grid-cols-3 lg:items-start lg:gap-8">

          {preparationOptions.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className={`group relative overflow-hidden rounded-[30px] border border-[#E7E0F8] bg-white shadow-[0_15px_50px_rgba(88,61,145,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(88,61,145,0.15)] ${
                  index === 1 ? "lg:mt-10" : ""
                } ${
                  index === 2 ? "lg:mt-20" : ""
                }`}
              >

                {/* Top Image Area */}
                <div className="relative h-[245px] overflow-hidden bg-gradient-to-br from-[#F3EEFF] to-[#E9DEFF]">

                  {/* Number */}
                  <div className="absolute left-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-sm font-extrabold text-[#F56700] shadow-sm backdrop-blur">
                    {item.number}
                  </div>

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24183F]/25 via-transparent to-transparent" />

                  {/* Floating Icon */}
                  <div
                    className={`absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} shadow-lg ring-4 ring-white/70 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105`}
                  >
                    <Icon size={25} strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8">

                  {/* Tag */}
                  <span className="text-[11px] font-extrabold tracking-[0.18em] text-[#F56700]">
                    {item.tag}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#211A3A]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 min-h-[112px] text-[15px] leading-7 text-[#6B6680]">
                    {item.description}
                  </p>

                  {/* Button */}
                  <button
                  onClick={()=> navigate('/contact')}
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#211A3A] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#F56700] hover:shadow-lg hover:shadow-[#7C4DFF]/25"
                  >
                    {item.button}

                    <FiArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#E85D00] to-[#FF8A3D] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-14 flex justify-center lg:mt-20">
          <div className="flex max-w-xl items-center gap-3 rounded-2xl border border-[#E4DBF7] bg-white/80 px-5 py-4 text-center shadow-sm backdrop-blur sm:px-7">
            <FiCheckCircle
              className="shrink-0 text-[#fd6902]"
              size={21}
            />

            <p className="text-sm font-medium leading-6 text-[#625B78]">
              Flexible preparation options designed to help you feel ready
              and confident on test day.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PreparationSection;