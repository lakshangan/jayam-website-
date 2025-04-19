
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === formRef.current) {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            } else if (entry.target === mapRef.current) {
              entry.target.classList.add('opacity-100', 'translate-x-0');
            } else if (entry.target === infoRef.current) {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);
    if (mapRef.current) observer.observe(mapRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title gold-underline pb-4">Contact & Inquiry</h2>
          <p className="section-subtitle">
            Get in touch with us to learn more about our programs and admission process
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div 
            ref={formRef}
            className="bg-white p-8 rounded-lg shadow-lg opacity-0 translate-y-8 transition-all duration-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-jayam-blue">Send us a Message</h3>
            
            <form>
              <div className="mb-4 relative">
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jayam-blue/50 transition-all peer"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-3 top-3 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-3 peer-focus:text-sm peer-focus:text-jayam-blue peer-focus:bg-white peer-focus:px-2 peer-placeholder-shown:top-3 peer-focus:-top-3"
                >
                  Your Name
                </label>
              </div>
              
              <div className="mb-4 relative">
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jayam-blue/50 transition-all peer"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-3 top-3 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-3 peer-focus:text-sm peer-focus:text-jayam-blue peer-focus:bg-white peer-focus:px-2 peer-placeholder-shown:top-3 peer-focus:-top-3"
                >
                  Email Address
                </label>
              </div>
              
              <div className="mb-4 relative">
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jayam-blue/50 transition-all peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="phone" 
                  className="absolute left-3 top-3 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-3 peer-focus:text-sm peer-focus:text-jayam-blue peer-focus:bg-white peer-focus:px-2 peer-placeholder-shown:top-3 peer-focus:-top-3"
                >
                  Phone Number
                </label>
              </div>
              
              <div className="mb-4 relative">
                <select 
                  id="program" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jayam-blue/50 transition-all appearance-none"
                >
                  <option value="" disabled selected>Select a Program</option>
                  <option value="engineering">Engineering</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="management">Management</option>
                  <option value="arts">Arts</option>
                  <option value="science">Science</option>
                  <option value="tailoring">Tailoring</option>
                </select>
              </div>
              
              <div className="mb-6 relative">
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jayam-blue/50 transition-all peer"
                  placeholder=" "
                  required
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-3 top-3 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-3 peer-focus:text-sm peer-focus:text-jayam-blue peer-focus:bg-white peer-focus:px-2 peer-placeholder-shown:top-3 peer-focus:-top-3"
                >
                  Your Message
                </label>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="flex flex-col gap-8">
            <div 
              ref={mapRef}
              className="bg-white rounded-lg shadow-lg overflow-hidden h-64 opacity-0 translate-x-8 transition-all duration-700"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3512026490246!2d80.2512368!3d13.0105758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266ea218f1b6b%3A0x5ecf37426dd3db8e!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1619012385945!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Jayam Institute location"
              ></iframe>
            </div>
            
            <div 
              ref={infoRef}
              className="bg-white p-6 rounded-lg shadow-lg opacity-0 translate-y-8 transition-all duration-700"
            >
              <h3 className="text-xl font-bold mb-6 text-jayam-blue">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-jayam-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-jayam-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Address</h4>
                    <p className="text-gray-600">123 Education Street, Chennai, Tamil Nadu, India - 600001</p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
