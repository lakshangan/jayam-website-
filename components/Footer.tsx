const Footer = () => {
  return (
    <footer className="bg-[#0B0B2C] text-white py-12 sm:py-16 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#46256c]/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-10 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold font-display mb-3 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] bg-clip-text text-transparent">
              Jayam Institute
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto md:mx-0">
              Empowering students with excellence in education since 1995.  
              Shaping futures through knowledge and innovation.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-5 mt-5">
              {[
                {
                  href: "#",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  ),
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full bg-white/5 hover:bg-[#ecd74a]/20 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links — only what's in navbar */}
          <div className="flex-1 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-[#ecd74a]">Quick Links</h4>
            <ul className="space-y-3 text-sm sm:text-base text-white/70">
              <li><a href="#home" className="hover:text-[#ecd74a] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#ecd74a] transition">About</a></li>
              <li><a href="#courses" className="hover:text-[#ecd74a] transition">Courses</a></li>
              <li><a href="#why-choose-us" className="hover:text-[#ecd74a] transition">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-[#ecd74a] transition">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-white/60 text-xs sm:text-sm mb-3 sm:mb-0">
            © {new Date().getFullYear()} Jayam Institute. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 text-xs sm:text-sm text-white/60">
            <a href="#" className="hover:text-[#ecd74a] transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#ecd74a] transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer