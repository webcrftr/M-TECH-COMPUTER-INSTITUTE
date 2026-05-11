import { Monitor, BookOpen, Code, FileSpreadsheet, Calculator, GraduationCap, Clock, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const detailedCourses = [
  {
    title: "MS-CIT & Computer Basics",
    hindi: "एम एस-सीआईटी",
    duration: "2-3 Months",
    desc: "The essential certification for every student in Maharashtra. Learn Word, Excel, PowerPoint, and Internet fundamentals.",
    skills: ["Microsoft Word", "Advanced PowerPoint", "Internet Securities", "Typing Basics"],
    icon: <Monitor className="text-blue-500" />,
    color: "bg-blue-50"
  },
  {
    title: "Advanced TallyPrime with GST",
    hindi: "टॅली आणि जीएसटी",
    duration: "3-4 Months",
    desc: "Professional accounting course designed for job seekers. Master bookkeeping, inventory, and taxation.",
    skills: ["TallyPrime 4.0", "GST Filing", "TDS/TCS", "Payroll Analysis"],
    icon: <Calculator className="text-orange-500" />,
    color: "bg-orange-50"
  },
  {
    title: "Advanced Excel for Business",
    hindi: "ऍडव्हान्स्ड एक्सेल",
    duration: "1-2 Months",
    desc: "Become the data expert in any office. Learn complex formulas, pivot tables, and dashboard automation.",
    skills: ["VLOOKUP/HLOOKUP", "Pivot Tables", "Power Query", "Excel Macros"],
    icon: <FileSpreadsheet className="text-green-500" />,
    color: "bg-green-50"
  },
  {
    title: "Full Stack Development",
    hindi: "फुल स्टॅक डेव्हलपमेंट",
    duration: "6 Months",
    desc: "Learn complete web development including frontend, backend, databases, APIs, and deployment with practical projects.",
    skills: ["HTML & CSS", "JavaScript", "React JS", "Node.js", "MongoDB", "Express.js"],
    icon: <Code className="text-purple-500" />,
    color: "bg-purple-50"
  },
  {
    title: "Digital Marketing Specialist",
    hindi: "डिजिटल मार्केटिंग",
    duration: "3 Months",
    desc: "Master modern digital marketing skills including social media marketing, SEO, content marketing, and online advertising.",
    skills: ["SEO Mastery", "Social Media Marketing", "Google Ads", "Content Marketing", "Instagram & FB Ads"],
    icon: <Monitor className="text-red-500" />,
    color: "bg-red-50"
  },
  {
    title: "Board Exam Preparation",
    hindi: "परीक्षा तयारी बँचेस",
    duration: "Academic Session",
    desc: "Special guidance and computer education support for school and college students preparing for board exams.",
    skills: ["Personal Attention", "Practical Learning", "Exam Guidance", "Doubt Solving"],
    icon: <GraduationCap className="text-indigo-500" />,
    color: "bg-indigo-50"
  }
];

export default function CoursesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Job-Oriented <span className="text-brand-orange">Professional Courses</span>
          </motion.h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Choose from a variety of courses designed to make you industry-ready with practical, hands-on training.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      </div>

      {/* Courses List */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {detailedCourses.map((course, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bento-card group hover:border-brand-orange/30 transition-all p-0 flex flex-col sm:flex-row"
            >
              <div className={`p-8 sm:w-1/3 flex flex-col items-center justify-center ${course.color}`}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                  {course.icon}
                </div>
                <div className="text-brand-navy font-black text-center text-sm">{course.title}</div>
                <div className="text-brand-orange font-bold text-[10px] mt-1 uppercase tracking-widest">{course.duration}</div>
              </div>
              
              <div className="p-8 sm:w-2/3 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-brand-navy leading-tight">{course.title}</h3>
                  <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500 font-bold">{course.hindi}</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{course.desc}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {course.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-700 uppercase tracking-tight">
                      <CheckCircle2 size={12} className="text-brand-green" />
                      {skill}
                    </div>
                  ))}
                </div>
                
                <Link to="/contact" className="mt-auto bg-brand-navy text-white text-center py-4 rounded-xl font-bold hover:bg-brand-orange transition-colors">
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Banner */}
      <div className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-brand-orange">
                <Award size={24} />
              </div>
              <div>
                <div className="font-bold text-brand-navy">Authorized Center</div>
                <div className="text-xs text-slate-500">Official MS-CIT Certified Partner</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-brand-orange">
                <Clock size={24} />
              </div>
              <div>
                <div className="font-bold text-brand-navy">Flexible Batches</div>
                <div className="text-xs text-slate-500">Morning 7AM to Night 9PM</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-brand-orange">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="font-bold text-brand-navy">Placement Support</div>
                <div className="text-xs text-slate-500">100% Job Assistance Provided</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
