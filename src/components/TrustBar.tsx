
import { motion } from 'framer-motion';
import { Users, BookmarkCheck, Award, Briefcase } from 'lucide-react';

const stats = [
    {
        icon: <Users className="w-6 h-6 text-accent" />,
        value: "5000+",
        label: "Successful Alumni",
        description: "Empowered women in fashion"
    },
    {
        icon: <BookmarkCheck className="w-6 h-6 text-accent" />,
        value: "25+",
        label: "Years of Legacy",
        description: "Excellence since 1995"
    },
    {
        icon: <Award className="w-6 h-6 text-accent" />,
        value: "100%",
        label: "NSDC Approved",
        description: "National recognition"
    },
    {
        icon: <Briefcase className="w-6 h-6 text-accent" />,
        value: "10+",
        label: "Industry Partners",
        description: "Placement support"
    }
];

const TrustBar = () => {
    return (
        <section className="py-20 bg-background relative overflow-hidden mask-linear-t mask-linear-b">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="group flex flex-col items-center text-center space-y-4"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-secondary/50 border border-white/5 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500">
                                {stat.icon}
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                    {stat.value}
                                </h3>
                                <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold">
                                    {stat.label}
                                </p>
                                <p className="text-white/20 text-[10px] md:text-xs font-light">
                                    {stat.description}
                                </p>
                            </div>

                            {/* Decorative Line */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "40px" }}
                                viewport={{ once: true }}
                                className="h-[1px] bg-accent/20 mt-4 group-hover:bg-accent/50 transition-colors"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
