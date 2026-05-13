import { Phone, MessageCircle, MapPin, Clock, Send, Star, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const mapUrl = "https://www.google.com/maps/place/M+TECH+COMPUTER+INSTITUTE/@19.3589303,72.8570808,42m/data=!3m1!1e3!4m6!3m5!1s0x3be7af5e681d0a3d:0xf2e7501d3d456871!8m2!3d19.3589501!4d72.8571951!16s%2Fg%2F11vpnmsd9w";

  return (
    <div className="bg-white min-h-screen">
      {/* Visual Header */}
      <div className="bg-brand-navy pt-24 pb-48 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-brand-orange/20"
             >
               <Star size={14} fill="currentColor" /> 4.9 Rated Center
             </motion.div>
             <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
               Start Your <span className="text-brand-orange">Career</span> <br/>Conversion Today
             </h1>
             <p className="text-xl opacity-70 leading-relaxed font-medium">
               Visit our Naigaon center for a free counseling session or get in touch with our experts online.
             </p>
          </div>
        </div>
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 blur-[120px]"></div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 -mt-32 relative z-20 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bento-card bg-white p-10 flex flex-col items-start h-full">
              <h2 className="text-2xl font-black text-brand-navy mb-8">Contact Information</h2>
              
              <div className="space-y-10 w-full mb-12">
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex gap-5 group/map cursor-pointer">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-brand-orange flex-shrink-0 group-hover/map:bg-brand-orange group-hover/map:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover/map:text-brand-orange transition-colors">Our Location</div>
                    <p className="text-brand-navy font-bold text-sm leading-relaxed decoration-brand-orange/30 underline-offset-4 group-hover/map:underline">
                      Don Bosco Rd, Opposite Ishan Hospital, Naigaon East, Vasai-Virar, Maharashtra 401208, India
                    </p>
                  </div>
                </a>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-brand-orange flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Opening Hours</div>
                    <p className="text-brand-navy font-bold text-sm">
                      Open 24 Hours (All days)
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-tighter">Preferred Visit: 8 AM - 8 PM</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-brand-orange flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call for Enquiry</div>
                    <a href="tel:07755909266" className="text-brand-navy font-black text-xl hover:text-brand-orange transition-colors">
                      077559 09266
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                 <a 
                   href="tel:07755909266"
                   className="flex items-center justify-center gap-2 bg-brand-navy text-white py-4 rounded-xl font-bold text-sm hover:bg-brand-blue transition-all"
                 >
                   <Phone size={18} /> Call Now
                 </a>
                 <a 
                   href="https://wa.me/917755909266"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform"
                 >
                   <MessageCircle size={18} /> WhatsApp
                 </a>
              </div>
            </div>

            {/* Floating Review Widget */}
            <div className="bento-card accent-navy p-8 flex items-center gap-6">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-navy bg-slate-700 overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                    </div>
                 ))}
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Success Stories</div>
                <div className="font-bold text-sm">Join 1k+ Happy Students</div>
              </div>
            </div>
          </div>

          {/* Right Side: Form & Map */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bento-card bg-white p-0 overflow-hidden shadow-2xl flex flex-col h-full border-none">
              <div className="p-10">
                 <ContactForm />
              </div>
              
              {/* Map at the bottom of the right card style */}
              <div className="h-72 lg:h-[400px] w-full mt-auto relative group overflow-hidden border-t border-slate-100 rounded-[32px] m-4 shadow-xl">
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
                  className="grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100 pointer-events-none" 
                ></iframe>
                <div className="absolute top-4 right-4 group-hover:scale-105 transition-transform z-20">
                  <a 
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-brand-navy px-4 py-2 rounded-xl font-black text-xs shadow-2xl border border-slate-100"
                  >
                    <Navigation size={14} className="text-brand-orange" />
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
