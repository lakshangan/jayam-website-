import { motion } from 'framer-motion';

import { ContactInfo, ContactMap } from './ContactForm';
import { useAppContext } from '../context/AppContext';

const Contact = () => {
  const { t } = useAppContext();



  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="noise-overlay opacity-20" />

      {/* Background enhancement */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] -z-10 opacity-30" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 opacity-20" />

      <div className="container-custom relative z-10">


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
