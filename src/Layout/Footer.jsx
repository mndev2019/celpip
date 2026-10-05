
import React from "react";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/Image/logo.png";

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    {
      name: "Canadian Residency",
      path: "/canadian-residency",
    },
    {
      name: "Canadian Citizenship",
      path: "/canadian-citizenship",
    },
    {
      name: "Australian Visa",
      path: "/australian-visa",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#21150F] text-white pt-10">

      {/* ================= DECORATIVE BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#fd6902]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#FF9A5C]/15 blur-3xl" />

      <div className="pointer-events-none absolute right-[30%] top-0 h-40 w-40 rounded-full bg-[#FFB27D]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= TOP CTA ================= */}


        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#2A1A12] via-[#321B0F] to-[#40200F] px-6 py-10 shadow-2xl shadow-black/20 sm:px-10 lg:px-14 lg:py-12">

          {/* CTA Orange Glow */}
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#fd6902]/20 blur-3xl" />

          <div className="absolute -left-16 -bottom-20 h-52 w-52 rounded-full bg-[#FF8A3D]/10 blur-3xl" />

          {/* CTA Decorations */}
          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border-[30px] border-[#fd6902]/10" />

          <div className="absolute -bottom-20 right-28 h-40 w-40 rounded-full border-[20px] border-[#FF8A3D]/10" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <span className="inline-flex rounded-full border border-[#fd6902]/30 bg-[#fd6902]/10 px-4 py-2 text-xs font-bold tracking-[0.15em] text-[#FF9A5C]">
                READY TO GET STARTED?
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                Your journey
                <span className="block text-white/80">
                  starts here.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                Explore our immigration services and get the guidance you
                need to take your next step with confidence.
              </p>

            </div>

            <Link
              to="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#fd6902] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#fd6902]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E85D00] hover:shadow-xl"
            >
              Contact Us

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                <FiArrowUpRight size={17} />
              </span>
            </Link>

          </div>
        </div>



        {/* ================= MAIN FOOTER ================= */}

        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-10">

          {/* ================= BRAND ================= */}

          <div>

            <div className="w-fit rounded-lg bg-white px-3 py-2">

              <Link
                to="/"
                className="flex items-center group"
              >
                <img
                  src={logo}
                  alt="Madhav IT Services"
                  className="
                    w-[150px]
                    h-auto
                    object-contain
                    group-hover:scale-[1.02]
                    transition-transform
                  "
                />
              </Link>

            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Helping individuals explore immigration opportunities with
              reliable information, professional guidance, and dedicated
              support.
            </p>

            {/* Email */}

            <a
              href="mailto:Madirana2005@gmail.com"
              className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                <FiMail size={17} />
              </span>

              Madirana2005@gmail.com
            </a>

            {/* Social */}

            <div className="mt-7 flex items-center gap-3">

              {[
                { icon: FiFacebook, label: "Facebook" },
                { icon: FiInstagram, label: "Instagram" },
                { icon: FiLinkedin, label: "LinkedIn" },
                { icon: FiYoutube, label: "YouTube" },
                { icon: FiTwitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (

                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    text-white/60
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#FF8A3D]
                    hover:bg-[#fd6902]
                    hover:text-white
                  "
                >
                  <Icon size={17} />
                </a>

              ))}

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <FooterColumn
            title="Quick Links"
            links={quickLinks}
          />

          {/* ================= SUPPORT ================= */}

          <div>

            <h4 className="text-sm font-bold text-white">
              Support
            </h4>

            <div className="mt-5 space-y-5">

              {/* Mobile */}

              <a
                href="tel:+918447733777"
                className="flex items-start gap-3 text-sm text-white/55 transition-colors hover:text-white"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FF9A5C]">
                  <FiPhone size={16} />
                </span>

                <span>
                  <span className="block text-xs text-white/35">
                    Mobile
                  </span>

                  <span className="mt-1 block">
                    +91 8447733777
                  </span>
                </span>
              </a>

              {/* Email */}

              <a
                href="mailto:Madirana2005@gmail.com"
                className="flex items-start gap-3 text-sm text-white/55 transition-colors hover:text-white"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FF9A5C]">
                  <FiMail size={16} />
                </span>

                <span>
                  <span className="block text-xs text-white/35">
                    Email
                  </span>

                  <span className="mt-1 block break-all">
                    Madirana2005@gmail.com
                  </span>
                </span>
              </a>

              {/* Address */}

              <div className="flex items-start gap-3 text-sm text-white/55">

                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FF9A5C]">
                  <FiMapPin size={16} />
                </span>

                <span>
                  <span className="block text-xs text-white/35">
                    Address
                  </span>

                  <span className="mt-1 block leading-6">
                    A-69 Arya Nagar Apartment , IP Extension , <br />
                    Delhi-110092,
                  </span>
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Madhav IT Services. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}


/* ================= FOOTER COLUMN ================= */

function FooterColumn({ title, links }) {
  return (
    <div>

      <h4 className="text-sm font-bold text-white">
        {title}
      </h4>

      <ul className="mt-5 space-y-3.5">

        {links.map((link) => (

          <li key={link.name}>

            <Link
              to={link.path}
              className="
                group
                inline-flex
                items-center
                gap-1
                text-sm
                text-white/50
                transition-colors
                duration-200
                hover:text-white
              "
            >
              {link.name}

              <FiArrowUpRight
                size={13}
                className="
                  opacity-0
                  transition-all
                  duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  group-hover:opacity-100
                "
              />

            </Link>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default Footer;

