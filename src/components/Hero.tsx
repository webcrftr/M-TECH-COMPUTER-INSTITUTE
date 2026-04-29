import { Star, ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="h-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bento-card accent-navy h-full relative"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="text-xs font-bold uppercase tracking-wider opacity-80">M Tech Computer Institute</div>
          <div className="rating-badge">⭐ 4.9 (66+ Reviews)</div>
        </div>
        
        <div className="max-w-2xl mt-4">
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-6">
            Master Digital Skills & <span className="text-brand-orange">Build Your Career</span>
          </h1>
          <p className="opacity-90 text-lg mb-8 leading-relaxed">
            Top-rated computer training center in Naigaon East. Join 1000+ successful students today and transform your future.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-auto relative z-10">
            <Link 
              to="/contact" 
              className="bg-brand-orange text-white px-8 py-3 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Book Free Demo
            </Link>
            <Link 
              to="/courses" 
              className="bg-white/10 border border-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center"
            >
              View Courses
            </Link>
          </div>
        </div>
        
        {/* Background Decorative Students */}
        <div className="absolute top-0 right-0 w-1/3 h-full hidden xl:block opacity-20 pointer-events-none">
          <img 
            src="https://picsum.photos/seed/tech/400/800" 
            alt="background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </section>
  );
}
