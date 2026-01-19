
import { motion } from "framer-motion";

export const FabricFloating = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-12">
            {/* Background Abstract Fabric Shapes */}
            <motion.div
                animate={{
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                    y: [0, -20, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-32 h-64 bg-accent/10 blur-3xl rounded-full -rotate-12"
            />
            <motion.div
                animate={{
                    rotate: [0, -10, 0],
                    scale: [1, 1.2, 1],
                    x: [0, 20, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 blur-3xl rounded-full"
            />

            <div className="relative z-10 w-full max-w-[320px]">
                {/* Main Logo with Layered Shadow */}
                <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative bg-white/5 backdrop-blur-xl p-8 rounded-[4rem] border border-white/10 shadow-2xl"
                >
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/20 to-transparent rounded-b-[4rem]" />
                    <img
                        src="/lovable-uploads/logo.png"
                        alt="Jayam"
                        className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                </motion.div>

                {/* Floating "Excellence" Badge */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 bg-accent p-4 rounded-2xl shadow-xl shadow-accent/20"
                >
                    <span className="text-background text-[10px] uppercase font-black tracking-widest leading-none block">Est. 1995</span>
                </motion.div>
            </div>
        </div>
    );
};
