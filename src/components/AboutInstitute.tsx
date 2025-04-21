import { useEffect, useRef } from 'react';

const AboutInstitute = () => {
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
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-[#f9f6ff] to-[#e8d7ff]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="/lovable-uploads/edbba000-eab6-4e02-9a4a-a593687c6004.png"
            alt="Jayam Institute"
            className="rounded-2xl shadow-xl border-4 border-[#ecd74a] w-80 h-80 object-contain bg-white p-3"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#46256c]">Why Choose Jayam Institute?</h2>
          <div className="space-y-4">
            <div className="bg-white/50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#7c43a8] mb-2">Industry-Recognized Certification</h3>
              <p className="text-gray-700">Our courses are certified by the National Skill Development Corporation (NSDC), ensuring your qualifications are recognized nationwide.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#7c43a8] mb-2">Expert Faculty</h3>
              <p className="text-gray-700">Learn from industry professionals with decades of experience in fashion design, tailoring, and beauty care.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#7c43a8] mb-2">Hands-On Training</h3>
              <p className="text-gray-700">Our curriculum emphasizes practical skills, with 70% of course time dedicated to hands-on projects and real-world applications.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#7c43a8] mb-2">Placement Assistance</h3>
              <p className="text-gray-700">We maintain strong industry connections to help graduates find employment opportunities in fashion houses, boutiques, and design studios.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstitute;
