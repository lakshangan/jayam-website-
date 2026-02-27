import { motion } from 'framer-motion';

const AnimatedLogo = () => {
    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-transparent rounded-[2rem] overflow-hidden group">
            {/* Central Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/10 rounded-full blur-[50px] md:blur-[100px] pointer-events-none group-hover:bg-accent/20 transition-all duration-1000" />

            {/* Outer Rotating SVG Rings */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[120%] h-[120%] z-0"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="white" strokeWidth="0.2" strokeDasharray="1 3" />
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#c5a358" strokeWidth="0.5" strokeDasharray="4 4" />
                    {/* Glowing highlight arc */}
                    <path d="M 50 12 a 38 38 0 0 1 38 38" fill="none" stroke="#c5a358" strokeWidth="1" strokeLinecap="round" className="drop-shadow-md md:drop-shadow-[0_0_8px_rgba(197,163,88,0.8)]" />
                </svg>
            </motion.div>

            {/* Inner Counter-Rotating Rings */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[100%] h-[100%] z-0"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                    <circle cx="50" cy="50" r="32" fill="none" stroke="#c5a358" strokeWidth="0.3" strokeDasharray="8 6" />
                    <circle cx="50" cy="50" r="28" fill="none" stroke="white" strokeWidth="0.1" />
                    <path d="M 18 50 a 32 32 0 0 0 32 32" fill="none" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
                </svg>
            </motion.div>

            {/* Central Logo Container with Float Animation */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-56 h-56 md:w-80 md:h-80 rounded-full bg-white/[0.02] backdrop-blur-lg md:backdrop-blur-3xl border border-white/5 flex items-center justify-center shadow-2xl md:shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
                {/* Glassmorphism subtle reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 pointer-events-none" />

                <img
                    src="/lovable-uploads/logo.png"
                    alt="Jayam Institute Trust Logo"
                    className="w-[75%] h-[75%] object-contain drop-shadow-lg md:drop-shadow-[0_0_25px_rgba(255,255,255,0.1)] group-hover:scale-110 md:group-hover:drop-shadow-[0_0_35px_rgba(197,163,88,0.3)] transition-all duration-700"
                />
            </motion.div>
        </div>
    );
};

export default AnimatedLogo;
