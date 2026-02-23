import { useState } from 'react';
import { Clock, ChevronDown, Users, BookOpen, Sparkles, Layout, PenTool, Scissors, Award, ArrowRight } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { motion, AnimatePresence } from 'framer-motion';
import { courseGroups } from '@/data/courses';
import { Link } from 'react-router-dom';

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
      <div className="group">
        <div className={`premium-card h-full flex flex-col transition-all duration-700 hover:border-accent/40`}>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center border border-black/10 group-hover:border-accent/40 transition-all duration-500">
                  <BookOpen size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {course.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent/60 font-black">{course.highlight}</span>
                </div>
              </div>
            </div>

            <p className="text-foreground/40 text-sm leading-relaxed mb-10 font-light">
              {course.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="glass-premium px-5 py-4 rounded-2xl flex flex-col gap-1 border-black/5 bg-black/[0.02]">
                <span className="text-[9px] uppercase tracking-widest text-foreground/20 font-bold">Duration</span>
                <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                  <Clock size={14} className="text-accent" />
                  {course.duration}
                </div>
              </div>
              <div className="glass-premium px-5 py-4 rounded-2xl flex flex-col gap-1 border-black/5 bg-black/[0.02]">
                <span className="text-[9px] uppercase tracking-widest text-foreground/20 font-bold">Level</span>
                <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                  <Award size={14} className="text-accent" />
                  {course.certification}
                </div>
              </div>
            </div>
          </div>

          <Link
            to={`/course/${course.id}`}
            className="flex items-center justify-between w-full pt-8 border-t border-black/5 text-[10px] uppercase tracking-[0.5em] font-black text-foreground/30 hover:text-accent transition-all duration-500 group/btn"
          >
            <span>Explore Full Program</span>
            <ArrowRight size={14} className="text-accent group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
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
            className="text-5xl md:text-8xl font-bold text-foreground mb-10 leading-[0.9] tracking-tighter"
          >
            Explore Our <br />
            <span className="gold-gradient-text italic font-normal text-glow">Courses</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/45 font-light leading-snug max-w-2xl border-l-2 border-accent/20 pl-10"
          >
            Learn the art of fashion from the best teachers. <br className="hidden md:block" />
            <span className="text-foreground/70">Empowering students to build successful careers in the fashion world.</span>
          </motion.p>
        </div>

        <div className="space-y-20 md:space-y-40">
          {courseGroups.map((group, groupIdx) => (
            <div key={group.title}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-black/5 pb-12 gap-8">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">{group.title}</h3>
                  <p className="text-[10px] text-accent uppercase tracking-[0.5em] font-black">{group.subtitle}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="hidden md:block px-5 py-2 rounded-full border border-black/10 bg-black/5 text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold">
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
