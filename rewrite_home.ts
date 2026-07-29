import fs from 'fs';

let homeContent = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

const replacement = `
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
`;

const bioRegex = /\{\/\* BRIEF BIO & VALUE PROPOSITION \*\/\}([\s\S]*?)\{\/\* KEY PRACTICE AREAS OVERVIEW \*\/\}/;
homeContent = homeContent.replace(bioRegex, replacement + '\n{/* KEY PRACTICE AREAS OVERVIEW */}');

homeContent = homeContent.replace(
  /import { ATTORNEY_INFO, PRACTICE_AREAS } from '\.\.\/data\/legalData';/,
  "import { ATTORNEY_INFO, PRACTICE_AREAS, TEAM_MEMBERS } from '../data/legalData';"
);

homeContent = homeContent.replace(
  /import { Building, RadioTower, Landmark, ShieldCheck/,
  "import { Building, RadioTower, Landmark, Target, Users, ShieldCheck"
);

fs.writeFileSync('src/pages/Home.tsx', homeContent);
