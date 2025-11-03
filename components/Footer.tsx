
const Footer = () => {
  return (
    <footer className="bg-jayam-blue text-white pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Jayam Institute</h3>
            <p className="text-white/80 mb-4">
              Empowering students with knowledge and skills to excel in their chosen fields since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-jayam-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-jayam-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-jayam-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-jayam-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-jayam-gold transition-colors">Engineering</a></li>
              <li><a href="#" className="text-white/80 hover:text-jayam-gold transition-colors">Computer Science</a></li>
              <li><a href="#" className="text-white/80 hover:text-jayam-gold transition-colors">Management</a></li>
              <li><a href="#" className="text-white/80 hover:text-jayam-gold transition-colors">Arts</a></li>
              <li><a href="#" className="text-white/80 hover:text-jayam-gold transition-colors">Science</a></li>
              <li><a href="#" className="text-white/80 hover:text-jayam-gold transition-colors">Tailoring</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-jayam-gold transition-colors">Admissions</a></li>
              <li><a href="#" className="text-white/80 hover:text-jayam-gold transition-colors">Campus Life</a></li>
              <li><a href="#" className="text-white/80 hover:text-jayam-gold transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-jayam-gold transition-colors">Faculty</a></li>
              <li><a href="#" className="text-white/80 hover:text-jayam-gold transition-colors">Infrastructure</a></li>
              <li><a href="#" className="text-white/80 hover:text-jayam-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Contact</h3>
            <address className="not-italic text-white/80">
              <p>123 Education Street</p>
              <p>Chennai, Tamil Nadu</p>
              <p>India - 600001</p>
              <p className="mt-2">Phone: +91 98765 43210</p>
              <p>Email: info@jayaminstitute.edu</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Jayam Institute. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-white/70">
            <a href="#" className="hover:text-jayam-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-jayam-gold transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-jayam-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
