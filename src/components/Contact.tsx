
import { motion } from 'framer-motion';
import { Sparkles, Send, Award, History as HistoryIcon } from 'lucide-react';
import { ContactForm, ContactInfo, ContactMap } from './ContactForm';

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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-32 max-w-5xl mx-auto">
            {[
              { icon: <Send className="w-5 h-5" />, title: "Inquire", desc: "Submit your details" },
              { icon: <Sparkles className="w-5 h-5" />, title: "Council", desc: "Expert guidance" },
              { icon: <Award className="w-5 h-5" />, title: "Enroll", desc: "Secure your seat" },
              { icon: <HistoryIcon className="w-5 h-5" />, title: "Begin", desc: "Start your legacy" }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex flex-col items-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-background transition-all duration-500 group-hover:scale-110 shadow-xl shadow-accent/0 group-hover:shadow-accent/20">
                  {step.icon}
                </div>
                <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-widest mb-1">{step.title}</h4>
                <p className="text-[9px] text-white/30 uppercase tracking-widest font-bold font-display">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-4 md:w-8 h-[1px] bg-white/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="premium-card p-0 overflow-hidden"
          >
            <ContactForm />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-card"
            >
              <ContactInfo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="premium-card p-0 overflow-hidden h-[300px] relative rounded-[2rem]"
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

