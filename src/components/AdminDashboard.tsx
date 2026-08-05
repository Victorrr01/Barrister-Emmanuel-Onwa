import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Clock, User, Phone, Mail, CheckCircle, Database } from 'lucide-react';

interface Booking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  practiceArea: string;
  lawyer: string;
  date: string;
  time: string;
  type: string;
  description: string;
  consent: boolean;
  submittedAt: string;
}

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (isOpen) {
      const stored = JSON.parse(localStorage.getItem('redemption_bookings') || '[]');
      // Sort by newest first
      stored.sort((a: Booking, b: Booking) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
      setBookings(stored);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-5xl h-[85vh] bg-slate-50 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900">Admin Dashboard</h3>
              <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Consultation Requests</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {bookings.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-3">
              <Database className="w-12 h-12 opacity-20" />
              <p>No consultation requests found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {bookings.map((booking) => (
                <div key={booking.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
                  <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                    <div>
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <User className="w-4 h-4 text-amber-500" /> {booking.fullName}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">Submitted: {new Date(booking.submittedAt).toLocaleString()}</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                      New
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-slate-600"><Mail className="w-3.5 h-3.5 text-slate-400" /> {booking.email}</p>
                      <p className="flex items-center gap-2 text-slate-600"><Phone className="w-3.5 h-3.5 text-slate-400" /> {booking.phone}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-slate-600"><CalendarIcon className="w-3.5 h-3.5 text-slate-400" /> {booking.date}</p>
                      <p className="flex items-center gap-2 text-slate-600"><Clock className="w-3.5 h-3.5 text-slate-400" /> {booking.time}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg text-sm space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 uppercase">Type</span>
                        <span className="font-medium text-slate-700">{booking.type}</span>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 uppercase">Area</span>
                        <span className="font-medium text-slate-700">{booking.practiceArea}</span>
                      </div>
                    </div>
                    {booking.lawyer && (
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 uppercase">Lawyer</span>
                        <span className="font-medium text-slate-700">{booking.lawyer}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase mb-1">Description</span>
                    <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg whitespace-pre-wrap">{booking.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
