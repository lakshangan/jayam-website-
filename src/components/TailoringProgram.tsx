
import { useEffect, useRef } from 'react';
import { Award, Sparkles } from 'lucide-react';

const TailoringProgram = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    cardsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      cardsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="tailoring" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Premium background with decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ede9fe] to-[#fff5f5] -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#46256c]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#ecd74a]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-flex items-center px-3 sm:px-4 py-1.5 bg-[#46256c]/10 text-[#46256c] rounded-full text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#ecd74a]" /> Our Flagship Program
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#46256c] mb-4 font-display px-4">
            Tailoring Program
          </h2>
          <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-[#925ec7] max-w-3xl mx-auto px-4">
            Blending traditional craftsmanship—a legacy of excellence—with bold, modern design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Image with premium styling */}
          <div 
            ref={imageRef}
            className="opacity-0 -translate-x-8 transition-all duration-1000 ease-out group"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ecd74a]/30 to-[#46256c]/30 rounded-xl blur-lg transform group-hover:scale-105 transition-all duration-700"></div>
              <div className="relative flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/edbba000-eab6-4e02-9a4a-a593687c6004.png" 
                  alt="Jayam Institute Logo"
                  className="absolute left-0 top-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg border-2 border-[#ecd74a] bg-white -translate-x-4 sm:-translate-x-6 -translate-y-4 sm:-translate-y-6 z-20"
                />
                <div className="absolute -left-2 -top-2 w-12 h-12 bg-[#46256c]/20 rounded-full blur-md animate-pulse"></div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1593030942428-a5451dca4b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Tailoring Workshop"
                className="rounded-xl shadow-xl w-full max-w-xl h-[280px] sm:h-[370px] object-cover border-4 border-white relative z-10 transform transition-all duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] rounded-full p-2 sm:p-3 shadow-lg z-20">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#46256c]" />
              </div>
            </div>
          </div>

          {/* Content with enhanced typography */}
          <div 
            ref={contentRef}
            className="opacity-0 translate-x-8 transition-all duration-1000 ease-out space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#46256c] to-[#7c43a8] bg-clip-text text-transparent mb-4 sm:mb-6">
              A Legacy of Craftsmanship
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              For over 25 years, Jayam Institute's tailoring program has been recognized for its NSDC-approved, industry-focused courses. Graduates join a lineage of skilled designers and entrepreneurs.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Our curriculum combines hands-on training, expert faculty, and state-of-the-art equipment—grounded in tradition, ready for the future of fashion.
            </p>
            <button className="relative overflow-hidden group px-4 sm:px-6 py-2.5 sm:py-3 mt-4 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] text-[#46256c] text-sm sm:text-base font-bold rounded-lg shadow-[0_4px_12px_rgba(236,215,74,0.3)] hover:shadow-[0_6px_20px_rgba(236,215,74,0.5)] transform transition-all duration-300 hover:-translate-y-1">
              <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative">Join Tailoring Course</span>
            </button>
          </div>
        </div>

        {/* NSDC Section with enhanced design */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20 py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0ff] to-[#fafcff] rounded-2xl shadow-xl border-2 border-[#ecd74a]/50 -z-10"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 rounded-2xl -z-5"></div>
          
          <div className="text-center space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="inline-block relative px-2">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ecd74a]/20 to-[#46256c]/20 blur-md"></div>
              <h3 className="relative text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#46256c] mb-4">
                Proud to be an <span className="bg-gradient-to-r from-[#ecd74a] to-[#ffe195] px-2 sm:px-3 py-1 rounded-md text-[#46256c] inline-block mt-2 sm:mt-0">NSDC Approved Training Centre</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {[
                {title: "Certified by", content: "National Skill Development Corporation (NSDC)"},
                {title: "Certification", content: "Training Center for tailoring & fashion design"},
                {title: "Accredited for", content: "Women Empowerment & Skill Development"},
                {title: "Partners", content: "Skill India, Ministry of Skill Development & Entrepreneurship"},
                {title: "Certification", content: "Nationally recognized certifications"},
                {title: "Support", content: "Government skill upgradation schemes"}
              ].map((item, index) => (
                <div
                  key={index}
                  ref={(el) => cardsRef.current[index] = el}
                  className="premium-card group p-4 sm:p-5 opacity-0 translate-y-4"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col h-full">
                    <span className="font-bold text-sm sm:text-base text-[#46256c] group-hover:gradient-text transition-all duration-300">{item.title}:</span>
                    <div className="text-sm sm:text-base text-gray-700 mt-1 group-hover:text-[#7c43a8] transition-colors duration-300">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="inline-block px-4 sm:px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md text-[#925ec7] font-medium text-xs sm:text-sm md:text-base border border-[#ecd74a]/30">
              <b>Certificate No:</b> JC123456 (Sample Only) <span className="hidden sm:inline">&nbsp; &bull; &nbsp;</span><br className="sm:hidden" /><b>Valid Upto:</b> 18/Oct/2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoringProgram;
