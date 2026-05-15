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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center h-full relative z-10 p-4 lg:p-10">
          {/* Left Content */}
          <div className="text-center lg:text-left flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-2xl mb-8 border border-brand-primary/20 self-center lg:self-start"
            >
              <Award size={18} />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Empowering Minds Since 3+ Years</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 tracking-tighter">
              Master Digital Skills & <br />
              <span className="text-brand-primary drop-shadow-sm">Build Your Career</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              M Tech Computer Institute is more than just a training center; it's a launchpad for your digital career. Located in the heart of Naigaon East, we provide a modern learning environment with personalized attention to every student.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <a 
                href="https://wa.me/917755909266?text=Hello%20M%20Tech%20Computer%20Institute%2C%20I%20want%20to%20book%20a%20free%20demo%20session."
                target="_blank"
                rel="noreferrer"
                className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_20px_40px_-5px_rgba(37,99,235,0.5)] hover:-translate-y-1.5 transition-all duration-300 flex items-center gap-3"
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
                <Clock size={20} className="text-brand-primary" />
                <span className="text-xs font-bold uppercase tracking-wider">9 AM – 6 PM</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={20} className="text-brand-green" />
                <span className="text-xs font-bold uppercase tracking-wider">Practical Training</span>
              </div>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative h-[420px] lg:h-[600px] w-full">
             {/* Animated Glow Globes */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-navy/40 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-full w-full rounded-[32px] border border-white/10 shadow-2xl overflow-hidden group"
            >
              {/* Premium Institute Image */}
              <img 
                src="https://iili.io/BbyruUB.md.jpg" 
                alt="M Tech Computer Institute Cabin" 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />

              {/* Floating UI Badges */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute top-8 left-6 bg-white/10 backdrop-blur-xl p-3 rounded-2xl border border-white/20 shadow-2xl z-30 flex items-center gap-3"
              >
                <div className="bg-brand-green/20 p-2 rounded-xl">
                  <Users className="text-brand-green" size={18} />
                </div>
                <div>
                  <div className="text-white font-black text-sm">300+</div>
                  <div className="text-white/50 text-[9px] font-bold uppercase tracking-wider">Students</div>
                </div>
              </motion.div>

              {/* Glassmorphism Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 z-30">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 lg:p-6 text-white shadow-2xl"
                >
                  <h3 className="text-lg lg:text-xl font-black mb-1">Expert Career Guidance</h3>
                  <p className="text-sm text-white/70 font-medium leading-relaxed">
                    Free counseling sessions available daily from <span className="text-brand-primary font-black">9 AM to 6 PM</span>.
                  </p>
                </motion.div>
              </div>

              {/* Floating Award Badge */}
              <motion.div 
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-6 right-6 h-20 w-20 bg-brand-primary rounded-full flex items-center justify-center p-3 shadow-[0_0_50px_rgba(37,99,235,0.4)] z-40 border-4 border-brand-navy"
              >
                <div className="text-center">
                  <Award size={24} className="text-white mx-auto mb-0.5" />
                  <div className="text-[8px] font-black text-white leading-none uppercase">Certified</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
