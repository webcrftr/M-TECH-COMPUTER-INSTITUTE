import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'courses', 'benefits', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '/#home', id: 'home' },
    { title: 'About', href: '/#about', id: 'about' },
    { title: 'Courses', href: '/#courses', id: 'courses' },
    { title: 'Benefits', href: '/#benefits', id: 'benefits' },
    { title: 'Contact', href: '/#contact', id: 'contact' },
  ];

  const handleNavClick = (e: any, href: string) => {
    const targetId = href.split('#')[1];
    if (location.pathname === '/') {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {
      // If not on home page, navigation will happen naturally to /#hash
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="bg-brand-orange text-white py-2 text-center text-[10px] font-black uppercase tracking-[0.2em] sticky top-0 z-[110] flex items-center justify-center gap-4 px-4 overflow-hidden whitespace-nowrap">
        <span className="animate-pulse">● Admissions Open</span>
        <span className="hidden sm:inline">Classes Running Daily</span>
        <span className="bg-white/20 px-3 py-0.5 rounded-full backdrop-blur-md">Timing: 9:00 AM – 6:00 PM</span>
        <span className="hidden lg:inline animate-pulse">● Limited Seats Available</span>
      </div>

      <nav className={`fixed top-[34px] left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}>
      <div className="container mx-auto px-4">
        <div className={`rounded-[32px] px-8 py-3 flex items-center justify-between transition-all duration-500 border border-slate-100 ${
          scrolled ? 'bg-white/80 backdrop-blur-xl shadow-xl shadow-slate-200/20' : 'bg-white shadow-lg'
        }`}>
          <Link to="/" className="flex flex-col" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-display text-2xl font-black text-brand-navy leading-none">M TECH</span>
            <span className="text-[10px] font-black tracking-[0.2em] text-brand-orange uppercase">Computer Institute</span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[11px] font-black uppercase tracking-widest transition-all ${
                  activeSection === link.id ? 'text-brand-orange scale-110' : 'text-slate-500 hover:text-brand-orange'
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="tel:07755909266" 
              className="hidden sm:flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-[20px] text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1"
            >
              <Phone size={14} />
              Call Now
            </a>
            
            {/* Hamburger Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-brand-navy hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 top-[80px] bg-white z-[90] p-6"
          >
            <div className="container mx-auto flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-4 text-2xl font-black text-brand-navy border-b border-slate-50"
                >
                  {link.title}
                </a>
              ))}
              <div className="mt-8">
                <a 
                  href="tel:07755909266" 
                  className="flex items-center justify-center gap-3 bg-brand-orange text-white px-6 py-5 rounded-[24px] text-lg font-black uppercase tracking-widest shadow-2xl"
                >
                  <Phone size={24} />
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
