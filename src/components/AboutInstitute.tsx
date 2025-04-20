
import { useEffect, useRef } from 'react';
import { Card, CardContent } from "./ui/card";

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
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title gold-underline pb-4">About The Institute</h2>
          <p className="section-subtitle">
            Excellence in Education, Leadership in Innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div 
            ref={sectionRef}
            className="opacity-0 translate-y-8 transition-all duration-700 hover:transform hover:scale-[1.02] transition-transform duration-500"
          >
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Jayam Institute Campus"
                  className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </CardContent>
            </Card>
          </div>

          <div 
            ref={sectionRef}
            className="opacity-0 translate-y-8 transition-all duration-700 delay-200 space-y-6"
          >
            <p className="text-gray-700 leading-relaxed animate-slide-up">
              Founded with a vision to provide quality education, Jayam Institute has emerged as a leading educational institution committed to academic excellence and holistic development. Our state-of-the-art campus provides an inspiring environment for learning and growth.
            </p>
            <p className="text-gray-700 leading-relaxed animate-slide-up delay-100">
              We take pride in our comprehensive curriculum that combines theoretical knowledge with practical skills, preparing students for successful careers in their chosen fields. Our experienced faculty members bring their industry expertise to the classroom, ensuring that our students receive the best possible education.
            </p>
            <p className="text-gray-700 leading-relaxed animate-slide-up delay-200">
              At Jayam Institute, we believe in nurturing not just academic excellence but also fostering leadership qualities, creativity, and innovation among our students. Our diverse range of programs across various disciplines reflects our commitment to providing comprehensive education that meets the demands of today's dynamic professional landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstitute;
