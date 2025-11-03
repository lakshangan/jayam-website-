
import { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, Users, BookOpen } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const courseGroups = [
  {
    title: "🧵 One-Year Courses (Diploma Level)",
    courses: [
      {
        name: "Commercial Master Designer Diploma",
        description: "Become a certified commercial fashion designer with training in advanced tailoring, design, and customization.",
        duration: "1 Year",
        details: "Advanced fashion, tailoring, creative pattern making, business skills, commercial project exposure, and career guidance.",
        students: "120+"
      },
      {
        name: "Diploma in Fashion Designing",
        description: "Master the principles of fashion, fabric, cutting, and trend-based apparel design.",
        duration: "1 Year",
        details: "Fabric science, design theory, practical sewing, latest trends, portfolio development, and placement preparation.",
        students: "85+"
      },
      {
        name: "Tailoring (Full Course)",
        description: "Comprehensive course covering stitching techniques for both men's and women's wear.",
        duration: "1 Year",
        details: "Traditional and modern techniques, custom fitting, garment finishing, project assignments.",
        students: "150+"
      },
      {
        name: "Blouse & Chudithar Designing",
        description: "Specialized course on designing and stitching traditional Indian outfits with modern patterns.",
        duration: "1 Year",
        details: "Indian ethnic wear patterns, creativity with modern styles, detailed hands-on sessions.",
        students: "75+"
      },
      {
        name: "Custom Costume Training",
        description: "Focused training for movie, dance, and stage costume creation and design.",
        duration: "1 Year",
        details: "Performance costume design, embellishments, fabric selection, and practical production.",
        students: "40+"
      },
      {
        name: "Hand & Machine Embroidery",
        description: "Learn artistic embroidery techniques using both hand and machine, perfect for embellishing garments.",
        duration: "1 Year",
        details: "Embroidery basics, machine mastery, pattern creation, accessorizing, and project work.",
        students: "65+"
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
        details: "Skill-based short modules on basic tailoring, with practical workshops and personal coaching.",
        students: "90+"
      },
      {
        name: "Saree Draping",
        description: "Learn various traditional and modern saree draping techniques.",
        duration: "3 Months",
        details: "Classic and contemporary drapes, cultural significance, and styling tips.",
        students: "60+"
      },
      {
        name: "Saree Pre-Pleating",
        description: "Master the art of pre-pleating sarees for ready-to-wear ease.",
        duration: "3 Months",
        details: "Pre-pleating skills, ready-to-wear saree techniques, trend design.",
        students: "45+"
      },
      {
        name: "Beautician Course",
        description: "Intro to beauty care: skincare, makeup, hair styling, and salon essentials.",
        duration: "6 Months",
        details: "Beauty theory, modern facials, salon hygiene, hair/skin care, and client management.",
        students: "70+"
      }
    ]
  },
];

const CourseCard = ({ course, index }: { course: any; index: number }) => {
  const [open, setOpen] = useState(false);
  
  // Create a gradient pattern based on index
  const gradients = [
    "from-violet-100 to-fuchsia-100 border-l-4 border-violet-400",
    "from-blue-50 to-indigo-100 border-l-4 border-blue-400",
    "from-pink-50 to-rose-100 border-l-4 border-pink-400",
    "from-cyan-50 to-sky-100 border-l-4 border-cyan-400",
    "from-amber-50 to-yellow-100 border-l-4 border-amber-400",
    "from-emerald-50 to-green-100 border-l-4 border-emerald-400"
  ];
  
  const gradientClass = gradients[index % gradients.length];

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card className={`overflow-hidden bg-gradient-to-br ${gradientClass} shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1`}>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-[#55529e] flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-inner border border-[#ecd74a]/30">
              <BookOpen size={18} className="text-[#7E69AB]" />
            </div>
            {course.name}
          </CardTitle>
          <CardDescription className="text-gray-700 font-medium mt-2">
            {course.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pb-0">
          <div className="flex items-center justify-between text-sm mb-3">
            <div className="flex items-center text-[#9070ac]">
              <Clock size={16} className="mr-1.5 text-[#ecd74a]" />
              <span>{course.duration}</span>
            </div>
            
            <div className="flex items-center text-[#9070ac]">
              <Users size={16} className="mr-1.5 text-[#ecd74a]" />
              <span>{course.students} Students</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="pt-3 pb-4">
          <CollapsibleTrigger asChild>
            <button className="w-full py-2 px-4 rounded-lg bg-white/70 backdrop-blur-sm border border-[#ecd74a]/50 text-[#46256c] font-medium hover:bg-white/90 hover:shadow-md transition-all flex items-center justify-center gap-2">
              <span>{open ? "Hide Details" : "Course Details"}</span>
              {open ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
            </button>
          </CollapsibleTrigger>
        </CardFooter>
        
        <CollapsibleContent>
          <div className="px-6 pb-6">
            <div className="mt-1 text-[#54388e] bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-[#ecd74a]/30 font-semibold shadow-inner animate-fade-in">
              {course.details}
            </div>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

const CourseGroupBlock = ({ group, groupIndex }: any) => (
  <div className="mb-12">
    <div className="text-2xl md:text-3xl font-display font-semibold mb-8 text-[#7E69AB] drop-shadow flex items-center">
      <div className="mr-3 p-1.5 bg-white/70 backdrop-blur-sm rounded-lg border border-[#ecd74a]/30 shadow-sm">
        {group.title.split(' ')[0]}
      </div>
      <span>{group.title.substring(group.title.indexOf(' ') + 1)}</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {group.courses.map((course: any, idx: number) => (
        <CourseCard key={course.name} course={course} index={groupIndex*6+idx} />
      ))}
    </div>
  </div>
);

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-[#ede9fe] via-[#e9ecff] to-[#f4ecfb]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto relative mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-300 to-pink-300 animate-pulse-soft"></div>
            <img 
              src="/lovable-uploads/edbba000-eab6-4e02-9a4a-a593687c6004.png" 
              alt="" 
              className="w-20 h-20 mx-auto rounded-full relative z-10 object-cover border-2 border-[#ecd74a]" 
            />
          </div>
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
