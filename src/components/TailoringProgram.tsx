
import { PenTool, Scissors, Ruler, Shirt, CheckCircle, Sparkles, Award, ShieldCheck, Zap, Shield, BookOpen, Users, Handshake, Star } from 'lucide-react';
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
    { title: "Govt Certified", content: "NSDC Approved Training Center", icon: <Shield className="w-6 h-6" /> },
    { title: "Easy Learning", content: "Simple and clear teaching methods", icon: <Award className="w-6 h-6" /> },
    { title: "Empowerment", content: "Learn to start your own business", icon: <Users className="w-6 h-6" /> },
    { title: "Recognized", content: "Skill India approved certificates", icon: <Handshake className="w-6 h-6" /> },
    { title: "High Value", content: "Certificates valid across Tamil Nadu", icon: <Star className="w-6 h-6" /> },
    { title: "Full Support", content: "Guidance to get government support", icon: <CheckCircle className="w-6 h-6" /> }
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
                Master the Art of <span className="gold-gradient-text italic font-normal">Modern Tailoring</span>
              </h2>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="space-y-8 mb-16 border-l border-white/5 pl-10">
                <p className="text-white/60 text-xl font-light leading-relaxed max-w-2xl">
                  For over 25 years, Jayam Institute has been teaching tailoring in a very simple and clear way. We help you learn easily, even if you are totally new to sewing.
                </p>
                <p className="text-white/30 text-base leading-relaxed max-w-xl">
                  From basic stitching to advanced dressmaking, we guide you step-by-step. Join thousands of happy students who started their own businesses after studying with us.
                </p>
              </div>
            </TextReveal>

            <motion.div variants={itemVariants}>
              <button className="btn-premium px-10 py-5 group flex items-center gap-3">
                Download Details
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

              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 aspect-[4/5] bg-gradient-to-b from-[#0a0a0f] to-[#050508] flex items-center justify-center p-8 group">
                {/* Background glow & subtle patterns */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />

                <div className="absolute inset-0 bg-[#ffffff] opacity-[0.01] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay" />

                {/* Decorative border rings */}
                <div className="absolute inset-4 border border-white/5 rounded-[1.5rem] transition-transform duration-700 group-hover:scale-95" />
                <div className="absolute inset-8 border border-accent/20 rounded-[1rem] border-dashed animate-[spin_60s_linear_infinite]" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative mb-10">
                    <div className="absolute inset-0 animate-ping opacity-20 bg-accent rounded-full blur-xl" />
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-[2rem] bg-gradient-to-br from-accent/20 via-accent/5 to-transparent border border-accent/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_50px_rgba(255,215,0,0.15)] rotate-45 group-hover:rotate-0 transition-all duration-700">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl border border-accent/30 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-700 bg-black/20">
                        <Award className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-2">
                      <ShieldCheck size={14} className="text-accent" />
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-accent">Official Accreditation</span>
                    </div>

                    <p className="text-white/60 italic text-base md:text-lg font-light">Proud to be an</p>

                    <div className="space-y-1">
                      <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                        NSDC <span className="gold-gradient-text">Approved</span>
                      </h3>
                      <p className="text-sm md:text-lg font-medium tracking-[0.3em] md:tracking-[0.4em] text-white/70 uppercase pt-2">
                        Training Centre
                      </p>
                    </div>
                  </div>
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
              <ShieldCheck size={16} /> Official Certificate
            </motion.div>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              A Trusted <span className="gold-gradient-text italic font-normal">Government Approved</span> <br />
              Training Center
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20 max-w-6xl mx-auto items-stretch">
            {accreditationItems.map((item, idx) => (
              <div key={idx} className="h-full flex">
                <TextReveal delay={idx * 0.1} width="100%">
                  <div className="premium-card bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-all duration-700 p-6 md:p-8 group/card text-left h-full flex flex-col justify-start items-start">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6 transition-all group-hover/card:scale-110 group-hover/card:bg-accent/30">
                      {item.icon}
                    </div>
                    <h4 className="text-white text-sm md:text-base font-bold uppercase tracking-widest mb-2 md:mb-4">{item.title}</h4>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light mt-auto">{item.content}</p>
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
