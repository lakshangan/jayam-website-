
import { motion } from 'framer-motion';
import { Sparkles, Send, Award, History as HistoryIcon } from 'lucide-react';
import { ContactInfo, ContactMap } from './ContactForm';
import Magnetic from './Magnetic';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden mask-linear-t mask-linear-b">
      <div className="noise-overlay" />
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -z-10 opacity-30" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] -z-10 opacity-20" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-10"
          >
            <Sparkles className="w-4 h-4" /> Admission Portal 2024-25
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold text-white mb-10 leading-[0.9] tracking-tighter"
          >
            Shape Your <br />
            <span className="gold-gradient-text italic font-normal text-glow">Couture Destiny</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-20"
          >
            Join the ranks of elite designers. Our seasonal admissions are now open for creative minds ready to transcend the ordinary.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mb-32 max-w-5xl mx-auto">
            {[
              { icon: <Send className="w-6 h-6" />, title: "Inquire", desc: "Submit your details" },
              { icon: <Sparkles className="w-6 h-6" />, title: "Council", desc: "Expert guidance" },
              { icon: <Award className="w-6 h-6" />, title: "Enroll", desc: "Secure your seat" },
              { icon: <HistoryIcon className="w-6 h-6" />, title: "Begin", desc: "Start your legacy" }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
                className="flex flex-col items-center group relative mt-10 md:mt-20"
              >
                <Magnetic strength={0.25}>
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-background transition-all duration-700 group-hover:scale-110 shadow-2xl shadow-accent/0 group-hover:shadow-accent/40 relative">
                    <div className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="z-10">{step.icon}</div>
                  </div>
                </Magnetic>
                <h4 className="text-white text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-2">{step.title}</h4>
                <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-black">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactInfo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full min-h-[500px]"
            >
              <ContactMap />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

