
import { motion } from 'framer-motion';
import { Scissors, Award, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpecialistSection = () => {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            <div className="container-custom">
                <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 md:p-24 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full translate-x-1/2 -z-10" />

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center mb-10 border border-accent/20"
                            >
                                <Scissors className="w-8 h-8 text-accent" />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
                            >
                                Professional <span className="gold-gradient-text italic font-normal">Training</span>
                            </motion.h2>

                            <p className="text-white/40 text-xl font-light leading-relaxed mb-12">
                                Our Professional Tailoring course is designed for everyone to easily understand.
                                We teach you step-by-step how to measure, cut, and stitch perfectly,
                                helping you start your own successful tailoring business.
                            </p>

                            <div className="flex flex-wrap gap-8 mb-16">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                    <span className="text-[10px] uppercase tracking-widest font-black text-white/60">Government Certified</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                    <span className="text-[10px] uppercase tracking-widest font-black text-white/60">Easy to Learn</span>
                                </div>
                            </div>

                            <Link to="/courses" className="btn-premium px-10 py-5 group flex items-center gap-3 w-fit">
                                View Our Course
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5]">
                                <img
                                    src="/lovable-uploads/tamil_students_sewing.png"
                                    alt="Professional Tailoring Training"
                                    className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialistSection;
