
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
      title: "Qualified Teachers",
      description: "Teachers with many years of experience in the fashion world."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "5000+ Students",
      description: "Successful students all over the country."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Better Learning",
      description: "We are here to help our students succeed."
    }
  ];

  return (
    <section id="about-jayam" className="section-padding bg-background relative overflow-hidden mask-linear-t mask-linear-b">
      <div className="noise-overlay" />

      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">Who We Are</span>
            </motion.div>

            <TextReveal delay={0.1}>
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-[1.1]">
                Our History and <span className="gold-gradient-text italic font-normal">Future Goals</span>
              </h2>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 md:mb-12 font-light">
                For over 25 years, Jayam Institute has been a leader in fashion education. We started with a simple goal: to help people turn their love for sewing into a professional career. Today, we are proud to have helped thousands of students start their own businesses.
              </p>
            </TextReveal>

            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8 mb-12 md:mb-16 border-l border-white/5 pl-6 md:pl-10">
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                Our courses blend traditional and modern sewing, preparing students for successful careers in the ever-evolving world of fashion.
              </p>
              <p className="text-white/30 text-sm md:text-base leading-relaxed max-w-xl">
                We believe in empowerement through skill. Every stitch matters, and every student has a unique story to tell.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <TextReveal key={feature.title} delay={idx * 0.1}>
              <div className="premium-card group py-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mx-auto mb-8 group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-500">
                  <div className="transition-transform duration-500 group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-sm uppercase tracking-widest font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-[10px] text-white/20 leading-relaxed font-medium uppercase tracking-widest">{feature.description}</p>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutJayam;
