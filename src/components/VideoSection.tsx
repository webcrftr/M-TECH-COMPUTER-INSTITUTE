import { motion } from 'motion/react';
import { Tv, ShieldCheck, Sparkles } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="tour" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-brand-orange px-4 py-2 rounded-2xl mb-4 border border-white/10"
          >
            <Tv size={18} />
            <span className="text-xs font-black uppercase tracking-[0.2em]">Institute Tour</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Experience Our Learning Environment</h2>
          <p className="text-white/60 text-lg font-medium">
            Take a quick look inside M Tech Computer Institute and see why we are the preferred choice for students in Naigaon East.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 bg-black min-h-[420px] md:min-h-[600px] group"
        >
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dk9ux64oy&public_id=IMG_7429_-_Copy_gwbuiw"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            className="w-full h-full min-h-[420px] md:min-h-[600px] border-none block relative z-10"
          ></iframe>
          
          {/* Overlay Features - Positioned above the iframe if possible, though iframes usually take priority. 
              We'll keep them but they might be covered by the iframe depending on browser z-index handling. 
          */}
          <div className="absolute top-8 left-8 flex gap-4 pointer-events-none z-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-orange" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Premium Facility</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl flex items-center gap-2">
              <Sparkles size={16} className="text-brand-orange" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Modern Setup</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-12">
           <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">300+</div>
              <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Students Trained</div>
           </div>
           <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">3+</div>
              <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Years Excellence</div>
           </div>
           <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">100%</div>
              <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Practical Focus</div>
           </div>
        </div>
      </div>
    </section>
  );
}
