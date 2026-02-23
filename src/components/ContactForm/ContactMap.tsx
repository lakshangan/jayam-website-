
import { useRef, useEffect } from 'react';

const ContactMap = () => {
  return (
    <div className="w-full h-full min-h-[400px] relative rounded-[2rem] overflow-hidden border border-border shadow-2xl group">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.47!2d78.16!3d8.815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ee66504a7541%3A0x8673f4e138a68894!2sJayam%20Tailoring%20Institute!5e0!3m2!1sen!2sin!4v1705675000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2) brightness(0.8)" }}
        allowFullScreen
        loading="lazy"
        title="Jayam Institute location"
        className="opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
      ></iframe>
      <div className="absolute inset-0 pointer-events-none border-[1px] border-border rounded-[2rem] z-10" />
    </div>
  );
};

export default ContactMap;
