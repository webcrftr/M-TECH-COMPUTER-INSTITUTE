import { MousePointer2, UserCheck, Briefcase, Clock, Heart, IndianRupee } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    title: "Practical Training",
    icon: <MousePointer2 className="text-brand-primary" />,
    desc: "Hands-on learning with real-world projects and live assignments."
  },
  {
    title: "Experienced Teachers",
    icon: <UserCheck className="text-brand-accent" />,
    desc: "Professional trainers with years of industry experience to guide you."
  },
  {
    title: "Job-Oriented Courses",
    icon: <Briefcase className="text-emerald-500" />,
    desc: "Curriculum designed strictly according to current market demands."
  },
  {
    title: "Flexible Timings",
    icon: <Clock className="text-indigo-500" />,
    desc: "Batches from 9:00 AM to 6:00 PM to suit your busy schedule."
  },
  {
    title: "Friendly Environment",
    icon: <Heart className="text-rose-500" />,
    desc: "Supportive learning atmosphere where students can grow comfortably."
  },
  {
    title: "Affordable Fees",
    icon: <IndianRupee className="text-brand-primary" />,
    desc: "Quality education at a price that fits your budget perfectly."
  }
];

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bento-card bg-white p-8 group border border-slate-50"
          >
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
              {reason.icon}
            </div>
            <h4 className="font-black text-xl text-brand-navy mb-3">{reason.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
