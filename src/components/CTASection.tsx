import { Phone, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="bento-card accent-navy h-full">
      <div className="text-xs font-bold mb-2 uppercase opacity-60">Location & Contact</div>
      <p className="text-xs leading-relaxed opacity-80 mb-6">
        Don Bosco Rd, opp. Ishan Hospital,<br />
        Naigaon East, Vasai-Virar, 401208
      </p>
      
      <div className="space-y-3 mt-auto">
        <a 
          href="tel:07755909266"
          className="flex items-center justify-center gap-2 bg-brand-green text-white py-3 rounded-xl font-bold text-xs"
        >
          <Phone size={14} />
          Call Now
        </a>
        <a 
          href="https://wa.me/917755909266"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-xs"
        >
          <MessageCircle size={14} />
          WhatsApp
        </a>
      </div>
      
      {/* Mini Map Preview */}
      <div className="mt-6 flex-grow bg-slate-800/30 border border-white/10 rounded-xl overflow-hidden relative min-h-[120px]">
        <div className="absolute inset-0 flex items-center justify-center text-[10px] text-white/40 text-center px-4">
          Center is located 5 mins from<br />Naigaon Railway Station
        </div>
      </div>
    </div>
  );
}
