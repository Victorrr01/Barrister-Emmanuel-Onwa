import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { PRACTICE_AREAS, TEAM_MEMBERS } from '../data/legalData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    practiceArea: '',
    lawyer: '',
    date: '',
    time: '',
    type: '',
    description: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (!isOpen) {
      // Reset after a short delay so the closing animation is smooth
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          practiceArea: '',
          lawyer: '',
          date: '',
          time: '',
          type: '',
          description: '',
          consent: false
        });
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      // NOTE: Replace YOUR_FORM_ID with the actual Formspree form ID once created
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          _subject: "New Consultation Request - Redemption Chambers",
          "Full Name": formData.fullName,
          "Email": formData.email,
          "Phone": formData.phone,
          "Practice Area": formData.practiceArea,
          "Preferred Lawyer": formData.lawyer || "No preference",
          "Preferred Date": formData.date,
          "Preferred Time": formData.time,
          "Consultation Type": formData.type,
          "Description": formData.description,
          "Consent": formData.consent ? "Yes" : "No"
        })
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
          <div>
            <h3 className="font-serif text-2xl font-bold text-slate-900">Book a Consultation</h3>
            <p className="text-sm text-slate-500 mt-1">Schedule a meeting with our legal team.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-slate-900">Request Received</h4>
              <p className="text-slate-600 max-w-md leading-relaxed">
                Thank you — your consultation request has been received. Our team will contact you within 1-2 business days to confirm your appointment.
              </p>
              <button
                onClick={onClose}
                className="mt-8 px-6 py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New Consultation Request - Redemption Chambers" />
              {isError && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200 text-sm">
                  We encountered an error submitting your request. Please try again, or contact the firm directly by phone.
                </div>
              )}

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Full Name <span className="text-red-500">*</span></label>
                  <input 
                    required
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Consultation Type <span className="text-red-500">*</span></label>
                  <div className="flex space-x-4 pt-2">
                    {['In-Person', 'Phone Call', 'Video Call'].map(type => (
                      <label key={type} className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                        <input 
                          type="radio" 
                          name="type" 
                          value={type}
                          required
                          checked={formData.type === type}
                          onChange={handleInputChange}
                          className="text-amber-500 focus:ring-amber-500"
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Practice Area <span className="text-red-500">*</span></label>
                  <select 
                    required
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  >
                    <option value="" disabled>Select Practice Area</option>
                    {PRACTICE_AREAS.map(area => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Preferred Lawyer <span className="text-slate-400 font-normal">(Optional)</span></label>
                  <select 
                    name="lawyer"
                    value={formData.lawyer}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  >
                    <option value="">No preference</option>
                    {TEAM_MEMBERS.map(member => (
                      <option key={member.name} value={member.name}>{member.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                    <CalendarIcon className="w-4 h-4 text-slate-400" />
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input 
                    required
                    type="date" 
                    name="date"
                    min={today}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400" />
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <select 
                    required
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  >
                    <option value="" disabled>Select Time</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Brief Description of Legal Matter <span className="text-red-500">*</span></label>
                <textarea 
                  required
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  placeholder="Please provide a brief summary of your legal matter..."
                ></textarea>
                <div className="text-xs text-right text-slate-400">
                  {formData.description.length}/500
                </div>
              </div>

              <label className="flex items-start space-x-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-amber-500 rounded border-slate-300 focus:ring-amber-500"
                />
                <span className="text-sm text-slate-600 leading-snug">
                  I understand this form does not create a lawyer-client relationship until confirmed by the firm. <span className="text-red-500">*</span>
                </span>
              </label>

              {/* Footer Actions */}
              <div className="pt-6 border-t border-slate-100 flex justify-end space-x-4">
                <button 
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center min-w-[140px] px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-lg shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request Consultation"
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
