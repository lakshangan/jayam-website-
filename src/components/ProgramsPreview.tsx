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
                <div className="flex flex-col items-center text-center mb-20 gap-8 mx-auto">
                    <div className="max-w-2xl flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center gap-4 mb-6"
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
                            {t('programs.title.part1')} <span className="text-accent">{t('programs.title.highlight')}</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-4"
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
                            className="group p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-card border border-black/[0.03] hover:border-accent/40 shadow-premium hover:shadow-2xl transition-all duration-700 hover:scale-[1.01] flex flex-col"
                        >
                            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-black/[0.03] relative shadow-sm inline-block shrink-0">
                                <img src={program.image} alt={program.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-background border border-black/[0.05] flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-lg">
                                    <BookOpen size={16} className="text-accent group-hover:text-background" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">{program.name}</h3>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-black block mb-6">{program.highlight}</span>
                            <p className="text-foreground/50 text-sm leading-relaxed mb-8 font-light line-clamp-3">{program.description}</p>

                            <div className="mt-auto pt-4">
                                <Link to={`/course/${program.id}`} className="w-full flex items-center justify-center gap-2 py-4 bg-secondary border border-black/[0.05] hover:border-accent/40 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-black text-foreground/70 hover:text-accent hover:bg-black/5 transition-all">
                                    {t('common.learnMore')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsPreview;
