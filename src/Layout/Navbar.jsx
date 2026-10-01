
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#EEE8FF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">

          {/* ================= LOGO ================= */}
          <a href="#" className="flex items-center gap-2 group">

            <div className="
              w-10
              h-10
              rounded-xl
              bg-gradient-to-br
              from-[#7C4DFF]
              to-[#A66CFF]
              flex
              items-center
              justify-center
              shadow-md
              shadow-purple-200
              group-hover:scale-105
              transition-transform
            ">
              <span className="text-white font-bold text-lg">
                E
              </span>
            </div>

            <div>
              <h1 className="text-xl font-bold text-[#34205F] leading-none">
                EduPrep
              </h1>

              <p className="text-[10px] text-[#8B819A] tracking-wider uppercase mt-1">
                English Learning
              </p>
            </div>

          </a>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-8">

            {/* <a
              href="#"
              className="relative text-[#34205F] font-medium py-2 group"
            >
              Home

              <span className="
                absolute
                left-0
                bottom-0
                w-full
                h-0.5
                bg-[#7C4DFF]
                scale-x-100
                transition-transform
              >
              </span>
            </a> */}
            <a
              href="/about"
              className="
              text-[#6F6680]
              hover:text-[#7C4DFF]
              font-medium
              transition-colors
              "
            >
              About
            </a>

            <a
              href="#"
              className="
                text-[#6F6680]
                hover:text-[#7C4DFF]
                font-medium
                transition-colors
              "
            >
              Practice
            </a>

            <a
              href="#"
              className="
                text-[#6F6680]
                hover:text-[#7C4DFF]
                font-medium
                transition-colors
              "
            >
              Resources
            </a>

            <a
              href="/contact"
              className="
                text-[#6F6680]
                hover:text-[#7C4DFF]
                font-medium
                transition-colors
              "
            >
              Contact
            </a>

            {/* Login */}
            <button
              className="
                px-5
                py-2.5
                rounded-xl
                border
                border-[#DDD3F2]
                text-[#6841D8]
                font-semibold
                hover:bg-[#F7F4FF]
                hover:border-[#C8B8F2]
                transition-all
              "
            >
              Login
            </button>

            {/* CTA */}
            <button
              className="
                px-5
                py-2.5
                rounded-xl
                bg-[#FF8066]
                hover:bg-[#F06E54]
                text-white
                font-semibold
                shadow-md
                shadow-orange-100
                hover:-translate-y-0.5
                transition-all
              "
            >
              Get Started
            </button>

          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            className="
              md:hidden
              w-11
              h-11
              rounded-xl
              bg-[#F7F4FF]
              text-[#6841D8]
              flex
              items-center
              justify-center
              text-2xl
              hover:bg-[#EEE8FF]
              transition
            "
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          md:hidden
          overflow-hidden
          bg-white
          border-t
          border-[#EEE8FF]
          transition-all
          duration-300
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-5 py-5 flex flex-col gap-2">

          <a
            href="#"
            className="
              px-4
              py-3
              rounded-xl
              bg-[#F7F4FF]
              text-[#6841D8]
              font-semibold
            "
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>

          <a
            href="#"
            className="
              px-4
              py-3
              rounded-xl
              text-[#6F6680]
              hover:bg-[#F7F4FF]
              hover:text-[#6841D8]
              transition
            "
            onClick={() => setIsOpen(false)}
          >
            About
          </a>

          <a
            href="#"
            className="
              px-4
              py-3
              rounded-xl
              text-[#6F6680]
              hover:bg-[#F7F4FF]
              hover:text-[#6841D8]
              transition
            "
            onClick={() => setIsOpen(false)}
          >
            Practice
          </a>

          <a
            href="#"
            className="
              px-4
              py-3
              rounded-xl
              text-[#6F6680]
              hover:bg-[#F7F4FF]
              hover:text-[#6841D8]
              transition
            "
            onClick={() => setIsOpen(false)}
          >
            Resources
          </a>

          <a
            href="#"
            className="
              px-4
              py-3
              rounded-xl
              text-[#6F6680]
              hover:bg-[#F7F4FF]
              hover:text-[#6841D8]
              transition
            "
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          <div className="grid grid-cols-2 gap-3 mt-3">

            <button
              className="
                py-3
                rounded-xl
                border
                border-[#DDD3F2]
                text-[#6841D8]
                font-semibold
                hover:bg-[#F7F4FF]
                transition
              "
            >
              Login
            </button>

            <button
              className="
                py-3
                rounded-xl
                bg-[#FF8066]
                hover:bg-[#F06E54]
                text-white
                font-semibold
                transition
              "
            >
              Get Started
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

