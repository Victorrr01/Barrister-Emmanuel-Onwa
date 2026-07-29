import React from 'react';
import { ATTORNEY_INFO, PRACTICE_AREAS, TEAM_MEMBERS } from '../data/legalData';
import { PracticeArea } from '../types';
import ladyJusticeImg from '../assets/images/lady_justice_statue_1784873399908.jpg';
import lawSymbolImg from '../assets/images/law_symbol_scales_gavel_1784878581133.jpg';
import { Building, RadioTower, Landmark, Target, ShieldCheck, 
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
      case 'Building': return Building;
      case 'RadioTower': return RadioTower;
      case 'Landmark': return Landmark;
      case 'Scale': return Scale;
      default: return Shield;
    }
  };

  return (
    <div className="bg-slate-50 space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 border-b border-slate-800">
        {/* Background ambient lighting */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="inline-flex items-center space-x-2 bg-slate-800/90 border border-amber-500/30 px-4 py-1.5 rounded-full shadow-inner">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
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
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-amber-400">14+ Years</div>
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
                <div className="relative bg-slate-900 border border-slate-700/80 rounded-2xl  shadow-md">
                  <img
                    src={ladyJusticeImg}
                    alt="Classical Lady Justice Statue"
                    referrerPolicy="no-referrer"
                    className="w-full h-[420px] object-cover object-center rounded-2xl"
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

      
      {/* HISTORY & FIRM VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Image & Quick Stats */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img 
                src={lawSymbolImg} 
                alt="Law Firm Scales" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="font-serif text-2xl font-bold text-amber-400">Established 2012</p>
                <p className="text-sm font-medium text-slate-200">14+ Years of Legal Excellence</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4 border border-slate-800 shadow-lg">
              <h4 className="font-serif font-bold text-amber-400 text-sm uppercase tracking-wider">
                Firm Highlights
              </h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Established:</span>
                  <span className="font-bold text-white">2012</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Sectors:</span>
                  <span className="font-bold text-white">Public & Private</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Chambers Location:</span>
                  <span className="font-bold text-white">Ilorin, Kwara State</span>
                </div>
                <div className="flex justify-between">
                  <span>Reach:</span>
                  <span className="font-bold text-amber-400">Nationwide & International</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative History */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* History Section */}
            <div className="space-y-5">
              <div className="flex items-center space-x-3 text-amber-700">
                <Landmark className="w-6 h-6" />
                <h2 className="font-serif text-2xl font-bold text-slate-900">History</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  <strong>I.E. ONWA & CO. (REDEMPTION CHAMBERS)</strong> was established in 2012 and has over the past 14 years acquired substantial experience in delivering high-quality legal services and general services to both public and private sectors in Nigeria and abroad.
                </p>
                <p>
                  Between 2012 and 2026, the firm gradually expanded its practice from a general law practice into the specialized property/real estate sector and corporate sector. Today, it is internationally respected for its ability to provide specialist integrated legal services and solutions to the corporate commercial sector.
                </p>
                <p>
                  Our 14 years of practice have involved the development of ideas and legal concepts across a wide range of practice areas, from Litigation, Property Consultancy, Arbitration, and Mediation, to Corporate Law Practice, Transport & Telecommunication sectors, Banking & Financial services, and Project Financing and Infrastructure.
                </p>
                <p>
                  Redemption Chambers currently maintains strong links across continents with international law firms and across borders within Africa.
                </p>
              </div>
            </div>

            {/* Firm Values Section */}
            <div className="space-y-5">
              <div className="flex items-center space-x-3 text-amber-700">
                <Target className="w-6 h-6" />
                <h2 className="font-serif text-2xl font-bold text-slate-900">Firm Values</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  In a developing country like Nigeria with growing business structures, the value, experience, and integrity of Redemption Chambers in the litigation, property, corporate, and commercial sectors are essential. We have the legal experience and commercial focus to advise on all aspects of legal practice.
                </p>
                <p>
                  As a sector-driven firm with an intimate knowledge of the industries in which we operate, we offer strategic legal advice on individual deals and disputes. Our approach to litigation and corporate practice dictates that our advice in contentious and non-contentious issues is underpinned by rich, multi-year involvement in litigation and arbitration cases.
                </p>
                <p>
                  Our firm’s knowledge and accessibility, along with our teamwork, provide a strong interface between clients and the firm. Clients can contact associates or partners directly at all times on any project or case, creating a strong sense of cooperation and harmony.
                </p>
                <p>
                  As a fully integrated commercial law firm, we represent clients from various industries around the world. It is important to our clients that we can draw on our extensive referral network to assist them in saving time and stress to meet their commercial objectives.
                </p>
                <p>
                  Finally, a key component of our firm is our international and regional ability to acquire property for clients in any part of the world, utilizing an experienced approach and professional negotiation to secure properties in choice locations at highly attractive prices.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORPORATE SOCIAL RESPONSIBILITY */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <HeartHandshake className="w-10 h-10 text-amber-400 mx-auto" />
            <h2 className="font-serif text-3xl font-bold">Corporate & Social Responsibility</h2>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed text-left sm:text-center">
              <p>
                Redemption Chambers is determined to build long-term strategic relationships with carefully chosen causes and charities.
              </p>
              <p>
                Our partners actively engage in offering <strong>pro bono services</strong> to indigent citizens of Nigeria and Africa through physical representation in courts. We serve as patrons of numerous NGOs, charitable organizations, and churches, rendering free legal advice through our own NGO: <strong>REDEEMERS INITIATIVE FOR YOUTH AWARENESS AND EMPOWERMENT</strong>.
              </p>
              <p>
                We work assiduously to ensure a positive impact in the legal and wider community through multi-faceted support to our clients. Redemption Chambers is a firm that detests cheating and fraud and fiercely fights against inhumane treatment meted out to our clients and non-clients alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LAWYERS PROFILE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 mb-12">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest block">
            Our Legal Team
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            Lawyers Profile
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-sm uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded uppercase tracking-widest">
                    {member.role}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-slate-700 block mb-1">Practice Areas:</span>
                  <ul className="list-disc list-inside text-slate-600 space-y-1">
                    {member.practiceAreas.map((area, i) => (
                      <li key={i}>{area}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-3 border-t border-slate-100 space-y-1 text-slate-600">
                  <p><span className="font-bold">Email:</span> {member.email}</p>
                  <p><span className="font-bold">Tel:</span> {member.telephone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* KEY PRACTICE AREAS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10 bg-slate-50 py-4">
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
                className="group bg-white border border-slate-200/90 hover:border-amber-500 rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
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
                  <ArrowRight className="w-4 h-4 transition-colors duration-300 text-amber-600" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      

      

      

      

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Ready to Protect Your Family's Legacy?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Take the first step today. Schedule a consultation directly with Redemption Chambers at our Ilorin Chambers or via phone.
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
