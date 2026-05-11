import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';
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
              <span className="text-[10px] font-black tracking-[0.2em] text-brand-orange uppercase">Computer Institute</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 font-medium">
              Empowering Naigaon with digital excellence for over 3+ years. Join 300+ students who have transformed their careers with us.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-brand-orange hover:text-white transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-black text-xs uppercase tracking-[0.2em] text-brand-navy mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Courses', 'Benefits', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm font-bold text-slate-500 hover:text-brand-orange transition-colors"
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
                    className="text-sm font-bold text-slate-500 hover:text-brand-orange transition-colors"
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
              <div className="flex gap-4">
                <MapPin size={18} className="text-brand-orange flex-shrink-0" />
                <p className="text-sm font-bold text-slate-500 leading-relaxed">
                  Vishnu Apt Phase 2, 306, 3rd Floor, Don Bosco Rd, Naigaon (E)
                </p>
              </div>
              <div className="flex gap-4">
                <Phone size={18} className="text-brand-orange flex-shrink-0" />
                <p className="text-sm font-bold text-slate-500">077559 09266</p>
              </div>
              <div className="flex gap-4">
                <Mail size={18} className="text-brand-orange flex-shrink-0" />
                <p className="text-sm font-bold text-slate-500">info@mtechinstitute.in</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} M Tech Computer Institute. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-orange transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
