import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useAppContext } from '../context/AppContext';

const Footer = () => {
  const { t } = useAppContext();
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
      className="bg-background text-foreground pt-32 pb-16 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />

      {/* Massive Background Text Component (Parallax) */}
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-[-5vw] left-0 w-full pointer-events-none z-0 hidden lg:block"
      >
        <h2 className="text-[25vw] font-display font-black text-black/[0.03] dark:text-white/[0.02] leading-[0.7] tracking-tighter text-center uppercase italic">
          Jayam
        </h2>
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-32"
        >
          {/* Brand Presence */}
          <div className="lg:max-w-md space-y-12">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/lovable-uploads/logo.png"
                  alt="Jayam Logo"
                  className="relative w-20 h-20 rounded-full border border-black/[0.05] p-2 bg-white shadow-premium transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <span className="text-3xl font-display font-black text-foreground tracking-tight block">JAYAM</span>
                <span className="text-[10px] uppercase tracking-[0.6em] font-black text-accent">{t('footer.tagline')}</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-foreground/50 font-light leading-relaxed">
              Redefining the boundaries of <span className="text-foreground italic">couture education</span> and creative entrepreneurship since 1995.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/jayam_fashion_institute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-secondary border border-black/[0.03] flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-700 group shadow-premium"
              >
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-32">
            <div className="space-y-10">
              <h3 className="text-[11px] uppercase tracking-[0.4em] font-black text-accent/60">{t('footer.programs')}</h3>
              <ul className="space-y-6">
                {['Tailoring', 'Fashion Design', 'Beautician', 'Master Class'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-foreground/40 hover:text-accent transition-all flex items-center gap-3 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:bg-accent transition-colors" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <h3 className="text-[11px] uppercase tracking-[0.4em] font-black text-accent/60">{t('footer.quickLinks')}</h3>
              <ul className="space-y-6">
                {['History', 'Alumni', 'Awards', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-foreground/40 hover:text-accent transition-all flex items-center gap-3 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:bg-accent transition-colors" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10 col-span-2 md:col-span-1">
              <h3 className="text-[11px] uppercase tracking-[0.4em] font-black text-accent/60">Contact</h3>
              <div className="space-y-10">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=7th+St+Sundaravelpuram+West+Thalamuthu+Nagar+Thoothukudi+Tamil+Nadu+628002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer block"
                >
                  <span className="text-[9px] uppercase tracking-widest text-accent font-black block mb-3">Visit Us</span>
                  <p className="text-sm text-foreground/50 group-hover:text-foreground transition-colors font-light leading-relaxed">
                    7th St, Sundaravelpuram West,<br />
                    Thalamuthu Nagar, Thoothukudi, TN 628002
                  </p>
                </a>
                <a href="tel:+918925774434" className="group cursor-pointer block">
                  <span className="text-[9px] uppercase tracking-widest text-accent font-black block mb-3">Talk to Us</span>
                  <p className="text-lg text-foreground/60 group-hover:text-foreground transition-colors font-bold">+91 89257 74434</p>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-20 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-[10px] uppercase tracking-[0.5em] text-foreground/30 font-black">
              &copy; {new Date().getFullYear()} Jayam Institute of Design.
            </p>
            <div className="flex gap-6 text-[9px] uppercase tracking-widest text-foreground/20 italic font-medium">
              <span className="flex items-center gap-2"><Sparkles size={10} className="text-accent/40" /> Excellence in every stitch</span>
            </div>
          </div>

          <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-black text-foreground/30">
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
