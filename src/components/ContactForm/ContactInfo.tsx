import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Magnetic from '../Magnetic';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin className="text-accent" size={20} />,
      title: "Address",
      content: ["Jayam Tailoring Institute, Thraspuram,", "Thoothukudi, Tamil Nadu 628001"]
    },
    {
      icon: <Phone className="text-accent" size={20} />,
      title: "Phone",
      content: ["+91 98765 43210", "+91 98765 43211"]
    },
    {
      icon: <Mail className="text-accent" size={20} />,
      title: "Email",
      content: ["admissions@jayaminstitute.edu", "info@jayaminstitute.edu"]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-10">
        {contactDetails.map((item, idx) => (
          <div key={idx} className="flex gap-8 group">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500">
              {item.icon}
            </div>
            <div className="pt-2">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold mb-3">{item.title}</h4>
              <div className="space-y-1">
                {item.content.map((line, lIdx) => (
                  <p key={lIdx} className="text-white/60 text-sm md:text-base font-light leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-10 border-t border-white/5">
        <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold mb-8">Direct Channels</h4>
        <div className="flex gap-4">
          {[
            { icon: <Facebook size={20} />, label: "Facebook" },
            { icon: <Instagram size={20} />, label: "Instagram" },
            { icon: <Twitter size={20} />, label: "Twitter" },
            { icon: <Linkedin size={20} />, label: "LinkedIn" }
          ].map((social, sIdx) => (
            <Magnetic key={sIdx} strength={0.3}>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:bg-accent/10 hover:border-accent/30 transition-all duration-500"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            </Magnetic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
