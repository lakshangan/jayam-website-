import { motion } from 'framer-motion';
import { Sparkles, Send, Award, History as HistoryIcon } from 'lucide-react';
import { ContactInfo, ContactMap } from './ContactForm';
import { useAppContext } from '../context/AppContext';

const Contact = () => {
  const { t } = useAppContext();

  const steps = [
    { icon: <Send className="w-6 h-6" />, title: "Inquire", desc: "Submit your details" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Council", desc: "Expert guidance" },
    { icon: <Award className="w-6 h-6" />, title: "Enroll", desc: "Secure your seat" },
    { icon: <HistoryIcon className="w-6 h-6" />, title: "Begin", desc: "Start your legacy" }
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="noise-overlay opacity-20" />

      {/* Background enhancement */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] -z-10 opacity-30" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 opacity-20" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold text-foreground mb-10 leading-[0.9] tracking-tighter"
          >
            Shape Your <br />
            <span className="gold-gradient-text italic font-normal">{t('contact.title')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/50 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-24"
          >
            {t('contact.subtitle')}
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-40 max-w-5xl mx-auto px-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary border border-black/5 flex items-center justify-center text-accent mb-6 shadow-sm">
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-foreground text-xs md:text-sm font-bold uppercase tracking-[0.2em]">{step.title}</h4>
                  <p className="text-[10px] text-foreground/50 uppercase tracking-[0.1em] font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-12 rounded-[3.5rem] border border-black/[0.03] shadow-premium"
            >
              <ContactInfo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full min-h-[500px] rounded-[3.5rem] overflow-hidden border border-black/[0.03] shadow-premium"
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
