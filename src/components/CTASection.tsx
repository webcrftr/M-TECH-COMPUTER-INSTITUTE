import { Phone, MessageCircle, MapPin, Navigation, Clock, Star } from 'lucide-react';

export default function CTASection() {
  const mapUrl = "https://www.google.com/maps/place/M+TECH+COMPUTER+INSTITUTE/@19.3589303,72.8570808,42m/data=!3m1!1e3!4m6!3m5!1s0x3be7af5e681d0a3d:0xf2e7501d3d456871!8m2!3d19.3589501!4d72.8571951!16s%2Fg%2F11vpnmsd9w";
  
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
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-xs text-white/80 hover:text-brand-orange transition-colors group/loc">
              <MapPin size={14} className="text-brand-orange flex-shrink-0 mt-0.5 group-hover/loc:scale-110 transition-transform" />
              <span className="group-hover/loc:underline decoration-brand-orange/30">Don Bosco Rd, Opposite Ishan Hospital, Naigaon East, Vasai-Virar, Maharashtra 401208, India</span>
            </a>
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
        
        {/* Map Embed Section - Clickable */}
        <div className="mb-6 flex-grow rounded-[32px] overflow-hidden shadow-xl border border-white/10 group-hover:border-brand-orange/30 transition-colors bg-slate-900/40 relative group/map cursor-pointer">
          <a 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 block"
          >
            <span className="sr-only">Open M Tech Computer Institute on Google Maps</span>
          </a>
          <iframe 
            src="https://www.google.com/maps?q=M+TECH+COMPUTER+INSTITUTE+Naigaon&output=embed" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-80 group-hover/map:opacity-100 transition-opacity grayscale group-hover/map:grayscale-0 pointer-events-none" 
          ></iframe>
          <div className="absolute top-2 right-2 flex gap-1 z-20">
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
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-black text-xs hover:bg-[#1ebd5e] transition-all hover:scale-[1.02] shadow-lg"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
          <a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
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
