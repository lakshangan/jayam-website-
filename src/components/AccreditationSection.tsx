import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Shield,
    Award,
    Users,
    Handshake,
    CheckCircle2,
    Star
} from 'lucide-react';

const AccreditationSection = () => {
    const accreditations = [
        {
            title: "Certified by",
            description: "National Skill Development Corporation (NSDC)",
            icon: <Shield className="w-6 h-6 transition-colors duration-500" />
        },
        {
            title: "Certification",
            description: "Training Center for tailoring & fashion design",
            icon: <Award className="w-6 h-6 transition-colors duration-500" />
        },
        {
            title: "Accredited for",
            description: "Women Empowerment & Skill Development",
            icon: <Users className="w-6 h-6 transition-colors duration-500" />
        },
        {
            title: "Partners",
            description: "Skill India, Ministry of Skill Development & Entrepreneurship",
            icon: <Handshake className="w-6 h-6 transition-colors duration-500" />
        },
        {
            title: "Recognition",
            description: "Nationally recognized certifications",
            icon: <Star className="w-6 h-6 transition-colors duration-500" />
        },
        {
            title: "Support",
            description: "Government skill upgradation schemes",
            icon: <CheckCircle2 className="w-6 h-6 transition-colors duration-500" />
        }
    ];

    return (
        <section className="section-padding bg-background relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black tracking-[0.4em] uppercase mb-10"
                    >
                        <ShieldCheck className="w-4 h-4" /> Official Accreditation
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tighter"
                    >
                        Proud to be an <br />
                        <span className="gold-gradient-text italic font-normal">NSDC Approved</span> <br />
                        Training Centre
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {accreditations.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-card border border-black/[0.03] hover:border-accent/40 shadow-premium hover:shadow-2xl transition-colors transition-shadow duration-700 flex flex-row md:flex-col items-center md:items-start text-left gap-6 md:gap-0"
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl md:rounded-2xl bg-background border border-black/[0.03] flex items-center justify-center md:mb-10 group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-lg text-accent group-hover:text-white">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-sm md:text-xl font-bold text-foreground mb-1 md:mb-4 uppercase tracking-widest leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
                                <p className="text-foreground/50 text-xs md:text-sm leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[200px] -z-10 pointer-events-none opacity-50" />
        </section>
    );
};

export default AccreditationSection;
