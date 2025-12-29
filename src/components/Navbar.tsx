
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
    <nav className={`fixed w-full z-[100] transition-all duration-500 top-0 left-0 ${isScrolled
      ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3'
      : 'bg-transparent py-6 bg-gradient-to-b from-black/50 to-transparent'
      }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center px-4 md:px-0">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group z-50"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <img
                src="/lovable-uploads/logo.png"
                alt="Jayam Logo"
                className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                JAYAM
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-white/50 group-hover:text-white/80 transition-colors duration-300">Institute</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="relative text-[11px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-white transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="ml-4 px-6 py-2.5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-accent hover:text-white transition-all duration-300"
            >
              Start Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
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
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-6 items-center">
                {navLinks.map((link, index) => (
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-sm uppercase tracking-[0.2em] font-medium text-white/80 hover:text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="w-full text-center px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

