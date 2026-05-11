import { motion } from 'motion/react';
import { Camera, Image as ImageIcon, Maximize2 } from 'lucide-react';

const galleryImages = [
  {
    src: "/reception.jpg",
    title: "Reception / Waiting Area",
    caption: "Comfortable Student Waiting Area"
  },
  {
    src: "/lab.jpg",
    title: "Computer Lab",
    caption: "Advanced Practical Computer Lab"
  },
  {
    src: "/office.jpg",
    title: "Office / Counseling Cabin",
    caption: "Professional Counseling & Support Desk"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-2xl mb-4 border border-brand-orange/20"
          >
            <Camera size={18} />
            <span className="text-xs font-black uppercase tracking-[0.2em]">Our Infrastructure</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-6">Inside M Tech Computer Institute</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Explore our professional learning environment, computer labs, and student-friendly classrooms in Naigaon East.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[40px] overflow-hidden shadow-xl bg-white border border-slate-100 h-[400px]"
            >
              <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/40 transition-colors duration-500 z-10"></div>
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="glass-morphism p-6 rounded-3xl border-white/30">
                  <h4 className="text-white font-black text-xl mb-1">{image.title}</h4>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-wider">{image.caption}</p>
                </div>
              </div>

              {/* Zoom Button */}
              <button className="absolute top-6 right-6 z-30 bg-white/20 backdrop-blur-md text-white p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
                <Maximize2 size={20} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Mini stats overlay / extra features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bento-card flex items-center gap-4 bg-white/50">
             <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange">
                <ImageIcon size={24} />
             </div>
             <div>
                <div className="font-black text-brand-navy text-sm">Modern Infrastructure</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">High-Tech Labs</div>
             </div>
          </div>
          <div className="bento-card flex items-center gap-4 bg-white/50">
             <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                <ImageIcon size={24} />
             </div>
             <div>
                <div className="font-black text-brand-navy text-sm">Practical Learning</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Hands-on Setup</div>
             </div>
          </div>
          <div className="bento-card flex items-center gap-4 bg-white/50">
             <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green">
                <ImageIcon size={24} />
             </div>
             <div>
                <div className="font-black text-brand-navy text-sm">Comfortable Environment</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Student Friendly</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
