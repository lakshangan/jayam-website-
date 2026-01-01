
import { motion } from 'framer-motion';

const SwipeIndicator = ({ text = "Swipe to explore" }: { text?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 mb-8"
        >
            <div className="flex items-center gap-4">
                <motion.div
                    animate={{ x: [-10, 0, -10], opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-8 h-[1px] bg-gradient-to-r from-transparent to-accent"
                />
                <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-black">
                    {text}
                </span>
                <motion.div
                    animate={{ x: [10, 0, 10], opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-8 h-[1px] bg-gradient-to-l from-transparent to-accent"
                />
            </div>
            <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="h-[1px] bg-accent/20 w-32"
            />
        </motion.div>
    );
};

export default SwipeIndicator;
