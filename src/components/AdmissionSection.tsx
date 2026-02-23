import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star, Trophy, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const AdmissionSection = () => {
    const { t } = useAppContext();
    const [activeBenefit, setActiveBenefit] = useState(0);

    const benefits = [
        {
            title: t('admission.benefit1.title'),
            desc: t('admission.benefit1.desc'),
            icon: <Star className="w-6 h-6" />
        },
        {
            title: t('admission.benefit2.title'),
            desc: t('admission.benefit2.desc'),
            icon: <Trophy className="w-6 h-6" />
        },
        {
            title: t('admission.benefit3.title'),
            desc: t('admission.benefit3.desc'),
            icon: <ShieldCheck className="w-6 h-6" />
        }
    ];

    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="rounded-[4rem] bg-secondary/30 border border-black/[0.03] p-8 md:p-20 overflow-hidden relative shadow-premium">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black tracking-[0.4em] uppercase mb-10"
                                >
                                    <Sparkles className="w-3 h-3" /> {t('admission.badge')}
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tighter"
                                >
                                    {t('admission.title').split(' ').slice(0, 2).join(' ')} <br />
                                    <span className="gold-gradient-text italic font-normal">{t('admission.title').split(' ').slice(2).join(' ')}</span>
                                </motion.h2>

                                <p className="text-foreground/50 text-xl font-light leading-relaxed mb-12 max-w-lg">
                                    {t('admission.description')}
                                </p>

                                <div className="flex flex-col gap-8">
                                    <Link
                                        to="/courses"
                                        className="group relative inline-flex items-center gap-6 px-10 py-5 bg-foreground text-background rounded-full overflow-hidden transition-all hover:pr-12 w-fit shadow-2xl"
                                    >
                                        <span className="relative z-10 font-bold tracking-widest uppercase text-[12px]">{t('admission.cta')}</span>
                                        <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </Link>

                                    <div className="flex flex-wrap gap-8 pt-6 border-t border-black/[0.05]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-accent" />
                                            <span className="text-[10px] uppercase tracking-widest font-black text-foreground/40">{t('admission.practical')}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-accent" />
                                            <span className="text-[10px] uppercase tracking-widest font-black text-foreground/40">{t('admission.job')}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-accent" />
                                            <span className="text-[10px] uppercase tracking-widest font-black text-foreground/40">{t('admission.flexibility')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="space-y-4">
                                {benefits.map((benefit, idx) => (
                                    <motion.div
                                        key={idx}
                                        onMouseEnter={() => setActiveBenefit(idx)}
                                        className={`p-8 rounded-[2.5rem] border transition-all duration-700 cursor-pointer relative group ${activeBenefit === idx
                                            ? 'bg-white dark:bg-card border-accent/30 shadow-2xl scale-[1.02]'
                                            : 'bg-background/40 border-black/5 opacity-60 hover:opacity-100 hover:bg-background'
                                            }`}
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl ${activeBenefit === idx ? 'bg-accent text-background' : 'bg-secondary text-accent'
                                                }`}>
                                                {benefit.icon}
                                            </div>
                                            <div>
                                                <h4 className={`text-xl font-bold mb-2 transition-colors duration-500 ${activeBenefit === idx ? 'text-accent' : 'text-foreground'}`}>{benefit.title}</h4>
                                                <p className="text-sm text-foreground/50 font-light leading-relaxed">
                                                    {benefit.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Floating Detail Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-12 -right-8 bg-accent p-8 rounded-[2rem] shadow-premium hidden lg:block rotate-6 border border-white/10"
                            >
                                <div className="text-background text-[10px] font-black uppercase tracking-tighter mb-2 opacity-60 text-center">{t('common.learnMore')}</div>
                                <div className="text-background text-4xl font-black italic text-center">1000+</div>
                                <div className="text-[9px] text-background/80 font-bold uppercase mt-2 tracking-widest text-center">Graduates Since 1995</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionSection;
