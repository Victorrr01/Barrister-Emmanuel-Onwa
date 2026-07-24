import React, { useState } from 'react';
import { ATTORNEY_INFO } from '../data/legalData';
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle2, Send, Shield, Navigation, MessageCircle } from 'lucide-react';

interface ContactProps {
  onOpenBooking: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Comprehensive Estate Planning',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>Confidential Legal Communication</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            Contact Barrister Emmanuel Onwa
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Reach out to schedule a legal consultation at our Ilorin Law Chambers, inquire about land title perfection (C of O / KWAGIS), High Court probate, or CAC business registration.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Office Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-xl border border-slate-800">
              <h2 className="font-serif text-2xl font-bold text-amber-400">
                Chambers Location
              </h2>

              <ul className="space-y-6 text-sm">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">Primary Law Chambers</span>
                    <span className="font-medium text-white block">{ATTORNEY_INFO.officeAddress}</span>
                    <span className="text-slate-300">{ATTORNEY_INFO.cityStateZip}</span>
                    <span className="text-[11px] text-amber-400/90 block mt-1">(Opposite Challenge Junction, Taiwo Isale)</span>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">Direct Mobile & WhatsApp</span>
                    <a href={`tel:${ATTORNEY_INFO.phone}`} className="font-bold text-xl text-amber-400 hover:underline block">
                      {ATTORNEY_INFO.phone}
                    </a>
                    <a 
                      href={`https://wa.me/2348064710262?text=${encodeURIComponent('Hello Barrister Emmanuel Onwa, I would like to inquire about legal consultation/representation.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3.5 py-1.5 rounded-lg text-xs transition-colors shadow-md"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Start WhatsApp Chat</span>
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">Confidential Email</span>
                    <a href={`mailto:${ATTORNEY_INFO.email}`} className="font-medium text-white hover:text-amber-300 transition-colors">
                      {ATTORNEY_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">Office Hours</span>
                    <span className="text-slate-200 text-xs leading-relaxed block">{ATTORNEY_INFO.officeHours}</span>
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={onOpenBooking}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-2.5 px-4 sm:py-3.5 sm:px-6 rounded-xl text-xs sm:text-sm transition-all shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation Calendar</span>
                </button>
              </div>

            </div>

            {/* Interactive Location & Directions Guide */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 text-xs">
              <h3 className="font-serif font-bold text-slate-900 text-sm flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-amber-600" />
                <span>Visiting Our Chambers in Ilorin</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Situated along Taiwo Isale Road, directly opposite Challenge Junction, Ilorin, Kwara State. Accessible via major transport corridors from Unity Road and Offa Garage.
              </p>
              <div className="pt-2 text-amber-900 font-medium text-[11px]">
                • Nearby Landmarks: Challenge Junction, Taiwo Isale, High Court Complex Ilorin.
              </div>
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
                    All inquiries are strictly confidential and responded to promptly.
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
                      placeholder="e.g. Alhaji Kayode Jimoh"
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
                      <option value="Land & Property Law (C of O)">Land & Property Law (C of O / KWAGIS)</option>
                      <option value="Probate & Letters of Admin">Probate & Letters of Administration</option>
                      <option value="Wills & Family Living Trusts">Wills & Family Living Trusts</option>
                      <option value="Civil & Land Litigation">Civil & Land Litigation</option>
                      <option value="CAC Corporate Law">CAC Business Incorporation</option>
                      <option value="Asset Shielding & Fiduciary">Asset Shielding & Fiduciary</option>
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
                    placeholder="Please share a brief summary of your land purchase, probate matter, or legal inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold py-2.5 px-4 sm:py-3.5 sm:px-6 rounded-xl text-xs sm:text-sm transition-all shadow-md"
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
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Barrister Emmanuel Onwa's chambers assistant will review your inquiry and contact you at <span className="font-semibold text-slate-900">{formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', serviceInterest: 'Land & Property Law (C of O)', message: '' }); }}
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
