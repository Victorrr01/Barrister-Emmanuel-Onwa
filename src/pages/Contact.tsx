import React, { useState } from 'react';
import { ATTORNEY_INFO, PRACTICE_AREAS } from '../data/legalData';
import { Mail, Phone, MapPin, Clock, Navigation, Calendar, Send, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  onOpenBooking: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: PRACTICE_AREAS[0].title,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 space-y-16 pb-16 pt-8">
      
      {/* HEADER SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <span className="text-amber-700 font-bold text-xs uppercase tracking-widest block">
            Nationwide & International Representation
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Contact Redemption Chambers
          </h1>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Reach out to I.E. ONWA & CO. for specialized legal services across Litigation, Corporate Practice, Property Consultancy, Telecommunication, and Banking sectors.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <h2 className="font-serif text-2xl font-bold text-white mb-6">Chambers Directory</h2>
              
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">Principal Chambers</span>
                    <span className="text-slate-200 text-sm font-medium leading-relaxed block">{ATTORNEY_INFO.officeAddress}</span>
                    <span className="text-slate-300 text-xs block">{ATTORNEY_INFO.cityStateZip}</span>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4">
                  <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">Direct Lines / WhatsApp</span>
                    <a href={`tel:${ATTORNEY_INFO.phone.replace(/\\s/g, '')}`} className="text-emerald-400 hover:text-emerald-300 text-sm font-bold block">{ATTORNEY_INFO.phone}</a>
                    <span className="text-slate-200 text-sm font-bold block mt-1">08125181217</span>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4">
                  <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">Official Email</span>
                    <a href={`mailto:${ATTORNEY_INFO.email}`} className="text-blue-400 hover:text-blue-300 text-sm font-bold block">{ATTORNEY_INFO.email}</a>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">Office Hours</span>
                    <span className="text-slate-200 text-xs leading-relaxed block">{ATTORNEY_INFO.officeHours}</span>
                  </div>
                </li>
              </ul>
              
              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={onOpenBooking}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation Calendar</span>
                </button>
              </div>
            </div>

            {/* Interactive Location Guide */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 text-xs shadow-sm">
              <h3 className="font-serif font-bold text-slate-900 text-sm flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-amber-600" />
                <span>Visiting Our Chambers in Ilorin</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Situated at 43, Dele Abubakar Street (Stadium Road), Ilorin, Kwara State. Accessible via major transport corridors for both local and international clients.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900">
                    Send a Direct Message
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    All inquiries are strictly confidential and responded to promptly by our legal team.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 803 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Practice Area Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {PRACTICE_AREAS.map(area => (
                        <option key={area.id} value={area.title}>{area.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Message / Case Overview *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Please share a brief summary of your legal inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Confidential Inquiry</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Message Sent Successfully
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A member of Redemption Chambers will review your inquiry and contact you at <span className="font-semibold text-slate-900">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => { 
                    setSubmitted(false); 
                    setFormData({ name: '', email: '', phone: '', serviceInterest: PRACTICE_AREAS[0].title, message: '' }); 
                  }}
                  className="bg-slate-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
