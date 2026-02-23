import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { SewingMachineScene } from '@/components/SewingMachineScene';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';

const CinematicText = ({ title, subtitle, content, side, index }: any) => {
    return (
        <section className={`min-h-[80vh] flex flex-col justify-center px-6 md:px-24 overflow-hidden relative ${side === 'right' ? 'items-end' : 'items-start'}`}>
            <motion.div
                initial={{ opacity: 0, x: side === 'right' ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-20%", once: false }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`max-w-xl ${side === 'right' ? 'text-right' : 'text-left'}`}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className={`flex items-center gap-4 mb-6 ${side === 'right' ? 'flex-row-reverse' : ''}`}
                >
                    <div className="h-[1px] w-8 bg-accent/50" />
                    <span className="text-accent text-[10px] uppercase font-black tracking-[0.5em]">{subtitle}</span>
                </motion.div>

                <h2 className="text-5xl md:text-8xl font-display font-black text-foreground mb-8 leading-tight tracking-tighter">
                    {title}
                </h2>

                <p className="text-lg md:text-xl text-foreground/50 leading-relaxed font-light mb-12">
                    {content}
                </p>

                <div className={`flex items-center gap-6 ${side === 'right' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-14 h-14 rounded-full border border-black/[0.05] flex items-center justify-center text-accent/40 font-display italic font-bold">
                        0{index + 1}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

const SewingStory = () => {
    const { t } = useAppContext();
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 25,
        restDelta: 0.001
    });

    useEffect(() => {
        return smoothProgress.onChange(v => setProgress(v));
    }, [smoothProgress]);

    const canvasOpacity = useTransform(smoothProgress, [0, 0.05, 0.9, 1], [0, 1, 1, 0]);
    const canvasScale = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.9]);

    const storyPoints = [
        {
            subtitle: t('story.origin.subtitle'),
            title: t('story.origin.title'),
            content: t('story.origin.content'),
            side: "left"
        },
        {
            subtitle: t('story.mechanism.subtitle'),
            title: t('story.mechanism.title'),
            content: t('story.mechanism.content'),
            side: "right"
        },
        {
            subtitle: t('story.craft.subtitle'),
            title: t('story.craft.title'),
            content: t('story.craft.content'),
            side: "left"
        },
        {
            subtitle: t('story.legacy.subtitle'),
            title: t('story.legacy.title'),
            content: t('story.legacy.content'),
            side: "right"
        }
    ];

    return (
        <div ref={containerRef} className="relative min-h-[500vh] bg-background transition-colors">
            <Navbar />

            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    style={{ opacity: canvasOpacity, scale: canvasScale }}
                    className="w-full h-full"
                >
                    <SewingMachineScene scrollValue={progress} />
                </motion.div>

                <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-accent/5 blur-[120px] rounded-full" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[40vw] h-[40vw] bg-primary/5 blur-[120px] rounded-full" />
            </div>

            <section className="h-screen flex flex-col items-center justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    <span className="text-accent/60 text-[10px] uppercase font-black tracking-[1em] mb-12 block">A Jayam Original</span>
                    <h1 className="text-6xl md:text-[12rem] font-display font-black text-foreground leading-none tracking-tighter italic">
                        STITCH <br />
                        <span className="gold-gradient-text not-italic">THEORY</span>
                    </h1>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-12 flex flex-col items-center gap-4 group cursor-pointer"
                >
                    <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-foreground/20 group-hover:text-accent transition-colors">{t('common.scroll')}</span>
                    <div className="w-[1px] h-12 bg-black/10 group-hover:bg-accent transition-colors" />
                </motion.div>
            </section>

            <div className="relative z-10 pt-[50vh]">
                {storyPoints.map((point, i) => (
                    <CinematicText
                        key={i}
                        index={i}
                        {...point}
                    />
                ))}
            </div>

            <section className="h-[120vh] flex items-center justify-center relative z-10 px-6">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl"
                >
                    <h2 className="text-5xl md:text-[8rem] font-display font-black text-foreground mb-12 leading-none tracking-tighter">
                        {t('story.conclusion.title').split(' ').slice(0, 2).join(' ')} <br />
                        <span className="text-accent">{t('story.conclusion.title').split(' ').slice(2).join(' ')}</span>
                    </h2>
                    <p className="text-xl text-foreground/40 mb-16 font-light">{t('story.conclusion.subtitle')}</p>

                    <button
                        onClick={() => navigate('/courses')}
                        className="group relative px-16 py-6 bg-foreground text-background rounded-full overflow-hidden transition-all hover:pr-20"
                    >
                        <span className="relative z-10 font-black uppercase tracking-widest text-xs">{t('story.conclusion.cta')}</span>
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default SewingStory;