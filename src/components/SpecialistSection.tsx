
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
                                Specialist <span className="gold-gradient-text italic font-normal">Craftsmanship</span>
                            </motion.h2>

                            <p className="text-white/40 text-xl font-light leading-relaxed mb-12">
                                Our Professional Tailoring program is the diamond in our crown.
                                We teach the physics of fabric and the geometry of fit,
                                turning students into elite couture architects.
                            </p>

                            <div className="flex flex-wrap gap-8 mb-16">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                    <span className="text-[10px] uppercase tracking-widest font-black text-white/60">NSDC Accredited</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                    <span className="text-[10px] uppercase tracking-widest font-black text-white/60">Global Standards</span>
                                </div>
                            </div>

                            <Link to="/courses" className="btn-premium px-10 py-5 group flex items-center gap-3 w-fit">
                                View Specialist Program
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
                                    src="https://images.unsplash.com/photo-1593030942428-a5451dca4b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    alt="Specialist Tailoring"
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000"
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
