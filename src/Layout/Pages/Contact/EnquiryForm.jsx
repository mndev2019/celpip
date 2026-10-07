import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {
  FiArrowRight,

  FiMail,
  FiMessageSquare,
  FiPhone,
  FiUser,
} from "react-icons/fi";
import { BaseUrl } from "../../../API/BaseUrl";


function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      `${BaseUrl}/contact`,
      formData
    );

    console.log("Enquiry submitted:", response.data);

    toast.success("Enquiry submitted successfully!");

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  } catch (error) {
    console.error(
      "Enquiry submission error:",
      error.response?.data || error.message
    );

    toast.error(
      error.response?.data?.message ||
        "Unable to submit enquiry. Please try again."
    );
  }
};

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[#f7e0ce] bg-white p-6 shadow-[0_20px_60px_rgba(88,61,145,0.10)] sm:p-8 lg:p-10">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#EEE8FF] blur-3xl" />

      <div className="relative">

        {/* Heading */}
        <div className="mb-8">
          <span className="text-xs font-extrabold tracking-[0.18em] text-[#fd6902]">
            SEND AN ENQUIRY
          </span>

          <h2 className="mt-2 text-2xl font-extrabold text-[#211A3A] sm:text-3xl">
            How can we help you?
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#6B6680]">
            Have a question about the test, preparation, or registration?
            Send us your details and our team will get back to you.
          </p>
        </div>

     

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name + Email */}
          <div className="grid gap-5 sm:grid-cols-2">

            <FormInput
              icon={FiUser}
              label="Full Name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <FormInput
              icon={FiMail}
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          {/* Phone + Subject */}
          <div className="grid gap-5 sm:grid-cols-2">

            <FormInput
              icon={FiPhone}
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />

            <FormInput
              icon={FiMessageSquare}
              label="Subject"
              name="subject"
              placeholder="What can we help with?"
              value={formData.subject}
              onChange={handleChange}
              required
            />

          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-bold text-[#30294A]">
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here..."
              className="w-full resize-none rounded-2xl border border-[#E4DCF4] bg-[#FCFBFF] px-4 py-3.5 text-sm text-[#211A3A] outline-none transition-all placeholder:text-[#AAA3BA] focus:border-[#fd6902] focus:bg-white focus:ring-4 focus:ring-[#7C4DFF]/10"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl   bg-gradient-to-r
                  from-[#FF3D00]
                  via-[#FF6500]
                  to-[#FF9D00]
                  hover:from-[#E93600]
                  hover:via-[#F45700]
                  hover:to-[#F28A00]
                  text-white px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#7C4DFF]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#7C4DFF]/30"
          >
            Send Enquiry

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
              <FiArrowRight size={17} />
            </span>
          </button>

          <p className="text-center text-xs text-[#918A9F]">
            We respect your privacy and will only use your information to
            respond to your enquiry.
          </p>

        </form>
      </div>
    </div>
  );
}


/* ================= INPUT COMPONENT ================= */

function FormInput({
  icon: Icon,
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#30294A]">
        {label}
      </label>

      <div className="relative">
        <Icon
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#fd6902]"
        />

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-2xl border border-[#E4DCF4] bg-[#FCFBFF] py-3.5 pl-11 pr-4 text-sm text-[#211A3A] outline-none transition-all placeholder:text-[#AAA3BA] focus:border-[#fd6902] focus:bg-white focus:ring-4 focus:ring-[#7C4DFF]/10"
        />
      </div>
    </div>
  );
}

export default EnquiryForm;