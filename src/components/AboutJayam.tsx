
import { GraduationCap, Users, Heart, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import TextReveal from './TextReveal';


const AboutJayam = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "Expert Mentors",
      description: "Learn from designers with decades of real-world industry experience."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "1000+ Graduates",
      description: "A growing community of successful fashion entrepreneurs."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "25+ Years of Legacy",
      description: "A proven track record of helping students achieve their dreams."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      id="about-jayam"
      className="section-padding bg-background relative overflow-hidden mask-linear-t mask-linear-b"
    >
      <div className="noise-overlay" />

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-12 md:mb-24"
        >
          {/* Image Side */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative"
          >
            <div className="relative group p-4">
              <div className="absolute -inset-2 border border-white/5 rounded-[2.5rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
              <div className="absolute -inset-2 border border-accent/10 rounded-[2.5rem] rotate-3 transition-transform group-hover:rotate-0 duration-700" />

              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 aspect-[4/5]">
                <img
                  src="/lovable-uploads/f12752c7-a9cd-4fe8-a9b1-95e2edd3052e.png"
                  alt="Founder"
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-8 -right-8 bg-accent rounded-3xl p-8 shadow-2xl z-20"
              >
                <Award className="w-10 h-10 text-background" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="lg:col-span-7">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-accent/50" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">Our Founder</span>
            </motion.div>

            <TextReveal delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-[1.1]">
                Dr. G. <span className="gold-gradient-text italic font-normal">Sahayaselvam</span>
              </h2>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p className="text-white/80 text-xl font-medium mb-8">
                Founder & Director — Honorary Doctorate in Sewing
              </p>
            </TextReveal>

            <TextReveal delay={0.3}>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 md:mb-12 font-light">
                A great teacher and master tailor with over 20+ years of experience.
                Honored with a Doctorate for his excellent work in tailoring education,
                Dr. Sahayaselvam has spent his life helping women learn simple tailoring skills
                so they can start their own businesses and become independent.
              </p>
            </TextReveal>

            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8 mb-12 md:mb-16 border-l border-white/5 pl-6 md:pl-10">
              <p className="text-white/30 text-sm md:text-base leading-relaxed max-w-xl italic">
                "Our mission is to transform simple skills into sustainable livelihoods,
                creating a world where every woman has the opportunity to be a successful entrepreneur."
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 items-stretch mt-20">
          {features.map((feature, idx) => (
            <div key={feature.title} className="h-full perspective-1000">
              <TextReveal delay={idx * 0.1} width="100%">
                <motion.div
                  whileHover={{
                    y: -10,
                    rotateX: -5,
                    rotateY: 5,
                    scale: 1.02
                  }}
                  className="premium-card group py-12 px-8 text-center h-full flex flex-col items-center justify-center border-white/5 bg-white/[0.02] hover:bg-accent/5 hover:border-accent/20 transition-colors transition-shadow duration-700"
                >
                  <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/5 flex items-center justify-center mx-auto mb-10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-700 relative">
                    <div className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="transition-transform duration-700 group-hover:scale-125 z-10 text-accent">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="text-lg uppercase tracking-[0.2em] font-black text-white mb-4 group-hover:text-accent transition-colors duration-500">{feature.title}</h4>
                  <p className="text-[10px] text-white/20 leading-relaxed font-bold uppercase tracking-[0.3em]">{feature.description}</p>
                </motion.div>
              </TextReveal>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutJayam;
