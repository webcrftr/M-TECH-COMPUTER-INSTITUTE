import { Phone, MessageCircle, MapPin, Navigation, Clock, Star } from 'lucide-react';

export default function CTASection() {
  const mapUrl = "https://www.google.com/maps/dir/?api=1&destination=M+TECH+COMPUTER+INSTITUTE+Naigaon+East";
  
  return (
    <div className="bento-card accent-navy h-full relative overflow-hidden group">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-display text-2xl font-black text-white leading-tight">M TECH COMPUTER INSTITUTE</h3>
              <div className="text-brand-orange font-bold text-sm">एम टेक कंप्यूटर इंस्टीट्यूट</div>
            </div>
            <div className="bg-brand-orange text-white px-2 py-1 rounded-md text-[10px] font-black flex items-center gap-1 shadow-lg">
              <Star size={10} fill="currentColor" /> 4.9 (66 Reviews)
            </div>
          </div>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-start gap-3 text-xs text-white/80">
              <MapPin size={14} className="text-brand-orange flex-shrink-0 mt-0.5" />
              <span>Don Bosco Rd, opp. Ishan Hospital, Naigaon East, Vasai-Virar, Maharashtra 401208</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-white/80 font-bold">
              <Clock size={14} className="text-brand-orange flex-shrink-0" />
              <span>Open 24 hours</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-white/50 italic">
              <MapPin size={12} className="flex-shrink-0" />
              <span>Location Code: 9V54+HV Vasai-Virar</span>
            </div>
          </div>
        </div>
        
        {/* Map Embed Section */}
        <div className="mb-6 flex-grow rounded-2xl overflow-hidden border border-white/10 shadow-inner group-hover:border-brand-orange/30 transition-colors bg-slate-900/40 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15053.816698656157!2d72.84687535!3d19.34994275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a5a8726be62f%3A0x6b2b7324869485b!2sM%20Tech%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1713721873041!5m2!1sen!2sin" 
            className="w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute top-2 right-2 flex gap-1">
             <div className="bg-brand-navy/80 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 text-[8px] font-bold text-white uppercase tracking-tighter">Naigaon East</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="grid grid-cols-2 gap-3">
            <a 
              href="tel:07755909266"
              className="flex items-center justify-center gap-2 bg-brand-green text-white py-3 rounded-xl font-black text-xs hover:bg-brand-green/90 transition-all hover:scale-[1.02] shadow-lg"
            >
              <Phone size={14} />
              Call
            </a>
            <a 
              href="https://wa.me/917755909266"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-black text-xs hover:bg-[#1ebd5e] transition-all hover:scale-[1.02] shadow-lg"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
          <a 
            href={mapUrl}
            target="_blank"
            className="flex items-center justify-center gap-2 bg-white text-brand-navy py-3 rounded-xl font-black text-xs hover:bg-slate-100 transition-all hover:scale-[1.02] shadow-lg"
          >
            <Navigation size={14} className="text-brand-orange" />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}
