import { useState, useEffect } from 'react';

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-gradient-to-r from-[#ede9fe] via-[#e0e7ff] to-[#f3e8ff] py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center space-x-3 group"
          >
            <img
              src="/lovable-uploads/edbba000-eab6-4e02-9a4a-a593687c6004.png"
              alt="Jayam Logo"
              className="w-12 h-12 rounded-full drop-shadow-xl border-2 border-[#ecd74a] bg-white transition-transform group-hover:scale-105"
            />
            <span className={`font-display font-bold text-2xl tracking-tight ${
              isScrolled ? 'text-[#5e51a6]' : 'text-[#46256c]'
            }`}>
              Jayam Institute
            </span>
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#why-choose-us" onClick={handleLinkClick}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#7c43a8] hover:text-[#ecd74a]' : 'text-[#5e51a6] hover:text-[#ecd74a]'
              }`} >Why Choose Us</a>
            <a href="#courses" onClick={handleLinkClick}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#7c43a8] hover:text-[#ecd74a]' : 'text-[#5e51a6] hover:text-[#ecd74a]'
              }`} >Courses</a>
            <a href="#tailoring" onClick={handleLinkClick}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#7c43a8] hover:text-[#ecd74a]' : 'text-[#5e51a6] hover:text-[#ecd74a]'
              }`} >Tailoring</a>
            <a href="#campus-life" onClick={handleLinkClick}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#7c43a8] hover:text-[#ecd74a]' : 'text-[#5e51a6] hover:text-[#ecd74a]'
              }`} >Campus Life</a>
            <a href="#legacy" onClick={handleLinkClick}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#7c43a8] hover:text-[#ecd74a]' : 'text-[#5e51a6] hover:text-[#ecd74a]'
              }`} >Legacy</a>
            <a href="#contact" onClick={handleLinkClick}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#7c43a8] hover:text-[#ecd74a]' : 'text-[#5e51a6] hover:text-[#ecd74a]'
              }`} >Contact</a>
          </div>
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
              className="w-7 h-7 text-[#5e51a6]"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a href="#why-choose-us" onClick={handleLinkClick}
                className="px-4 py-2 text-[#5e51a6] hover:bg-[#ecd74a]/25 rounded font-medium" >Why Choose Us</a>
              <a href="#courses" onClick={handleLinkClick}
                className="px-4 py-2 text-[#5e51a6] hover:bg-[#ecd74a]/25 rounded font-medium" >Courses</a>
              <a href="#tailoring" onClick={handleLinkClick}
                className="px-4 py-2 text-[#5e51a6] hover:bg-[#ecd74a]/25 rounded font-medium" >Tailoring</a>
              <a href="#campus-life" onClick={handleLinkClick}
                className="px-4 py-2 text-[#5e51a6] hover:bg-[#ecd74a]/25 rounded font-medium" >Campus Life</a>
              <a href="#legacy" onClick={handleLinkClick}
                className="px-4 py-2 text-[#5e51a6] hover:bg-[#ecd74a]/25 rounded font-medium" >Legacy</a>
              <a href="#contact" onClick={handleLinkClick}
                className="px-4 py-2 text-[#5e51a6] hover:bg-[#ecd74a]/25 rounded font-medium" >Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
