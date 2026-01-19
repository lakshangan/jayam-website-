
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
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 items-stretch">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className="group flex flex-col items-center text-center space-y-3 h-full p-4"
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-secondary/50 border border-white/5 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500">
                                    {stat.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-2xl md:text-5xl font-bold text-white tracking-tight">
                                        {stat.value}
                                    </h3>
                                    <p className="text-accent text-[9px] md:text-xs uppercase tracking-[0.3em] font-black">
                                        {stat.label}
                                    </p>
                                    <p className="text-white/20 text-[9px] font-medium uppercase tracking-widest hidden md:block">
                                        {stat.description}
                                    </p>
                                </div>

                                {/* Decorative Line */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "20px" }}
                                    viewport={{ once: true }}
                                    className="h-[1px] bg-accent/20 mt-2 group-hover:bg-accent group-hover:w-full transition-all duration-700 mx-auto"
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
