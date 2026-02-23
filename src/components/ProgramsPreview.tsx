import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllCourses } from '@/data/courses';
import { useAppContext } from '../context/AppContext';

const ProgramsPreview = () => {
    const { t, language } = useAppContext();

    const courses = getAllCourses(language);
    const programs = [
        courses[0],
        courses[1],
        courses[2],
        courses[3]
    ];

    return (
        <section id="programs-preview" className="section-padding bg-background relative overflow-hidden">
            {/* Background enhancement */}
            <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <Layout className="w-4 h-4 text-accent" />
                            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">{t('nav.programs')}</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-bold text-foreground leading-tight"
                        >
                            {t('programs.title.part1')} <span className="gold-gradient-text italic font-normal">{t('programs.title.highlight')}</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/courses" className="group relative inline-flex items-center gap-4 px-8 py-4 bg-secondary border border-black/[0.05] text-foreground rounded-full overflow-hidden transition-all hover:border-accent/30">
                            <span className="relative z-10 font-bold tracking-widest uppercase text-[10px]">{t('programs.cta')}</span>
                            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program, idx) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-10 rounded-[3rem] bg-secondary/30 border border-black/[0.03] hover:bg-white dark:hover:bg-card hover:border-accent/40 shadow-premium hover:shadow-2xl transition-all duration-700"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-background border border-black/[0.03] flex items-center justify-center group-hover:bg-accent group-hover:scale-110 mb-10 transition-all duration-500 shadow-lg">
                                <BookOpen size={20} className="text-accent group-hover:text-background" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">{program.name}</h3>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-black block mb-6">{program.highlight}</span>
                            <p className="text-foreground/50 text-sm leading-relaxed mb-8 font-light line-clamp-3">{program.description}</p>

                            <Link to={`/course/${program.id}`} className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black text-foreground/30 hover:text-accent transition-colors">
                                {t('common.learnMore')} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsPreview;
