import React from 'react';
import { ATTORNEY_INFO, CREDENTIALS } from '../data/legalData';
import { Shield, Award, GraduationCap, CheckCircle2, Calendar, Scale, BookOpen, HeartHandshake } from 'lucide-react';
import lawSymbolImg from '../assets/images/law_symbol_scales_gavel_1784878581133.jpg';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>Biography & Practice Philosophy</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            About Barrister Emmanuel Onwa
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Over 18 years of dedicated legal practice defending property rights, perfecting land titles, and guiding High Court probate & corporate compliance across Nigeria.
          </p>
        </div>
      </section>

      {/* Main Narrative Biography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Quick Stats Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-4 shadow-xl ">
              <img
                src={lawSymbolImg}
                alt="Scales of Justice & Legal Symbol"
                referrerPolicy="no-referrer"
                className="w-full h-[440px] object-cover rounded-2xl"
              />
              <div className="p-4 text-center space-y-1">
                <h3 className="font-serif font-bold text-xl text-slate-900">{ATTORNEY_INFO.firmName}</h3>
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-widest">Barrister Emmanuel Onwa & Co.</p>
                <p className="text-xs text-slate-500">Integrity • Equity • Legal Advocacy</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4 border border-slate-800 shadow-lg">
              <h4 className="font-serif font-bold text-amber-400 text-sm uppercase tracking-wider">
                Practice Highlights
              </h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Years of Active Practice:</span>
                  <span className="font-bold text-white">18+ Years</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Call to Bar:</span>
                  <span className="font-bold text-white">Nigeria Law School (Bagauda, Kano)</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Chambers Location:</span>
                  <span className="font-bold text-white">Ilorin, Kwara State, Nigeria</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Bar Membership:</span>
                  <span className="font-bold text-white">NBA Ilorin Branch</span>
                </div>
                <div className="flex justify-between">
                  <span>Billing Model:</span>
                  <span className="font-bold text-amber-400">100% Flat-Fee Transparency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-slate-900 leading-tight">
                "Our legal duty is to protect your land, family inheritance, and corporate ventures across Nigeria from conflict and invalidation."
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Barrister Emmanuel Onwa maintains principal chambers in Ilorin, Kwara State, while maintaining an active nationwide legal practice across all 36 States of Nigeria and FCT Abuja. He provides accessible, unyielding legal representation to property investors, families, corporate entities, and Diaspora Nigerians worldwide.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Having earned his LL.B (Hons) degree at Ebonyi State University and completed his Call to Bar training at the Nigerian Law School (Bagauda Campus, Kano), Barrister Onwa is enrolled as a Solicitor and Advocate of the Supreme Court of Nigeria. He litigates complex property disputes, perfects titles across state land registries (including KWAGIS, Lagos, and Abuja Geographic Information Systems), and processes Letters of Administration and Probate Grants nationwide.
              </p>
            </div>

            {/* Operating Philosophy Cards */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-slate-900">
                Our Legal Philosophy
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center space-x-2 text-amber-800 font-serif font-bold text-sm">
                    <HeartHandshake className="w-4 h-4 text-amber-600" />
                    <span>Rigorous Due Diligence</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every property transaction undergoes thorough land registry searches before any contract execution to protect clients from land scams.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center space-x-2 text-amber-800 font-serif font-bold text-sm">
                    <Scale className="w-4 h-4 text-amber-600" />
                    <span>Total Financial Transparency</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    No hidden charges. We issue explicit flat-fee quotes for land drafting, High Court filings, and CAC incorporations upfront.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl space-y-2">
              <p className="font-serif italic text-slate-800 text-sm leading-relaxed">
                "Whether you reside in Kwara State or are in the Diaspora, your investments and family legacy in Nigeria deserve legally binding security."
              </p>
              <span className="text-xs font-bold text-amber-900 block text-right">— Barrister Emmanuel Onwa</span>
            </div>

          </div>

        </div>
      </section>

      {/* FULL CREDENTIALS & BAR ADMISSIONS GRID */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-widest block">
              Distinguished Background
            </span>
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              Education, Bar Admissions & Honors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREDENTIALS.map((cred, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded">
                    {cred.category}
                  </span>
                  {cred.year && (
                    <span className="text-xs font-serif font-bold text-amber-700">{cred.year}</span>
                  )}
                </div>

                <h3 className="font-serif font-bold text-slate-900 text-base">
                  {cred.title}
                </h3>

                <p className="text-xs font-medium text-slate-700">
                  {cred.institution}
                </p>

                {cred.details && (
                  <p className="text-xs text-slate-500 pt-2 border-t border-slate-100 leading-relaxed">
                    {cred.details}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl border border-slate-800">
          <h3 className="font-serif text-3xl font-bold text-white">
            Schedule a Meeting with Barrister Emmanuel Onwa
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Book a legal consultation for matters anywhere in Nigeria at our Ilorin Chambers on Taiwo Isale Road or via Virtual Phone/Zoom.
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-3 sm:px-8 sm:py-4 rounded-xl text-xs sm:text-sm transition-all shadow-xl shadow-amber-500/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Legal Consultation</span>
          </button>
        </div>
      </section>

    </div>
  );
};
