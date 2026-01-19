
import { CheckCircle, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import TextReveal from './TextReveal';
import { FabricFloating } from './FashionVisual';


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
    <motion.section
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      id="why-choose-us"
      className="section-padding bg-secondary relative overflow-hidden mask-linear-t mask-linear-b"
    >
      {/* Premium background with decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] -z-10 opacity-40" />

      <div className="container-custom">
        <motion.div
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

            <div className="grid grid-cols-2 gap-4 md:gap-8 items-stretch mt-12">
              {features.map((item, idx) => (
                <div key={item.title} className="h-full perspective-1000">
                  <TextReveal delay={0.3 + (idx * 0.1)} width="100%">
                    <motion.div
                      whileHover={{
                        rotateY: idx % 2 === 0 ? 10 : -10,
                        rotateX: 5,
                        z: 50,
                        scale: 1.05
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="premium-card group h-full flex flex-col justify-center p-6 md:p-10 border-white/5 hover:border-accent/40 bg-secondary/5 hover:bg-secondary/20 transition-all duration-500"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                        <CheckCircle className="w-6 h-6 text-accent group-hover:text-background" />
                      </div>
                      <h3 className="text-lg md:text-2xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[10px] md:text-sm text-white/30 leading-relaxed font-light uppercase tracking-wider">
                        {item.description}
                      </p>
                    </motion.div>
                  </TextReveal>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <motion.div
            variants={itemVariants}
            className="relative order-1 lg:order-2 perspective-1000"
          >
            <FabricFloating />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutInstitute;

