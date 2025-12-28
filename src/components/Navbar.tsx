
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
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled
      ? 'py-4'
      : 'py-8'
      }`}>
      <div className="container-custom">
        <div className={`relative flex justify-between items-center transition-all duration-700 px-8 rounded-full border border-white/5 ${isScrolled
          ? 'bg-secondary/80 backdrop-blur-2xl py-3 shadow-2xl border-white/10'
          : 'bg-transparent py-4'
          }`}>
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 group z-50"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[2px] bg-gradient-to-tr from-accent/40 via-transparent to-accent/40 rounded-full blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <img
                src="/lovable-uploads/logo.png"
                alt="Jayam Logo"
                className="relative w-full h-full rounded-full border border-white/10 shadow-2xl bg-white transition-transform group-hover:scale-110 duration-500 object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                Jayam
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">Institute</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="relative px-5 py-2 text-sm text-white/60 font-medium transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">{link.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-white/10">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-accent transition-all duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 z-[101]"
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
                  <X className="w-5 h-5 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="w-5 h-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden absolute top-[110%] left-6 right-6 p-8 bg-secondary/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[100]"
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
                    className="block text-center py-4 bg-white text-black font-bold rounded-2xl"
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

