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
    <section id="tailoring" className="py-20 bg-gradient-to-br from-[#ede9fe] to-[#fff5f5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title gold-underline pb-4 text-[#46256c]">Tailoring Program</h2>
          <p className="section-subtitle text-[#925ec7]">
            Blending traditional craftsmanship—a legacy of excellence—with bold, modern design.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Section repeated for animation, keep as is but can add logo visually */}
          <div className="flex flex-col items-center">
            <div className="relative flex justify-center mb-6">
              <img 
                src="/lovable-uploads/edbba000-eab6-4e02-9a4a-a593687c6004.png" 
                alt="Jayam Institute Logo"
                className="absolute left-0 top-0 w-16 h-16 rounded-full shadow-lg border-2 border-[#ecd74a] bg-white -translate-x-8 -translate-y-8"
                style={{zIndex: 2}}
              />
            </div>
            {/* Promo text image has been replaced with logo, per instruction */}
            <img
              src="https://images.unsplash.com/photo-1593030942428-a5451dca4b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Tailoring Workshop"
              className="rounded-lg shadow-xl w-full max-w-xl h-[370px] object-cover border-4 border-[#ecd7fe] opacity-60"
              style={{filter: 'grayscale(20%)'}}
            />
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
        {/* NSDC Section: No image, just a prominent info block */}
        <div className="mt-16 py-12 px-8 bg-gradient-to-br from-[#ede9f2] to-[#fafcff] rounded-2xl shadow-xl border-2 border-[#ecd74a] max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#6E59A5] mb-4">
              Proud to be an <span className="bg-[#ecd74a]/80 px-2 py-1 rounded">NSDC Approved Training Centre</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto text-[#3a2c51] text-lg font-medium">
              <div className="bg-white/80 border border-[#ecd74a] rounded-lg p-5 text-left shadow w-full">
                <span className="font-bold">Certified by:</span>
                <div>National Skill Development Corporation (NSDC)</div>
              </div>
              <div className="bg-white/80 border border-[#ecd74a] rounded-lg p-5 text-left shadow w-full">
                <span className="font-bold">Certification:</span>
                <div>Training Center for tailoring &amp; fashion design</div>
              </div>
              <div className="bg-white/80 border border-[#ecd74a] rounded-lg p-5 text-left shadow w-full">
                <span className="font-bold">Accredited for:</span>
                <div>Women Empowerment &amp; Skill Development</div>
              </div>
              <div className="bg-white/80 border border-[#ecd74a] rounded-lg p-5 text-left shadow w-full">
                <span className="font-bold">Partners:</span>
                <div>Skill India, Ministry of Skill Development &amp; Entrepreneurship</div>
              </div>
              <div className="bg-white/80 border border-[#ecd74a] rounded-lg p-5 text-left shadow w-full">
                <span className="font-bold">Certification:</span>
                <div>Nationally recognized certifications</div>
              </div>
              <div className="bg-white/80 border border-[#ecd74a] rounded-lg p-5 text-left shadow w-full">
                <span className="font-bold">Support:</span>
                <div>Government skill upgradation schemes</div>
              </div>
            </div>
            <div className="text-[#a989e3] font-medium text-md">
              <b>Certificate No:</b> JC123456 (Sample Only) &nbsp; &bull; &nbsp;<b>Valid Upto:</b> 18/Oct/2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoringProgram;
