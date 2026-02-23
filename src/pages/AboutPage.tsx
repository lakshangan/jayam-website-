
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutInstitute from "@/components/AboutInstitute";
import AboutJayam from "@/components/AboutJayam";
import FounderCredentials from "@/components/FounderCredentials";
import Awards from "@/components/Awards";
import CampusLife from "@/components/CampusLife";
import StudentShowcase from "@/components/StudentShowcase";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";

const AboutPage = () => {
    return (
        <main className="bg-[#050508] min-h-screen">
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="pt-32"
            >
                <AboutInstitute />
                <AboutJayam />
                <FounderCredentials />
                <Awards />
                <CampusLife />
                <StudentShowcase />
                <Contact />
            </motion.div>
            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default AboutPage;
