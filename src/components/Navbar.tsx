import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.replace('#', '');
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#why-choose-us', label: 'Why Choose Us' },
    { href: '#courses', label: 'Courses' },
    { href: '#tailoring', label: 'Tailoring' },
    { href: '#campus-life', label: 'Campus Life' },
    { href: '#legacy', label: 'Legacy' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20' 
        : 'bg-white/60 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center space-x-2 sm:space-x-3 group z-50"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ecd74a] to-[#46256c] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src="/lovable-uploads/edbba000-eab6-4e02-9a4a-a593687c6004.png"
                alt="Jayam Logo"
                className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-xl bg-white transition-transform group-hover:scale-110 duration-300"
              />
            </div>
            <span className="font-display font-bold text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-[#46256c] to-[#7c43a8] bg-clip-text text-transparent">
              Jayam Institute
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="relative px-4 py-2 text-[#46256c] font-medium rounded-full hover:text-[#7c43a8] transition-all duration-300 group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ecd74a]/0 to-[#ecd74a]/0 group-hover:from-[#ecd74a]/20 group-hover:to-[#ffe195]/20 rounded-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#ecd74a]/30 shadow-md hover:shadow-lg transition-all duration-300 z-50" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#46256c]" />
            ) : (
              <Menu className="w-6 h-6 text-[#46256c]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-b border-white/20 shadow-2xl animate-fade-in">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="px-6 py-3 text-[#46256c] hover:text-[#7c43a8] font-medium rounded-full hover:bg-gradient-to-r hover:from-[#ecd74a]/20 hover:to-[#ffe195]/20 transition-all duration-300 transform hover:translate-x-2"
                    style={{ 
                      animation: `fade-in 0.3s ease-out ${index * 0.1}s forwards`,
                      opacity: 0 
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
