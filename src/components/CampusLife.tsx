
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
    <section id="campus" className="section-padding bg-secondary relative overflow-hidden mask-linear-t mask-linear-b">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 right-[5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <Camera className="w-4 h-4 text-accent" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">Our Environment</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold text-white mb-10 leading-[0.9] tracking-tighter"
          >
            Creative <br />
            <span className="gold-gradient-text italic font-normal">Sanctuaries</span>
          </motion.h2>

          <div className="flex flex-wrap gap-3 md:gap-6 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-black transition-all duration-500 border ${activeCategory === cat
                    ? "bg-accent text-background border-accent"
                    : "bg-white/5 text-white/40 border-white/5 hover:border-white/20"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 ${idx === 0 ? "md:col-span-2 md:row-span-2" :
                    idx === 1 ? "md:row-span-2" :
                      idx === 5 ? "md:col-span-2" : ""
                  }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-accent text-[9px] uppercase tracking-widest font-black mb-2 block">{img.category}</span>
                  <h4 className="text-white text-sm md:text-lg font-bold">{img.alt}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;

