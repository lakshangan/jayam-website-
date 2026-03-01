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
                            className="group p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-card border border-black/[0.03] hover:border-accent/40 shadow-premium hover:shadow-2xl transition-all duration-700 flex flex-col text-left overflow-hidden relative min-h-[320px]"
                        >
                            {/* Abstract Backgrounds */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[60px] group-hover:bg-accent/15 transition-colors duration-700" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors duration-700" />

                            <div className="relative z-10 flex-1 flex flex-col justify-between">
                                {/* Icon Container */}
                                <div className="mb-12 relative w-fit">
                                    <div className="absolute inset-0 bg-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-background/90 backdrop-blur-md border border-black/[0.05] flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-lg text-accent group-hover:text-white">
                                        <div className="scale-125 md:scale-150">
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="mt-auto">
                                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 uppercase tracking-widest leading-tight group-hover:text-accent transition-colors duration-500">{item.title}</h3>
                                    <p className="text-foreground/60 text-sm leading-relaxed font-light">
                                        {item.description}
                                    </p>
                                </div>
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
