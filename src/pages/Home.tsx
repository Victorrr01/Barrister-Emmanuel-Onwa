import React from 'react';
import { ATTORNEY_INFO, PRACTICE_AREAS, TRUST_PILLARS, TESTIMONIALS } from '../data/legalData';
import { PracticeArea } from '../types';
import { ReadinessAssessment } from '../components/ReadinessAssessment';
import { FeeEstimator } from '../components/FeeEstimator';
import ladyJusticeImg from '../assets/images/lady_justice_statue_1784873399908.jpg';
import lawSymbolImg from '../assets/images/law_symbol_scales_gavel_1784878581133.jpg';
import { 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Award, 
  Users, 
  Sparkles, 
  Scale, 
  Quote, 
  FileCheck, 
  Shield, 
  Scroll, 
  Lock, 
  HeartHandshake, 
  Briefcase 
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: any) => void;
  onOpenBooking: (serviceTitle?: string) => void;
  onSelectPracticeArea: (area: PracticeArea) => void;
  onOpenAiAssistant: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onOpenBooking,
  onSelectPracticeArea,
  onOpenAiAssistant,
}) => {
  // Map icon names to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case 'FileCheck': return FileCheck;
      case 'ShieldCheck': return ShieldCheck;
      case 'Scroll': return Scroll;
      case 'Lock': return Lock;
      case 'HeartHandshake': return HeartHandshake;
      case 'Briefcase': return Briefcase;
      default: return Shield;
    }
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 overflow-hidden border-b border-slate-800">
        {/* Background ambient lighting */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/5 rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="inline-flex items-center space-x-2 bg-slate-800/90 border border-amber-500/30 px-4 py-1.5 rounded-full shadow-inner">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                  Senior Legal Practitioner • Nationwide Practice Across All 36 States & FCT
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                  Protecting Land Rights & Family Legacy <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                    Across All 36 States & FCT Abuja.
                  </span>
                </h1>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                  Expert land conveyancing (C of O, Title Perfection & Searches), High Court probate administration, binding Wills, and CAC corporate law. Unassailable nationwide legal protection with principal chambers in Ilorin, Kwara State.
                </p>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  id="hero-cta-primary"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-3 sm:px-8 sm:py-4 rounded-xl text-xs sm:text-base shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Schedule Legal Consultation (Nationwide & Virtual)</span>
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  id="hero-cta-secondary"
                  className="inline-flex items-center justify-center space-x-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-xs sm:text-base transition-colors"
                >
                  <span>Explore Practice Areas</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>

              {/* Trust Badge Bar */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-amber-500/40 transition-colors">
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-amber-400">18+ Years</div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Active Legal Practice</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-amber-500/40 transition-colors">
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-amber-400">1,500+</div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Clients Represented</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-amber-500/40 transition-colors">
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-amber-400">99.2%</div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Success Record</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-amber-500/40 transition-colors">
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-amber-400">₦12.5B+</div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Assets & Land Secured</div>
                </div>
              </div>

            </div>

            {/* Right Visual Graphic (Lady Justice Image Asset) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-700/20 rounded-3xl"></div>
                <div className="relative bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={ladyJusticeImg}
                    alt="Classical Lady Justice Statue"
                    referrerPolicy="no-referrer"
                    className="w-full h-[420px] object-cover object-center"
                  />
                  
                  {/* Floating Circular Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 p-4 rounded-xl border border-slate-700/90 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">Lead Counsel Verified</div>
                        <div className="text-[11px] text-amber-400">Board Certified Specialist</div>
                      </div>
                    </div>
                    <button 
                      onClick={onOpenAiAssistant}
                      className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-amber-500/30 flex items-center space-x-1"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>AI FAQ Guide</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRIEF BIO & VALUE PROPOSITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-lg">
                <img
                  src={lawSymbolImg}
                  alt="Scales of Justice & Legal Symbol"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 text-white p-3 text-center border-t border-slate-800">
                  <span className="font-serif font-bold text-sm text-amber-400 block">{ATTORNEY_INFO.firmName}</span>
                  <span className="text-[11px] text-slate-300 uppercase tracking-widest block">Justice • Integrity • Excellence</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-amber-600" />
                <span>Nationwide Legal Representation Across Nigeria • Chambers in Ilorin</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                "Land ownership, family estate, and business assets require ironclad legal defense under Nigerian Law."
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                With over 18 years of court advocacy, land conveyancing, and corporate practice across Abuja, Lagos, Port Harcourt, Kano, Kwara State, and all 36 States of Nigeria, Barrister Emmanuel Onwa provides trusted, fearless counsel. Our practice removes bureaucracy, ensures transparent 100% flat-fee rates, and guarantees that your land titles, family inheritance, and corporate ventures remain secure nationwide.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-xs uppercase text-slate-900">Custom Built Plans</h4>
                    <p className="text-xs text-slate-500">No generic templates or boilerplates—every trust is built for your exact assets.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-xs uppercase text-slate-900">Flat-Fee Transparency</h4>
                    <p className="text-xs text-slate-500">Written fixed quotes upfront so you never face unannounced hourly bills.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 sm:py-3 sm:px-6 rounded-xl text-xs sm:text-sm transition-colors shadow-md"
                >
                  <span>Read Barrister Onwa's Full Biography</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* KEY PRACTICE AREAS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest block">
            Tailored Estate Management & Planning
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Core Practice Areas
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Click any practice area to explore key deliverables, who the service is designed for, and tailored legal options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRACTICE_AREAS.map((area) => {
            const IconComp = getIcon(area.iconName);
            return (
              <div
                key={area.id}
                onClick={() => onSelectPracticeArea(area)}
                className="group bg-white border border-slate-200/90 hover:border-amber-500 rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-md group-hover:scale-105">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-slate-900 text-xl mb-2 group-hover:text-amber-900 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {area.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-700">
                  <span>View Service Breakdown</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-amber-600" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE ME SECTION (4 Trust Pillars) */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block">
              The Onwa Standard of Excellence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Why Choose Emmanuel Onwa & Co.?
            </h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto">
              Our firm is structured around four foundational trust pillars ensuring security, empathy, and long-term care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-serif font-bold text-lg">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-white text-lg">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE SELF-ASSESSMENT CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReadinessAssessment onOpenBooking={onOpenBooking} />
      </section>

      {/* TRANSPARENT FEE ESTIMATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeeEstimator onOpenBooking={onOpenBooking} />
      </section>

      {/* TESTIMONIALS / SOCIAL PROOF PLACEHOLDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest block">
            Proven Client Satisfaction
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Trusted by over 1,500 clients across Ilorin, Kwara State, and Nigeria for land, probate, and corporate legal representation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-xs italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-serif font-bold text-slate-900 block">{t.clientName}</span>
                  <span className="text-slate-500 text-[11px]">{t.role} • {t.location}</span>
                </div>
                <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-1 rounded font-medium">
                  {t.serviceUsed.split(' ')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Ready to Protect Your Family's Legacy?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Take the first step today. Schedule a consultation directly with Barrister Emmanuel Onwa at our Ilorin Chambers or via phone.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="shrink-0 inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-3 sm:px-8 sm:py-4 rounded-xl text-xs sm:text-sm transition-all shadow-xl shadow-amber-500/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Protect Your Family's Legacy Today</span>
          </button>
        </div>
      </section>

    </div>
  );
};
