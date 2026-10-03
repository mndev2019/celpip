import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import logo from "../assets/Image/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [immigrationOpen, setImmigrationOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setImmigrationOpen(false);
  };

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

            {/* HOME */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative py-2 font-medium transition-colors ${
                  isActive
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

            {/* ABOUT */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative py-2 font-medium transition-colors ${
                  isActive
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

            {/* ================= IMMIGRATION DROPDOWN ================= */}
            <div className="relative">

              <button
                onClick={() => setImmigrationOpen(!immigrationOpen)}
                className={`
                  flex items-center gap-1.5
                  py-2
                  font-medium
                  transition-colors
                  ${
                    immigrationOpen
                      ? "text-[#34205F] font-bold"
                      : "text-[#6F6680] hover:text-[#7C4DFF]"
                  }
                `}
              >
                Immigration

                <HiChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    immigrationOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN */}
              {immigrationOpen && (
                <div
                  className="
                    absolute
                    left-0
                    top-full
                    mt-3
                    w-64
                    rounded-2xl
                    border border-[#E8E0F5]
                    bg-white
                    p-2
                    shadow-[0_15px_45px_rgba(88,61,145,0.12)]
                  "
                >

                  <Link
                    to="/canadian-residency"
                    onClick={() => setImmigrationOpen(false)}
                    className="
                      block
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      text-[#514A63]
                      hover:bg-[#F7F4FF]
                      hover:text-[#7C4DFF]
                      transition
                    "
                  >
                    Canadian Residency
                  </Link>

                  <Link
                    to="/canadian-citizenship"
                    onClick={() => setImmigrationOpen(false)}
                    className="
                      block
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      text-[#514A63]
                      hover:bg-[#F7F4FF]
                      hover:text-[#7C4DFF]
                      transition
                    "
                  >
                    Canadian Citizenship
                  </Link>

                  <Link
                    to="/australian-visa"
                    onClick={() => setImmigrationOpen(false)}
                    className="
                      block
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      text-[#514A63]
                      hover:bg-[#F7F4FF]
                      hover:text-[#7C4DFF]
                      transition
                    "
                  >
                    Australian Visa
                  </Link>

                </div>
              )}
            </div>

            {/* CONTACT */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative py-2 font-medium transition-colors ${
                  isActive
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
              w-11 h-11
              rounded-xl
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
          ${isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-5 py-5 flex flex-col gap-2">

          {/* HOME */}
          <Link
            to="/"
            className="
              px-4 py-3
              rounded-xl
              bg-[#F7F4FF]
              text-[#6841D8]
              font-semibold
            "
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          {/* ABOUT */}
          <Link
            to="/about"
            className="
              px-4 py-3
              rounded-xl
              text-[#6F6680]
              hover:bg-[#F7F4FF]
              hover:text-[#6841D8]
              transition
            "
            onClick={closeMobileMenu}
          >
            About
          </Link>

          {/* ================= MOBILE IMMIGRATION ================= */}
          <div>

            <button
              onClick={() => setImmigrationOpen(!immigrationOpen)}
              className="
                w-full
                flex items-center justify-between
                px-4 py-3
                rounded-xl
                text-[#6F6680]
                hover:bg-[#F7F4FF]
                hover:text-[#6841D8]
                transition
                font-semibold
              "
            >
              <span>Immigration</span>

              <HiChevronDown
                size={20}
                className={`transition-transform duration-200 ${
                  immigrationOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* MOBILE SUBMENU */}
            {immigrationOpen && (
              <div className="mt-1 ml-3 pl-3 border-l-2 border-[#E8E0F5] space-y-1">

                <Link
                  to="/canadian-residency"
                  onClick={closeMobileMenu}
                  className="
                    block
                    px-4 py-3
                    rounded-xl
                    text-sm
                    text-[#6F6680]
                    hover:bg-[#F7F4FF]
                    hover:text-[#6841D8]
                    transition
                  "
                >
                  Canadian Residency
                </Link>

                <Link
                  to="/canadian-citizenship"
                  onClick={closeMobileMenu}
                  className="
                    block
                    px-4 py-3
                    rounded-xl
                    text-sm
                    text-[#6F6680]
                    hover:bg-[#F7F4FF]
                    hover:text-[#6841D8]
                    transition
                  "
                >
                  Canadian Citizenship
                </Link>

                <Link
                  to="/australian-visa"
                  onClick={closeMobileMenu}
                  className="
                    block
                    px-4 py-3
                    rounded-xl
                    text-sm
                    text-[#6F6680]
                    hover:bg-[#F7F4FF]
                    hover:text-[#6841D8]
                    transition
                  "
                >
                  Australian Visa
                </Link>

              </div>
            )}

          </div>

          {/* CONTACT */}
          <Link
            to="/contact"
            className="
              px-4 py-3
              rounded-xl
              text-[#6F6680]
              hover:bg-[#F7F4FF]
              hover:text-[#6841D8]
              transition
            "
            onClick={closeMobileMenu}
          >
            Contact
          </Link>

          {/* BUTTONS */}
          {/* <div className="grid grid-cols-2 gap-3 mt-3">

            <button
              className="
                py-3
                rounded-xl
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

          </div> */}

        </div>
      </div>

    </nav>
  );
}

export default Navbar;