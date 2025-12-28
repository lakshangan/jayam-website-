
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
  return null;
};

export default CampusLife;

