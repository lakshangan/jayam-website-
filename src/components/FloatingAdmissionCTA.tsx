
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, X, ChevronRight } from 'lucide-react';

const FloatingAdmissionCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 500px
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 100, opacity: 0, scale: 0.8 }}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md"
                >
                    <div className="glass-premium p-4 md:p-6 rounded-[2.5rem] flex items-center justify-between gap-4 border-accent/20 shadow-[0_20px_50px_rgba(197,163,88,0.2)]">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shrink-0">
                                <Sparkles className="text-background w-6 h-6 animate-pulse" />
                            </div>
                            <div>
                                <h4 className="text-white text-sm font-bold tracking-tight">Admissions Open 2024</h4>
                                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Limited Seats Available</p>
                            </div>
                        </div>

                        <button
                            onClick={scrollToContact}
                            className="px-6 py-3 bg-white text-black text-xs font-black rounded-2xl hover:bg-accent transition-all duration-300 flex items-center gap-2 group"
                        >
                            APPLY NOW
                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Subtle Glow Backdrop */}
                    <div className="absolute inset-0 bg-accent/10 blur-[50px] -z-10 rounded-full" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingAdmissionCTA;
