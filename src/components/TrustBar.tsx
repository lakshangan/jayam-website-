import { motion } from 'framer-motion';
import { Users, BookmarkCheck, Award, Briefcase } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const TrustBar = () => {
    const { t } = useAppContext();

    const stats = [
        {
            icon: <Users className="w-6 h-6 text-accent" />,
            value: "100+",
            label: t('stats.alumni'),
            description: "Empowered women in fashion"
        },
        {
            icon: <BookmarkCheck className="w-6 h-6 text-accent" />,
            value: "25+",
            label: t('stats.legacy'),
        },
        {
            icon: <Award className="w-6 h-6 text-accent" />,
            value: "100%",
            label: t('stats.nsdc'),
            description: "National recognition"
        },
        {
            icon: <Briefcase className="w-6 h-6 text-accent" />,
            value: "20+",
            label: t('stats.partners'),
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 items-stretch">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="group flex flex-col items-center text-center p-8 md:p-12 rounded-[3.5rem] bg-secondary/30 border border-black/[0.03] hover:border-accent/40 hover:bg-white dark:hover:bg-card transition-all duration-700 shadow-premium hover:shadow-2xl"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-background border border-black/[0.03] flex items-center justify-center mb-10 group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-xl">
                                {stat.icon}
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">
                                    {stat.value}
                                </h3>
                                <p className="text-foreground/40 text-[10px] md:text-xs uppercase tracking-[0.5em] font-black max-w-[120px] mx-auto leading-relaxed group-hover:text-accent transition-colors">
                                    {stat.label}
                                </p>
                            </div>
                            <div className="mt-10 h-1.5 w-12 bg-accent/10 rounded-full overflow-hidden">
                                <div className="h-full w-0 group-hover:w-full bg-accent transition-all duration-1000 ease-out" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
