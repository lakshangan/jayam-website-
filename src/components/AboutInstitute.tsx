
import { useEffect, useRef } from 'react';
import { Card } from "./ui/card";

const AboutInstitute = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div 
            ref={sectionRef}
            className="opacity-0 translate-y-8 transition-all duration-700"
          >
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <img 
                src="/lovable-uploads/78aa69bd-81da-42b8-bf5c-1a07a7291726.png"
                alt="Sahaya Selvam - Founder of Jayam Fashion Institute"
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>

          <div 
            ref={sectionRef}
            className="opacity-0 translate-y-8 transition-all duration-700 delay-200 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us - Jayam Fashion Institute
            </h2>
            
            <p className="text-gray-800 leading-relaxed text-lg">
              Welcome to Jayam Fashion Institution, where passion meets craftsmanship. Led by Sahaya Selvam, a visionary with over 22 years of experience in tailoring and fashion, Jayam Fashion Institution is dedicated to providing top-tier education and practical skills in the fields of fashion, tailoring, and beauty.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg">
              Our institution offers a range of specialized courses, including fashion design, tailoring, beauty therapy, and personal grooming, all with government-recognized certifications. We are proud to be affiliated with the National Skill Development Corporation (NSDC), ensuring that our students receive industry-relevant, quality education.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg">
              At Jayam, we believe in empowering our students with the skills and confidence they need to succeed in the dynamic world of fashion and beauty. Whether you're interested in becoming a fashion designer, tailoring expert, or beautician, Jayam Fashion Institution is here to guide you every step of the way.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg font-medium">
              Join us and take the first step toward a successful career in fashion and beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstitute;
