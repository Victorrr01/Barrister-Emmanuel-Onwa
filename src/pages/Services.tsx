import React, { useState } from 'react';
import { PRACTICE_AREAS, PROVEN_PROCESS } from '../data/legalData';
import { PracticeArea } from '../types';
import { FeeEstimator } from '../components/FeeEstimator';
import { Shield, CheckCircle, Users, ArrowRight, Download, FileText, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: (serviceTitle?: string) => void;
  onSelectPracticeArea: (area: PracticeArea) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking, onSelectPracticeArea }) => {
  const [expandedArea, setExpandedArea] = useState<string | null>(PRACTICE_AREAS[0].id);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [userEmailForDownload, setUserEmailForDownload] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmailForDownload) return;
    setDownloadSuccess(true);
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>Land Conveyancing, High Court Probate & Legal Practice</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            Legal Practice & Conveyancing Services
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            From C of O perfection and land registry searches across Nigeria (KWAGIS, AGIS, Lagos Lands) to High Court Probate Applications and CAC Corporate Registrations nationwide, discover our full suite of legal services.
          </p>
        </div>
      </section>

      {/* DETAILED PRACTICE AREAS ACCORDION / GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            Full Service Breakdown
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Click any practice area below to view detailed scope and legal deliverables.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {PRACTICE_AREAS.map((area) => {
            const isExpanded = expandedArea === area.id;
            return (
              <div 
                key={area.id}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isExpanded ? 'bg-white border-amber-500 shadow-lg' : 'bg-slate-50 border-slate-200 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => setExpandedArea(isExpanded ? null : area.id)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <div>
                    <h3 className="font-serif font-bold text-slate-900 text-xl">{area.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{area.shortDesc}</p>
                  </div>
                  <div className="ml-4 p-2 rounded-full bg-slate-100 text-slate-700">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-5 text-sm animate-in fade-in duration-200">
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                      {area.fullDesc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h4 className="font-serif font-bold text-xs uppercase text-slate-900 mb-2 flex items-center space-x-1.5">
                          <CheckCircle className="w-4 h-4 text-amber-600" />
                          <span>Key Deliverables</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {area.keyDeliverables.map((d, i) => (
                            <li key={i} className="flex items-start space-x-1.5">
                              <span className="text-amber-500 font-bold">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h4 className="font-serif font-bold text-xs uppercase text-slate-900 mb-2 flex items-center space-x-1.5">
                          <Users className="w-4 h-4 text-slate-700" />
                          <span>Who This Is For</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {area.idealFor.map((f, i) => (
                            <li key={i} className="flex items-start space-x-1.5">
                              <span className="text-amber-500 font-bold">•</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => onOpenBooking(area.title)}
                        className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold py-2.5 px-5 rounded-xl text-xs transition-colors shadow-md"
                      >
                        <span>Schedule {area.title} Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* WHO THESE SERVICES ARE FOR */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block">
              Tailored Client Scenarios
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Who We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Property Buyers & Real Estate Investors",
                desc: "KWAGIS title searches, Deed of Assignment drafting, Governor's Consent, and C of O perfection in Kwara State and Nigeria."
              },
              {
                title: "Diaspora Clients Purchasing Property",
                desc: "Remote legal representation, power of attorney execution, and escrow title verification for overseas buyers in Kwara."
              },
              {
                title: "Heirs & Deceased Estate Executors",
                desc: "Full-service High Court Probate Registry guidance for Letters of Administration, bank account release, and asset sharing."
              },
              {
                title: "Entrepreneurs & Business Owners",
                desc: "CAC business incorporations, joint venture agreements, shareholder deeds, and commercial contract advocacy."
              }
            ].map((sc, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-2">
                <h3 className="font-serif font-bold text-amber-400 text-lg">{sc.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{sc.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHAT THE 3-STEP PROVEN PROCESS LOOKS LIKE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest block">
            Seamless & Stress-Free
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Our 3-Step Estate Planning Process
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            From initial discovery to formal signing and trust funding, we make estate planning simple and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROVEN_PROCESS.map((step) => (
            <div key={step.number} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative space-y-4 flex flex-col justify-between">
              <div>
                <span className="font-serif text-4xl font-extrabold text-amber-500/80 block mb-2">
                  {step.number}
                </span>
                <h3 className="font-serif font-bold text-slate-900 text-xl mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-amber-800 mb-3">{step.subtitle}</p>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-2">
                  Key Deliverables:
                </span>
                <ul className="space-y-1 text-xs text-slate-600">
                  {step.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOWNLOADABLE ESTATE CHECKLIST PROMPT MODAL/CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 sm:p-12 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-1.5 text-amber-900 text-xs font-bold uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
              <FileText className="w-3.5 h-3.5 text-amber-700" />
              <span>Free Downloadable Guide</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              The 2026 Nigerian Land Title & Estate Checklist
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm max-w-xl">
              Get our comprehensive 12-point legal checklist detailing KWAGIS land searches, C of O perfection, High Court Probate, and CAC registration rules.
            </p>
          </div>

          <button
            onClick={() => setDownloadModalOpen(true)}
            className="shrink-0 inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold px-5 py-3 sm:px-7 sm:py-4 rounded-xl text-xs sm:text-sm transition-all shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Download Free Legal Checklist PDF</span>
          </button>
        </div>
      </section>

      {/* TRANSPARENT FEE ESTIMATOR INTEGRATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeeEstimator onOpenBooking={onOpenBooking} />
      </section>

      {/* Download Checklist Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80  flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl relative">
            <button 
              onClick={() => { setDownloadModalOpen(false); setDownloadSuccess(false); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>

            {!downloadSuccess ? (
              <form onSubmit={handleDownload} className="space-y-4">
                <div className="text-center space-y-2">
                  <FileText className="w-10 h-10 text-amber-600 mx-auto" />
                  <h4 className="font-serif font-bold text-xl text-slate-900">Download Free Estate Guide</h4>
                  <p className="text-xs text-slate-600">Enter your email to receive our instant PDF checklist.</p>
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={userEmailForDownload}
                    onChange={(e) => setUserEmailForDownload(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold py-3 rounded-xl text-sm shadow-md"
                >
                  Send PDF to My Email
                </button>
              </form>
            ) : (
              <div className="text-center py-4 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif font-bold text-lg text-slate-900">Checklist Sent!</h4>
                <p className="text-xs text-slate-600">The guide has been emailed to <strong>{userEmailForDownload}</strong>.</p>
                <button
                  onClick={() => { setDownloadModalOpen(false); setDownloadSuccess(false); }}
                  className="bg-slate-900 text-white font-bold px-6 py-2 rounded-lg text-xs"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
