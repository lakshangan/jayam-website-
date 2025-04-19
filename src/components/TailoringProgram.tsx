
import { useEffect, useRef } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "The tailoring program at Jayam Institute gave me the skills and confidence to start my own fashion business. The hands-on training was invaluable.",
    author: "Priya Sharma",
    role: "Fashion Entrepreneur, Batch of 2020",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "I learned not just the technical aspects of tailoring, but also the business side of fashion. The industry connections I made through Jayam helped me secure a job immediately after graduation.",
    author: "Rajiv Mehta",
    role: "Senior Designer at Fashion House, Batch of 2018",
    image: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    quote: "The faculty's industry experience and personalized guidance helped me develop my unique style. Jayam's tailoring program is truly world-class.",
    author: "Ananya Patel",
    role: "Costume Designer, Batch of 2019",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Testimonial = ({ quote, author, role, image }: TestimonialProps) => {
  const testimonialRef = useRef<HTMLDivElement>(null);

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

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={testimonialRef}
      className="bg-white p-6 rounded-lg shadow-md opacity-0 translate-y-8 transition-all duration-700"
    >
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={author} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-jayam-gold"
        />
        <div>
          <h4 className="font-bold text-jayam-blue">{author}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{quote}</p>
    </div>
  );
};

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

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section id="tailoring" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title gold-underline pb-4">Tailoring Program</h2>
          <p className="section-subtitle">
            Discover our specialized tailoring courses that blend traditional craftsmanship with modern design
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div 
            ref={imageRef}
            className="opacity-0 -translate-x-8 transition-all duration-700 ease-out"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1593030942428-a5451dca4b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Tailoring Workshop" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-jayam-gold p-4 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                <span className="font-display text-jayam-blue text-lg font-bold text-center">25+ Years of Excellence</span>
              </div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="opacity-0 translate-x-8 transition-all duration-700 ease-out"
          >
            <h3 className="text-2xl font-bold mb-4 text-jayam-blue">A Legacy of Craftsmanship</h3>
            <p className="text-gray-700 mb-6">
              For over 25 years, Jayam Institute has been at the forefront of tailoring education, 
              blending traditional craftsmanship with cutting-edge design techniques. Our tailoring 
              program is designed to equip students with the skills needed to excel in the 
              dynamic world of fashion and design.
            </p>
            <p className="text-gray-700 mb-6">
              Students in our tailoring program benefit from state-of-the-art facilities, 
              industry-experienced faculty, and hands-on training that prepares them for 
              successful careers in fashion design, costume creation, and entrepreneurship.
            </p>
            <button className="btn-gold">Join Tailoring Course</button>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-jayam-blue">What Our Graduates Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoringProgram;
