
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/' + href);
        return;
      }
      const targetId = href.replace('#', '');
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
    } else if (href.startsWith('/')) {
      // Handled by Link component, but we might want to close mobile menu
      setIsMobileMenuOpen(false);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/story', label: 'Art of Sewing' },
    { href: '#why-choose-us', label: 'About' },
    { href: '#courses', label: 'Programs' },
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
          <Link
            to="/"
            className="flex items-center gap-3 group z-50 shrink-0"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 shrink-0">
            {navLinks.map((link, idx) => (
              <Magnetic key={link.href} strength={0.3}>
                {link.href.startsWith('#') ? (
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.1), duration: 0.5 }}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="relative px-4 py-2 text-xs text-white/60 font-medium transition-all duration-300 group overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300 tracking-wide">{link.label}</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ) : (
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(e as any, link.href)}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (idx * 0.1), duration: 0.5 }}
                      className="relative px-4 py-2 text-xs text-white/60 font-medium transition-all duration-300 group overflow-hidden block"
                    >
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300 tracking-wide">{link.label}</span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                    </motion.span>
                  </Link>
                )}
              </Magnetic>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="ml-3 pl-3 border-l border-white/10"
            >
              <Magnetic strength={0.2}>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="px-5 py-2.5 bg-white text-black text-[11px] font-bold uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300 block"
                >
                  Get Admission Info
                </a>
              </Magnetic>
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed inset-x-4 top-[80px] p-8 bg-[#050508]/90 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-[100] overflow-hidden"
            >
              {/* Decorative background element behind links */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="relative flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <div key={link.href}>
                    {link.href.startsWith('#') ? (
                      <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (index * 0.05), duration: 0.5 }}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-3xl font-display font-medium text-white/90 active:text-accent transition-colors flex items-center gap-4"
                      >
                        <span className="text-[10px] font-black tracking-widest text-accent opacity-50">0{index + 1}</span>
                        {link.label}
                      </motion.a>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={(e) => handleLinkClick(e as any, link.href)}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + (index * 0.05), duration: 0.5 }}
                          className="text-3xl font-display font-medium text-white/90 active:text-accent transition-colors flex items-center gap-4"
                        >
                          <span className="text-[10px] font-black tracking-widest text-accent opacity-50">0{index + 1}</span>
                          {link.label}
                        </motion.div>
                      </Link>
                    )}
                  </div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-8 mt-8 border-t border-white/10"
                >
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, '#contact')}
                    className="block text-center py-5 bg-white text-black text-sm font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-white/5"
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

