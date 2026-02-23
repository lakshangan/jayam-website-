
import { useParams, Link } from "react-router-dom";
import { allCourses } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Clock, Award, BookOpen, CheckCircle, ArrowLeft, Sparkles } from "lucide-react";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const CourseDetailsPage = () => {
    const { id } = useParams();
    const course = allCourses.find((c) => c.id === id);

    if (!course) {
        return (
            <div className="min-h-screen bg-background text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
                    <Link to="/courses" className="text-accent hover:underline">Back to Programs</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-[#050508] min-h-screen">
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="pt-32 pb-20"
            >
                <div className="container-custom">
                    <Link to="/courses" className="inline-flex items-center gap-2 text-white/40 hover:text-accent mb-12 transition-colors uppercase text-[10px] font-black tracking-widest">
                        <ArrowLeft size={14} /> Back to All Programs
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-4 mb-6"
                            >
                                <div className="w-8 h-[1px] bg-accent/50" />
                                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">{course.highlight}</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                                {course.name.split(' ').slice(0, -1).join(' ')} <span className="gold-gradient-text italic font-normal">{course.name.split(' ').slice(-1)}</span>
                            </h1>

                            <p className="text-white/60 text-xl font-light leading-relaxed mb-12">
                                {course.description}
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-12">
                                <div className="premium-card p-6 bg-white/[0.02]">
                                    <div className="flex items-center gap-3 text-accent mb-2">
                                        <Clock size={16} />
                                        <span className="text-[10px] uppercase tracking-widest font-black">Duration</span>
                                    </div>
                                    <div className="text-white font-bold">{course.duration}</div>
                                </div>
                                <div className="premium-card p-6 bg-white/[0.02]">
                                    <div className="flex items-center gap-3 text-accent mb-2">
                                        <Award size={16} />
                                        <span className="text-[10px] uppercase tracking-widest font-black">Certification</span>
                                    </div>
                                    <div className="text-white font-bold">{course.certification}</div>
                                </div>
                            </div>

                            <button className="btn-premium px-10 py-5 w-full md:w-fit group flex items-center justify-center gap-3">
                                Enroll in this Program
                                <Sparkles className="w-4 h-4" />
                            </button>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl"
                        >
                            <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 mb-32">
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                                <BookOpen className="text-accent" /> Program Curriculum
                            </h2>
                            <div className="grid gap-4">
                                {course.modules.map((module, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-6 group hover:border-accent/30 transition-all">
                                        <span className="text-accent/40 font-black text-xs">0{idx + 1}</span>
                                        <span className="text-white/80 font-medium">{module}</span>
                                        <CheckCircle size={16} className="ml-auto text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-accent/5 rounded-[2.5rem] p-10 border border-accent/20 h-fit">
                            <h3 className="text-xl font-bold text-white mb-6">Course Outcome</h3>
                            <p className="text-white/50 text-sm leading-relaxed mb-8">
                                {course.details}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-accent">
                                    <span className="w-6 h-[1px] bg-accent" /> Career Ready
                                </div>
                                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-accent">
                                    <span className="w-6 h-[1px] bg-accent" /> Portfolio Development
                                </div>
                                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-accent">
                                    <span className="w-6 h-[1px] bg-accent" /> Business Mentorship
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Contact />
            </motion.div>
            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default CourseDetailsPage;
