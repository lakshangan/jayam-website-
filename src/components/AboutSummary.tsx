import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from './TextReveal';
import AnimatedLogo from './AnimatedLogo';
import { useAppContext } from '../context/AppContext';

const AboutSummary = () => {
    const { t } = useAppContext();

    return (
        <section id="about-summary" className="section-padding bg-background relative overflow-hidden">
            {/* Subtle contrast element */}
            <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 opacity-50" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-video lg:aspect-square flex items-center justify-center bg-card rounded-[3rem] border border-black/[0.03] shadow-premium overflow-hidden group">
                            <img
                                src="/lovable-uploads/modern_indian_fashion_studio.png"
                                alt="Modern Indian Fashion Studio"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent pointer-events-none" />
                        </div>
                        {/* Absolute stats card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-lg hidden md:block border border-black/5"
                        >
                            <div className="text-4xl font-bold text-foreground mb-1">25+</div>
                            <div className="text-[10px] uppercase tracking-widest font-bold text-foreground/50">{t('stats.legacy')}</div>
                        </motion.div>
                    </motion.div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-accent" />
                            <span className="text-xs uppercase tracking-[0.3em] font-black text-accent">{t('nav.about')}</span>
                        </motion.div>

                        <TextReveal delay={0.2}>
                            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                                {t('about.title.part1')} <span className="text-accent">{t('about.title.highlight')}</span> <br /> {t('about.title.part2')}
                            </h2>
                        </TextReveal>

                        <p className="text-foreground/70 text-lg font-light leading-relaxed mb-10 max-w-xl">
                            {t('about.description')}
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link to="/courses" className="group relative inline-flex items-center gap-6 px-8 py-4 bg-foreground text-background rounded-full overflow-hidden transition-all hover:pr-10">
                                <span className="relative z-10 font-bold tracking-widest uppercase text-[11px]">{t('about.cta')}</span>
                                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSummary;
