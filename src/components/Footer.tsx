import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col mb-6" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="font-display text-2xl font-black text-brand-navy leading-none">M TECH</span>
              <span className="text-[10px] font-black tracking-[0.2em] text-brand-primary uppercase">Computer Institute</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 font-medium">
              Empowering Naigaon with digital excellence for over 3+ years. Join 300+ students who have transformed their careers with us.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/mhatre_tech" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-black text-xs uppercase tracking-[0.2em] text-brand-navy mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Courses', 'Benefits', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm font-bold text-slate-500 hover:text-brand-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black text-xs uppercase tracking-[0.2em] text-brand-navy mb-8">Our Courses</h3>
            <ul className="space-y-4">
              {['MSCIT', 'MS Office', 'Advanced Excel', 'Tally + GST', 'Graphic Design'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection('courses')}
                    className="text-sm font-bold text-slate-500 hover:text-brand-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-black text-xs uppercase tracking-[0.2em] text-brand-navy mb-8">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="https://www.google.com/maps/place/M+TECH+COMPUTER+INSTITUTE/@19.3589303,72.8570808,42m/data=!3m1!1e3!4m6!3m5!1s0x3be7af5e681d0a3d:0xf2e7501d3d456871!8m2!3d19.3589501!4d72.8571951!16s%2Fg%2F11vpnmsd9w"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 group/footer-map"
              >
                <MapPin size={18} className="text-brand-primary flex-shrink-0 group-hover/footer-map:scale-110 transition-transform" />
                <p className="text-sm font-bold text-slate-500 leading-relaxed group-hover/footer-map:text-brand-primary transition-colors">
                  Don Bosco Rd, Opposite Ishan Hospital, Naigaon East, Vasai-Virar, Maharashtra 401208, India
                </p>
              </a>
              <div className="flex gap-4">
                <Phone size={18} className="text-brand-primary flex-shrink-0" />
                <p className="text-sm font-bold text-slate-500">077559 09266</p>
              </div>
              <div className="flex gap-4">
                <Mail size={18} className="text-brand-primary flex-shrink-0" />
                <a href="mailto:mhatretech0@gmail.com" className="text-sm font-bold text-slate-500 hover:text-brand-primary transition-colors">mhatretech0@gmail.com</a>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                 <div className="text-[10px] font-black text-brand-navy uppercase tracking-widest mb-2">Class Timing</div>
                 <div className="text-sm font-bold text-slate-500 flex items-center gap-2">
                    <Clock size={14} className="text-brand-primary" />
                    9:00 AM – 6:00 PM
                 </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
            © 2026 M Tech Computer Institute • All Rights Reserved
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
