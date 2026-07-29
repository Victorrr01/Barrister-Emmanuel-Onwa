import React, { useState } from 'react';
import { PageType, PracticeArea } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PracticeAreaModal } from './components/PracticeAreaModal';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { MessageSquare, Calendar, MessageCircle } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [defaultBookingService, setDefaultBookingService] = useState<string | undefined>(undefined);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);
  
  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceTitle?: string) => {
    setDefaultBookingService(serviceTitle);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Active Page View */}
      <main className="flex-1 pt-[80px] md:pt-[120px]">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onSelectPracticeArea={(area) => setSelectedPracticeArea(area)}
          />
        )}

        

        {currentPage === 'services' && (
          <Services
            onOpenBooking={handleOpenBooking}
            onSelectPracticeArea={(area) => setSelectedPracticeArea(area)}
          />
        )}

        {currentPage === 'contact' && (
          <Contact
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
        <a
          href={`https://wa.me/2348064710262?text=${encodeURIComponent('Hello Redemption Chambers, I would like to inquire about legal consultation/representation.')}`}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-11 w-11 sm:w-auto sm:px-4 rounded-full shadow-md flex items-center justify-center sm:space-x-2 text-xs hover:scale-105 active:scale-95 transition-all duration-200 border border-emerald-400 group"
          title="Chat on WhatsApp (+234 806 471 0262)"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp (+234 806 471 0262)</span>
        </a>

        <div className="flex items-center space-x-2">
          

          <button
            onClick={() => handleOpenBooking()}
            id="floating-booking-btn"
            className="h-11 w-11 sm:w-auto sm:px-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold shadow-md flex items-center justify-center sm:space-x-2 text-xs hover:scale-105 active:scale-95 transition-all duration-200 border border-amber-300"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Book Consultation</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Modals & Drawers */}
      <ConsultationModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={defaultBookingService}
      />

      <PracticeAreaModal
        practiceArea={selectedPracticeArea}
        onClose={() => setSelectedPracticeArea(null)}
        onOpenBooking={handleOpenBooking}
      />

      

    </div>
  );
}
