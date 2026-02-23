
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Courses from "@/components/Courses";
import TailoringProgram from "@/components/TailoringProgram";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";

const CoursesPage = () => {
    return (
        <main className="bg-background min-h-screen">
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="pt-32"
            >
                <Courses />
                <TailoringProgram />
                <Contact />
            </motion.div>
            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default CoursesPage;
