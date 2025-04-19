
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.replace('#', '');
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            className={`font-display font-bold text-2xl ${
              isScrolled ? 'text-jayam-blue' : 'text-white'
            }`}
          >
            Jayam Institute
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#why-choose-us" 
              onClick={handleLinkClick}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-jayam-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              Why Choose Us
            </a>
            <a 
              href="#courses" 
              onClick={handleLinkClick}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-jayam-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              Courses
            </a>
            <a 
              href="#tailoring" 
              onClick={handleLinkClick}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-jayam-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              Tailoring
            </a>
            <a 
              href="#campus-life" 
              onClick={handleLinkClick}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-jayam-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              Campus Life
            </a>
            <a 
              href="#legacy" 
              onClick={handleLinkClick}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-jayam-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              Legacy
            </a>
            <a 
              href="#contact" 
              onClick={handleLinkClick}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-jayam-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className={`w-6 h-6 ${isScrolled ? 'text-jayam-blue' : 'text-white'}`}
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a 
                href="#why-choose-us" 
                onClick={handleLinkClick}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Why Choose Us
              </a>
              <a 
                href="#courses" 
                onClick={handleLinkClick}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Courses
              </a>
              <a 
                href="#tailoring" 
                onClick={handleLinkClick}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Tailoring
              </a>
              <a 
                href="#campus-life" 
                onClick={handleLinkClick}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Campus Life
              </a>
              <a 
                href="#legacy" 
                onClick={handleLinkClick}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Legacy
              </a>
              <a 
                href="#contact" 
                onClick={handleLinkClick}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
