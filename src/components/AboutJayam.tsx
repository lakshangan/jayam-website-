
import { useEffect, useRef } from 'react';
import { GraduationCap, Users, Heart } from 'lucide-react';

const AboutJayam = () => {
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
    <section id="about-jayam" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f3e8ff] via-[#ede9fe] to-[#faf5ff] opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#46256c] mb-4 font-display animate-fade-in">
            About Jayam Institute
          </h2>
          <div className="w-24 h-1 bg-[#ecd74a] mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between max-w-6xl mx-auto gap-8">
          {/* Image Column */}
          <div 
            ref={imageRef} 
            className="opacity-0 translate-x-[-100px] transition-all duration-1000 w-full lg:w-5/12 flex justify-center lg:sticky lg:top-8"
          >
            <div className="relative w-full max-w-md mx-auto">
              <img
                src="/lovable-uploads/f12752c7-a9cd-4fe8-a9b1-95e2edd3052e.png"
                alt="Founder"
                className="rounded-lg shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500 w-full object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ecd74a]/20 to-[#46256c]/20 rounded-lg z-0 blur-xl"></div>
            </div>
          </div>

          {/* Content Column */}
          <div 
            ref={contentRef}
            className="opacity-0 translate-x-[100px] transition-all duration-1000 w-full lg:w-7/12"
          >
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-[#46256c] mb-6">Our Legacy of Excellence</h3>
              <p className="text-gray-700 mb-6">
                Founded with a vision to empower individuals through quality education in fashion and design, 
                Jayam Institute has been at the forefront of creative education for over two decades. Our 
                institution stands as a beacon of innovation and excellence in the field of fashion design 
                and tailoring education.
              </p>
              <p className="text-gray-700 mb-8">
                We take pride in our comprehensive curriculum that blends traditional craftsmanship with 
                modern design techniques, preparing our students for successful careers in the fashion industry.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <GraduationCap className="w-10 h-10 text-[#46256c] mb-4" />
                    <h4 className="font-bold text-[#46256c] text-lg mb-2">Expert Faculty</h4>
                    <p className="text-gray-600 text-center">Industry professionals with decades of experience</p>
                  </div>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <Users className="w-10 h-10 text-[#46256c] mb-4" />
                    <h4 className="font-bold text-[#46256c] text-lg mb-2">5000+ Alumni</h4>
                    <p className="text-gray-600 text-center">Successful graduates across the country</p>
                  </div>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <Heart className="w-10 h-10 text-[#46256c] mb-4" />
                    <h4 className="font-bold text-[#46256c] text-lg mb-2">Passionate Teaching</h4>
                    <p className="text-gray-600 text-center">Dedicated to student success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJayam;

