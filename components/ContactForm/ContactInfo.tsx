
import { useRef, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === infoRef.current) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  return (
    <div 
      ref={infoRef}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg opacity-0 translate-y-8 transition-all duration-700 border border-white/20 hover:shadow-xl hover:border-white/30"
    >
      <h3 className="text-xl font-bold mb-6 text-jayam-blue">Contact Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-start group hover:scale-105 transition-transform duration-300">
          <div className="w-10 h-10 rounded-full bg-jayam-blue/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-jayam-blue/20">
            <MapPin className="text-jayam-blue" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-700">Address</h4>
            <p className="text-gray-600">3A/7E, 7th St, Sundaravelpuram West, Thalamuthu Nagar, Thoothukudi, Tamil Nadu 628002</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-jayam-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
            <Phone className="text-jayam-blue" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-700">Phone</h4>
            <p className="text-gray-600">+91 98765 43210</p>
            <p className="text-gray-600">+91 98765 43211</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-jayam-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
            <Mail className="text-jayam-blue" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-700">Email</h4>
            <p className="text-gray-600">admissions@jayaminstitute.edu</p>
            <p className="text-gray-600">info@jayaminstitute.edu</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h4 className="font-semibold text-gray-700 mb-3">Connect With Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 rounded-full bg-jayam-blue flex items-center justify-center text-white transition-all hover:bg-jayam-gold hover:text-jayam-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-jayam-blue flex items-center justify-center text-white transition-all hover:bg-jayam-gold hover:text-jayam-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-jayam-blue flex items-center justify-center text-white transition-all hover:bg-jayam-gold hover:text-jayam-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-jayam-blue flex items-center justify-center text-white transition-all hover:bg-jayam-gold hover:text-jayam-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
