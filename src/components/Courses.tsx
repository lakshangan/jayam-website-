
import { useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';

interface CourseGroup {
  title: string;
  icon?: string;
  courses: {
    name: string;
    description: string;
    duration: string;
  }[];
}

const courseGroups: CourseGroup[] = [
  {
    title: "🧵 One-Year Courses (Diploma Level)",
    courses: [
      {
        name: "Commercial Master Designer Diploma",
        description: "Become a certified commercial fashion designer with training in advanced tailoring, design, and customization.",
        duration: "1 Year"
      },
      {
        name: "Diploma in Fashion Designing",
        description: "Master the principles of fashion, fabric, cutting, and trend-based apparel design.",
        duration: "1 Year"
      },
      {
        name: "Tailoring (Full Course)",
        description: "Comprehensive course covering stitching techniques for both men’s and women’s wear.",
        duration: "1 Year"
      },
      {
        name: "Blouse & Chudithar Designing",
        description: "Specialized course on designing and stitching traditional Indian outfits with modern patterns.",
        duration: "1 Year"
      },
      {
        name: "Custom Costume Training",
        description: "Focused training for movie, dance, and stage costume creation and design.",
        duration: "1 Year"
      },
      {
        name: "Hand & Machine Embroidery",
        description: "Learn artistic embroidery techniques using both hand and machine, perfect for embellishing garments.",
        duration: "1 Year"
      },
    ]
  },
  {
    title: "✂️ 3-Month & 6-Month Short Courses",
    courses: [
      {
        name: "Short Term Tailoring Courses",
        description: "Flexible, quick-start tailoring courses for beginners and hobbyists.",
        duration: "3–6 Months"
      },
      {
        name: "Saree Draping",
        description: "Learn various traditional and modern saree draping techniques.",
        duration: "3 Months"
      },
      {
        name: "Saree Pre-Pleating",
        description: "Master the art of pre-pleating sarees for ready-to-wear ease.",
        duration: "3 Months"
      },
      {
        name: "Beautician Course",
        description: "Intro to beauty care: skincare, makeup, hair styling, and salon essentials.",
        duration: "6 Months"
      }
    ]
  },
];

const CourseGroupBlock = ({ group }: { group: CourseGroup }) => (
  <div className="mb-10">
    <div className="text-2xl md:text-3xl font-display font-semibold mb-6 text-[#855acb]">{group.title}</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {group.courses.map((course, idx) => (
        <div key={course.name} className="bg-white rounded-lg border border-[#eadcff] p-6 shadow-md hover:shadow-xl transition-all duration-300 card-hover">
          <h3 className="text-lg font-bold text-[#46256c] mb-2">{course.name}</h3>
          <p className="text-gray-700 mb-2">{course.description}</p>
          <div className="flex items-center text-[#778] text-sm mt-1">
            <Clock size={16} className="mr-2 text-[#c69cf6]" />
            <span>{course.duration}</span>
          </div>
          <button className="btn-gold mt-4 w-full">Learn More</button>
        </div>
      ))}
    </div>
  </div>
);

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-[#fff9fb] to-[#e6eaff]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title gold-underline pb-4 text-[#46256c]">Specialized Course Listings</h2>
          <p className="section-subtitle text-[#925ec7]">
            Explore our fashion, tailoring, and beauty programs. Find a course that fits your dream.
          </p>
        </div>
        <div>
          {courseGroups.map((group) => (
            <CourseGroupBlock key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
