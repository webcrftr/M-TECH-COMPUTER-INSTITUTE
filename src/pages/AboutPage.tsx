import { Target, Eye, Milestone, Users2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header section with split design */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-block bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-lg text-sm font-black uppercase tracking-widest">
              Est. 2014
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-brand-navy leading-tight">
              A Legacy of <span className="text-brand-orange underline decoration-slate-200 underline-offset-8">Digital Growth</span> in Naigaon
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              M Tech Computer Institute was founded with a single mission: to bridge the digital divide in Naigaon East. We believe that professional computer education shouldn't be a luxury, but a gateway to a successful career.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
              <div>
                <div className="text-4xl font-black text-brand-navy">10+</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-black text-brand-navy">1k+</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Alumni Network</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-slate-100 rounded-[60px] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl relative border-8 border-white">
              <img 
                src="https://picsum.photos/seed/institute/800/800" 
                alt="Institute Inner View" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-navy/20"></div>
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -left-6 bento-card accent-orange p-6 max-w-[200px] shadow-2xl">
              <div className="text-2xl font-black mb-1">#1</div>
              <div className="text-[10px] font-bold uppercase tracking-widest">Ranked Tech Center in Naigaon East</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision Bento Cards */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bento-card bg-white p-12 space-y-6">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-black text-brand-navy">Our Mission</h2>
              <p className="text-slate-500 leading-relaxed italic">
                "To empower students in Vasai-Virar with job-ready digital skills, fostering an environment where practical learning leads to professional success and personal growth."
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Affordable high-quality education",
                  "100% Practical curriculum",
                  "Community-driven mentorship"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-brand-navy">
                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bento-card accent-navy p-12 space-y-6">
              <div className="w-16 h-16 bg-white/10 text-brand-orange rounded-2xl flex items-center justify-center shadow-inner border border-white/20">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-black text-white">Our Vision</h2>
              <p className="opacity-70 leading-relaxed italic">
                "To be the leading hub of technological excellence in Maharashtra, recognized for creating the next generation of digital leaders and high-skilled technology professionals."
              </p>
              <div className="pt-10 grid grid-cols-2 gap-4">
                 <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <Milestone className="mx-auto mb-2 text-brand-orange" size={24} />
                    <div className="text-[10px] uppercase font-bold tracking-widest">Quality Standards</div>
                 </div>
                 <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <Users2 className="mx-auto mb-2 text-brand-orange" size={24} />
                    <div className="text-[10px] uppercase font-bold tracking-widest">Student Growth</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team/Founder Message */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto bento-card border-none bg-white p-12 text-center md:text-left md:flex items-center gap-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
             <div className="w-48 h-48 mx-auto bg-slate-200 rounded-full border-4 border-brand-orange overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/founder/400/400" 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>
          <div className="md:w-2/3 space-y-6">
             <div className="text-brand-orange font-black text-xs uppercase tracking-[0.3em] font-display">Founder's Message</div>
             <p className="text-xl font-bold text-brand-navy leading-relaxed italic">
               "We don't just teach courses; we build careers. Seeing our students get placed in top companies is our biggest achievement."
             </p>
             <div>
                <div className="text-2xl font-black text-brand-navy">Mr. Deepak Maurya</div>
                <div className="text-sm font-bold text-slate-400">Founder & Director, M Tech</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
