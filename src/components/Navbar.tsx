
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.replace('#', '');
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#why-choose-us', label: 'About' },
    { href: '#courses', label: 'Programs' },
    { href: '#tailoring', label: 'Specialization' },
    { href: '#campus-life', label: 'Life' },
    { href: '#legacy', label: 'Legacy' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-[100] top-0 left-0 transition-none ${isScrolled
      ? 'py-4'
      : 'py-6'
      }`}>
      <div className="container-custom flex justify-center">
        <motion.div
          initial={{ width: "60px" }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 1.0,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2
          }}
          className={`relative flex justify-between items-center rounded-full border overflow-hidden transition-all duration-500 ${isScrolled
            ? 'bg-[#050508]/80 backdrop-blur-2xl px-3 py-2 shadow-2xl border-white/10'
            : 'bg-white/5 backdrop-blur-xl px-4 py-3 border-white/10 shadow-lg'
            }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group z-50 shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <img
                src="/lovable-uploads/logo.png"
                alt="Jayam Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col whitespace-nowrap overflow-hidden"
            >
              <span className="font-display font-bold text-base leading-tight tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                Jayam
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] font-medium text-white/40">Institute</span>
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 shrink-0">
            {navLinks.map((link, idx) => (
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + (idx * 0.1), duration: 0.5 }}
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="relative px-4 py-2 text-xs text-white/60 font-medium transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 tracking-wide">{link.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="ml-3 pl-3 border-l border-white/10"
            >
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="px-5 py-2.5 bg-white text-black text-[11px] font-bold uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300"
              >
                Get Admission Info
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 z-[101]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-4 h-4 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="w-4 h-4 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 p-6 bg-[#050508]/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[100]"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-2xl font-display font-medium text-white/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 mt-6 border-t border-white/5"
                >
                  <a
                    href="#contact"
                    onClick={handleLinkClick}
                    className="block text-center py-4 bg-white text-black font-bold rounded-full"
                  >
                    Get Admission Info
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

