
import { useEffect, useRef } from 'react';

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}

const milestones = [
  {
    year: "1995",
    title: "Founding of Jayam Institute",
    description: "Established with a vision to provide quality education with a focus on practical skills."
  },
  {
    year: "2000",
    title: "Introduction of Engineering Programs",
    description: "Expanded our offerings to include cutting-edge engineering courses."
  },
  {
    year: "2005",
    title: "Launch of Tailoring Program",
    description: "Introduced our flagship tailoring program, combining traditional craftsmanship with modern design."
  },
  {
    year: "2010",
    title: "Campus Expansion",
    description: "Inaugurated our new state-of-the-art campus with advanced facilities."
  },
  {
    year: "2015",
    title: "International Recognition",
    description: "Received accreditation from international education bodies for excellence."
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Implemented cutting-edge digital learning platforms and resources."
  },
  {
    year: "2023",
    title: "Research Excellence Center",
    description: "Established a dedicated center for advanced research and innovation."
  }
];

const Milestone = ({ year, title, description, isLeft }: MilestoneProps) => {
  const milestoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', isLeft ? 'translate-x-0' : 'translate-x-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (milestoneRef.current) {
      observer.observe(milestoneRef.current);
    }

    return () => {
      if (milestoneRef.current) {
        observer.unobserve(milestoneRef.current);
      }
    };
  }, [isLeft]);

  return (
    <div 
      ref={milestoneRef}
      className={`flex w-full items-center justify-between opacity-0 transition-all duration-700 ${
        isLeft ? '-translate-x-8' : 'translate-x-8'
      }`}
    >
      {isLeft ? (
        <>
          <div className="w-5/12">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-jayam-blue">{title}</h3>
              <p className="text-gray-600 text-sm mt-1">{description}</p>
            </div>
          </div>
          <div className="w-2/12 flex flex-col items-center">
            <div className="w-4 h-4 bg-jayam-gold rounded-full z-10"></div>
            <div className="w-0.5 h-24 bg-jayam-gold"></div>
          </div>
          <div className="w-5/12">
            <div className="bg-jayam-gold p-3 rounded-full text-center text-jayam-blue font-bold">
              {year}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-5/12">
            <div className="bg-jayam-gold p-3 rounded-full text-center text-jayam-blue font-bold">
              {year}
            </div>
          </div>
          <div className="w-2/12 flex flex-col items-center">
            <div className="w-4 h-4 bg-jayam-gold rounded-full z-10"></div>
            <div className="w-0.5 h-24 bg-jayam-gold"></div>
          </div>
          <div className="w-5/12">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-jayam-blue">{title}</h3>
              <p className="text-gray-600 text-sm mt-1">{description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const OurLegacy = () => {
  return (
    <section id="legacy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title gold-underline pb-4">Our Legacy</h2>
          <p className="section-subtitle">
            A journey of excellence and innovation spanning over 25 years
          </p>
        </div>
        
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-jayam-gold"></div>
          
          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <Milestone 
                key={milestone.year}
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLegacy;
