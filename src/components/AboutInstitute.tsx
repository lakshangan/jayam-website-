
import { useEffect, useRef } from 'react';
import { Card } from "./ui/card";

const AboutInstitute = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.scrollY;
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };

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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-[#f8f6fb] to-[#ffe6f1] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div 
            ref={imageRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            {/* New user-provided image */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white will-change-transform">
              <img 
                src="/lovable-uploads/f12752c7-a9cd-4fe8-a9b1-95e2edd3052e.png"
                alt="Sahaya Selvam - Jayam Fashion Institute"
                className="w-full h-auto object-cover max-h-[390px] rounded-lg"
              />
            </Card>
          </div>
          <div 
            ref={contentRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 delay-200 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#46256c] mb-6">
              About Us - Jayam Fashion Institute
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-800 leading-relaxed text-lg opacity-0 animate-fade-in-delay-1">
                Welcome to Jayam Fashion Institution, where passion meets craftsmanship. Led by Sahaya Selvam, a visionary with over 22 years of experience in tailoring and fashion, our mission is to provide top-tier education and practical skills in the fields of fashion, tailoring, and beauty.
              </p>
              <p className="text-gray-800 leading-relaxed text-lg opacity-0 animate-fade-in-delay-2">
                Jayam offers a range of specialized courses—from fashion design and tailoring to beauty therapy—all recognized by the government. We are proud to be an <b>NSDC (National Skill Development Corporation) Approved Training Centre</b>, ensuring industry standard curriculum and recognized certification to help you excel.
              </p>
              <p className="text-gray-800 leading-relaxed text-lg opacity-0 animate-fade-in-delay-3">
                Our graduates gain not just skills, but confidence to launch careers as designers, tailoring experts, and beauty professionals. Whether you want to create, innovate, or style, Jayam Fashion Institution is here to guide you every step of the way.
              </p>
              <p className="text-[#855acb] font-medium opacity-0 animate-fade-in-delay-4">
                Begin your journey with us—where tradition meets innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstitute;
