import { Star, CheckCircle, GraduationCap, Award, Users, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative h-full">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bento-card accent-navy h-full relative overflow-hidden group border-none"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center h-full relative z-10 p-4 lg:p-10">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-2xl mb-8 border border-brand-orange/20"
            >
              <Award size={18} />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Certified Training Center</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 tracking-tighter">
              Master Digital Skills & <br />
              <span className="text-brand-orange drop-shadow-sm">Build Your Career</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              Professional computer training institute in Naigaon East with industry-oriented courses and practical, hands-on learning.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <a 
                href="https://wa.me/917755909266?text=Hello%20M%20Tech%20Computer%20Institute%2C%20I%20want%20to%20book%20a%20free%20demo%20session."
                target="_blank"
                rel="noreferrer"
                className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_15px_30px_-5px_rgba(249,115,22,0.4)] hover:shadow-[0_20px_40px_-5px_rgba(249,115,22,0.5)] hover:-translate-y-1.5 transition-all duration-300 flex items-center gap-3"
              >
                Book Free Demo
              </a>
              <button 
                onClick={() => {
                  const el = document.getElementById('courses');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300"
              >
                View Courses
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={20} className="text-brand-green" />
                <span className="text-xs font-bold uppercase tracking-wider">300+ Students</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Clock size={20} className="text-brand-orange" />
                <span className="text-xs font-bold uppercase tracking-wider">9 AM – 6 PM</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={20} className="text-brand-green" />
                <span className="text-xs font-bold uppercase tracking-wider">Practical Training</span>
              </div>
            </div>
          </div>

          {/* Right Image/Graphic */}
          <div className="flex-1 relative w-full lg:w-auto h-full min-h-[400px] flex items-center justify-center">
            {/* Main Illustration/Image Frame */}
            <div className="relative w-full aspect-square max-w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent rounded-[60px] blur-2xl"></div>
              <div className="relative h-full w-full bg-slate-800 rounded-[60px] border border-white/10 shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src="/lab.jpg" 
                  alt="M Tech Computer Lab" 
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Floating Card */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-1 border border-white/20"
                >
                  <div className="flex items-center gap-1 text-brand-navy mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} fill="#F97316" className="text-brand-orange" />
                    ))}
                  </div>
                  <div className="text-2xl font-black text-white">4.9</div>
                  <div className="text-[9px] font-black text-white/50 uppercase tracking-widest leading-none">Google Rating</div>
                </motion.div>

                {/* Floating Tech Badges */}
                <div className="absolute top-8 left-8 flex gap-3">
                   <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                      <GraduationCap className="text-brand-orange" size={24} />
                   </div>
                   <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                      <Users className="text-brand-orange" size={24} />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
