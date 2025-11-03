
import { ContactForm, ContactInfo, ContactMap } from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#f9f6ff] to-[#e8d7ff]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title gold-underline pb-4">Contact & Inquiry</h2>
          <p className="section-subtitle">
            Get in touch with us to learn more about our programs and admission process
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <ContactForm />
          
          <div className="flex flex-col gap-8">
            <ContactMap />
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
