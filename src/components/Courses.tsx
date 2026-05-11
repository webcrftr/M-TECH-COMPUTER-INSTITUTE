import { Monitor, BookOpen, Code, FileSpreadsheet, Calculator, GraduationCap, ArrowRight, Video, Palette, Terminal, Globe, Megaphone, Smartphone, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const courses = [
  {
    title: "MSCIT (Official)",
    duration: "90 Hours",
    desc: "The must-have certification in Maharashtra. Master IT basics and internet tech.",
    icon: <Monitor className="text-blue-500" />,
  },
  {
    title: "MS Office",
    duration: "40 Hours",
    desc: "Complete command over Word, Excel, and PowerPoint for office productivity.",
    icon: <BookOpen className="text-indigo-500" />,
  },
  {
    title: "Advanced Excel",
    duration: "30 Hours",
    desc: "Professional data analysis, complex formulas, and dashboard automation.",
    icon: <FileSpreadsheet className="text-green-500" />,
  },
  {
    title: "Advanced Tally + GST",
    duration: "60 Hours",
    desc: "Master accounting with TallyPrime including GST, TDS & industry practices.",
    icon: <Calculator className="text-orange-500" />,
  },
  {
    title: "Full Stack Development",
    duration: "6 Months",
    desc: "Learn complete web development including frontend, backend, databases, and APIs.",
    icon: <Globe className="text-cyan-500" />,
    badge: "Trending Course",
    topics: ["HTML/CSS", "JavaScript", "React JS", "Node.js", "MongoDB"]
  },
  {
    title: "Digital Marketing",
    duration: "3 Months",
    desc: "Master modern skills: SEO, Social Media Marketing, and Online Advertising.",
    icon: <Megaphone className="text-amber-500" />,
    badge: "Career Oriented",
    topics: ["SEO", "SM Marketing", "Google Ads", "Content Strategy"]
  },
  {
    title: "Graphic Designing",
    duration: "4 Months",
    desc: "Creative design with Photoshop, Illustrator & CorelDraw for brand identity.",
    icon: <Palette className="text-pink-500" />,
  },
  {
    title: "Video Editing",
    duration: "2 Months",
    desc: "Professional video production using Premiere Pro and After Effects.",
    icon: <Video className="text-red-500" />,
  },
  {
    title: "Board Exam Preparation",
    duration: "Flexible",
    desc: "Special guidance for students preparing for computer-related board exams.",
    icon: <GraduationCap className="text-purple-500" />,
    badge: "Student Support",
    features: ["Personal Attention", "Exam Guidance", "Doubt Solving"]
  },
];

const codingCourses = [
  "HTML & CSS", "JavaScript", "React JS", "Python", "C Programming"
];

export default function Courses() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center mb-4">
        <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-4">Our Professional Courses</h2>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium">
          Industry-oriented courses designed to build practical skills and career opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {courses.map((course, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-[40px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden flex flex-col transition-all duration-500 hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)]"
          >
            {/* Gradient Border Effect on Hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-orange/20 rounded-[40px] transition-all pointer-events-none"></div>
            
            {/* Badge */}
            {course.badge && (
              <div className="absolute top-6 right-6">
                <span className="bg-brand-orange text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-brand-orange/20">
                  {course.badge}
                </span>
              </div>
            )}

            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange/5 transition-colors relative">
               <div className="absolute inset-0 bg-brand-orange/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
               <div className="relative z-10">{course.icon}</div>
            </div>

            <h3 className="font-black text-2xl text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
              {course.title}
            </h3>
            
            <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full w-fit mb-6">
               <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></div>
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">
                 {course.duration}
               </span>
            </div>

            <p className="text-sm text-slate-500 mb-6 leading-relaxed font-medium flex-grow">
              {course.desc}
            </p>

            {(course.topics || course.features) && (
              <div className="flex flex-wrap gap-2 mb-8">
                {(course.topics || course.features)?.map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
                    <CheckCircle2 size={10} className="text-brand-green" />
                    <span className="text-[10px] font-bold text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            )}
            
            <button className="w-full bg-brand-navy text-white text-xs font-black py-5 rounded-2xl transition-all uppercase tracking-[0.2em] shadow-xl shadow-brand-navy/10 hover:bg-brand-orange hover:shadow-brand-orange/20 active:scale-95 flex items-center justify-center gap-2">
              Enroll Now <ArrowRight size={14} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Coding Courses Footer Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bento-card accent-navy mt-8 p-10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
             <div className="p-5 bg-white/10 rounded-3xl border border-white/10 shadow-inner">
                <Terminal className="text-brand-orange" size={32} />
             </div>
             <div>
                <h3 className="font-black text-2xl mb-1">Modern Coding Hub</h3>
                <p className="text-sm opacity-60 font-medium">Build logic and industry-ready software skills from scratch</p>
             </div>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {codingCourses.map((skill, i) => (
              <div key={i} className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-brand-orange hover:border-brand-orange transition-all cursor-default shadow-lg">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
