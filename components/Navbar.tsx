import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.replace("#", "");
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#why-choose-us", label: "Why Choose Us" },
    { href: "#courses", label: "Courses" },
    { href: "#tailoring", label: "Tailoring" },
    { href: "#campus-life", label: "Campus Life" },
    { href: "#legacy", label: "Legacy" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/20 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/20"
          : "bg-white/10 backdrop-blur-xl border border-white/10"
      } rounded-full px-6 py-3 w-[90%] sm:w-[85%] md:w-[70%] max-w-6xl`}
      style={{
        boxShadow:
          "0 8px 32px rgba(31, 38, 135, 0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center space-x-2 sm:space-x-3 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ecd74a] to-[#46256c] rounded-full blur-md opacity-40 group-hover:opacity-70 transition"></div>
            <img
              src="/lovable-uploads/edbba000-eab6-4e02-9a4a-a593687c6004.png"
              alt="Jayam Logo"
              className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 bg-white shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="font-display font-bold text-lg sm:text-xl bg-gradient-to-r from-[#46256c] to-[#7c43a8] bg-clip-text text-transparent">
            Jayam Institute
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="relative px-4 py-2 text-[#46256c] font-medium rounded-full transition-all duration-300 group"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ecd74a]/0 to-[#ecd74a]/0 group-hover:from-[#ecd74a]/20 group-hover:to-[#ffe195]/20 rounded-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/30 shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
        <div className="lg:hidden mt-4 bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-xl animate-fade-in overflow-hidden">
          <div className="flex flex-col py-4">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-6 py-3 text-[#46256c] font-medium hover:text-[#7c43a8] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ecd74a]/20 hover:to-[#ffe195]/20"
                style={{
                  animation: `fade-in 0.3s ease-out ${i * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;