
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextRevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    width?: "fit-content" | "100%";
}

export const TextReveal = ({ children, delay = 0, className = "", width = "fit-content" }: TextRevealProps) => {
    return (
        <div style={{ position: "relative", width, overflow: "visible" }} className={className}>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                style={{ willChange: "transform, opacity" }}
                transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: delay,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default TextReveal;
