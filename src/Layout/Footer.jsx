import React from "react";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

function Footer() {
  const quickLinks = [
    "About Us",
    "Why Choose Us",
    "Test Format",
    "Test Dates",
  ];

  const preparationLinks = [
    "Practice Tests",
    "Study Materials",
    "Webinars",
    "Preparation Courses",
  ];

  const supportLinks = [
    "Contact Us",
    "FAQs",
    "Test Centres",
    "Help & Support",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#211A3A] text-white">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#7C4DFF]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#A66CFF]/15 blur-3xl" />

      <div className="pointer-events-none absolute right-[30%] top-0 h-40 w-40 rounded-full bg-[#C5A7FF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= TOP CTA ================= */}
        <div className="border-b border-white/10 py-14 sm:py-16 lg:py-20">

          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#7C4DFF] to-[#9B6CFF] px-6 py-10 shadow-2xl shadow-black/20 sm:px-10 lg:px-14 lg:py-12">

            {/* CTA Decorations */}
            <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border-[30px] border-white/10" />
            <div className="absolute -bottom-20 right-28 h-40 w-40 rounded-full border-[20px] border-white/10" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.15em] text-white">
                  READY TO GET STARTED?
                </span>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Your CELPIP journey
                  <span className="block text-white/80">
                    starts here.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
                  Explore preparation resources, practice tests, and helpful
                  tools to build your confidence before test day.
                </p>
              </div>

              <a
                href="#"
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#6D3FE8] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Resources

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEE8FF] transition-transform duration-300 group-hover:rotate-45">
                  <FiArrowUpRight size={17} />
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">

          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C4DFF] to-[#B084FF] text-xl font-extrabold shadow-lg shadow-[#7C4DFF]/20">
                C
              </div>

              <div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  CELPIP
                </h3>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-white/45">
                  ENGLISH PROFICIENCY
                </p>
              </div>

            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Prepare with confidence and take the next step toward your
              goals with trusted CELPIP preparation resources.
            </p>

            {/* Email */}
            <a
              href="mailto:info@example.com"
              className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                <FiMail size={17} />
              </span>
              Get in touch with us
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#9B6CFF] hover:bg-[#7C4DFF] hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}

            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" links={quickLinks} />

          {/* Preparation */}
          <FooterColumn
            title="Prepare"
            links={preparationLinks}
          />

          {/* Support */}
          <FooterColumn
            title="Support"
            links={supportLinks}
          />

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} CELPIP. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Accessibility
            </a>
          </div>

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
          <li key={link}>
            <a
              href="#"
              className="group inline-flex items-center gap-1 text-sm text-white/50 transition-colors duration-200 hover:text-white"
            >
              {link}

              <FiArrowUpRight
                size={13}
                className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;