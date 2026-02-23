
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, Target, Mail, Phone, MapPin } from 'lucide-react';
import TextReveal from './TextReveal';

const FounderCredentials = () => {
    const education = [
        {
            title: "Honorary Doctorate in Sewing (Honoris Causa)",
            institution: "International Tamil Cultural University",
            year: "2025"
        },
        {
            title: "Commercial Master Designer Diploma",
            institution: "St. Joseph Tailoring Institute",
            year: "2014"
        },
        {
            title: "Commonwealth Certificate in Youth Development",
            institution: "Annamalai University",
            year: "2011–2012"
        },
        {
            title: "Government Technical Examination – Higher Grade",
            institution: "Tamil Nadu (Embroidery)",
            year: "2011"
        }
    ];

    const competencies = [
        "Advanced Tailoring & Garment Construction",
        "Bridal & Boutique Designing",
        "Hand & Machine Embroidery",
        "Pattern Drafting & Cutting Techniques",
        "Government Technical Exam Coaching",
        "Women Skill Development & Entrepreneurship"
    ];

    return (
        <section className="section-padding bg-secondary/20 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Education & Experience */}
                    <div className="space-y-16">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <Award className="text-accent w-6 h-6" />
                                <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Education & Credentials</h3>
                            </motion.div>

                            <div className="space-y-8 border-l border-white/5 pl-10">
                                {education.map((item, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="absolute -left-[45px] top-1 w-2 h-2 rounded-full bg-accent" />
                                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-white/40 text-sm">{item.institution} • {item.year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <Briefcase className="text-accent w-6 h-6" />
                                <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Professional Impact</h3>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {competencies.map((comp, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all group">
                                        <p className="text-white/60 text-xs font-bold uppercase tracking-wider group-hover:text-accent transition-colors">{comp}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact & Mission Card */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <div className="premium-card p-12 bg-white/[0.02] border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                            <div className="flex items-center gap-4 mb-10">
                                <Target className="text-accent w-8 h-8" />
                                <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Our Mission</h3>
                            </div>

                            <p className="text-white/60 text-xl font-light leading-relaxed mb-12 border-l-2 border-accent/20 pl-8">
                                To empower women through structured tailoring education and transform skills into sustainable livelihood
                                and successful entrepreneurship opportunities.
                            </p>

                            <div className="space-y-6 pt-10 border-t border-white/5">
                                <a href="tel:+918925774434" className="flex items-center gap-6 group/link cursor-pointer">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-accent group-hover/link:bg-accent group-hover/link:text-background transition-all">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-black text-white/20 tracking-widest">Direct Line</p>
                                        <p className="text-white font-bold group-hover:text-accent transition-colors">+91 89257 74434</p>
                                    </div>
                                </a>
                                <a href="mailto:jayamfashioninstitution@gmail.com" className="flex items-center gap-6 group/link cursor-pointer">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-accent group-hover/link:bg-accent group-hover/link:text-background transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-black text-white/20 tracking-widest">Email Address</p>
                                        <p className="text-white font-bold group-hover:text-accent transition-colors break-all">jayamfashioninstitution@gmail.com</p>
                                    </div>
                                </a>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=7th+St+Sundaravelpuram+West+Thalamuthu+Nagar+Thoothukudi+Tamil+Nadu+628002"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-6 group/link cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-accent group-hover/link:bg-accent group-hover/link:text-background transition-all">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-black text-white/20 tracking-widest">Location</p>
                                        <p className="text-white font-bold group-hover:text-accent transition-colors">Tamil Nadu, India</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderCredentials;
