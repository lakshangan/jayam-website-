import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { SewingMachineScene } from '@/components/SewingMachineScene';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const StoryStep = ({ num, title, content, side }: { num: string, title: string, content: string, side: 'left' | 'right' }) => {
    return (
        <section className={`min-h-[100vh] flex flex-col ${side === 'left' ? 'md:items-start' : 'md:items-end'} justify-center py-20 px-4`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20%", once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className={`max-w-2xl px-4 ${side === 'right' ? 'text-right' : 'text-left'}`}
            >
                <div className={`flex items-center gap-6 mb-8 ${side === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <span className="text-6xl md:text-8xl font-display font-black text-white/5 outline-text tracking-tighter">{num}</span>
                    <div className="h-[2px] w-12 bg-amber-500/40" />
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight text-amber-100/90">{title}</h2>
                <div className="relative">
                    <div className={`absolute ${side === 'left' ? '-left-8' : '-right-8'} top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-500/50 to-transparent hidden md:block`} />
                    <p className="text-lg md:text-2xl text-white/60 leading-relaxed font-light italic">
                        "{content}"
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

const SewingStory = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const [stableProgress, setStableProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Use spring for UX, but sync a numeric value for the 3D renderer
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    // Stability Bridge: convert MotionValue to state for the R3F Canvas
    useEffect(() => {
        return smoothProgress.onChange((v) => {
            setStableProgress(v);
        });
    }, [smoothProgress]);

    const opacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [1, 1, 1, 0]);

    return (
        <div ref={containerRef} className="relative min-h-[500vh] bg-[#050508] text-white selection:bg-amber-500/30">
            <Navbar />

            {/* Cinematic 3D Background - Now decoupled from reactive hooks */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    style={{ opacity }}
                    className="w-full h-full"
                >
                    <SewingMachineScene scrollValue={stableProgress} />
                </motion.div>
            </div>

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.8em" }}
                        transition={{ duration: 2 }}
                        className="text-amber-500/60 text-[10px] md:text-xs uppercase font-bold mb-8 block"
                    >
                        Est. 1985
                    </motion.span>
                    <h1 className="text-6xl md:text-[10rem] font-display font-black mb-8 leading-[0.85] tracking-tighter">
                        THE ART OF <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600">SEWING</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/40 max-w-xl mx-auto font-light leading-relaxed">
                        Where every stitch carries a story, and every fold holds a legacy of craftsmanship.
                    </p>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <div className="w-[1px] h-24 bg-gradient-to-b from-amber-500/50 to-transparent" />
                </motion.div>
            </section>

            {/* Story Narrative Sections */}
            <div className="relative z-10 pt-[20vh]">
                <div className="container-custom">
                    <StoryStep
                        num="01"
                        title="The First Stitch"
                        content="Before the hum of motors and the glint of steel, there was only the steady rhythm of a needle and thread. A craft as old as civilization itself."
                        side="left"
                    />

                    <StoryStep
                        num="02"
                        title="The Iron Revolution"
                        content="The 19th century breathed life into iron. This very machine transformed the home, turning a painstaking labor into an art form."
                        side="right"
                    />

                    <StoryStep
                        num="03"
                        title="Mastering the Art"
                        content="True mastery isn't found in buttons or presets. It's in the way a tailor communicates with the machine, feeling the tension of the thread."
                        side="left"
                    />

                    <StoryStep
                        num="04"
                        title="Precision in Every Thread"
                        content="Every turn of the wheel, every drop of the needle, is a testament to precision. The hand-guided machine remains the pinnacle of bespoke craftsmanship."
                        side="right"
                    />

                    <StoryStep
                        num="05"
                        title="The Future of Craft"
                        content="As we look forward, the art of sewing continues to evolve. The human touch transforms fabric into form, forever."
                        side="left"
                    />
                </div>
            </div>

            {/* Final Call to Action */}
            <section className="relative h-screen flex items-center justify-center z-10 px-6">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510]/80 to-black z-0" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="relative z-10 text-center max-w-3xl"
                >
                    <h2 className="text-5xl md:text-8xl font-display font-black mb-8 leading-tight">CONTINUE THE <br /><span className="text-amber-500">LEGACY</span></h2>
                    <p className="text-xl text-white/50 mb-12 font-light">
                        Join the Jayam community and master the timeless art of sewing with our professional tailoring courses.
                    </p>
                    <button
                        onClick={() => navigate('/#courses')}
                        className="group relative px-12 py-5 bg-white text-black text-xs font-black uppercase tracking-[0.3em] rounded-full overflow-hidden transition-transform active:scale-95">
                        <span className="relative z-10 group-hover:text-amber-600 transition-colors">Start Your Journey</span>
                        <div className="absolute inset-0 bg-amber-100 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default SewingStory;
