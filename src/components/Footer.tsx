
import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO, FIRM_NAME } from '../data/legalData';

export const Footer: React.FC<{ onOpenAdmin: () => void }> = ({ onOpenAdmin }) => {
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
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-center">
            <p>© {new Date().getFullYear()} {FIRM_NAME}. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <button onClick={onOpenAdmin} className="text-slate-500 hover:text-amber-500 transition-colors">Admin Login</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
