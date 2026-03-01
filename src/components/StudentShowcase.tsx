
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';


const testimonials = [
    {
        name: "Anjali Menon",
        role: "Shop Owner, Kochi",
        image: "/lovable-uploads/tamil_student_1.png",
        content: "Jayam Institute taught me everything perfectly. Thanks to their clear teaching, I easily started my own clothing shop.",
        stats: "Joined 2018 • Placement: Own Business"
    },
    {
        name: "Priya Lakshmi",
        role: "Professional Tailor",
        image: "/lovable-uploads/tamil_student_2.png",
        content: "I learned the best tailoring methods here. It was so simple to understand, and now I work successfully as a professional designer.",
        stats: "Joined 2015 • Placement: Designer"
    },
    {
        name: "Meera Nair",
        role: "Independent Designer",
        image: "/lovable-uploads/tamil_student_3.png",
        content: "I didn't know anything about tailoring before. The teachers were so helpful, and now I make beautiful dresses for others.",
        stats: "Joined 2021 • Placement: Own Business"
    }
];

const StudentShowcase = () => {
    return (
        <section className="section-padding bg-background relative overflow-hidden mask-linear-t mask-linear-b">
            <div className="noise-overlay" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <Star className="w-4 h-4 text-accent fill-accent" />
                            <span className="text-xs uppercase tracking-[0.3em] font-medium text-accent">Student Stories</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-title-section font-bold text-white mb-0"
                        >
                            Happy <br />
                            <span className="gold-gradient-text italic font-normal text-glow">Students</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 text-sm md:text-base font-light leading-relaxed max-w-sm md:text-right"
                    >
                        Meet the students who changed their lives at Jayam Institute. Join over 5,000 successful learners.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 1 }}
                                className="premium-card group relative h-full flex flex-col p-6 md:p-10"
                            >
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/5 group-hover:text-accent/20 transition-all duration-700" />

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden transition-all duration-700 border border-white/10 group-hover:border-accent/30">
                                        <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold tracking-tight text-base md:text-lg group-hover:text-accent transition-colors">{item.name}</h4>
                                        <p className="text-accent/60 text-[9px] uppercase tracking-widest font-black">{item.role}</p>
                                    </div>
                                </div>

                                <p className="text-white/40 text-[11px] md:text-base italic leading-relaxed font-light mb-8 flex-grow relative z-10">
                                    "{item.content}"
                                </p>

                                <div className="pt-6 border-t border-white/5 flex flex-col gap-2 mt-auto">
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/20 font-black">{item.stats}</span>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={8} className="text-accent fill-accent" />)}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentShowcase;
