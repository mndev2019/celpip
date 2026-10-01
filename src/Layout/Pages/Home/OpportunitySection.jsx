// import React from "react";
// import { FiArrowUpRight } from "react-icons/fi";

// import student from "../../../assets/Image/banner.jfif";
// import passport from "../../../assets/Image/banner.jfif";
// import family from "../../../assets/Image/banner.jfif";

// const cards = [
//   {
//     title: "Study Abroad Pathway",
//     desc: "Build strong English skills and prepare confidently for international education opportunities.",
//     image: student,
//     bg: "from-[#D7E8FF] to-[#EDF5FF]",
//     accent: "#5B8CFF",
//   },
//   {
//     title: "Career Growth",
//     desc: "Improve communication for global workplaces with structured English preparation.",
//     image: passport,
//     bg: "from-[#FFE1E7] to-[#FFF3F6]",
//     accent: "#FF6F91",
//   },
//   {
//     title: "Future Opportunities",
//     desc: "Strengthen your language confidence for immigration, work, and life abroad.",
//     image: family,
//     bg: "from-[#E8DEFF] to-[#F7F2FF]",
//     accent: "#7C4DFF",
//   },
// ];

// function OpportunitySection() {
//   return (
//     <section className="relative overflow-hidden py-20 bg-[#FCFAFF]">

//       {/* Background Shapes */}
//       <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#E8DEFF] blur-3xl opacity-60"></div>
//       <div className="absolute bottom-0 -left-20 w-64 h-64 rounded-full bg-[#FFE7D9] blur-3xl opacity-50"></div>

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

//         {/* Heading */}
//         <div className="max-w-3xl mb-14">

//           <span className="inline-block bg-[#F1EAFF] text-[#7C4DFF] px-4 py-2 rounded-full text-sm font-semibold mb-5">
//             Why Choose Us
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold text-[#34205F] leading-tight">
//             Open New Doors With
//             <span className="text-[#7C4DFF]"> Better English</span>
//           </h2>

//           <p className="mt-5 text-[#6F6680] text-lg leading-8">
//             Whether you're preparing for education, career growth, or life abroad,
//             our learning experience helps you build practical English skills with confidence.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="group relative rounded-[32px] p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl bg-white border border-[#EEE8FF]"
//             >
//               {/* Gradient Top */}
//               <div className={`rounded-[24px] bg-gradient-to-br ${card.bg} p-4 relative overflow-hidden`}>
//                 <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/30"></div>

//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="rounded-[20px] w-full h-64 object-cover group-hover:scale-105 transition duration-500"
//                 />
//               </div>

//               {/* Content */}
//               <div className="mt-6">
//                 <div
//                   className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
//                   style={{ backgroundColor: `${card.accent}20` }}
//                 >
//                   <FiArrowUpRight size={22} color={card.accent} />
//                 </div>

//                 <h3 className="text-2xl font-bold text-[#34205F]">
//                   {card.title}
//                 </h3>

//                 <p className="mt-3 text-[#6F6680] leading-7">
//                   {card.desc}
//                 </p>

//                 <button
//                   className="mt-6 font-semibold flex items-center gap-2 transition group-hover:gap-3"
//                   style={{ color: card.accent }}
//                 >
//                   Learn More
//                   <FiArrowUpRight />
//                 </button>
//               </div>

//               {/* Hover Glow */}
//               <div
//                 className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
//                 style={{
//                   boxShadow: `0 0 40px ${card.accent}25`,
//                 }}
//               ></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default OpportunitySection;

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import student from "../../../assets/Image/banner.jfif";
import passport from "../../../assets/Image/banner.jfif";
import family from "../../../assets/Image/banner.jfif";

const cards = [
  {
    title: "Canadian Residency",
    desc: "CELPIP is recognized by IRCC for meeting English language requirements for temporary and permanent residency in Canada.",
    image: student,
    color: "#7C3AED",
  },
  {
    title: "Canadian Citizenship",
    desc: "CELPIP results can be used to satisfy IRCC's official English language requirement for Canadian citizenship applications.",
    image: passport,
    color: "#FF6B4A",
  },
  {
    title: "Australian Visa",
    desc: "CELPIP helps support Australian visa applications with an English language test accepted by DHA for eligible pathways.",
    image: family,
    color: "#2563EB",
  },
];

function OpportunitySection() {
  return (
    <section className="bg-[#F4F1FF] py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#15112B] text-[#C9B6FF] text-sm font-semibold">
            Global Recognition
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#15112B] leading-tight">
            Your Gateway to
            <span className="text-[#7C3AED]"> Global Opportunity</span>
          </h2>

          <div className="w-24 h-1 bg-[#FF6B4A] rounded-full mt-5 mb-6"></div>

          <p className="text-[#4A4565] text-lg leading-8">
            CELPIP English exams are recognized by official immigration authorities,
            helping candidates meet language requirements for Canada and Australia.
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
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: card.color }}
                >
                  <FiArrowUpRight size={24} />
                </div>

                <h3 className="text-2xl font-bold">{card.title}</h3>

                <p className="mt-4 text-[#D3CFE7] leading-7">
                  {card.desc}
                </p>

                <button
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