
import { CheckCircle, Star, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import TextReveal from './TextReveal';


const AboutInstitute = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const features = [
    {
      title: "Recognized Certificates",
      description: "Our courses are certified by the Government, so your skills are officially recognized."
    },
    {
      title: "Experienced Teachers",
      description: "Learn from people who have worked many years in the fashion industry."
    },
    {
      title: "Real Practice",
      description: "Most of your time will be spent doing actual sewing and design projects."
    },
    {
      title: "Job Help",
      description: "We help our students find good jobs after they finish their course."
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-secondary relative overflow-hidden mask-linear-t mask-linear-b">
      {/* Premium background with decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] -z-10 opacity-40" />

      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-accent">Why Join Us</span>
            </motion.div>

            <TextReveal delay={0.2} width="100%">
              <h2 className="text-title-section font-bold text-white mb-12 leading-[0.9] tracking-tighter">
                Crafting <br />
                <span className="gold-gradient-text italic font-normal text-glow">Excellence</span> Since 1995
              </h2>
            </TextReveal>

            <div className="grid grid-cols-2 gap-4 items-stretch">
              {features.map((item, idx) => (
                <div key={item.title} className="h-full">
                  <TextReveal delay={0.3 + (idx * 0.1)} width="100%">
                    <div className="premium-card group h-full flex flex-col justify-center p-6">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-accent/40 transition-colors duration-500">
                        <CheckCircle className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-sm md:text-lg font-display font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[10px] md:text-sm text-white/40 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </TextReveal>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <motion.div
            variants={itemVariants}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-square">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-white/10 rounded-[2rem] rotate-3" />
              <div className="absolute -inset-4 border border-accent/20 rounded-[2rem] -rotate-3" />

              <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-sm p-4 sm:p-8 border border-white/10">
                <div className="relative h-full w-full flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, 0]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-full max-w-[300px]"
                  >
                    <img
                      src="/lovable-uploads/logo.png"
                      alt="Jayam Logo"
                      className="w-full h-auto object-contain transition-transform duration-700"
                    />
                  </motion.div>
                </div>

                {/* Floating Award Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-8 right-8 bg-accent rounded-full p-4 shadow-2xl z-20"
                >
                  <Award className="w-8 h-8 text-background" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutInstitute;

