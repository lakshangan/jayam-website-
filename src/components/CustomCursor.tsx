
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [clickState, setClickState] = useState(false);
    const [isMobile, setIsMobile] = useState(true); // Default to true to prevent hydration mismatch lag

    // Motion values instead of state
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring physics
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    const springSlowConfig = { damping: 40, stiffness: 200, mass: 1.5 };
    const springSlowX = useSpring(cursorX, springSlowConfig);
    const springSlowY = useSpring(cursorY, springSlowConfig);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile, { passive: true });
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
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

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mouseover", handleMouseOver, { passive: true });
        window.addEventListener("mousedown", handleMouseDown, { passive: true });
        window.addEventListener("mouseup", handleMouseUp, { passive: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isMobile, cursorX, cursorY]);

    if (isMobile) return null;

    return (
        <>
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 rounded-full border pointer-events-none z-[9999]"
                style={{
                    x: springSlowX,
                    y: springSlowY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: clickState ? 0.8 : (isHovering ? 1.5 : 1),
                    opacity: isHovering ? 1 : 0.4,
                    borderColor: isHovering ? "rgba(197, 163, 88, 1)" : "rgba(197, 163, 88, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.8 }}
            />

            {/* Inner Dot with Blur */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] mix-blend-screen overflow-hidden"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
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
                style={{
                    x: springSlowX,
                    y: springSlowY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
};

export default CustomCursor;
