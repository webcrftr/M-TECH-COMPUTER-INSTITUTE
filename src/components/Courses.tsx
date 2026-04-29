import { Monitor, BookOpen, Code, FileSpreadsheet, Calculator, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const courses = [
  {
    title: "Computer Basics & MS-CIT",
    desc: "Essential computer skills for everyone. Get your official MS-CIT certification.",
    icon: <Monitor className="text-blue-500" />,
    features: ["Word, Excel, PPT", "Internet Basics", "Official Certification"]
  },
  {
    title: "Advanced Tally & GST",
    desc: "Master accounting with TallyPrime. Practical training in GST, taxation & payroll.",
    icon: <Calculator className="text-orange-500" />,
    features: ["TallyPrime", "GST Filing", "Inventory Management"]
  },
  {
    title: "Advanced Excel",
    desc: "Become a spreadsheet power user for business analytics and automation.",
    icon: <FileSpreadsheet className="text-green-500" />,
    features: ["VLOOKUP/XLOOKUP", "Pivot Tables", "Dashboard Creation"]
  },
  {
    title: "Programming Essentials",
    desc: "C, C++, Java, and Python from scratch. Build a strong foundation in coding.",
    icon: <Code className="text-purple-500" />,
    features: ["Logic Building", "Live Projects", "Certificate"]
  },
  {
    title: "Digital Marketing",
    desc: "Learn SEO, Social Media Marketing, and Google Ads to grow any business.",
    icon: <BookOpen className="text-red-500" />,
    features: ["SEO Strategies", "Content Planning", "Ad Management"]
  },
  {
    title: "Exam Preparation",
    desc: "Special batches for students preparing for computer-related board exams.",
    icon: <GraduationCap className="text-indigo-500" />,
    features: ["Mock Tests", "Theory Sessions", "Personal Doubt Clearing"]
  }
];

export default function Courses() {
  return (
    <div className="bento-card h-full">
      <h3 className="font-bold text-xl mb-6 text-brand-navy">Our Professional Courses</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
        {courses.map((course, idx) => (
          <div 
            key={idx}
            className="bento-card p-4 bg-slate-50 border-slate-100 hover:border-brand-blue/30 group"
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
              {course.icon}
            </div>
            <div className="font-bold text-sm text-brand-navy mb-1">{course.title}</div>
            <div className="text-[10px] text-slate-500 mb-3 line-clamp-1">{course.desc}</div>
            
            <button className="text-[10px] font-bold text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all">
              ENQUIRE NOW <ArrowRight size={10} />
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-800 text-center font-bold">
        ⚡ New Batches Starting March 15th - Limited Seats!
      </div>
    </div>
  );
}
