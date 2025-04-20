
import { useEffect, useRef } from 'react';

const TailoringProgram = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add('opacity-100', 'translate-x-0');
            } else if (entry.target === contentRef.current) {
              entry.target.classList.add('opacity-100', 'translate-x-0');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="tailoring" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title gold-underline pb-4">Tailoring Program</h2>
          <p className="section-subtitle">
            Discover our specialized tailoring courses that blend traditional craftsmanship with modern design
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div 
            ref={imageRef}
            className="opacity-0 -translate-x-8 transition-all duration-700 ease-out"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1593030942428-a5451dca4b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Tailoring Workshop" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-jayam-gold p-4 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                <span className="font-display text-jayam-blue text-lg font-bold text-center">25+ Years of Excellence</span>
              </div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="opacity-0 translate-x-8 transition-all duration-700 ease-out space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4 text-jayam-blue">A Legacy of Craftsmanship</h3>
            <p className="text-gray-700">
              For over 25 years, Jayam Institute has been at the forefront of tailoring education, 
              blending traditional craftsmanship with cutting-edge design techniques.
            </p>
            <p className="text-gray-700">
              Students in our tailoring program benefit from state-of-the-art facilities, 
              industry-experienced faculty, and hands-on training that prepares them for 
              successful careers in fashion design, costume creation, and entrepreneurship.
            </p>
            <button className="btn-gold">Join Tailoring Course</button>
          </div>
        </div>

        <div className="mt-16 py-12 bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl shadow-xl">
          <div className="text-center space-y-8">
            <div className="flex justify-center items-center gap-8 flex-wrap px-4">
              <img 
                src="/lovable-uploads/fde4ba77-c46f-4828-9cc3-87e19b36dcd8.png" 
                alt="NSDC Affiliations" 
                className="max-w-full h-auto"
              />
            </div>
            <div className="space-y-4 text-white px-4">
              <h3 className="text-3xl font-bold animate-fade-in-delay-1">LET'S SKILL UP TOGETHER!</h3>
              <div className="space-y-2 text-lg animate-fade-in-delay-2">
                <p>Visit us at: <a href="https://hopestrc.com" className="text-jayam-gold hover:underline">HTTPS://HOPESTRC.COM</a></p>
                <p>Contact: 8015270029 / 7397681673</p>
                <p>HSTRC.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoringProgram;
