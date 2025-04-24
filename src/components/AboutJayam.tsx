
import { useEffect, useRef } from 'react';
import { GraduationCap, Users, Heart } from 'lucide-react';

const AboutJayam = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

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
    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#f3e8ff] via-[#ede9fe] to-[#faf5ff]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#46256c] mb-4 font-display opacity-0 translate-y-4 transition-all duration-700 ease-out"
              ref={(el) => textRefs.current[0] = el}>
            About Jayam Institute
          </h2>
          <div className="w-24 h-1 bg-[#ecd74a] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start max-w-7xl mx-auto">
          {/* Image Column */}
          <div ref={imageRef} 
               className="lg:col-span-5 opacity-0 -translate-x-8 transition-all duration-1000 ease-out">
            <div className="relative">
              <img
                src="/lovable-uploads/f12752c7-a9cd-4fe8-a9b1-95e2edd3052e.png"
                alt="Founder"
                className="rounded-lg shadow-2xl relative z-10 w-full object-cover aspect-[3/4] transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ecd74a]/20 to-[#46256c]/20 rounded-lg z-0 blur-xl"></div>
            </div>
          </div>

          {/* Content Column */}
          <div ref={contentRef}
               className="lg:col-span-7 opacity-0 translate-x-8 transition-all duration-1000 ease-out">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl md:text-3xl font-bold text-[#46256c] mb-6"
                  ref={(el) => textRefs.current[1] = el}>
                Our Legacy of Excellence
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-6 opacity-0 translate-y-4 transition-all duration-700 delay-100"
                 ref={(el) => textRefs.current[2] = el}>
                Founded with a vision to empower individuals through quality education in fashion and design, 
                Jayam Institute has been at the forefront of creative education for over two decades. Our 
                institution stands as a beacon of innovation and excellence in the field of fashion design 
                and tailoring education.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-8 opacity-0 translate-y-4 transition-all duration-700 delay-200"
                 ref={(el) => textRefs.current[3] = el}>
                We take pride in our comprehensive curriculum that blends traditional craftsmanship with 
                modern design techniques, preparing our students for successful careers in the fashion industry.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <GraduationCap className="w-10 h-10 text-[#46256c]" />,
                    title: "Expert Faculty",
                    description: "Industry professionals with decades of experience"
                  },
                  {
                    icon: <Users className="w-10 h-10 text-[#46256c]" />,
                    title: "5000+ Alumni",
                    description: "Successful graduates across the country"
                  },
                  {
                    icon: <Heart className="w-10 h-10 text-[#46256c]" />,
                    title: "Passionate Teaching",
                    description: "Dedicated to student success"
                  }
                ].map((feature, index) => (
                  <div
                    key={feature.title}
                    className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300 opacity-0 translate-y-4"
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                    ref={(el) => textRefs.current[index + 4] = el}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      {feature.icon}
                      <h4 className="font-bold text-[#46256c] text-lg">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJayam;
