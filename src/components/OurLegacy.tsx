
import { motion } from 'framer-motion';
import { Sparkles, History, Star, Award, Heart, ShieldCheck, Zap } from 'lucide-react';

const milestones = [
  {
    icon: <Star size={24} />,
    title: "The Beginning",
    description: "Jayam Institute was started with a focus on teaching real sewing skills."
  },
  {
    icon: <Award size={24} />,
    title: "New Programs",
    description: "We launched our main Professional Tailoring course for students."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Official Recognition",
    description: "We became an approved training partner with the Government."
  },
  {
    icon: <Zap size={24} />,
    title: "Adding Technology",
    description: "We started using modern design tools along with traditional sewing."
  },
  {
    icon: <Heart size={24} />,
    title: "The Future",
    description: "Focusing on eco-friendly designs and even better student experiences."
  }
];

const OurLegacy = () => {
  return (
    <section id="legacy" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <History className="w-4 h-4 text-accent" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-accent">Our Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-title-section font-bold text-foreground mb-8"
          >
            A Long History of <br />
            <span className="gold-gradient-text italic font-normal">Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/40 text-lg md:text-xl font-light leading-relaxed"
          >
            We have been dedicated to nurturing creative talent and shaping the future of design in our community.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 via-black/5 to-transparent" />

          <div className="space-y-16 md:space-y-40">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-[17px] h-[17px] rounded-full bg-background border-2 border-accent shadow-[0_0_15px_rgba(197,163,88,0.3)] z-20" />

                {/* Content Side */}
                <div className="w-full md:w-5/12 ml-10 md:ml-0 group">
                  <div className={`p-8 rounded-[2rem] bg-black/[0.02] border border-black/5 backdrop-blur-sm group-hover:border-accent/30 transition-all duration-500 shadow-xl ${idx % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}>
                    <div className={`mb-4 flex text-accent/30 group-hover:text-accent transition-colors ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      {milestone.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-sm md:text-base text-foreground/40 leading-relaxed font-light">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Empty Side for balance */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-40 flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-8">
            <Sparkles className="text-accent w-8 h-8" />
          </div>
          <p className="text-xs uppercase tracking-[0.5em] text-foreground/20 font-bold mb-4">Quality Education</p>
          <div className="text-6xl md:text-8xl font-display font-bold text-foreground/5 italic">Excellence</div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurLegacy;
