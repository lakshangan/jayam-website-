
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MoveRight } from "lucide-react";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const handleAdmissionInfo = () => {
    toast({
      title: "Admissions Open",
      description: "Start your journey in fashion. Our teachers are ready.",
    });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  const titleCharVariants: any = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.03,
        type: "spring",
        stiffness: 150,
        damping: 25,
      },
    }),
  };

  return (
    <div ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050508] pt-16">
      {/* Background Paths Integration */}
      <motion.div style={{ y, scale: scaleTransform, opacity: opacityTransform }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050508]" />

        <div className="absolute inset-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>

        {/* Ambient Gold Dust - Ultra Visibility */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() * 2 + 0.5
              }}
              animate={{
                opacity: [0, 1, 0],
                y: ["-10%", "110%"],
              }}
              style={{
                translateX: useTransform(scrollYProgress, [0, 1], [0, (i % 5 - 2) * 40]),
              }}
              transition={{
                duration: Math.random() * 12 + 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              className="absolute w-[3px] h-[3px] bg-accent/80 rounded-full blur-[0.1px] shadow-[0_0_10px_rgba(197,163,88,0.5)]"
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508]" />
        <div className="noise-overlay opacity-30" />
      </motion.div>

      <div className="container-custom relative z-10 w-full h-full flex flex-col items-center justify-between py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center flex-1 justify-center"
        >

          {/* Main Cinematic Title */}
          <div className="text-center mb-10 px-4">
            <h1 className="flex flex-col items-center leading-[0.9]">
              <span className="flex flex-wrap justify-center overflow-visible py-4">
                {"Jayam".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={titleCharVariants}
                    className="text-[14vw] md:text-[10vw] font-bold text-white tracking-tighter inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="mx-[2vw]" />
                {"Fashion".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + 5}
                    variants={titleCharVariants}
                    className="text-[14vw] md:text-[10vw] font-normal gold-gradient-text italic tracking-tighter px-0.5 inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="flex justify-center overflow-visible py-4 mt-[-2vw]">
                {"Institution".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + 12}
                    variants={titleCharVariants}
                    className="text-[14vw] md:text-[10vw] font-bold text-white tracking-tighter inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          {/* Subtext Description */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-3 max-w-3xl px-6 mb-16">
            <p className="text-base md:text-lg text-white/40 font-light tracking-wide leading-relaxed">
              Start your career in fashion with our easy sewing classes.
            </p>
            <p className="text-base md:text-lg text-white/70 font-medium tracking-tight leading-relaxed">
              We help you learn professional tailoring and start your own clothing business.
            </p>
          </motion.div>

          {/* Bottom Actions Area */}
          <div className="w-full max-w-5xl flex flex-col items-center gap-12 pt-12 border-t border-white/5">
            <motion.div variants={itemVariants} className="flex flex-row items-center justify-center gap-12 md:gap-24">
              <button
                onClick={handleAdmissionInfo}
                className="group flex flex-col items-center gap-2"
              >
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/30 group-hover:text-accent transition-colors duration-500">Apply Now</span>
                <div className="h-[1px] w-0 group-hover:w-full bg-accent/50 transition-all duration-500" />
              </button>

              <button className="group flex flex-col items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/30 group-hover:text-white transition-colors duration-500">Visit Gallery</span>
                <div className="h-[1px] w-0 group-hover:w-full bg-white/20 transition-all duration-500" />
              </button>

              <Link to="/courses" className="group">
                <div className="inline-block group relative bg-gradient-to-b from-white/10 to-transparent p-px rounded-full backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-accent/10 transition-shadow duration-300">
                  <Button
                    variant="ghost"
                    className="rounded-full px-10 py-7 text-[10px] font-black tracking-[0.6em] backdrop-blur-md bg-white/5 hover:bg-white/10 text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-white/10 uppercase"
                  >
                    Explore Courses
                    <MoveRight className="ml-4 w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </Button>
                </div>
              </Link>
            </motion.div>

            {/* Minimal Scroll Indicator */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-[8px] uppercase tracking-[1em] text-white/20 font-bold">Scroll</span>
              <div className="relative w-[1px] h-12 bg-white/5 overflow-hidden">
                <motion.div
                  animate={{ y: [-48, 48] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
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
