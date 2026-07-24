import React from 'react';
import { PracticeArea } from '../types';
import { X, CheckCircle, Users, ArrowRight, Shield } from 'lucide-react';

interface PracticeAreaModalProps {
  practiceArea: PracticeArea | null;
  onClose: () => void;
  onOpenBooking: (serviceTitle?: string) => void;
}

export const PracticeAreaModal: React.FC<PracticeAreaModalProps> = ({
  practiceArea,
  onClose,
  onOpenBooking,
}) => {
  if (!practiceArea) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 text-slate-800 animate-in fade-in zoom-in duration-200"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 relative">
          <button 
            onClick={onClose} 
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Shield className="w-4 h-4" />
            <span>Practice Area Detail</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            {practiceArea.title}
          </h3>
          <p className="text-slate-300 text-sm mt-2 leading-relaxed">
            {practiceArea.shortDesc}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="font-serif font-bold text-slate-900 text-lg mb-2">
              Overview & Legal Approach
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {practiceArea.fullDesc}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h5 className="font-serif font-bold text-slate-900 text-sm mb-3 flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-amber-600" />
              <span>Key Legal Deliverables Included:</span>
            </h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {practiceArea.keyDeliverables.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For */}
          <div>
            <h5 className="font-serif font-bold text-slate-900 text-sm mb-3 flex items-center space-x-2">
              <Users className="w-4 h-4 text-slate-700" />
              <span>Who This Service Is Designed For:</span>
            </h5>
            <ul className="space-y-2 text-xs text-slate-600">
              {practiceArea.idealFor.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 bg-slate-100/70 px-3 py-2 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  <span className="font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking(practiceArea.title);
              }}
              className="flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-2.5 px-4 sm:py-3 sm:px-6 rounded-xl text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Discuss {practiceArea.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
