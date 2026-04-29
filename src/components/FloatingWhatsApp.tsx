import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ delay: 2, type: 'spring' }}
      href="https://wa.me/917755909266"
      target="_blank"
      referrerPolicy="no-referrer"
      className="fixed bottom-8 right-8 z-[100] bg-brand-green text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <div className="absolute -top-10 right-0 bg-white text-gray-800 text-[10px] font-bold px-3 py-1 rounded-lg border border-gray-200 shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us!
      </div>
      <MessageCircle size={32} />
    </motion.a>
  );
}
