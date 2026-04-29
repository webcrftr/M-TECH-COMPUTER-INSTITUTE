import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Courses', path: '/courses' },
    { title: 'Benefits', path: '/benefits' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="font-display text-2xl font-black text-brand-navy leading-none">M TECH</span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-orange uppercase">Computer Institute</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/50">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `px-5 py-2 text-xs font-black uppercase tracking-widest transition-all rounded-lg ${
                  isActive 
                    ? 'bg-white text-brand-orange shadow-sm' 
                    : 'text-slate-400 hover:text-brand-navy hover:bg-white/50'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="tel:07755909266" 
            className="hidden sm:flex items-center gap-2 bg-brand-navy text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-blue transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `px-4 py-4 text-sm font-black uppercase tracking-widest rounded-xl transition-all ${
                      isActive 
                        ? 'bg-slate-50 text-brand-orange' 
                        : 'text-slate-500 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <a 
                  href="tel:07755909266" 
                  className="flex items-center justify-center gap-2 bg-brand-navy text-white px-6 py-4 rounded-xl text-sm font-black uppercase tracking-widest"
                >
                  <Phone size={16} />
                  Call Now: 077559 09266
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
