
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import { MoveRight } from "lucide-react";
import { FloatingPaths } from "@/components/ui/background-paths";
// import { Button } from "@/components/ui/button";

const Hero = () => {
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Optimized transforms for smoother scroll
  const opacityTransform = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  const titleCharVariants: any = {
    hidden: { y: 60, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.02,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    }),
  };

  // Memoize particles to avoid expensive re-calculations on render
  const particles = useMemo(() => {
    // Significantly reduce particle count on mobile (small screens) to fix lag
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const count = isMobile ? 30 : 80;

    return [...Array(count)].map((_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      scale: Math.random() * 2 + 0.5,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050508] pt-12 md:pt-16 will-change-transform">
      {/* Background Layer - Optimized with will-change and fewer elements on mobile */}
      <motion.div
        style={{ opacity: opacityTransform, scale: scaleTransform }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[#050508]" />

        {/* Central Atmospheric Glow - Adjusted size for better performance */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-accent/5 blur-[80px] md:blur-[160px] rounded-full" />

        <div className="absolute inset-0 opacity-40 md:opacity-100">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>

        {/* Ambient Dust Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              opacity: 0,
              x: `${p.initialX}%`,
              y: `${p.initialY}%`,
              scale: p.scale
            }}
            animate={{
              opacity: [0, 0.6, 0],
              y: ["-10%", "110%"],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
            className="absolute w-[2px] md:w-[3px] h-[2px] md:h-[3px] bg-accent rounded-full blur-[0.3px]"
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508]" />
      </motion.div>

      <div className="container-custom relative z-10 w-full h-full flex flex-col items-center justify-between py-8 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex-1 flex flex-col items-center justify-center relative"
        >
          {/* Main Cinematic Title - Responsive Scaling */}
          <div className="text-center px-2 relative w-full z-20">
            <div className="absolute inset-0 bg-accent/5 blur-[60px] md:blur-[120px] -z-10" />
            <h1 className="flex flex-col items-center leading-[0.9] md:leading-[0.9]">
              <span className="flex flex-wrap justify-center overflow-visible py-1 md:py-4">
                {"Jayam".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={titleCharVariants}
                    className="text-[15vw] sm:text-[14vw] md:text-[10vw] font-bold text-white tracking-tighter inline-block drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="mx-[1vw] md:mx-[2vw]" />
                {"Fashion".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + 5}
                    variants={titleCharVariants}
                    className="text-[15vw] sm:text-[14vw] md:text-[10vw] font-normal gold-gradient-text italic tracking-tighter px-0.5 inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="flex justify-center overflow-visible py-1 md:py-4 mt-[-2vw] md:mt-[-1vw]">
                {"Institution".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + 12}
                    variants={titleCharVariants}
                    className="text-[15vw] sm:text-[14vw] md:text-[10vw] font-bold text-white tracking-tighter inline-block drop-shadow-[0_4px_12_rgba(0,0,0,0.5)]"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          {/* Subtext - Improved Mobile Readability */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-3 w-full max-w-[90vw] md:max-w-2xl px-4 md:px-6 mt-6 md:mt-8 z-20">
            <p className="text-sm md:text-lg text-white/50 font-light tracking-wide leading-relaxed">
              Start your career in fashion with our easy sewing classes.
            </p>
            <p className="text-base md:text-xl text-white/80 font-medium tracking-tight leading-relaxed">
              We help you learn professional tailoring and start your own clothing business.
            </p>
          </motion.div>

          {/* Bottom Layout - Centered Primary CTA for Desktop & Mobile */}
          <div className="w-full flex flex-col items-center gap-6 md:gap-14 pt-6 md:pt-12 mt-6 md:mt-12 z-20">

            {/* Optimized Scroll Indicator */}
            <div className="flex flex-col items-center gap-3 md:gap-4 opacity-60">
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.8em] md:tracking-[1.5em] text-white/30 font-black">Scroll</span>
              <div className="relative w-[1px] h-8 md:h-16 bg-white/5 overflow-hidden rounded-full">
                <motion.div
                  animate={{ y: [-60, 60] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-accent to-transparent"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
