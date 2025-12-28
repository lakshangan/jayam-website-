
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050508] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/logo.png"
                alt="Jayam Logo"
                className="w-12 h-12 rounded-full border border-white/10 p-1 bg-white"
              />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white leading-tight">Jayam</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">Institute</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Crafting excellence in fashion and beauty since 1995. Our boutique education approach empowers the next generation of creative entrepreneurs.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/40 hover:bg-white/[0.02] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-8">Specializations</h3>
            <ul className="space-y-4">
              {['Professional Tailoring', 'Fashion Designing', 'Beautician Courses'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-accent transition-all duration-300 mr-0 group-hover:mr-3 opacity-0 group-hover:opacity-100" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {['Courses', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-accent transition-all duration-300 mr-0 group-hover:mr-3 opacity-0 group-hover:opacity-100" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-8">Global HQ</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={20} className="text-accent shrink-0" />
                <p className="text-sm text-white/40 font-light leading-relaxed">
                  123 Creative Street, <br />
                  Chennai, Tamil Nadu <br />
                  600001, India
                </p>
              </div>
              <div className="flex gap-4">
                <Phone size={18} className="text-accent shrink-0" />
                <p className="text-sm text-white/40 font-light">+91 98765 43210</p>
              </div>
              <div className="flex gap-4">
                <Mail size={18} className="text-accent shrink-0" />
                <p className="text-sm text-white/40 font-light">admissions@jayam.edu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            &copy; {new Date().getFullYear()} Jayam Institute of Design. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-white/20">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

