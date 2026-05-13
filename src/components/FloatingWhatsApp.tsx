import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ delay: 2, type: 'spring' }}
      href="https://wa.me/917755909266"
      target="_blank"
      referrerPolicy="no-referrer"
      className="fixed bottom-28 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center group"
    >
      <div className="absolute right-full mr-4 bg-white text-brand-navy px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity border border-slate-100 pointer-events-none">
        Chat with us!
      </div>
      <MessageCircle size={32} />
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 -z-10"></div>
    </motion.a>
  );
}
