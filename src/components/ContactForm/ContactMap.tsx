
import { useRef, useEffect } from 'react';

const ContactMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === mapRef.current) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) observer.observe(mapRef.current);

    return () => {
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);

  return (
    <div 
      ref={mapRef}
      className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-64 opacity-0 translate-x-8 transition-all duration-700 border border-white/20 hover:shadow-xl hover:border-white/30"
    >
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.6290742069766!2d78.13645731478558!3d8.763776993697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef3a8a7a3c29%3A0x9f7a6923f627f9f9!2s3A%2F7E%2C%207th%20St%2C%20Sundaravelpuram%20West%2C%20Thalamuthu%20Nagar%2C%20Thoothukudi%2C%20Tamil%20Nadu%20628002!5e0!3m2!1sen!2sin!4v1629789456789!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy"
        title="Jayam Institute location"
      ></iframe>
    </div>
  );
};

export default ContactMap;
