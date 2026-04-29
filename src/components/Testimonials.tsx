import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "MS-CIT Student",
    text: "Faculty is very supportive and explains everything clearly. Best place for MS-CIT in Naigaon East.",
    rating: 5
  },
  {
    name: "Priya Patil",
    role: "Tally Student",
    text: "M Tech Computer Institute is actually the best. They give personal attention to every student. I learned Tally here and it helped me get a job.",
    rating: 5
  },
  {
    name: "Amit Gupta",
    role: "Python Student",
    text: "Practical training is excellent. I've been to other classes but the environment here is far more productive and focused.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="bento-card bg-[#FFF9F2] border-[#FFE4C4]">
      <div className="flex gap-1 mb-4 text-yellow-400">
        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
      </div>
      
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 text-brand-orange/20" size={32} />
        <p className="italic text-sm text-slate-700 leading-relaxed pl-6">
          "{testimonials[1].text}"
        </p>
      </div>
      
      <div className="mt-8 flex items-center gap-3">
        <img 
          src="https://picsum.photos/seed/rahul/100/100" 
          alt="Rahul Sharma" 
          className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm"
          referrerPolicy="no-referrer"
        />
        <div>
          <div className="text-xs font-bold text-brand-navy">{testimonials[1].name}</div>
          <div className="text-[10px] text-slate-500">{testimonials[1].role} • 2 months ago</div>
        </div>
      </div>
    </div>
  );
}
