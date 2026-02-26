
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import AboutSummary from '@/components/AboutSummary';
import TrustBar from '@/components/TrustBar';
import ProgramsPreview from '@/components/ProgramsPreview';
import AdmissionSection from '@/components/AdmissionSection';
import AccreditationSection from '@/components/AccreditationSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import AnimationScript from '@/components/AnimationScript';
import ExperienceCTA from '@/components/ExperienceCTA';
const Index = ({ isLoading = false }: { isLoading?: boolean }) => {
  useEffect(() => {
    document.title = "Jayam Institute - Shaping Futures, Empowering Minds";
  }, []);

  return (
    <main className={`bg-background relative ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
      <AnimationScript />
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Navbar />
          <Hero />
          <AboutSummary />
          <TrustBar />
          <ProgramsPreview />
          <AccreditationSection />
          <AdmissionSection />
          <ExperienceCTA />
          <Contact />
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </main>
  );
};

export default Index;
