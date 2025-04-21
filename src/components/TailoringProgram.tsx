
// Remove old NSDC image, rewrite in a modern readable block.
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
    <section id="tailoring" className="py-20 bg-gradient-to-br from-[#f9f6ff] to-[#fff5f5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title gold-underline pb-4 text-[#46256c]">Tailoring Program</h2>
          <p className="section-subtitle text-[#925ec7]">
            Blending traditional craftsmanship—a legacy of excellence—with bold, modern design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div 
            ref={imageRef}
            className="opacity-0 -translate-x-8 transition-all duration-700 ease-out"
          >
            <div className="relative flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1593030942428-a5451dca4b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Tailoring Workshop" 
                className="rounded-lg shadow-xl w-full max-w-xl h-[370px] object-cover border-4 border-[#ecd7fe]"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#f9c76f] to-[#ffd97e] p-4 rounded-lg shadow-xl w-28 h-28 flex items-center justify-center border-2 border-white/80">
                <span className="font-display text-[#46256c] text-base font-bold text-center">25+ Years of Excellence</span>
              </div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="opacity-0 translate-x-8 transition-all duration-700 ease-out space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#46256c]">A Legacy of Craftsmanship</h3>
            <p className="text-gray-700 text-lg">
              For over 25 years, Jayam Institute’s tailoring program has been recognized for its NSDC-approved, industry-focused courses. Graduates join a lineage of skilled designers and entrepreneurs.
            </p>
            <p className="text-gray-700 text-lg">
              Our curriculum combines hands-on training, expert faculty, and state-of-the-art equipment—grounded in tradition, ready for the future of fashion.
            </p>
            <button className="btn-gold">Join Tailoring Course</button>
          </div>
        </div>

        {/* NSDC Highlight Section */}
        <div className="mt-16 py-12 px-8 bg-gradient-to-br from-[#f8f1e5] to-[#fafcff] rounded-2xl shadow-xl border border-[#e5dcff] max-w-4xl mx-auto">
          <div className="text-center space-y-7">
            <div className="text-3xl font-extrabold text-[#46256c]">
              Proud to be an <span className="bg-[#ecd74a]/80 px-2 rounded">NSDC Approved Training Centre</span>
            </div>
            <ul className="text-lg text-[#272935] space-y-2 list-disc list-inside max-w-2xl mx-auto">
              <li>Certified by <b>National Skill Development Corporation (NSDC)</b></li>
              <li>Certificate of Training Center for tailoring & fashion design</li>
              <li>Accredited for Women Empowerment and Skill Development</li>
              <li>Official partners of Skill India, Ministry of Skill Development & Entrepreneurship</li>
              <li>Offering nationally recognized certifications</li>
              <li>Supporting government schemes for skill upgradation</li>
            </ul>
            <div className="text-[#a989e3] font-medium">
              <b>Certificate No:</b> JC123456 (Sample Only) &bull; <b>Valid Upto:</b> 18/Oct/2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoringProgram;
