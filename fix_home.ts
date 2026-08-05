import fs from 'fs';

const homeContent = `
import React from 'react';
import { 
  FIRM_NAME, 
  CONTACT_INFO, 
  HISTORY_PARAGRAPHS, 
  FIRM_VALUES_INTRO, 
  FIRM_VALUES, 
  CSR_PARAGRAPHS, 
  PRACTICE_AREAS, 
  TEAM_MEMBERS 
} from '../data/legalData';
import { Landmark, Scale, ShieldCheck, HeartHandshake, Users, PhoneCall, CheckCircle } from 'lucide-react';
import lawSymbolImg from '../assets/images/law_symbol_scales_gavel_1784878581133.jpg';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. HOME SECTION */}
      <section id="home" className="relative bg-slate-950 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/90 z-10"></div>
        <img 
          src={lawSymbolImg} 
          alt="Scales of Justice" 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight">
            {FIRM_NAME}
          </h1>
          <p className="text-xl sm:text-2xl text-amber-400 font-medium max-w-3xl mx-auto">
            Delivering high quality legal and general services to public and private sector clients in Nigeria and abroad.
          </p>
        </div>
      </section>

      {/* 2. ABOUT / HISTORY SECTION */}
      <section id="history" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Landmark className="w-12 h-12 text-amber-600 mx-auto" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">About & History</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-slate-700 text-lg leading-relaxed">
            {HISTORY_PARAGRAPHS.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FIRM VALUES SECTION */}
      <section id="values" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <ShieldCheck className="w-12 h-12 text-amber-600 mx-auto" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Firm Values</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-slate-700 text-center font-medium">
              {FIRM_VALUES_INTRO}
            </p>
            <ul className="space-y-6">
              {FIRM_VALUES.map((val, idx) => (
                <li key={idx} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                  <span className="text-slate-700 leading-relaxed text-lg">{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. PRACTICE AREAS SECTION */}
      <section id="practice-areas" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Scale className="w-12 h-12 text-amber-500 mx-auto" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Practice Areas</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((area, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 hover:border-amber-500 transition-colors">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center">
                  <Scale className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-amber-50 font-serif">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORPORATE & SOCIAL RESPONSIBILITY SECTION */}
      <section id="csr" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <HeartHandshake className="w-12 h-12 text-amber-700 mx-auto" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Corporate & Social Responsibility</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-slate-800 text-lg leading-relaxed text-center">
            {CSR_PARAGRAPHS.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR TEAM / LAWYER PROFILES SECTION */}
      <section id="team" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Users className="w-12 h-12 text-amber-600 mx-auto" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Our Team / Lawyer Profiles</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  {member.role && (
                    <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {member.role}
                    </span>
                  )}
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Practice Areas</h4>
                    <ul className="space-y-1">
                      {member.practiceAreas.map((area, aIdx) => (
                        <li key={aIdx} className="text-slate-700 text-sm flex items-start">
                          <span className="text-amber-500 mr-2">•</span> {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200 space-y-2 mt-auto">
                    {member.email && (
                      <p className="text-sm text-slate-600 truncate">
                        <span className="font-semibold mr-1">Email:</span> 
                        <a href={\`mailto:\$\{member.email\}\`} className="text-amber-700 hover:underline">{member.email}</a>
                      </p>
                    )}
                    {member.telephone && (
                      <p className="text-sm text-slate-600">
                        <span className="font-semibold mr-1">Tel:</span> {member.telephone}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT US SECTION */}
      <section id="contact" className="py-20 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <PhoneCall className="w-16 h-16 text-amber-500 mx-auto" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold">{CONTACT_INFO.name}</h2>
          <h3 className="text-xl md:text-2xl text-slate-300 font-medium tracking-wide">{CONTACT_INFO.firmName}</h3>
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 space-y-8 mt-8 shadow-xl">
            <div>
              <p className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-2">Address</p>
              <p className="text-xl md:text-2xl font-serif">{CONTACT_INFO.address}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-800">
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-2">Email</p>
                <div className="space-y-2">
                  <a href={\`mailto:\$\{CONTACT_INFO.email1\}\`} className="block text-lg text-amber-400 hover:text-amber-300 transition-colors">
                    {CONTACT_INFO.email1}
                  </a>
                  <a href={\`mailto:\$\{CONTACT_INFO.email2\}\`} className="block text-lg text-amber-400 hover:text-amber-300 transition-colors">
                    {CONTACT_INFO.email2}
                  </a>
                </div>
              </div>
              
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-2">Telephone</p>
                <div className="space-y-2">
                  <a href={\`tel:\$\{CONTACT_INFO.phone1\}\`} className="block text-lg text-amber-400 hover:text-amber-300 transition-colors">
                    {CONTACT_INFO.phone1}
                  </a>
                  <a href={\`tel:\$\{CONTACT_INFO.phone2\}\`} className="block text-lg text-amber-400 hover:text-amber-300 transition-colors">
                    {CONTACT_INFO.phone2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
`;

fs.writeFileSync('src/pages/Home.tsx', homeContent);
