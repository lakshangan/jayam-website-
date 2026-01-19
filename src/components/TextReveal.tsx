
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
                initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1], // Custom cinematic cubic-bezier
                    delay: delay,
                    opacity: { duration: 0.8 },
                    filter: { duration: 1.0 }
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default TextReveal;
