import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-slate-200/50 py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-display text-xl font-bold text-brand-navy leading-none">M TECH</span>
          <span className="text-[10px] font-semibold tracking-widest text-[#FF8C00] uppercase">Computer Institute</span>
        </div>
        
        <div className="hidden md:flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200/50">
          <a href="#courses" className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-brand-navy hover:bg-white rounded-lg transition-all">Courses</a>
          <a href="#about" className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-brand-navy hover:bg-white rounded-lg transition-all">Benefits</a>
          <a href="#contact" className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-brand-navy hover:bg-white rounded-lg transition-all">Contact</a>
        </div>

        <div className="flex items-center gap-2">
          <a 
            href="tel:07755909266" 
            className="flex items-center gap-2 bg-brand-navy text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand-blue transition-all shadow-sm"
          >
            <Phone size={12} />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
