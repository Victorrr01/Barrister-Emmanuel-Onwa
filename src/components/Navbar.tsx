import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { ATTORNEY_INFO } from '../data/legalData';
import { Phone, Mail, MapPin, Calendar, Menu, X, Shield, ChevronRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },

    { label: 'Services', page: 'services' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full text-white border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950 border-amber-500/30 shadow-md shadow-black/50' 
        : 'bg-slate-900 border-slate-800 shadow-md'
    }`}>
      {/* Top Utility Bar - Smoothly collapses on scroll */}
      <div className={`bg-slate-950 text-slate-300 text-xs transition-all duration-300 hidden md:block border-b border-slate-800/60 ${
        scrolled ? 'max-h-0 py-0 opacity-0 overflow-hidden border-none' : 'max-h-12 py-2 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4 lg:space-x-6">
            <a href={`tel:${ATTORNEY_INFO.phone}`} className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors shrink-0">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-semibold text-white">{ATTORNEY_INFO.phone}</span>
            </a>
            <a 
              href={`https://wa.me/2348064710262?text=${encodeURIComponent('Hello Redemption Chambers, I would like to inquire about your legal services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a href={`mailto:${ATTORNEY_INFO.email}`} className="hidden xl:flex items-center space-x-1.5 hover:text-amber-400 transition-colors shrink-0">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{ATTORNEY_INFO.email}</span>
            </a>
            <div className="hidden lg:flex items-center space-x-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Ilorin, Kwara State • Nationwide Representation (All 36 States & FCT)</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-slate-400 shrink-0">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Supreme Court Advocate
            </span>
            <span className="hidden xl:inline text-[11px] text-slate-400">Mon - Fri: 8:00 AM - 5:30 PM WAT</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Brand Logo */}
          <button 
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            className="flex items-center space-x-3 text-left focus:outline-none group"
            id="nav-logo-btn"
          >
            <div className={`rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-900/20 group-hover:scale-105 transition-all ${
              scrolled ? 'w-8 h-8' : 'w-10 h-10'
            }`}>
              <div className="w-full h-full bg-slate-900 rounded-[7px] flex items-center justify-center">
                <Shield className={`text-amber-400 transition-all ${scrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
              </div>
            </div>
            <div>
              <span className={`block font-serif font-bold tracking-tight text-white group-hover:text-amber-200 transition-all ${
                scrolled ? 'text-base sm:text-xl' : 'text-lg sm:text-2xl'
              }`}>
                REDEMPTION CHAMBERS
              </span>
              
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-item-${item.page}`}
                  onClick={() => onNavigate(item.page)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-amber-400 bg-slate-800/90 font-semibold border border-amber-500/40 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenBooking}
              id="nav-cta-booking-btn"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                onNavigate(item.page);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium ${
                currentPage === item.page
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                  : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          ))}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 py-3 rounded-lg font-bold text-center shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Consultation</span>
            </button>
            <a
              href={`https://wa.me/2348064710262?text=${encodeURIComponent('Hello Redemption Chambers, I would like to inquire about legal representation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-lg font-bold text-center text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp ({ATTORNEY_INFO.phone})</span>
            </a>
            <div className="text-xs text-slate-400 text-center space-y-1 pt-1">
              <p>Direct Call: {ATTORNEY_INFO.phone}</p>
              <p>{ATTORNEY_INFO.officeAddress}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
