import { motion, AnimatePresence } from 'motion/react';
import { Camera, Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const galleryImages = [
  {
    src: "https://iili.io/BbytNzN.md.jpg",
    title: "Reception / Waiting Area",
    caption: "Comfortable Student Waiting Area"
  },
  {
    src: "https://iili.io/BbyQckQ.md.jpg",
    title: "Computer Lab",
    caption: "Advanced Practical Computer Lab"
  },
  {
    src: "https://iili.io/BbyruUB.md.jpg",
    title: "Office / Counseling Cabin",
    caption: "Professional Counseling & Support Desk"
  }
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        {/* ... existing header ... */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-2xl mb-4 border border-brand-primary/20"
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
              onClick={() => setSelectedIdx(idx)}
              className="group relative rounded-[28px] overflow-hidden shadow-xl bg-white border border-slate-100 h-[400px] cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent group-hover:from-brand-navy/90 transition-colors duration-500 z-10"></div>
              <img 
                src={image.src} 
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-[28px] border border-white/20">
                  <h4 className="text-white font-black text-xl mb-1">{image.title}</h4>
                  <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">{image.caption}</p>
                </div>
              </div>

              {/* Zoom Button */}
              <div className="absolute top-6 right-6 z-30 bg-white/20 backdrop-blur-md text-white p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
                <Maximize2 size={20} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIdx !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-brand-navy/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            >
              <button 
                onClick={() => setSelectedIdx(null)}
                className="absolute top-8 right-8 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={32} />
              </button>

              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 md:left-8 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
              >
                <ChevronLeft size={48} />
              </button>

              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 md:right-8 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
              >
                <ChevronRight size={48} />
              </button>

              <div className="max-w-5xl w-full h-full flex flex-col items-center justify-center gap-6" onClick={() => setSelectedIdx(null)}>
                <motion.img 
                  key={selectedIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={galleryImages[selectedIdx].src}
                  alt={galleryImages[selectedIdx].title}
                  className="max-w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="text-center text-white">
                  <h4 className="text-2xl font-black mb-2">{galleryImages[selectedIdx].title}</h4>
                  <p className="text-white/60 font-medium">{galleryImages[selectedIdx].caption}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mini stats overlay / extra features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bento-card flex items-center gap-4 bg-white/50">
             <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary text-brand-primary">
                <ImageIcon size={24} />
             </div>
             <div>
                <div className="font-black text-brand-navy text-sm">Modern Infrastructure</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">High-Tech Labs</div>
             </div>
          </div>
          <div className="bento-card flex items-center gap-4 bg-white/50">
             <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent">
                <ImageIcon size={24} />
             </div>
             <div>
                <div className="font-black text-brand-navy text-sm">Practical Learning</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Hands-on Setup</div>
             </div>
          </div>
          <div className="bento-card flex items-center gap-4 bg-white/50">
             <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
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
