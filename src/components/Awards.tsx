
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Award, Star, Trophy, Medal } from 'lucide-react';

const awards = [
    {
        title: "Best Tailoring Institute",
        organization: "National Design Excellence Awards",
        image: "/lovable-uploads/tamil_tailoring_class.png",
        icon: <Trophy className="w-8 h-8 text-accent" />,
        description: "Awarded for our great work in teaching traditional sewing and new fashion styles."
    },
    {
        title: "Skill India Excellence Award",
        organization: "Ministry of Skill Development",
        image: "/lovable-uploads/tamil_students_sewing.png",
        icon: <Award className="w-8 h-8 text-accent" />,
        description: "Given to us by the Government for being a top school for learning professional skills."
    },
    {
        title: "Vogue Creative Choice",
        organization: "Fashion Industry Forum",
        image: "/lovable-uploads/tamil_tailor_1.png",
        icon: <Star className="w-8 h-8 text-accent" />,
        description: "Honored for having students who make amazing and creative clothing designs."
    }
];

const Awards = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

    return (
        <section id="awards" ref={containerRef} className="section-padding bg-background relative overflow-hidden">
            <div className="noise-overlay" />

            {/* Dynamic Background Text (Parallax) */}
            <motion.div
                style={{ x }}
                className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none opacity-[0.02] z-0"
            >
                <span className="text-[25vw] font-display font-black uppercase italic tracking-tighter text-white">
                    Awards Winning Best Success
                </span>
            </motion.div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <Award className="w-4 h-4 text-accent" />
                            <span className="text-xs uppercase tracking-[0.3em] font-medium text-accent">Our Best Wins</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-title-section font-bold text-white mb-0"
                        >
                            Our Certified <br />
                            <span className="gold-gradient-text italic font-normal">Success</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 text-sm md:text-base font-light leading-relaxed max-w-sm md:text-right"
                    >
                        We are proud of our history of winning awards and being recognized by the best in the fashion world.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {awards.map((award, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/5 mb-6">
                                <img
                                    src={award.image}
                                    alt={award.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                                {/* Award Type Icon Overlay */}
                                <div className="absolute top-6 left-6 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                    {award.icon}
                                </div>

                                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-accent mb-2 block">
                                        {award.organization}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300">
                                        {award.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="px-4">
                                <p className="text-[11px] md:text-sm text-white/40 leading-relaxed font-light italic border-l-2 border-accent/20 pl-6 group-hover:border-accent transition-all duration-500">
                                    {award.description}
                                </p>
                            </div>

                            {/* Decorative Line */}
                            <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-accent/50 to-transparent transition-all duration-1000 mt-6" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
