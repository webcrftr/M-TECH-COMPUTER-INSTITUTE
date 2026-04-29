import { Phone, MessageCircle, MapPin, Clock, Send, Star, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const mapUrl = "https://www.google.com/maps/dir/?api=1&destination=M+TECH+COMPUTER+INSTITUTE+Naigaon+East";

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
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-brand-orange flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Our Location</div>
                    <p className="text-brand-navy font-bold text-sm leading-relaxed">
                      Don Bosco Rd, opp. Ishan Hospital, Naigaon East, Vasai-Virar, MH 401208
                    </p>
                  </div>
                </div>

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
              <div className="h-64 lg:h-72 w-full mt-auto relative group overflow-hidden border-t border-slate-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15053.816698656157!2d72.84687535!3d19.34994275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a5a8726be62f%3A0x6b2b7324869485b!2sM%20Tech%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1713721873041!5m2!1sen!2sin" 
                  className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" 
                  allowFullScreen={true} 
                  loading="lazy" 
                ></iframe>
                <div className="absolute top-4 right-4 group-hover:scale-110 transition-transform">
                  <a 
                    href={mapUrl}
                    target="_blank"
                    className="flex items-center gap-2 bg-white text-brand-navy px-4 py-2 rounded-lg font-bold text-xs shadow-xl border border-slate-100"
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
