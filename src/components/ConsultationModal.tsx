import React, { useState } from 'react';
import { ATTORNEY_INFO } from '../data/legalData';
import { X, Clock, Video, CheckCircle2, Shield, ArrowRight, ArrowLeft, Building, Phone } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [serviceType, setServiceType] = useState(defaultService || '30-min-virtual');
  const [method, setMethod] = useState<'virtual' | 'in-person' | 'phone'>('virtual');
  const [selectedDate, setSelectedDate] = useState('2026-07-28');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    assetOverview: '',
    hasExistingPlan: 'no'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsBooked(true);
        setStep(3);
      }, 800);
    }
  };

  const timeSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80  flex items-center justify-center p-3 sm:p-6">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 text-slate-800 animate-in fade-in zoom-in duration-200 my-auto"
        id="consultation-modal-container"
      >
        {/* Top Modal Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-8 relative">
          <div className="flex items-center justify-between mb-3">
            <button 
              type="button"
              onClick={onClose} 
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
              title="Go back to site"
              id="header-goback-btn"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
              <span>Go Back</span>
            </button>

            <button 
              onClick={onClose} 
              className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
              id="close-modal-btn"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Shield className="w-4 h-4" />
            <span>Confidential Legal Consultation</span>
          </div>

          <h3 className="font-serif text-xl sm:text-3xl font-bold text-white">
            Schedule Legal Consultation (Nationwide & Virtual)
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Directly with Redemption Chambers • No-obligation & 100% confidential.
          </p>

          {/* Step indicator */}
          {!isBooked && (
            <div className="flex items-center space-x-2 mt-4 sm:mt-6">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-amber-400' : 'bg-slate-800'}`}></div>
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-amber-400' : 'bg-slate-800'}`}></div>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8">
          {isBooked ? (
            /* Step 3: Success Screen */
            <div className="text-center py-4 sm:py-6 space-y-4 sm:space-y-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  Consultation Request Confirmed!
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Redemption Chambers has received your booking.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Date & Time:</span>
                  <span className="font-semibold text-slate-900">{selectedDate} at {selectedTime} WAT</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Format:</span>
                  <span className="font-semibold text-slate-900 capitalize">{method} Consultation</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Legal Counsel:</span>
                  <span className="font-semibold text-slate-900">{ATTORNEY_INFO.name}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                A confirmation summary and location/meeting details have been sent to <span className="text-slate-700 font-medium">{formData.email}</span>.
              </p>

              <div className="pt-2 sm:pt-4 flex items-center justify-center space-x-3">
                <button
                  onClick={onClose}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 sm:px-8 sm:py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center space-x-1.5"
                >
                  <ArrowLeft className="w-4 h-4 text-amber-400" />
                  <span>Return to Website</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNextStep}>
              {step === 1 && (
                <div className="space-y-4 sm:space-y-6">
                  {/* Select Service Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 sm:mb-3">
                      1. Select Consultation Focus
                    </label>
                    <div className="grid grid-cols-1 gap-2.5">
                      {[
                        {
                          id: '30-min-virtual',
                          title: '30-Min Strategic Legal Discovery',
                          badge: 'Complimentary',
                          desc: 'Overview of your land purchase, High Court probate, or contract legal needs.'
                        },
                        {
                          id: 'land-search-review',
                          title: 'Land Title & KWAGIS Search Consultation',
                          badge: 'Land & C of O',
                          desc: 'Audit of Deed of Assignment, C of O status, and property encumbrances in Ilorin.'
                        },
                        {
                          id: 'probate-urgent',
                          title: 'High Court Probate & Letters of Administration',
                          badge: 'Estate & Probate',
                          desc: 'For family heirs or named executors seeking High Court Ilorin asset release.'
                        }
                      ].map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setServiceType(item.id)}
                          className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                            serviceType === item.id
                              ? 'border-amber-500 bg-amber-50/50 shadow-sm'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm">{item.title}</span>
                            <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-900 text-amber-400 shrink-0 ml-2">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-snug">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Format Choice */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 sm:mb-3">
                      2. Consultation Method
                    </label>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {[
                        { id: 'virtual', label: 'Virtual Zoom', icon: Video },
                        { id: 'in-person', label: 'Ilorin Chambers', icon: Building },
                        { id: 'phone', label: 'Phone / WhatsApp', icon: Phone }
                      ].map((m) => {
                        const Icon = m.icon;
                        return (
                          <button
                            type="button"
                            key={m.id}
                            onClick={() => setMethod(m.id as any)}
                            className={`flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl border text-[11px] sm:text-xs font-semibold transition-all ${
                              method === m.id
                                ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-md'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 mb-1" />
                            <span className="text-center leading-tight">{m.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Date & Time Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Time Slot (WAT)
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        {timeSlots.map((ts) => (
                          <option key={ts} value={ts}>{ts} WAT</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Step 1 Actions with Go Back */}
                  <div className="flex items-center space-x-2.5 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-1/3 flex items-center justify-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm transition-colors border border-slate-200"
                      id="modal-step1-back-btn"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 text-slate-600" />
                      <span>Go Back</span>
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 flex items-center justify-center space-x-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20"
                    >
                      <span>Proceed to Contact Info</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 sm:space-y-5">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 sm:p-4 flex items-center justify-between text-xs text-amber-900">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="truncate">Selected: <strong>{selectedDate}</strong> at <strong>{selectedTime} WAT</strong></span>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => setStep(1)} 
                      className="text-amber-800 underline font-semibold hover:text-amber-950 shrink-0 ml-2"
                    >
                      Change
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alhaji Kayode Jimoh"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                        className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 803 358 1904"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Do you have existing property title/Will?
                      </label>
                      <select
                        value={formData.hasExistingPlan}
                        onChange={(e) => setFormData({ ...formData, hasExistingPlan: e.target.value })}
                        className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="no">No, purchasing new property / creating Will</option>
                        <option value="yes-old">Yes, Deed of Assignment / C of O available</option>
                        <option value="probate">N/A - Seeking High Court Probate / Admin</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Brief Notes / Legal Inquiries
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g., We purchased land along Fate Road, Ilorin and want to perfect C of O and verify titles..."
                      value={formData.assetOverview}
                      onChange={(e) => setFormData({ ...formData, assetOverview: e.target.value })}
                      className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 flex items-center justify-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm transition-colors border border-slate-200"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 text-slate-600" />
                      <span>Go Back</span>
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-2/3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Confirming...' : 'Confirm Booking Request'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

