
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [clickState, setClickState] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => setClickState(true);
        const handleMouseUp = () => setClickState(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains("premium-card") ||
                target.closest(".interactive")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <>
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 rounded-full border border-accent/30 pointer-events-none z-[9999] hidden md:block"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                    scale: clickState ? 0.8 : (isHovering ? 1.5 : 1),
                    opacity: isHovering ? 1 : 0.4,
                    borderColor: isHovering ? "rgba(197, 163, 88, 1)" : "rgba(197, 163, 88, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.8 }}
            />

            {/* Inner Dot with Blur */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-screen overflow-hidden"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 4 : 1,
                    backgroundColor: isHovering ? "rgba(197, 163, 88, 0.8)" : "rgba(197, 163, 88, 1)",
                }}
                transition={{ type: "spring", stiffness: 800, damping: 40, mass: 0.1 }}
            >
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-full bg-white opacity-20 blur-sm"
                    />
                )}
            </motion.div>

            {/* Trailing Glow Spotlight */}
            <motion.div
                className="fixed top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-[0] hidden lg:block"
                animate={{
                    x: mousePosition.x - 200,
                    y: mousePosition.y - 200,
                }}
                transition={{ type: "spring", stiffness: 50, damping: 30, mass: 2 }}
            />
        </>
    );
};

export default CustomCursor;
