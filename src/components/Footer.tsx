import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bento-card">
            <div className="flex flex-col mb-4">
              <span className="font-display text-xl font-bold text-brand-navy leading-none">M TECH</span>
              <span className="text-[10px] font-semibold tracking-widest text-brand-orange uppercase">Computer Institute</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Empowering Naigaon with digital excellence for over a decade.
            </p>
            <div className="flex gap-2">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="bento-card bg-brand-navy text-white">
            <h3 className="font-bold text-xs uppercase tracking-widest opacity-60 mb-6">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-wider">
              <li><a href="#" className="hover:text-brand-orange">Home</a></li>
              <li><a href="#courses" className="hover:text-brand-orange">Courses</a></li>
              <li><a href="#about" className="hover:text-brand-orange">Benefits</a></li>
              <li><a href="#contact" className="hover:text-brand-orange">Reviews</a></li>
            </ul>
          </div>
          
          <div className="bento-card">
            <h3 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6">Find Us</h3>
            <div className="rounded-xl overflow-hidden h-32 border border-slate-100 grayscale hover:grayscale-0 transition-all">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15053.816698656157!2d72.84687535!3d19.34994275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a5a8726be62f%3A0x6b2b7324869485b!2sM%20Tech%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1713721873041!5m2!1sen!2sin" 
                className="w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-slate-200">
           <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-6">
            <span>Best computer classes in Vasai-Virar</span>
            <span>Computer institute in Naigaon East</span>
            <span>MS-CIT certified center</span>
          </div>
          <p className="text-slate-400 text-[10px] font-medium">
            © {new Date().getFullYear()} M Tech Computer Institute. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
