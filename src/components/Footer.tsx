import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <footer
      ref={containerRef}
      className="bg-[#050508] text-white pt-24 pb-12 relative overflow-hidden"
    >
      {/* Massive Background Text Component (Parallax) */}
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-0 left-0 w-full pointer-events-none z-0 hidden lg:block"
      >
        <h2 className="text-[25vw] font-display font-black text-white/[0.02] leading-[0.7] tracking-tighter text-center uppercase italic">
          Jayam
        </h2>
      </motion.div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container-custom relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-32"
        >
          {/* Brand Presence */}
          <div className="lg:max-w-md space-y-10">
            <div className="flex items-center gap-5">
              <div className="relative group">
                <div className="absolute -inset-1 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/lovable-uploads/logo.png"
                  alt="Jayam Logo"
                  className="relative w-16 h-16 rounded-full border border-white/10 p-1.5 bg-white shadow-2xl"
                />
              </div>
              <div>
                <span className="text-3xl font-display font-black text-white tracking-tight block">JAYAM</span>
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Institute of Design</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed">
              Redefining the boundaries of <span className="text-white italic">couture education</span> and creative entrepreneurship since 1995.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/jayam_fashion_institute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-500 group"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
            <div className="space-y-8">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-accent/50">Programs</h3>
              <ul className="space-y-4">
                {['Tailoring', 'Fashion Design', 'Beautician', 'Master Class'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/30 hover:text-white transition-all flex items-center gap-2 group">
                      <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-accent/50">Legacy</h3>
              <ul className="space-y-4">
                {['History', 'Alumni', 'Awards', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/30 hover:text-white transition-all flex items-center gap-2 group">
                      <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 col-span-2 sm:col-span-1">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-accent/50">Contact</h3>
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <span className="text-[9px] uppercase tracking-widest text-white/20 block mb-1">Visit Us</span>
                  <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors font-light leading-relaxed">
                    123 Creative Street, <br />
                    Chennai, TN 600001
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <span className="text-[9px] uppercase tracking-widest text-white/20 block mb-1">Talk to Us</span>
                  <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors font-light">+91 89257 74434</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-black">
              &copy; {new Date().getFullYear()} Jayam Institute of Design.
            </p>
            <div className="flex gap-6 text-[8px] uppercase tracking-widest text-white/10">
              <span className="flex items-center gap-1"><Sparkles size={8} className="text-accent/20" /> Excellence in every stitch</span>
            </div>
          </div>

          <div className="flex gap-10 text-[9px] uppercase tracking-[0.3em] font-black text-white/20">
            <a href="#" className="hover:text-accent transition-all">Privacy</a>
            <a href="#" className="hover:text-accent transition-all">Terms</a>
            <a href="#" className="hover:text-accent transition-all">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

