import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingCall() {
  return (
    <motion.a 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ delay: 2.2, type: 'spring' }}
      href="tel:+917755909266"
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 rounded-full bg-[#f4c542] flex items-center justify-center shadow-2xl hover:bg-[#e0b432] transition-colors group"
      aria-label="Call us"
    >
      <div className="absolute right-full mr-4 bg-white text-brand-navy px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity border border-slate-100 pointer-events-none">
        Call us now
      </div>
      <Phone className="w-7 h-7 text-[#0b1633]" />
    </motion.a>
  );
}
