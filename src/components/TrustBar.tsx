import { motion } from 'framer-motion';
import { Users, BookmarkCheck, Award, Briefcase } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const TrustBar = () => {
    const { t } = useAppContext();

    const stats = [
        {
            icon: <Users className="w-6 h-6 transition-colors duration-500" />,
            value: "100+",
            label: t('stats.alumni'),
            description: "Empowered women in fashion"
        },
        {
            icon: <BookmarkCheck className="w-6 h-6 transition-colors duration-500" />,
            value: "25+",
            label: t('stats.legacy'),
        },
        {
            icon: <Award className="w-6 h-6 transition-colors duration-500" />,
            value: "100%",
            label: t('stats.nsdc'),
            description: "National recognition"
        },
        {
            icon: <Briefcase className="w-6 h-6 transition-colors duration-500" />,
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
                            className="flex flex-col items-center text-center p-8 md:p-12 rounded-[2rem] bg-card border border-black/5 shadow-sm"
                        >
                            <div className="w-16 h-16 rounded-full bg-secondary border border-black/5 flex items-center justify-center mb-8 text-accent">
                                {stat.icon}
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                                    {stat.value}
                                </h3>
                                <p className="text-foreground/60 text-xs uppercase tracking-[0.2em] font-semibold max-w-[120px] mx-auto leading-relaxed">
                                    {stat.label}
                                </p>
                            </div>
                            <div className="mt-8 h-1 w-12 bg-accent/20 rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
