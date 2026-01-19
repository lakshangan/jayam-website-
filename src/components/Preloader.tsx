
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const circleRef = useRef<SVGCircleElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let currentProgress = 0;
        const duration = 2000; // Minimum 2s for cinematic feel
        const interval = 20;
        const totalSteps = duration / interval;
        const increment = 100 / totalSteps;

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return next;
            });
        }, interval);

        // If window is already loaded, we can still let the animation finish
        // but we ensure it doesn't get stuck.
        const handleLoad = () => {
            // We could potentially speed up increment here
        };

        window.addEventListener('load', handleLoad);
        return () => {
            clearInterval(timer);
            window.removeEventListener('load', handleLoad);
        };
    }, [onComplete]);

    const circumference = 2 * Math.PI * 120;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{
                    opacity: 0,
                    y: -100,
                    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                }}
                className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050508] overflow-hidden"
            >
                <div className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[450px] md:h-[450px]">
                    {/* SVG Progress Circle */}
                    <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full -rotate-90">
                        <defs>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>
                        <circle
                            cx="150"
                            cy="150"
                            r="120"
                            stroke="rgba(197, 163, 88, 0.05)"
                            strokeWidth="1"
                            fill="none"
                        />
                        <motion.circle
                            ref={circleRef}
                            cx="150"
                            cy="150"
                            r="120"
                            stroke="#c5a358"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset }}
                            transition={{ duration: 0.1, ease: "linear" }}
                            filter="url(#glow)"
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Counter Number */}
                    <motion.div
                        ref={counterRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-7xl md:text-[9rem] title-italic-gold select-none lining-nums tracking-tighter z-10 flex items-center justify-center w-full"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {Math.floor(progress).toString().padStart(2, '0')}
                    </motion.div>
                </div>

                <motion.div
                    ref={textRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 md:mt-12 flex flex-col items-center gap-4"
                >
                    <p className="text-[9px] md:text-sm uppercase tracking-[0.8em] md:tracking-[1em] font-sans text-[#c5a358]/80 text-center px-4">
                        Crafting Excellence
                    </p>
                    <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c5a358]/40 to-transparent" />
                </motion.div>

                {/* Background Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] pointer-events-none select-none">
                    <span className="text-[25vw] md:text-[30vw] font-bold text-white whitespace-nowrap">JAYAM</span>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Preloader;
