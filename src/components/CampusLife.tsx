
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, LayoutGrid, Camera } from 'lucide-react';

interface CampusImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const campusImages: CampusImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1576495169018-bd2414046c6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Modern Design Studio",
    category: "Studios"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1562516155-e0c1ee44059b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Digital Labs",
    category: "Labs"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Resource Library",
    category: "Library"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Collaboration Zone",
    category: "Campus"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Fashion Showcase",
    category: "Events"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1621786030333-5a43a6c6a06f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Tailoring Workshop",
    category: "Studios"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1534187886935-1e1236e856c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Textile Lab",
    category: "Labs"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Couture Suite",
    category: "Studios"
  }
];

const categories = ["All", "Studios", "Labs", "Library", "Campus", "Events"];

const CampusLife = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? campusImages
    : campusImages.filter(img => img.category === activeCategory);

  return (
    <section id="campus-life" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[180px] -z-10" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Camera className="w-4 h-4 text-accent" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-accent">See Our Classes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          >
            Modern Rooms for <br />
            <span className="gold-gradient-text italic font-normal">Our Students</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-500 border ${activeCategory === category
                  ? 'bg-accent text-background border-accent shadow-[0_0_20px_rgba(197,163,88,0.3)]'
                  : 'bg-white/5 text-white/40 border-white/10 hover:border-white/20 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 no-scrollbar"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative flex-shrink-0 w-[85%] sm:w-auto aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 snap-center"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 translate-y-0 sm:translate-y-4 group-hover:translate-y-0 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2 block">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-display font-semibold text-white">
                    {image.alt}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusLife;

