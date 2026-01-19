import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import AboutInstitute from '@/components/AboutInstitute';
import AboutJayam from '@/components/AboutJayam';
import Courses from '@/components/Courses';
import TailoringProgram from '@/components/TailoringProgram';
import CampusLife from '@/components/CampusLife';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import AnimationScript from '@/components/AnimationScript';
import OurLegacy from '@/components/OurLegacy';
import Awards from '@/components/Awards';
import TrustBar from '@/components/TrustBar';
import StudentShowcase from '@/components/StudentShowcase';
import MobileBottomNav from '@/components/MobileBottomNav';

const Index = ({ isLoading = false }: { isLoading?: boolean }) => {
  useEffect(() => {
    document.title = "Jayam Institute - Shaping Futures, Empowering Minds";
  }, []);

  return (
    <main className={`bg-[#050508] ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
      <AnimationScript />
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Navbar />
          <Hero />
          <AboutInstitute />
          <AboutJayam />
          <TrustBar />
          <Courses />
          <TailoringProgram />
          <CampusLife />
          <OurLegacy />
          <Awards />
          <StudentShowcase />
          <Contact />
          <Footer />
          <ScrollToTop />
          <MobileBottomNav />
        </motion.div>
      )}
    </main>
  );
};

export default Index;
