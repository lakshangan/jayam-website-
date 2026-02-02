import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { SewingMachineScene } from '@/components/SewingMachineScene';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const CinematicText = ({ title, subtitle, content, side, index }: any) => {
    return (
        <section className={`min-h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden relative ${side === 'right' ? 'items-end' : 'items-start'}`}>
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
                    className="flex items-center gap-4 mb-6"
                >
                    <div className="h-[1px] w-8 bg-amber-500/50" />
                    <span className="text-amber-500 text-[10px] uppercase font-black tracking-[0.5em]">{subtitle}</span>
                </motion.div>

                <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-8 leading-tight tracking-[calc(-0.02em)]">
                    {title}
                </h2>

                <p className="text-lg md:text-xl text-white/40 leading-relaxed font-light mb-12">
                    {content}
                </p>

                <div className={`flex items-center gap-6 ${side === 'right' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 font-display italic">
                        0{index + 1}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

const SewingStory = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Spring for smooth 3D motion
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
            subtitle: "The Origin",
            title: "BORN IN IRON",
            content: "In the late 19th century, precision was carved from steel. This machine represents the dawn of ready-to-wear fashion.",
            side: "left"
        },
        {
            subtitle: "The Mechanism",
            title: "THE HEART BEAT",
            content: "Every rotation of the wheel is a symphony of gears. At Jayam, we teach you to listen to this rhythm before you master the stitch.",
            side: "right"
        },
        {
            subtitle: "The Craft",
            title: "MASTERING FORM",
            content: "It's not just about joining fabrics. It's about engineering a silhouette that breathes and moves with the human body.",
            side: "left"
        },
        {
            subtitle: "The Legacy",
            title: "ETERNAL STITCH",
            content: "From the vintage iron heart to the digital needles of tomorrow, the art of sewing remains the soul of fashion design.",
            side: "right"
        }
    ];

    return (
        <div ref={containerRef} className="relative min-h-[500vh] bg-[#050508] transition-colors">
            <Navbar />

            {/* The Cinematic Background Engine */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    style={{ opacity: canvasOpacity, scale: canvasScale }}
                    className="w-full h-full"
                >
                    <SewingMachineScene scrollValue={progress} />
                </motion.div>

                {/* Atmospheric Glows */}
                <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-amber-500/5 blur-[120px] rounded-full" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[40vw] h-[40vw] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            {/* Immersive Intro */}
            <section className="h-screen flex flex-col items-center justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    <span className="text-amber-500/60 text-[10px] uppercase font-black tracking-[1em] mb-12 block">A Jayam Original</span>
                    <h1 className="text-6xl md:text-[12rem] font-display font-black text-white leading-none tracking-tighter italic">
                        STITCH <br />
                        <span className="gold-gradient-text not-italic">THEORY</span>
                    </h1>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-12 flex flex-col items-center gap-4 group cursor-pointer"
                >
                    <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/20 group-hover:text-amber-500 transition-colors">Scroll to Discover</span>
                    <div className="w-[1px] h-12 bg-white/10 group-hover:bg-amber-500 transition-colors" />
                </motion.div>
            </section>

            {/* Narrative Scroll content */}
            <div className="relative z-10 pt-[50vh]">
                {storyPoints.map((point, i) => (
                    <CinematicText
                        key={i}
                        index={i}
                        {...point}
                    />
                ))}
            </div>

            {/* Conclusion */}
            <section className="h-[120vh] flex items-center justify-center relative z-10 px-6">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-4xl"
                >
                    <h2 className="text-5xl md:text-[8rem] font-display font-black text-white mb-12 leading-none">START YOUR <br /> <span className="text-amber-500">JOURNEY</span></h2>
                    <p className="text-xl text-white/40 mb-16 font-light">Join the ranks of master designers at Jayam Fashion Institution.</p>

                    <button
                        onClick={() => navigate('/#courses')}
                        className="group relative px-16 py-6 border border-white/10 rounded-full overflow-hidden transition-all hover:border-amber-500/50"
                    >
                        <span className="relative z-10 text-white font-black uppercase tracking-widest text-xs group-hover:text-amber-500 transition-colors">Explore Courses</span>
                        <div className="absolute inset-0 bg-amber-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default SewingStory;