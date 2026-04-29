import Hero from '../components/Hero';
import Courses from '../components/Courses';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8 lg:space-y-12 mb-12">
      {/* Hero & Quick Stats Row */}
      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Hero />
        </div>
        
        <div className="col-span-12 lg:col-span-4 bento-card justify-center items-center text-center space-y-6 bg-white">
          <div>
            <div className="text-5xl font-extrabold text-brand-navy mb-1 tracking-tight">4.9⭐</div>
            <div className="rating-badge">Google Rating</div>
          </div>
          <div className="w-full border-t border-slate-100 my-4 lg:hidden"></div>
          <div>
            <div className="text-4xl font-extrabold text-brand-navy mb-1 tracking-tight">1000+</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed">Students Successfully<br/>Trained in Naigaon</div>
          </div>
          <div className="w-full border-t border-slate-100 my-4 lg:hidden"></div>
          <div>
            <div className="text-4xl font-extrabold text-brand-navy mb-1 tracking-tight">10+</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed">Years of Educational<br/>Excellence</div>
          </div>
          <div className="p-4 bg-brand-orange/5 border border-brand-orange/20 rounded-xl text-sm text-brand-orange font-bold animate-pulse">
             ⚡ New Batch Admissions Open!
          </div>
        </div>
      </div>

      {/* Courses Highlights Row */}
      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="flex justify-between items-center mb-2 px-2">
            <h2 className="text-xl font-bold text-brand-navy">Featured Courses</h2>
            <Link to="/courses" className="text-sm font-bold text-brand-orange flex items-center gap-1 hover:underline">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <Courses />
        </div>
        
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 lg:gap-6">
          <div className="flex justify-between items-center mb-2 px-2">
            <h2 className="text-xl font-bold text-brand-navy">Why Choose M Tech?</h2>
            <Link to="/benefits" className="text-sm font-bold text-brand-orange flex items-center gap-1 hover:underline">
              Learn More <ArrowRight size={14} />
            </Link>
          </div>
          <WhyChooseUs />
          <Testimonials />
        </div>
      </div>

      {/* CTA Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bento-card accent-navy p-10 flex flex-col items-center text-center justify-center space-y-6"
        >
          <h2 className="text-3xl font-bold">Ready to Start?</h2>
          <p className="opacity-80 max-w-md">Join Naigaon's most trusted computer institute. Book your seat for the next batch today!</p>
          <Link to="/contact" className="bg-brand-orange text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all">
            Get Free Consultation
          </Link>
        </motion.div>

        <div className="bento-card bg-white p-10 flex flex-col items-center text-center justify-center space-y-6 border-brand-orange/20 border-2">
           <h2 className="text-3xl font-bold text-brand-navy">Visit Our Center</h2>
           <div className="text-slate-500 text-sm italic">"Don Bosco Rd, opp. Ishan Hospital, Naigaon East"</div>
           <p className="text-brand-navy font-medium">Talk to our experts and see our high-tech labs in person.</p>
           <a href="tel:07755909266" className="text-brand-orange font-black text-2xl">077559 09266</a>
        </div>
      </div>
    </div>
  );
}
