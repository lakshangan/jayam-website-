
import { useEffect } from 'react';
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

const Index = () => {
  useEffect(() => {
    document.title = "Jayam Institute - Shaping Futures, Empowering Minds";
  }, []);

  return (
    <main className="overflow-x-hidden">
      <AnimationScript />
      <Navbar />
      <Hero />
      <TrustBar />
      <AboutInstitute />
      <AboutJayam />
      <Courses />
      <TailoringProgram />
      <CampusLife />
      <OurLegacy />
      <Awards />
      <StudentShowcase />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
