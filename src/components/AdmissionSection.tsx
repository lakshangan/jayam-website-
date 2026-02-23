
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, BookOpen, Star, Trophy, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AdmissionSection = () => {
    const [activeBenefit, setActiveBenefit] = useState(0);

    const benefits = [
        {
            title: "Expert Mentorship",
            desc: "Learn directly from Dr. G. Sahayaselvam and a team of industry veterans with 25+ years of experience.",
            icon: <Star className="w-6 h-6" />
        },
        {
            title: "Business Support",
            desc: "We don't just teach skills; we guide you on how to launch your own boutique and build a profitable brand.",
            icon: <Trophy className="w-6 h-6" />
        },
        {
            title: "NSDC Certification",
            desc: "Gain Government-recognized certificates that validate your expertise and open doors to global opportunities.",
            icon: <ShieldCheck className="w-6 h-6" />
        }
    ];



    return (
        <section className="section-padding bg-[#050508] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="premium-card bg-white/[0.01] border-white/5 rounded-[4rem] p-8 md:p-20 overflow-hidden relative shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-10"
                                >
                                    <Sparkles className="w-3 h-3" /> Start Learning Today
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tighter"
                                >
                                    Become a <br />
                                    <span className="gold-gradient-text italic font-normal">Professional Tailor</span>
                                </motion.h2>

                                <p className="text-white/40 text-xl font-light leading-relaxed mb-12 max-w-lg">
                                    Learn the best skills to grow your own successful fashion business. Simple, practical, and certified training.
                                </p>

                                <div className="flex flex-col gap-6">
                                    <Link
                                        to="/courses"
                                        className="btn-premium px-10 py-5 group flex items-center justify-center gap-3 w-fit shadow-2xl shadow-accent/20"
                                    >
                                        Inquire for Admission
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>

                                    <div className="flex flex-wrap gap-8 pt-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            <span className="text-[10px] uppercase tracking-widest font-black text-white/60">100% Practical</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            <span className="text-[10px] uppercase tracking-widest font-black text-white/60">Job Assistance</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            <span className="text-[10px] uppercase tracking-widest font-black text-white/60">Batch Flexibility</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="space-y-4">
                                {benefits.map((benefit, idx) => (
                                    <motion.div
                                        key={idx}
                                        onMouseEnter={() => setActiveBenefit(idx)}
                                        className={`p-8 rounded-[2.5rem] border transition-all duration-500 cursor-pointer relative group ${activeBenefit === idx
                                            ? 'bg-accent/10 border-accent/30 scale-[1.02]'
                                            : 'bg-white/[0.02] border-white/5 opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl ${activeBenefit === idx ? 'bg-accent text-background' : 'bg-white/5 text-accent'
                                                }`}>
                                                {benefit.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                                                <p className="text-sm text-white/40 font-light leading-relaxed">
                                                    {benefit.desc}
                                                </p>
                                            </div>
                                        </div>
                                        {activeBenefit === idx && (
                                            <motion.div
                                                layoutId="active-benefit-bg"
                                                className="absolute inset-0 bg-accent/5 -z-10 rounded-[2.5rem] blur-xl"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Interactive Floating Detail Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 bg-accent p-8 rounded-3xl shadow-2xl hidden lg:block rotate-12 group"
                            >
                                <div className="text-background text-[10px] font-black uppercase tracking-tighter mb-2 opacity-60">Success Rate</div>
                                <div className="text-background text-4xl font-black italic">1000+</div>
                                <div className="text-[9px] text-background/80 font-bold uppercase mt-2 tracking-widest">Graduates Since 1995</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionSection;
