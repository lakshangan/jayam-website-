
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
        <div style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: delay
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default TextReveal;
