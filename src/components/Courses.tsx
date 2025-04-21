
import { useState } from 'react';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const courseGroups = [
  {
    title: "🧵 One-Year Courses (Diploma Level)",
    courses: [
      {
        name: "Commercial Master Designer Diploma",
        description: "Become a certified commercial fashion designer with training in advanced tailoring, design, and customization.",
        duration: "1 Year",
        details: "Advanced fashion, tailoring, creative pattern making, business skills, commercial project exposure, and career guidance."
      },
      {
        name: "Diploma in Fashion Designing",
        description: "Master the principles of fashion, fabric, cutting, and trend-based apparel design.",
        duration: "1 Year",
        details: "Fabric science, design theory, practical sewing, latest trends, portfolio development, and placement preparation."
      },
      {
        name: "Tailoring (Full Course)",
        description: "Comprehensive course covering stitching techniques for both men’s and women’s wear.",
        duration: "1 Year",
        details: "Traditional and modern techniques, custom fitting, garment finishing, project assignments."
      },
      {
        name: "Blouse & Chudithar Designing",
        description: "Specialized course on designing and stitching traditional Indian outfits with modern patterns.",
        duration: "1 Year",
        details: "Indian ethnic wear patterns, creativity with modern styles, detailed hands-on sessions."
      },
      {
        name: "Custom Costume Training",
        description: "Focused training for movie, dance, and stage costume creation and design.",
        duration: "1 Year",
        details: "Performance costume design, embellishments, fabric selection, and practical production."
      },
      {
        name: "Hand & Machine Embroidery",
        description: "Learn artistic embroidery techniques using both hand and machine, perfect for embellishing garments.",
        duration: "1 Year",
        details: "Embroidery basics, machine mastery, pattern creation, accessorizing, and project work."
      },
    ]
  },
  {
    title: "✂️ 3-Month & 6-Month Short Courses",
    courses: [
      {
        name: "Short Term Tailoring Courses",
        description: "Flexible, quick-start tailoring courses for beginners and hobbyists.",
        duration: "3–6 Months",
        details: "Skill-based short modules on basic tailoring, with practical workshops and personal coaching."
      },
      {
        name: "Saree Draping",
        description: "Learn various traditional and modern saree draping techniques.",
        duration: "3 Months",
        details: "Classic and contemporary drapes, cultural significance, and styling tips."
      },
      {
        name: "Saree Pre-Pleating",
        description: "Master the art of pre-pleating sarees for ready-to-wear ease.",
        duration: "3 Months",
        details: "Pre-pleating skills, ready-to-wear saree techniques, trend design."
      },
      {
        name: "Beautician Course",
        description: "Intro to beauty care: skincare, makeup, hair styling, and salon essentials.",
        duration: "6 Months",
        details: "Beauty theory, modern facials, salon hygiene, hair/skin care, and client management."
      }
    ]
  },
];

const modernCardGradients = [
  "bg-gradient-to-tr from-[#e6eaff] via-[#f4d7ff] to-[#f5f8ff]",
  "bg-gradient-to-br from-[#ecd7fe] via-[#d6bcfa] to-[#ecf2fe]",
  "bg-gradient-to-bl from-[#f3e8ff] via-[#ffe6ea] to-[#e8eaff]"
];

const CourseCard = ({ course, gradientIndex }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className={`rounded-lg border-2 border-[#ecd74a] shadow-lg overflow-hidden hover:shadow-2xl ${modernCardGradients[gradientIndex % modernCardGradients.length]} p-6 transition-all card-hover relative`}>
        {/* Decorative Logo */}
        <img src="/lovable-uploads/edbba000-eab6-4e02-9a4a-a593687c6004.png" alt=""
          className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-white border-2 border-[#ecd74a] shadow-lg opacity-80 hidden md:block"
        />
        <h3 className="text-xl font-bold text-[#55529e] mb-1 flex items-center">
          {course.name}
        </h3>
        <p className="mb-2 text-gray-700 font-medium">{course.description}</p>
        <div className="flex items-center text-[#9070ac] text-sm my-2">
          <Clock size={16} className="mr-2 text-[#ecd74a]" />
          <span>{course.duration}</span>
        </div>
        <CollapsibleTrigger asChild>
          <button className="btn-gold w-full flex items-center justify-center gap-2">
            <span>{open ? "Hide Details" : "Learn More"}</span>
            {open ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-4 text-[#54388e] bg-white/90 rounded-lg p-4 border border-[#ecd74a] font-semibold shadow-inner animate-fade-in">
            {course.details}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

const CourseGroupBlock = ({ group, groupIndex }: any) => (
  <div className="mb-10">
    <div className="text-2xl md:text-3xl font-display font-semibold mb-8 text-[#7E69AB] drop-shadow">{group.title}</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {group.courses.map((course: any, idx: number) => (
        <CourseCard key={course.name} course={course} gradientIndex={groupIndex*2+idx} />
      ))}
    </div>
  </div>
);

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-[#ede9fe] via-[#e9ecff] to-[#f4ecfb]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <img src="/lovable-uploads/edbba000-eab6-4e02-9a4a-a593687c6004.png" alt="" className="w-20 h-20 mx-auto rounded-full mb-3 shadow-lg border-2 border-[#ecd74a]" />
          <h2 className="section-title gold-underline pb-4 text-[#54388e]">Specialized Course Listings</h2>
          <p className="section-subtitle text-[#925ec7]">
            Explore our fashionable, tailoring, and beauty programs. Find a course that fits your dream.
          </p>
        </div>
        <div>
          {courseGroups.map((group, groupIndex) => (
            <CourseGroupBlock key={group.title} group={group} groupIndex={groupIndex} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
