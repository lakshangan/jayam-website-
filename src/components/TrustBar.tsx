
import { motion } from 'framer-motion';
import { Users, BookmarkCheck, Award, Briefcase } from 'lucide-react';


const stats = [
    {
        icon: <Users className="w-6 h-6 text-accent" />,
        value: "100+",
        label: "Successful Alumni",
        description: "Empowered women in fashion"
    },
    {
        icon: <BookmarkCheck className="w-6 h-6 text-accent" />,
        value: "25+",
        label: "Years of Legacy",
        // description: "Excellence since 1995"
    },
    {
        icon: <Award className="w-6 h-6 text-accent" />,
        value: "100%",
        label: "NSDC Approved",
        description: "National recognition"
    },
    {
        icon: <Briefcase className="w-6 h-6 text-accent" />,
        value: "20+",
        label: "Industry Partners",
        // description: "Placement support"
    }
];

const Counter = ({ value }: { value: string }) => {
    const numericValue = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/[0-9]/g, '');

    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex"
        >
            <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                {value}
            </motion.span>
        </motion.span>
    );
};

const TrustBar = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-16 items-stretch">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className="group flex flex-col items-center text-center space-y-6 h-full p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all duration-700"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-secondary/50 border border-white/5 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-accent/0 group-hover:shadow-accent/20">
                                    {stat.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                        {stat.value}
                                    </h3>
                                    <p className="text-accent text-[10px] md:text-xs uppercase tracking-[0.4em] font-black">
                                        {stat.label}
                                    </p>
                                    <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {stat.description}
                                    </p>
                                </div>

                                <div className="h-[2px] w-8 bg-accent/20 rounded-full group-hover:w-full group-hover:bg-accent transition-all duration-700" />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
