import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from '../assets/Image/logo.jpeg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#EEE8FF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[80px]">

          {/* ================= LOGO ================= */}
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="EduPrep Logo"
              className="
      w-[150px]
      h-auto
      object-contain
      group-hover:scale-[1.02]
      transition-transform
    "
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative py-2 font-medium transition-colors ${isActive
                  ? "text-[#34205F] font-bold"
                  : "text-[#6F6680] hover:text-[#7C4DFF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#7C4DFF]" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative py-2 font-medium transition-colors ${isActive
                  ? "text-[#34205F] font-bold"
                  : "text-[#6F6680] hover:text-[#7C4DFF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#7C4DFF]" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/practice"
              className={({ isActive }) =>
                `relative py-2 font-medium transition-colors ${isActive
                  ? "text-[#34205F] font-bold"
                  : "text-[#6F6680] hover:text-[#7C4DFF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Practice
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#7C4DFF]" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `relative py-2 font-medium transition-colors ${isActive
                  ? "text-[#34205F] font-bold"
                  : "text-[#6F6680] hover:text-[#7C4DFF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Resources
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#7C4DFF]" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative py-2 font-medium transition-colors ${isActive
                  ? "text-[#34205F] font-bold"
                  : "text-[#6F6680] hover:text-[#7C4DFF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Contact
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#7C4DFF]" />
                  )}
                </>
              )}
            </NavLink>

          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            className="
              md:hidden
              w-11 h-11 rounded-xl
              bg-[#F7F4FF]
              text-[#6841D8]
              flex items-center justify-center
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
          border-t border-[#EEE8FF]
          transition-all duration-300
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-5 py-5 flex flex-col gap-2">

          <Link
            to="/"
            className="
              px-4 py-3 rounded-xl
              bg-[#F7F4FF]
              text-[#6841D8]
              font-semibold
            "
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="
              px-4 py-3 rounded-xl
              text-[#6F6680]
              hover:bg-[#F7F4FF]
              hover:text-[#6841D8]
              transition
            "
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            to="/practice"
            className="
              px-4 py-3 rounded-xl
              text-[#6F6680]
              hover:bg-[#F7F4FF]
              hover:text-[#6841D8]
              transition
            "
            onClick={() => setIsOpen(false)}
          >
            Practice
          </Link>

          <Link
            to="/resources"
            className="
              px-4 py-3 rounded-xl
              text-[#6F6680]
              hover:bg-[#F7F4FF]
              hover:text-[#6841D8]
              transition
            "
            onClick={() => setIsOpen(false)}
          >
            Resources
          </Link>

          <Link
            to="/contact"
            className="
              px-4 py-3 rounded-xl
              text-[#6F6680]
              hover:bg-[#F7F4FF]
              hover:text-[#6841D8]
              transition
            "
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <div className="grid grid-cols-2 gap-3 mt-3">

            <button
              className="
                py-3 rounded-xl
                border border-[#DDD3F2]
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
                py-3 rounded-xl
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