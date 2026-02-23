import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Shield,
    Star,
    Users,
    Handshake,
    Award,
    CheckCircle2
} from 'lucide-react';

const AccreditationSection = () => {
    const accreditations = [
        {
            title: "National Certification",
            description: "NSDC Approved Training Partner providing government-recognized excellence.",
            icon: <Shield className="w-6 h-6 text-accent" />
        },
        {
            title: "Global Standards",
            description: "Industry-aligned curriculum and pedagogy matching international fashion benchmarks.",
            icon: <Star className="w-6 h-6 text-accent" />
        },
        {
            title: "Empowerment",
            description: "A strong focus on women entrepreneurship and professional self-reliance.",
            icon: <Users className="w-6 h-6 text-accent" />
        },
        {
            title: "Strategic Partners",
            description: "Recognized by Skill India and the Ministry of Skill Development & Entrepreneurship.",
            icon: <Handshake className="w-6 h-6 text-accent" />
        },
        {
            title: "Recognition",
            description: "Hold nationally valid professional credentials that certify your expertise.",
            icon: <Award className="w-6 h-6 text-accent" />
        },
        {
            title: "Official Support",
            description: "Direct access to various government skill upgradation and support schemes.",
            icon: <CheckCircle2 className="w-6 h-6 text-accent" />
        }
    ];

    return (
        <section className="section-padding bg-background relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-8"
                    >
                        <ShieldCheck className="w-4 h-4" /> Official Accreditation
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-bold text-white mb-8 leading-[1.1]"
                    >
                        A Certified <span className="gold-gradient-text italic font-normal">Global Hub</span> <br />
                        for Design Excellence
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {accreditations.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="premium-card p-10 group hover:border-accent/40 transition-all duration-500 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{item.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed font-light">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 flex justify-center"
                >
                    <div className="px-8 py-3 rounded-full bg-white/[0.02] border border-white/5 flex items-center gap-6">
                        <span className="text-[10px] uppercase font-bold text-white/20 tracking-widest italic">
                            Certificate No: <span className="text-accent/60">JC2024-5892 (Official Partner)</span>
                        </span>
                        <div className="w-[1px] h-4 bg-white/10" />
                        <span className="text-[10px] uppercase font-bold text-white/20 tracking-widest">
                            Valid Upto: <span className="text-white/40 font-black tracking-normal">18/OCT/2025</span>
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[200px] -z-10 pointer-events-none opacity-50" />
        </section>
    );
};

export default AccreditationSection;
