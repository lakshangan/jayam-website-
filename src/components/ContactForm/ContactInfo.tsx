import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Magnetic from '../Magnetic';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin className="text-accent" size={20} />,
      title: "Address",
      content: ["7th St, Sundaravelpuram West,", "Thalamuthu Nagar, Thoothukudi, TN 628002"],
      link: "https://www.google.com/maps/search/?api=1&query=7th+St+Sundaravelpuram+West+Thalamuthu+Nagar+Thoothukudi+Tamil+Nadu+628002"
    },
    {
      icon: <Phone className="text-accent" size={20} />,
      title: "Phone",
      content: ["+91 89257 74434"],
      link: "tel:+918925774434"
    },
    {
      icon: <Mail className="text-accent" size={20} />,
      title: "Email",
      content: ["jayamfashioninstitution@gmail.com"],
      link: "mailto:jayamfashioninstitution@gmail.com"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-10">
        {contactDetails.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target={item.title === "Address" ? "_blank" : undefined}
            rel={item.title === "Address" ? "noopener noreferrer" : undefined}
            className="flex gap-8 group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-foreground/[0.03] border border-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500">
              {item.icon}
            </div>
            <div className="pt-2">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold mb-3">{item.title}</h4>
              <div className="space-y-1">
                {item.content.map((line, lIdx) => (
                  <p key={lIdx} className="text-foreground/70 text-sm md:text-base font-light leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="pt-10 border-t border-foreground/10">
        <h4 className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold mb-8">Direct Channels</h4>
        <div className="flex gap-4">
          <Magnetic strength={0.3}>
            <a
              href="https://www.instagram.com/jayam_fashion_institute"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-foreground/[0.03] border border-foreground/10 flex items-center justify-center text-foreground/50 hover:text-accent hover:bg-accent/10 hover:border-accent/30 transition-all duration-500"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
