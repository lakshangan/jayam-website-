
import { useEffect, useRef } from 'react';
import { GraduationCap, Users, Heart, Award, Sparkles } from 'lucide-react';

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
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Premium background with decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f6f0ff] via-[#f3ebff] to-[#faf5ff] -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ecd74a]/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-1/4 -left-24 w-72 h-72 bg-[#46256c]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#ecd74a]/10 rounded-full blur-3xl animate-pulse-soft"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#46256c]/10 text-[#46256c] font-medium text-sm mb-4 animate-fade-in">
            <Sparkles className="inline-block w-4 h-4 mr-2" /> Our Story
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#46256c] mb-6 font-display opacity-0 translate-y-4 transition-all duration-700 ease-out"
              ref={(el) => textRefs.current[0] = el}>
            About Jayam Institute
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Image Column with improved alignment and border */}
          <div ref={imageRef} 
               className="lg:col-span-5 opacity-0 -translate-x-8 transition-all duration-1000 ease-out lg:order-1 order-2">
            <div className="relative group mx-auto lg:mx-0 lg:mr-auto max-w-md">
              {/* Enhanced border and shadow effects */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#ecd74a] to-[#46256c] rounded-xl opacity-30 blur-sm group-hover:opacity-70 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ecd74a]/20 to-[#46256c]/20 rounded-xl blur-lg transform group-hover:scale-105 transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/lovable-uploads/f12752c7-a9cd-4fe8-a9b1-95e2edd3052e.png"
                  alt="Founder"
                  className="rounded-xl relative z-10 w-full object-cover aspect-[4/5] transition-all duration-500 group-hover:scale-[1.02]"
                />
                {/* Decorative corner element */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] rounded-full p-3 shadow-lg z-20 transform -translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                  <Award className="w-6 h-6 text-[#46256c]" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Column with better text alignment */}
          <div ref={contentRef}
               className="lg:col-span-7 opacity-0 translate-x-8 transition-all duration-1000 ease-out lg:order-2 order-1 text-left">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#46256c] to-[#7c43a8] bg-clip-text text-transparent mb-6"
                  ref={(el) => textRefs.current[1] = el}>
                Our Legacy of Excellence
              </h3>
              <p className="text-lg md:text-xl text-gray-700 mb-6 opacity-0 translate-y-4 transition-all duration-700 delay-100 leading-relaxed"
                 ref={(el) => textRefs.current[2] = el}>
                Founded with a vision to empower individuals through quality education in fashion and design, 
                Jayam Institute has been at the forefront of creative education for over two decades. Our 
                institution stands as a beacon of innovation and excellence in the field of fashion design 
                and tailoring education.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-10 opacity-0 translate-y-4 transition-all duration-700 delay-200 leading-relaxed"
                 ref={(el) => textRefs.current[3] = el}>
                We take pride in our comprehensive curriculum that blends traditional craftsmanship with 
                modern design techniques, preparing our students for successful careers in the fashion industry.
              </p>

              {/* Feature Cards with enhanced styling and animations */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                    className="group relative bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 opacity-0 translate-y-4"
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                    ref={(el) => textRefs.current[index + 4] = el}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#46256c]/5 to-[#ecd74a]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ecd74a] to-[#46256c] rounded-xl opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500"></div>
                    <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                      <div className="bg-[#f4f0ff] p-3 rounded-full transform group-hover:scale-110 transition-all duration-500">
                        {feature.icon}
                      </div>
                      <h4 className="font-bold text-[#46256c] text-xl">{feature.title}</h4>
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
