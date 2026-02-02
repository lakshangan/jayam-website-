import { useEffect } from "react";
import Hero from "@/components/Hero";
import AboutInstitute from "@/components/AboutInstitute";
import AboutJayam from "@/components/AboutJayam";
import Courses from "@/components/Courses";
import TailoringProgram from "@/components/TailoringProgram";
import CampusLife from "@/components/CampusLife";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import AnimationScript from "@/components/AnimationScript";
import OurLegacy from "@/components/OurLegacy";
import TrustBar from "@/components/TrustBar";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Index = () => {
  useEffect(() => {
    document.title = "Jayam Institute - Shaping Futures, Empowering Minds";
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="overflow-x-hidden relative min-h-screen bg-gradient-to-b from-[#e7e3ff]/70 via-[#f8f6ff]/90 to-[#ffffff]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Animated Sections */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AboutInstitute />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AboutJayam />
      </motion.div>

      <TrustBar />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Courses />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <TailoringProgram />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <CampusLife />
      </motion.div>

      {/* <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <OurLegacy />
      </motion.div> */}

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>

      {/* Footer */}
      <Footer />

      {/* Utility Components */}
      <ScrollToTop />
      <AnimationScript />
    </main>
  );
};

export default Index;