
import { PenTool, Scissors, Ruler, Shirt, CheckCircle, Sparkles, Award, ShieldCheck, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
import TextReveal from "./TextReveal";


const TailoringProgram = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const accreditationItems = [
    { title: "National Certification", content: "NSDC Approved Training Partner" },
    { title: "Global Standards", content: "Industry-aligned curriculum & pedagogy" },
    { title: "Empowerment", content: "Focus on entrepreneurship & self-reliance" },
    { title: "Strategic Partners", content: "Skill India & MSDE recognized" },
    { title: "Recognition", content: "Nationally valid professional credentials" },
    { title: "Support", content: "Access to government skill initiatives" }
  ];

  return (
    <section id="tailoring" className="section-padding bg-background relative overflow-hidden mask-linear-t mask-linear-b">
      <div className="noise-overlay" />
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 opacity-30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-12 gap-24 items-center mb-40"
        >
          {/* Content Side */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-accent/50" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">Professional Training</span>
            </motion.div>

            <TextReveal delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-[1.1]">
                Learn the Art of <span className="gold-gradient-text italic font-normal">Modern Tailoring</span>
              </h2>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="space-y-8 mb-16 border-l border-white/5 pl-10">
                <p className="text-white/60 text-xl font-light leading-relaxed max-w-2xl">
                  For over 25 years, Jayam Institute has been the gold standard for tailoring education. Our program merges traditional craftsmanship with bold, modern silhouettes.
                </p>
                <p className="text-white/30 text-base leading-relaxed max-w-xl">
                  We don't just teach stitching; we nurture designers who understand the physics of fabric and the geometry of fit. Graduates join an elite lineage of fashion entrepreneurs.
                </p>
              </div>
            </TextReveal>

            <motion.div variants={itemVariants}>
              <button className="btn-premium px-10 py-5 group flex items-center gap-3">
                Download Curriculum
                <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative group p-4">
              <div className="absolute -inset-2 border border-white/5 rounded-[2.5rem] rotate-6 group-hover:rotate-0 transition-transform duration-700" />
              <div className="absolute -inset-2 border border-accent/10 rounded-[2.5rem] -rotate-6 group-hover:rotate-0 transition-transform duration-700" />

              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1593030942428-a5451dca4b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Tailoring Workshop"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />

                <div className="absolute top-8 right-8 bg-accent rounded-2xl p-6 shadow-2xl z-20">
                  <Award className="w-8 h-8 text-[#0a0a0f]" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* NSDC Accreditation Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
          className="relative py-16 md:py-24 px-6 md:px-12 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/5 group"
        >
          <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-3xl -z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-primary/[0.03] -z-10" />

          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-8"
            >
              <ShieldCheck size={16} /> Official Accreditation
            </motion.div>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              A Certified <span className="gold-gradient-text italic font-normal">Global Hub</span> <br />
              for Design Excellence
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20 max-w-6xl mx-auto items-stretch">
            {accreditationItems.map((item, idx) => (
              <div key={idx} className="h-full flex">
                <TextReveal delay={idx * 0.1} width="100%">
                  <div className="premium-card bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-all duration-700 p-6 md:p-12 group/card text-center h-full flex flex-col justify-center items-center">
                    <div className="h-[1px] w-8 md:w-12 bg-accent/30 mx-auto mb-4 md:mb-8 transition-all group-hover/card:w-16 md:group-hover/card:w-20" />
                    <h4 className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 md:mb-4">{item.title}</h4>
                    <p className="text-white/40 text-[9px] md:text-sm leading-relaxed font-light max-w-[200px] mx-auto">{item.content}</p>
                  </div>
                </TextReveal>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-white/10 border-t border-white/5 pt-12">
            <div className="flex items-center gap-3">
              <span className="text-white/30">Credential:</span>
              <span className="text-white/60">JC-NSDC-7742</span>
            </div>
            <div className="w-1 h-1 bg-accent/20 rounded-full hidden md:block" />
            <div className="flex items-center gap-3">
              <span className="text-white/30">Accredited Until:</span>
              <span className="text-white/60">2026</span>
            </div>
            <div className="w-1 h-1 bg-accent/20 rounded-full hidden md:block" />
            <div className="flex items-center gap-3">
              <span className="text-white/30">Authorized By:</span>
              <span className="text-accent/60">Skill India Board</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TailoringProgram;
