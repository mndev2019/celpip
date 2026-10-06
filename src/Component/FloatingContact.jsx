import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingContact = () => {
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/918447733777"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={25} />
      </a>

      {/* Calling */}
      <a
        href="tel:+918447733777"
        aria-label="Call us"
        className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <FaPhoneAlt size={20} />
      </a>

    </div>
  );
};

export default FloatingContact;