
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { MessageCircle, Calendar } from 'lucide-react';
import { BookingModal } from './components/BookingModal';
import { AdminDashboard } from './components/AdminDashboard';
import { CONTACT_INFO } from './data/legalData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      
      <main className="flex-1 pt-[80px] md:pt-[120px]">
        <Home onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
        <button
          onClick={() => setIsBookingOpen(true)}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold h-11 w-11 sm:w-auto sm:px-4 rounded-full shadow-md flex items-center justify-center sm:space-x-2 text-xs hover:scale-105 active:scale-95 transition-all duration-200 border border-amber-300"
        >
          <Calendar className="w-4 h-4" />
          <span className="hidden sm:inline">Book a Meeting</span>
        </button>
        <a
          href={`https://wa.me/2348064710262?text=${encodeURIComponent('Hello Redemption Chambers, I would like to inquire about legal consultation/representation.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-11 w-11 sm:w-auto sm:px-4 rounded-full shadow-md flex items-center justify-center sm:space-x-2 text-xs hover:scale-105 active:scale-95 transition-all duration-200 border border-emerald-400"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp ({CONTACT_INFO.phone1})</span>
        </a>
      </div>

      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />
          <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
}
