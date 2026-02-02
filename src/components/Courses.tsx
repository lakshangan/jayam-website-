
import { useState } from 'react';
import { Clock, ChevronDown, Users, BookOpen, Sparkles, Layout, PenTool, Scissors, Award } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { motion, AnimatePresence } from 'framer-motion';

const courseGroups = [
  {
    title: "Diploma Programs",
    subtitle: "Professional Certifications",
    courses: [
      {
        name: "Commercial Master Designer",
        description: "Launch your independent fashion brand with our comprehensive business-focused curriculum.",
        duration: "1 Year",
        certification: "Advanced",
        highlight: "Entrepreneurship",
        modules: [
          "Advanced Couture Pattern Drafting",
          "Fashion Business & Marketing",
          "Digital Design Portfolio",
          "Commercial Apparel Production",
          "Luxury Brand Positioning"
        ],
        details: "Covers the full spectrum from sketch to market launch, focusing on commercial viability."
      },
      {
        name: "Diploma in Fashion Designing",
        description: "Master textile science, trend forecasting, and technical design pillars.",
        duration: "1 Year",
        certification: "Technical",
        highlight: "Technical Mastery",
        modules: [
          "Textile & Fabric Science",
          "Basic & Advanced Sewing",
          "Trend Analysis & Forecasting",
          "Garment Construction",
          "Illustrative Design Techniques"
        ],
        details: "An intensive program transforming creative passion into industry-standard technical precision."
      },
      {
        name: "Professional Tailoring",
        description: "Learn heritage techniques for bespoke men's and women's couture.",
        duration: "1 Year",
        certification: "Expert",
        highlight: "Bespoke Expert",
        modules: [
          "Bespoke Menswear Tailoring",
          "Intricate Women's Couture",
          "Alteration & Fitting Mastery",
          "Pattern Manipulation",
          "Industrial Machine Handling"
        ],
        details: "Focuses on garment architecture for 100% precision in fitting and construction."
      }
    ]
  },
  {
    title: "Specialized Certifications",
    subtitle: "Focus Skill Modules",
    courses: [
      {
        name: "Ethnic Wear Designing",
        description: "Specialized training in Indian traditional wear and bridal bridal couture.",
        duration: "6 Months",
        certification: "Specialized",
        highlight: "Cultural Couture",
        modules: [
          "Bridal Wear Architecture",
          "Embroidery & Surface Design",
          "Traditional Draping Arts",
          "Modernizing Ethnic Patterns"
        ],
        details: "Blend centuries-old craftsmanship with modern design sensibilities for today's brides."
      },
      {
        name: "Advanced Beautician",
        description: "Professional training in bridal makeup and luxury salon management.",
        duration: "6 Months",
        certification: "Professional",
        highlight: "Salon Ready",
        modules: [
          "Advanced Skin Therapy",
          "HD & Airbrush Bridal Makeup",
          "Artistic Hair Styling",
          "Aesthetics & Hygiene Standards"
        ],
        details: "A holistic approach preparing students for the competitive luxury grooming industry."
      }
    ]
  },
];

const CourseCard = ({ course, index }: { course: any; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <Collapsible open={open} onOpenChange={setOpen} className="group">
        <div className={`premium-card h-full flex flex-col transition-all duration-700 ${open ? 'border-accent/60 bg-accent/5 ring-1 ring-accent/20' : ''}`}>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent/40 transition-all duration-500">
                  <BookOpen size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {course.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent/60 font-black">{course.highlight}</span>
                </div>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-10 font-light">
              {course.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="glass-premium px-5 py-4 rounded-2xl flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest text-white/20 font-bold">Duration</span>
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Clock size={14} className="text-accent" />
                  {course.duration}
                </div>
              </div>
              <div className="glass-premium px-5 py-4 rounded-2xl flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest text-white/20 font-bold">Level</span>
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Award size={14} className="text-accent" />
                  {course.certification}
                </div>
              </div>
            </div>
          </div>

          <CollapsibleTrigger asChild>
            <button className="flex items-center justify-between w-full pt-8 border-t border-white/5 text-[10px] uppercase tracking-[0.5em] font-black text-white/30 hover:text-accent transition-all duration-500 group/btn">
              <span>{open ? "Close Blueprint" : "Explore Curriculum"}</span>
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <ChevronDown size={14} className="text-accent" />
              </motion.div>
            </button>
          </CollapsibleTrigger>

          <AnimatePresence>
            {open && (
              <CollapsibleContent forceMount>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-10 space-y-8">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">Specialized Modules</span>
                      <div className="grid grid-cols-1 gap-3">
                        {course.modules.map((module: string, mIdx: number) => (
                          <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: mIdx * 0.1 }}
                            key={mIdx}
                            className="flex items-center gap-4 text-xs text-white/60 font-medium"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                            {module}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed font-light italic border-l border-accent/20 pl-6">
                      {course.details}
                    </p>
                  </div>
                </motion.div>
              </CollapsibleContent>
            )}
          </AnimatePresence>
        </div>
      </Collapsible>
    </motion.div>
  );
};

const Courses = () => {
  return (
    <section id="courses" className="section-padding bg-background relative overflow-hidden mask-linear-t mask-linear-b">
      <div className="noise-overlay" />

      {/* Premium Theme Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-[15%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 opacity-30" />
        <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-accent/15 rounded-full blur-[130px] opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <Layout className="w-4 h-4 text-accent" />
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Learning Paths</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold text-white mb-10 leading-[0.9] tracking-tighter"
          >
            Explore Our <br />
            <span className="gold-gradient-text italic font-normal text-glow">Courses</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/45 font-light leading-snug max-w-2xl border-l-2 border-accent/20 pl-10"
          >
            Learn the art of fashion from the best teachers. <br className="hidden md:block" />
            <span className="text-white/70">Empowering students to build successful careers in the fashion world.</span>
          </motion.p>
        </div>

        <div className="space-y-20 md:space-y-40">
          {courseGroups.map((group, groupIdx) => (
            <div key={group.title}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/5 pb-12 gap-8">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">{group.title}</h3>
                  <p className="text-[10px] text-accent uppercase tracking-[0.5em] font-black">{group.subtitle}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="hidden md:block px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                    {group.courses.length} Certified Pathways
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {group.courses.map((course, idx) => (
                  <CourseCard key={course.name} course={course} index={idx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
