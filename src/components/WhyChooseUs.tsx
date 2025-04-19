
import { useEffect, useRef } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-white p-6 rounded-lg shadow-md opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <div className="h-16 w-16 mx-auto mb-4 text-jayam-blue flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-jayam-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title gold-underline pb-4">Why Choose Jayam</h2>
          <p className="section-subtitle">
            Our commitment to excellence and student success sets us apart from the rest
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 hover:animate-rotate-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </svg>
            }
            title="Industry-focused Curriculum"
            description="Our curriculum is designed in collaboration with industry experts to ensure that our students are job-ready upon graduation."
            delay={100}
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 hover:animate-rotate-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 8.232-2.532m.208-7.174 1.513 1.513a1.693 1.693 0 0 1-.73 2.888l-.527.185A69.264 69.264 0 0 0 12 7.569a69.264 69.264 0 0 0-8.463-.978l-.527-.185a1.693 1.693 0 0 1-.73-2.888l1.513-1.513a1.693 1.693 0 0 1 2.387 0Z" />
              </svg>
            }
            title="Experienced Faculty"
            description="Learn from the best minds in the industry with our team of highly qualified and experienced educators."
            delay={200}
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 hover:animate-rotate-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
              </svg>
            }
            title="World-Class Infrastructure"
            description="Our state-of-the-art campus provides students with access to the latest technology and resources."
            delay={300}
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 hover:animate-rotate-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 12 5.25l8.25 8.25" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25v13.5" />
              </svg>
            }
            title="Leadership & Innovation"
            description="We foster a culture of innovation and leadership, preparing students to be the leaders of tomorrow."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
