
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allCourses } from '@/data/courses';

const programs = [
    allCourses[0],
    allCourses[1],
    allCourses[2],
    allCourses[3]
];

const ProgramsPreview = () => {
    return (
        <section id="programs-preview" className="section-padding bg-background relative overflow-hidden">
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
                            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Our Programs</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-bold text-white leading-tight"
                        >
                            What We <span className="gold-gradient-text italic font-normal">Are Doing</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/courses" className="btn-premium px-8 py-4 group flex items-center gap-3">
                            Explore All Courses
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                            className="premium-card p-8 group hover:border-accent/40 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent/40 mb-8 transition-all">
                                <BookOpen size={20} className="text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{program.name}</h3>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-accent/60 font-black block mb-4">{program.highlight}</span>
                            <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">{program.description}</p>
                            <Link to={`/course/${program.id}`} className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 group-hover:text-accent transition-colors flex items-center gap-2">
                                Learn More <ArrowRight size={12} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsPreview;
