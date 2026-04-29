import { CheckCircle, Users, Award, Clock, Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    title: "Experienced Faculty",
    desc: "Learn from industry experts with years of teaching experience.",
    icon: <Users className="text-brand-orange" />
  },
  {
    title: "Practical Learning",
    desc: "No boring lectures. Hands-on training on actual software projects.",
    icon: <CheckCircle className="text-brand-orange" />
  },
  {
    title: "Job-Oriented Courses",
    desc: "Curriculum designed to help you land your dream job quickly.",
    icon: <Award className="text-brand-orange" />
  },
  {
    title: "Flexible Timings",
    desc: "Morning, afternoon, and evening batches to fit your busy schedule.",
    icon: <Clock className="text-brand-orange" />
  },
  {
    title: "Personal Attention",
    desc: "Small batches to ensure every student gets the help they need.",
    icon: <Heart className="text-brand-orange" />
  }
];

export default function WhyChooseUs() {
  return (
    <div id="benefits" className="bento-card bg-white scroll-mt-20">
      <h4 className="font-bold mb-6 text-sm uppercase text-slate-400 tracking-widest flex items-center gap-2">
        <CheckCircle size={16} className="text-brand-green" /> Why Us?
      </h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reasons.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-brand-green flex-shrink-0">
               <CheckCircle size={18} fill="currentColor" className="fill-brand-green/20" />
            </div>
            <div className="text-sm font-bold text-brand-navy leading-tight">{item.title}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex items-center justify-between p-4 bg-brand-navy rounded-2xl">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-brand-orange" fill="currentColor" />)}
        </div>
        <div className="text-[10px] text-white font-bold uppercase tracking-wider">Top Rated in Naigaon</div>
      </div>
    </div>
  );
}
