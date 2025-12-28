
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MoveRight } from 'lucide-react';

const WelcomeScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleEnter = () => {
        window.dispatchEvent(new CustomEvent('start-bg-music'));
        setIsVisible(false);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] as any }
        }
    };

    const charVariants: any = {
        hidden: { y: 100, opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.03,
                type: "spring",
                stiffness: 150,
                damping: 25,
            },
        }),
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{
                        opacity: 0,
                        filter: "blur(40px)",
                        backgroundColor: "rgba(5, 5, 8, 1)",
                        transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1] as any }
                    }}
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050508] overflow-hidden"
                >
                    {/* Background Animated Elements */}
                    <div className="absolute inset-0 z-0">
                        {/* Shifting Mesh Gradients for Preloader */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(197,163,88,0.15)_0%,_transparent_70%)]"
                        />

                        {/* Dynamic Silk-like Path */}
                        <svg className="absolute inset-0 w-full h-full opacity-40">
                            {[...Array(6)].map((_, i) => (
                                <motion.path
                                    key={i}
                                    d={`M -200 ${300 + i * 80} Q ${500 + i * 150} ${100 + i * 50} 800 ${400 - i * 50} T 2000 ${500 + i * 50}`}
                                    fill="none"
                                    stroke="#c5a358"
                                    strokeWidth="0.5"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: [0, 1],
                                        opacity: [0, 0.4, 0],
                                        d: [
                                            `M -200 ${300 + i * 80} Q ${500 + i * 150} ${100 + i * 50} 800 ${400 - i * 50} T 2000 ${500 + i * 50}`,
                                            `M -200 ${500 - i * 50} Q ${600 - i * 100} ${200 - i * 50} 900 ${400 + i * 50} T 2000 ${400 - i * 50}`,
                                        ]
                                    }}
                                    transition={{
                                        duration: 15 + i * 2,
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </svg>

                        {/* Floating Cinematic Dust - Ultra High Visibility */}
                        {[...Array(130)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    x: Math.random() * 100 + "%",
                                    y: Math.random() * 100 + "%",
                                    scale: Math.random() * 2.5 + 0.5
                                }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    y: ["-5%", "105%"],
                                }}
                                transition={{
                                    duration: Math.random() * 12 + 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: Math.random() * 5
                                }}
                                className="absolute w-[3px] h-[3px] bg-accent/90 rounded-full blur-[0.2px] shadow-[0_0_15px_rgba(197,163,88,0.5)]"
                            />
                        ))}
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative z-10 w-full h-full flex flex-col items-center justify-between py-12 px-6"
                    >
                        <div className="flex-1 flex flex-col items-center justify-center w-full">
                            <motion.div variants={itemVariants} className="mb-10">
                                <div className="w-16 h-[1.5px] bg-accent/40 mx-auto mb-10 overflow-hidden">
                                    <motion.div
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="w-full h-full bg-accent shadow-[0_0_10px_rgba(197,163,88,0.8)]"
                                    />
                                </div>
                            </motion.div>

                            {/* Mirroring Hero Title Animation for Seamless Transition */}
                            <div className="text-center mb-10 px-4">
                                <h1 className="flex flex-col items-center leading-[0.9]">
                                    <span className="flex flex-wrap justify-center overflow-visible py-4 gap-x-[2vw]">
                                        <span className="whitespace-nowrap inline-block">
                                            {"Jayam".split("").map((char, i) => (
                                                <motion.span
                                                    key={i}
                                                    custom={i}
                                                    variants={charVariants}
                                                    className="text-[14vw] md:text-[10vw] font-bold text-white tracking-tighter inline-block"
                                                >
                                                    {char}
                                                </motion.span>
                                            ))}
                                        </span>
                                        <span className="whitespace-nowrap inline-block">
                                            {"Fashion".split("").map((char, i) => (
                                                <motion.span
                                                    key={i}
                                                    custom={i + 5}
                                                    variants={charVariants}
                                                    className="text-[14vw] md:text-[10vw] font-normal gold-gradient-text italic tracking-tighter px-0.5 inline-block"
                                                >
                                                    {char}
                                                </motion.span>
                                            ))}
                                        </span>
                                    </span>
                                    <span className="flex justify-center overflow-visible py-4 mt-[-2vw]">
                                        <span className="whitespace-nowrap inline-block">
                                            {"Institution".split("").map((char, i) => (
                                                <motion.span
                                                    key={i}
                                                    custom={i + 12}
                                                    variants={charVariants}
                                                    className="text-[14vw] md:text-[10vw] font-bold text-white tracking-tighter inline-block"
                                                >
                                                    {char}
                                                </motion.span>
                                            ))}
                                        </span>
                                    </span>
                                </h1>
                            </div>

                            <motion.div variants={itemVariants} className="space-y-6 w-full px-4">
                                <p className="text-center text-sm md:text-2xl text-white/50 font-light italic tracking-[0.3em] md:tracking-[0.6em] leading-relaxed">
                                    The Art of Professional Tailoring
                                </p>
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants} className="relative group pb-12">
                            <div className="absolute inset-x-0 bottom-20 bg-accent/30 blur-[100px] h-32 w-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <button
                                onClick={handleEnter}
                                className="group relative px-12 md:px-24 py-6 md:py-10 overflow-hidden rounded-full border border-white/10 hover:border-accent transition-all duration-1000 bg-white/[0.02] backdrop-blur-md"
                            >
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[0.22,1,0.36,1]" />
                                <div className="relative z-10 flex items-center gap-6 md:gap-10 text-[10px] md:text-[11px] font-black tracking-[0.5em] md:tracking-[0.9em] text-white group-hover:text-background transition-colors">
                                    START EXPERIENCE
                                    <MoveRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-3 md:group-hover:translate-x-6 transition-transform duration-700" />
                                </div>
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeScreen;
