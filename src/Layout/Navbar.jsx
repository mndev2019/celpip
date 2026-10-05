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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#FFE2CF]">
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
                    ? "text-[#B84B00] font-bold"
                    : "text-[#6F6680] hover:text-[#fd6902]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#fd6902]" />
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
                    ? "text-[#B84B00] font-bold"
                    : "text-[#6F6680] hover:text-[#fd6902]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#fd6902]" />
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
                      ? "text-[#B84B00] font-bold"
                      : "text-[#6F6680] hover:text-[#fd6902]"
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
                    border border-[#FFE0CC]
                    bg-white
                    p-2
                    shadow-[0_15px_45px_rgba(253,105,2,0.12)]
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
                      hover:bg-[#FFF3EA]
                      hover:text-[#fd6902]
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
                      hover:bg-[#FFF3EA]
                      hover:text-[#fd6902]
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
                      hover:bg-[#FFF3EA]
                      hover:text-[#fd6902]
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
                    ? "text-[#B84B00] font-bold"
                    : "text-[#6F6680] hover:text-[#fd6902]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Contact
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#fd6902]" />
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
              bg-[#FFF3EA]
              text-[#fd6902]
              flex items-center justify-center
              text-2xl
              hover:bg-[#FFE5D4]
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
          border-t border-[#FFE2CF]
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
              bg-[#FFF3EA]
              text-[#fd6902]
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
              hover:bg-[#FFF3EA]
              hover:text-[#fd6902]
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
                hover:bg-[#FFF3EA]
                hover:text-[#fd6902]
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
              <div className="mt-1 ml-3 pl-3 border-l-2 border-[#FFE0CC] space-y-1">

                <Link
                  to="/canadian-residency"
                  onClick={closeMobileMenu}
                  className="
                    block
                    px-4 py-3
                    rounded-xl
                    text-sm
                    text-[#6F6680]
                    hover:bg-[#FFF3EA]
                    hover:text-[#fd6902]
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
                    hover:bg-[#FFF3EA]
                    hover:text-[#fd6902]
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
                    hover:bg-[#FFF3EA]
                    hover:text-[#fd6902]
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
              hover:bg-[#FFF3EA]
              hover:text-[#fd6902]
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
                border border-[#FFD8C2]
                text-[#fd6902]
                font-semibold
                hover:bg-[#FFF3EA]
                transition
              "
            >
              Login
            </button>

            <button
              className="
                py-3
                rounded-xl
                bg-[#fd6902]
                hover:bg-[#E85D00]
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

