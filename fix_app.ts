import fs from 'fs';

// 1. Rewrite App.tsx
const appContent = `
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { MessageCircle, Calendar } from 'lucide-react';
import { CONTACT_INFO } from './data/legalData';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      <Navbar />
      
      <main className="flex-1 pt-[80px] md:pt-[120px]">
        <Home />
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
        <a
          href={\`https://wa.me/2348064710262?text=\$\{encodeURIComponent('Hello Redemption Chambers, I would like to inquire about legal consultation/representation.')\}\`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-11 w-11 sm:w-auto sm:px-4 rounded-full shadow-md flex items-center justify-center sm:space-x-2 text-xs hover:scale-105 active:scale-95 transition-all duration-200 border border-emerald-400"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp ({CONTACT_INFO.phone1})</span>
        </a>
      </div>

      <Footer />
    </div>
  );
}
`;
fs.writeFileSync('src/App.tsx', appContent);

// 2. Rewrite Navbar.tsx
const navbarContent = `
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Shield, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, FIRM_NAME } from '../data/legalData';

export const Navbar: React.FC = () => {
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
    <header className={\`fixed top-0 left-0 right-0 z-50 w-full text-white border-b transition-all duration-300 \$\{scrolled ? 'bg-slate-950 border-amber-500/30 shadow-md shadow-black/50' : 'bg-slate-900 border-slate-800 shadow-md'\}\`}>
      <div className={\`bg-slate-950 text-slate-300 text-xs transition-all duration-300 hidden xl:block border-b border-slate-800/60 \$\{scrolled ? 'max-h-0 py-0 opacity-0 overflow-hidden border-none' : 'max-h-12 py-2 opacity-100'\}\`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4 lg:space-x-6">
            <a href={\`tel:\$\{CONTACT_INFO.phone1\}\`} className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors shrink-0">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-semibold text-white">{CONTACT_INFO.phone1}</span>
            </a>
            <a href={\`mailto:\$\{CONTACT_INFO.email1\}\`} className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors shrink-0">
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
        <div className={\`flex items-center justify-between transition-all duration-300 \$\{scrolled ? 'h-16' : 'h-20'\}\`}>
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3 text-left focus:outline-none group">
            <div className={\`rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-900/20 group-hover:scale-105 transition-all \$\{scrolled ? 'w-8 h-8' : 'w-10 h-10'\}\`}>
              <div className="w-full h-full bg-slate-900 rounded-[7px] flex items-center justify-center">
                <Shield className={\`text-amber-400 transition-all \$\{scrolled ? 'w-4 h-4' : 'w-5 h-5'\}\`} />
              </div>
            </div>
            <div>
              <span className={\`block font-serif font-bold tracking-tight text-white group-hover:text-amber-200 transition-all \$\{scrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'\}\`}>
                {CONTACT_INFO.firmName}
              </span>
            </div>
          </button>

          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
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
`;
fs.writeFileSync('src/components/Navbar.tsx', navbarContent);

// 3. Rewrite Footer.tsx
const footerContent = `
import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO, FIRM_NAME } from '../data/legalData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-amber-500" />
              <span className="font-serif text-xl font-bold text-white">{CONTACT_INFO.firmName}</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              {FIRM_NAME} - Delivering high quality legal and general services to public and private sector clients.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-sm">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{CONTACT_INFO.phone1} / {CONTACT_INFO.phone2}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <div className="flex flex-col space-y-1">
                  <span>{CONTACT_INFO.email1}</span>
                  <span className="text-xs text-slate-500">(Also reachable at: {CONTACT_INFO.email2})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500 flex flex-col space-y-2">
          <p>© {new Date().getFullYear()} {FIRM_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
`;
fs.writeFileSync('src/components/Footer.tsx', footerContent);

// 4. Clean up types and other unused files later
