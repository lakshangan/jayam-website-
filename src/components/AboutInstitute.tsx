
import { useEffect, useRef } from 'react';
import { CheckCircle, Star, Award } from 'lucide-react';

const AboutInstitute = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden">
      {/* Premium background with decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f6ff] to-[#e8d7ff] -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#46256c]/5 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#ecd74a]/10 rounded-full blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#46256c]/10 text-[#46256c] rounded-full text-sm font-medium mb-4">
            <Star className="inline-block w-4 h-4 mr-2 text-[#ecd74a]" /> Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#46256c] mb-4 font-display opacity-0 translate-y-4 transition-all duration-700 ease-out"
              ref={(el) => itemRefs.current[0] = el as HTMLDivElement}>
            Why Choose Jayam Institute?
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image with premium effects */}
          <div ref={imageRef} className="opacity-0 -translate-x-8 transition-all duration-1000 ease-out group">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ecd74a]/30 to-[#46256c]/30 rounded-2xl blur-lg transform group-hover:scale-105 transition-all duration-700"></div>
              <img
                src="/lovable-uploads/edbba000-eab6-4e02-9a4a-a593687c6004.png"
                alt="Jayam Institute"
                className="relative z-10 rounded-2xl shadow-xl border-4 border-white bg-white p-6 transform transition-all duration-700 group-hover:scale-[1.02] w-full max-w-md mx-auto"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] rounded-full p-3 shadow-lg z-20 opacity-90">
                <Award className="w-6 h-6 text-[#46256c]" />
              </div>
            </div>
          </div>

          {/* Content with enhanced features list */}
          <div ref={contentRef} className="opacity-0 translate-x-8 transition-all duration-1000 ease-out">
            <div className="space-y-6">
              {[
                {
                  title: "Industry-Recognized Certification",
                  description: "Our courses are certified by the National Skill Development Corporation (NSDC), ensuring your qualifications are recognized nationwide."
                },
                {
                  title: "Expert Faculty",
                  description: "Learn from industry professionals with decades of experience in fashion design, tailoring, and beauty care."
                },
                {
                  title: "Hands-On Training",
                  description: "Our curriculum emphasizes practical skills, with 70% of course time dedicated to hands-on projects and real-world applications."
                },
                {
                  title: "Placement Assistance",
                  description: "We maintain strong industry connections to help graduates find employment opportunities in fashion houses, boutiques, and design studios."
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  ref={(el) => itemRefs.current[index + 1] = el}
                  className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-500 opacity-0 translate-y-4 border border-white/50"
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ecd74a]/30 to-[#46256c]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-[#7c43a8] group-hover:text-[#46256c] transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#7c43a8] mb-2 group-hover:text-[#46256c] transition-colors duration-300">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstitute;
