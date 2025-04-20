import { useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';

interface Course {
  id: number;
  category: string;
  name: string;
  description: string;
  duration: string;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    category: 'Engineering',
    name: 'B.Tech in Computer Science',
    description: 'A comprehensive program covering advanced computer science concepts and practical applications.',
    duration: '4 Years',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    category: 'Engineering',
    name: 'B.Tech in Electronics',
    description: 'Study electronic systems, circuits and their applications in modern technology.',
    duration: '4 Years',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    category: 'Computer Science',
    name: 'BSc in Data Science',
    description: 'Learn to analyze and interpret complex data to drive business decisions.',
    duration: '3 Years',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    category: 'Management',
    name: 'MBA in Business Administration',
    description: 'Develop leadership skills and business acumen for the modern corporate world.',
    duration: '2 Years',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    category: 'Arts',
    name: 'BA in Fine Arts',
    description: 'Explore your creativity and develop skills in various art forms and mediums.',
    duration: '3 Years',
    image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 6,
    category: 'Science',
    name: 'BSc in Physics',
    description: 'Understand the fundamental principles that govern the universe and natural world.',
    duration: '3 Years',
    image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 7,
    category: 'Tailoring',
    name: 'Diploma in Fashion Design',
    description: 'Learn the art of fashion design, pattern making, and garment construction.',
    duration: '2 Years',
    image: 'https://images.unsplash.com/photo-1621786030333-5a43a6c6a06f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 8,
    category: 'Tailoring',
    name: 'Certificate in Advanced Tailoring',
    description: 'Master advanced tailoring techniques and create custom-fitted garments.',
    duration: '1 Year',
    image: 'https://images.unsplash.com/photo-1593030942428-a5451dca4b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const CourseCard = ({ course }: { course: Course }) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="bg-white rounded-lg overflow-hidden shadow-md opacity-0 translate-y-8 transition-all duration-700 card-hover"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-jayam-gold px-3 py-1 text-xs font-semibold text-jayam-blue">
          {course.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-jayam-blue">{course.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
        <div className="flex items-center text-gray-500 mb-4 text-sm">
          <Clock size={16} className="mr-2" />
          <span>{course.duration}</span>
        </div>
        <button className="w-full py-2 bg-jayam-blue text-white rounded transition-colors hover:bg-jayam-blue/90">
          Learn More
        </button>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title gold-underline pb-4">Our Academic Programs</h2>
          <p className="section-subtitle">
            Discover our comprehensive range of programs designed for your academic and professional success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
