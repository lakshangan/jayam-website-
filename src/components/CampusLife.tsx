import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';

interface CampusImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const campusImages: CampusImage[] = [
  {
    id: 1,
    src: "/lovable-uploads/lowangleshot.jpg",
    alt: "Fashion Workspace",
    category: "Institute"
  },
  {
    id: 2,
    src: "/lovable-uploads/20241213_204558.jpg",
    alt: "Student at Work",
    category: "Classroom"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1558584449-32dd023a8ed4?auto=format&fit=crop&q=80&w=800",
    alt: "Professional Tailoring Unit",
    category: "Workspace"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800",
    alt: "Pattern Making Class",
    category: "Studio"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    alt: "Fashion Design Gallery",
    category: "Exhibition"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
    alt: "Advanced Stitching Lab",
    category: "Laboratory"
  }
];

const CampusLife = () => {
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


        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {campusImages.map((img, idx) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 ${idx === 0 ? "md:col-span-2 md:row-span-2" :
                  idx === 1 ? "md:row-span-2" :
                    idx === 5 ? "md:col-span-2" : ""
                  }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
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

