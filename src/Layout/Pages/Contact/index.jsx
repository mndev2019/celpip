import React from "react";
import {
  FiClock,
  FiMail,
  FiMapPin,
  FiHeadphones,
  FiPhone,
  FiArrowRight,
} from "react-icons/fi";
import EnquiryForm from "./EnquiryForm";




function ContactUs() {

  return (
    <main className="min-h-screen bg-[#FAF8FF]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#FAF8FF] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">

        {/* Decorations */}
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#E7DBFF] opacity-60 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full bg-[#E9DFFF] opacity-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-[#DDD2FF] bg-white px-4 py-2 text-xs font-extrabold tracking-[0.16em] text-[#7C4DFF] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#7C4DFF]" />
              CONTACT US
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#211A3A] sm:text-5xl lg:text-6xl">
              Let’s start a
              <span className="block bg-gradient-to-r from-[#7C4DFF] to-[#A66CFF] bg-clip-text text-transparent">
                conversation.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6B6680] sm:text-lg">
              Whether you have a question about the test, preparation
              resources, registration, or anything else, we are here to help.
            </p>

          </div>

        </div>
      </section>


      {/* ================= CONTACT CONTENT ================= */}
      <section className="relative pb-20 sm:pb-24 lg:pb-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

            {/* ================= LEFT SIDE ================= */}
            <div className="space-y-6">

              {/* Contact Info Card */}
              <div className="rounded-[30px] bg-[#211A3A] p-7 text-white shadow-[0_20px_60px_rgba(33,26,58,0.18)] sm:p-8">

                <span className="text-xs font-extrabold tracking-[0.18em] text-[#B99AFF]">
                  GET IN TOUCH
                </span>

                <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  We’re here to help.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  Need assistance or have a question? Reach out to our team
                  and we’ll help you find the information you need.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#B99AFF]">
                      <FiMail size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                        Email
                      </p>

                      <a
                        href="mailto:Madirana2005@gmail.com"
                        className="mt-1 block text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        Madirana2005@gmail.com
                      </a>
                    </div>

                  </div>
                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#B99AFF]">
                      <FiPhone size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                        Phone
                      </p>

                      <a
                        href="tel:+918447733777"
                        className="mt-1 block text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        +91 8447733777
                      </a>
                    </div>

                  </div>
                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#B99AFF]">
                      <FiMapPin size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                        Address
                      </p>

                      <p className="mt-1 text-sm font-medium text-white/80">
                        A-69 Arya Nagar Apartment , IP Extension , Delhi-110092
                      </p>
                    </div>

                  </div>







                </div>
              </div>


              {/* Test Centre Card */}
              <div className="rounded-[30px] border border-[#E5DDF3] bg-white p-7 shadow-[0_15px_50px_rgba(88,61,145,0.07)] sm:p-8">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEE8FF] text-[#7C4DFF]">
                  <FiMapPin size={22} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#211A3A]">
                  Looking for a test centre?
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6B6680]">
                  Find available test locations and explore options near
                  you.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=A-69+Arya+Nagar+Apartment%2C+IP+Extension%2C+Delhi-110092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#7C4DFF] transition-colors hover:text-[#5D35D5]"
                >
                  Find Test Centres
                  <FiArrowRight size={16} />
                </a>

              </div>


              {/* Support Card */}
              <div className="rounded-[30px] border border-[#E5DDF3] bg-gradient-to-br from-[#F2ECFF] to-white p-7 sm:p-8">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#7C4DFF] shadow-sm">
                  <FiHeadphones size={22} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#211A3A]">
                  Need help with registration?
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6B6680]">
                  Our team is here to help you with test information, registration,
                  and other queries.
                </p>



              </div>

            </div>


            {/* ================= RIGHT SIDE ================= */}
            <div>
              <EnquiryForm />
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}



export default ContactUs;