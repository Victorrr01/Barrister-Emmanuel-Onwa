
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Shield, MessageCircle, Calendar } from 'lucide-react';
import { CONTACT_INFO, FIRM_NAME } from '../data/legalData';

export const Navbar: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About/History', id: 'history' },
    { label: 'Firm Values', id: 'values' },
    { label: 'Practice Areas', id: 'practice-areas' },
    { label: 'CSR', id: 'csr' },
    { label: 'Our Team', id: 'team' },
    { label: 'Contact Us', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full text-white border-b transition-all duration-300 ${scrolled ? 'bg-slate-950 border-amber-500/30 shadow-md shadow-black/50' : 'bg-slate-900 border-slate-800 shadow-md'}`}>
      <div className={`bg-slate-950 text-slate-300 text-xs transition-all duration-300 hidden xl:block border-b border-slate-800/60 ${scrolled ? 'max-h-0 py-0 opacity-0 overflow-hidden border-none' : 'max-h-12 py-2 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4 lg:space-x-6">
            <a href={`tel:${CONTACT_INFO.phone1}`} className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors shrink-0">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-semibold text-white">{CONTACT_INFO.phone1}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.email1}`} className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors shrink-0">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{CONTACT_INFO.email1}</span>
            </a>
            <div className="flex items-center space-x-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3 text-left focus:outline-none group">
            <div className={`rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-900/20 group-hover:scale-105 transition-all ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
              <div className="w-full h-full bg-slate-900 rounded-[7px] flex items-center justify-center">
                <Shield className={`text-amber-400 transition-all ${scrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
              </div>
            </div>
            <div>
              <span className={`block font-serif font-bold tracking-tight text-white group-hover:text-amber-200 transition-all ${scrolled ? 'text-sm sm:text-base md:text-lg' : 'text-base sm:text-lg md:text-xl'}`}>
                {CONTACT_INFO.firmName}
              </span>
            </div>
          </button>

          <div className="hidden xl:flex items-center space-x-4">
            <nav className="flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
            <button onClick={onOpenBooking} className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95">
              <Calendar className="w-4 h-4" />
              <span>Book a Meeting</span>
            </button>
          </div>
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
