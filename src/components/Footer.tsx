import React from 'react';
import { PageType } from '../types';
import { ATTORNEY_INFO } from '../data/legalData';
import { Shield, Phone, Mail, MapPin, ArrowUpRight, Scale } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Brand & Intro */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-md bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-400" />
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                BARRISTER EMMANUEL ONWA
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Providing strategic legal representation, land conveyancing (C of O / Title Perfection), High Court probate administration, and CAC corporate law across all 36 States of Nigeria & FCT Abuja (Chambers in Ilorin, Kwara State).
            </p>
            <div className="pt-2 flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                18+ Years Legal Practice
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                100% Flat-Fee Transparency
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-white font-semibold mb-4 text-sm tracking-wider uppercase text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-300 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-300 transition-colors">
                  About Barrister Emmanuel Onwa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition-colors">
                  Practice Areas & Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-300 transition-colors">
                  Ilorin Chambers Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Practice Areas */}
          <div>
            <h4 className="font-serif text-white font-semibold mb-4 text-sm tracking-wider uppercase text-amber-400">
              Core Expertise
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Land Law & C of O Perfection</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>High Court Ilorin Probate & Admin</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Wills & Family Living Trusts</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Civil & Land Dispute Litigation</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>CAC Business Incorporation</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div>
            <h4 className="font-serif text-white font-semibold mb-4 text-sm tracking-wider uppercase text-amber-400">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-slate-300">{ATTORNEY_INFO.officeAddress}<br />{ATTORNEY_INFO.cityStateZip}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${ATTORNEY_INFO.phone}`} className="hover:text-amber-300 transition-colors font-medium text-white">
                  {ATTORNEY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${ATTORNEY_INFO.email}`} className="hover:text-amber-300 transition-colors text-slate-300">
                  {ATTORNEY_INFO.email}
                </a>
              </li>
            </ul>
            <button
              onClick={onOpenBooking}
              className="mt-4 w-full inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-4 rounded-lg text-xs tracking-wide uppercase transition-all shadow-md"
            >
              <span>Book Strategic Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Legal Advertising Disclaimer */}
        <div className="border-t border-slate-800/80 pt-8 pb-4 text-xs text-slate-400 leading-relaxed space-y-3">
          <div className="flex items-center space-x-2 text-slate-400 font-medium">
            <Scale className="w-4 h-4 text-amber-500" />
            <span className="uppercase text-[11px] tracking-wider text-slate-300">Attorney Advertising & Legal Disclaimer</span>
          </div>
          <p>
            The information contained on this website is for general informational and educational purposes only and should not be construed as legal advice on any subject matter. No attorney-client relationship is created or implied by viewing this site or submitting a contact form. Prior results do not guarantee a similar outcome.
          </p>
          <p>
            Barrister Emmanuel Onwa is enrolled as a Barrister & Solicitor of the Supreme Court of Nigeria and a member of the Nigerian Bar Association (NBA, Ilorin Branch). Chambers Address: {ATTORNEY_INFO.officeAddress}, {ATTORNEY_INFO.cityStateZip}.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} {ATTORNEY_INFO.firmName}. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Bar Disclosures</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
