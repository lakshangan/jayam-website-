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
            icon: <Shield className="w-6 h-6 transition-colors duration-500" />,
            image: "/lovable-uploads/modern_indian_fashion_designer.png"
        },
        {
            title: "Certification",
            description: "Training Center for tailoring & fashion design",
            icon: <Award className="w-6 h-6 transition-colors duration-500" />,
            image: "/lovable-uploads/modern_indian_fashion_studio.png"
        },
        {
            title: "Accredited for",
            description: "Women Empowerment & Skill Development",
            icon: <Users className="w-6 h-6 transition-colors duration-500" />,
            image: "/lovable-uploads/tamil_student_1.png"
        },
        {
            title: "Partners",
            description: "Skill India, Ministry of Skill Development",
            icon: <Handshake className="w-6 h-6 transition-colors duration-500" />,
            image: "/lovable-uploads/tamil_student_3.png"
        },
        {
            title: "Recognition",
            description: "Nationally recognized certifications",
            icon: <Star className="w-6 h-6 transition-colors duration-500" />,
            image: "/lovable-uploads/tamil_tailor_1.png"
        },
        {
            title: "Support",
            description: "Government skill upgradation schemes",
            icon: <CheckCircle2 className="w-6 h-6 transition-colors duration-500" />,
            image: "/lovable-uploads/tamil_tailoring_class.png"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {accreditations.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-card border border-black/[0.03] hover:border-accent/40 shadow-premium hover:shadow-2xl transition-colors transition-shadow duration-700 flex flex-col text-left overflow-hidden relative"
                        >
                            <div className="w-full aspect-[4/3] rounded-2xl md:rounded-[2rem] overflow-hidden mb-6 md:mb-8 border border-black/[0.03] relative shadow-sm shrink-0">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute top-4 left-4 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-background/90 backdrop-blur-md border border-black/[0.05] flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-lg text-accent group-hover:text-white">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-end relative z-10 px-2">
                                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 uppercase tracking-widest leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
                                <p className="text-foreground/60 text-sm leading-relaxed font-light">
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
