
import { useEffect, useRef, useState } from 'react';

interface CampusImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const campusImages: CampusImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1576495169018-bd2414046c6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Modern Classroom",
    category: "Classrooms"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1562516155-e0c1ee44059b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Computer Lab",
    category: "Labs"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Library Reading Area",
    category: "Library"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Students in Discussion",
    category: "Student Activities"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Annual Cultural Festival",
    category: "Events"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1621786030333-5a43a6c6a06f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Tailoring Workshop",
    category: "Tailoring workshops"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1534187886935-1e1236e856c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Science Lab",
    category: "Labs"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Tailoring Studio",
    category: "Tailoring workshops"
  }
];

const categories = ["All", "Classrooms", "Labs", "Library", "Student Activities", "Events", "Tailoring workshops"];

const CampusLife = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(campusImages);
  
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredImages(campusImages);
    } else {
      setFilteredImages(campusImages.filter(img => img.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const images = entry.target.querySelectorAll('.campus-image');
            images.forEach((img, index) => {
              setTimeout(() => {
                img.classList.add('opacity-100', 'translate-y-0');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, [filteredImages]);

  return (
    <section id="campus-life" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title gold-underline pb-4">Campus Life & Infrastructure</h2>
          <p className="section-subtitle">
            Explore our world-class facilities designed to provide an optimal learning environment
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-jayam-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="campus-image opacity-0 translate-y-8 transition-all duration-500 overflow-hidden rounded-lg shadow-md h-64 relative"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">{image.alt}</p>
                <span className="text-white/70 text-sm">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
