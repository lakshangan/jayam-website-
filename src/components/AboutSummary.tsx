
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from './TextReveal';
import AnimatedLogo from './AnimatedLogo';

const AboutSummary = () => {
    return (
        <section id="about-summary" className="section-padding bg-secondary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 opacity-50" />

            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-video lg:aspect-square flex items-center justify-center">
                            <AnimatedLogo />
                        </div>
                        {/* Absolute stats card */}
                        <div className="absolute -bottom-10 -right-10 bg-accent p-8 rounded-3xl shadow-2xl hidden md:block">
                            <div className="text-4xl font-bold text-background mb-1">25+</div>
                            <div className="text-[10px] uppercase tracking-widest font-black text-background/60">Years of Legacy</div>
                        </div>
                    </motion.div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-accent" />
                            <span className="text-xs uppercase tracking-[0.3em] font-medium text-accent">Who We Are</span>
                        </motion.div>

                        <TextReveal delay={0.2}>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                Turn Your <span className="gold-gradient-text italic font-normal">Fashion Passion</span> <br /> into a Successful Career
                            </h2>
                        </TextReveal>

                        <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
                            Stop dreaming and start creating. We don't just teach you how to sew—we show you how to build a future.
                            Since 1995, we've helped thousands of students turn their passion into profitable businesses.
                            Whether you're starting from scratch or looking to master high-end couture, we give you the skills and confidence to stand out.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link to="/about" className="group flex items-center gap-4 text-white font-bold tracking-widest uppercase text-[11px] hover:text-accent transition-colors">
                                <span className="w-12 h-[1px] bg-accent/50 group-hover:w-16 transition-all" />
                                Start Your Journey
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSummary;
