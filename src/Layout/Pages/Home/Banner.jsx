
import React from "react";
import { FiArrowRight, FiCheckCircle, FiPlay } from "react-icons/fi";

import banner from "../../../assets/Image/banner.jfif";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F4FF]">

      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D9CCFF] rounded-full blur-3xl opacity-60"></div>

      <div className="absolute top-20 right-0 w-80 h-80 bg-[#FFE0D5] rounded-full blur-3xl opacity-50"></div>

      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#E9DFFF] rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-14 md:py-20 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#E4DAFF] text-[#6841D8] px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-6">
              <FiCheckCircle size={16} />
              Your English Journey Starts Here
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-[#34205F] leading-[1.08] tracking-tight">

              Learn English.

              <span className="block text-[#7C4DFF] mt-2">
                Achieve More.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 text-[#6F6680] text-base sm:text-lg leading-8 max-w-xl">
              Build your English skills with realistic practice,
              expert-designed lessons, and personalized preparation
              that helps you move confidently toward your goals.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              {/* Primary */}
              <button
                onClick={() => navigate('/contact')}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-[#7C4DFF]
                  hover:bg-[#6938E8]
                  text-white
                  font-semibold
                  px-7
                  py-3.5
                  rounded-xl
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-purple-200
                "
              >
                Contact Us

                <FiArrowRight
                  size={19}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>



            </div>

            {/* Stats */}
            <div className="mt-10 flex items-center max-w-lg">

              <div className="pr-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#34205F]">
                  50K+
                </h3>

                <p className="text-sm text-[#817890] mt-1">
                  Learners
                </p>
              </div>

              <div className="h-12 w-px bg-[#DDD3F2]"></div>

              <div className="px-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#34205F]">
                  120+
                </h3>

                <p className="text-sm text-[#817890] mt-1">
                  Practice Tests
                </p>
              </div>

              <div className="h-12 w-px bg-[#DDD3F2]"></div>

              <div className="pl-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#34205F]">
                  95%
                </h3>

                <p className="text-sm text-[#817890] mt-1">
                  Success
                </p>
              </div>

            </div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Main Circle */}
            <div className="
              absolute
              w-[280px]
              h-[280px]
              sm:w-[380px]
              sm:h-[380px]
              lg:w-[470px]
              lg:h-[470px]
              rounded-full
              bg-gradient-to-br
              from-[#D8C9FF]
              to-[#F7D8FF]
            "></div>

            {/* Decorative Ring */}
            <div className="
              absolute
              w-[310px]
              h-[310px]
              sm:w-[410px]
              sm:h-[410px]
              lg:w-[500px]
              lg:h-[500px]
              rounded-full
              border
              border-[#BFA9F5]
              opacity-60
            "></div>

            {/* Image */}
            <div className="
              relative
              z-10
              bg-white
              p-3
              sm:p-4
              rounded-[2rem]
              shadow-[0_25px_70px_rgba(91,67,142,0.18)]
            ">
              <img
                src={banner}
                alt="English test preparation"
                className="
                  w-full
                  max-w-md
                  lg:max-w-lg
                  h-auto
                  rounded-[1.5rem]
                  object-cover
                "
              />
            </div>

            {/* Top Floating Card */}
            <div className="
              absolute
              z-20
              -top-5
              left-0
              sm:left-2
              bg-white
              rounded-2xl
              px-4
              py-3
              shadow-xl
              border
              border-[#EEE8FF]
            ">

              <div className="flex items-center gap-3">

                <div className="
                  w-10
                  h-10
                  rounded-xl
                  bg-[#EEE8FF]
                  flex
                  items-center
                  justify-center
                  text-[#7C4DFF]
                ">
                  <FiCheckCircle size={20} />
                </div>

                <div>
                  <p className="text-xs text-[#8B819A]">
                    Practice Progress
                  </p>

                  <p className="font-bold text-[#4A3866]">
                    Keep Improving
                  </p>
                </div>

              </div>

            </div>

            {/* Bottom Floating Card */}
            <div className="
              absolute
              z-20
              -bottom-5
              right-0
              sm:right-5
              bg-[#FF8066]
              text-white
              rounded-2xl
              px-5
              py-4
              shadow-xl
            ">

              <p className="text-xs text-white/80">
                Your Goal
              </p>

              <p className="text-lg font-bold">
                Better English
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Banner;

