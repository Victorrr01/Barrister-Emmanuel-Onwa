import React, { useState } from 'react';
import { FEE_ESTIMATOR_OPTIONS } from '../data/legalData';
import { Check, Shield, HelpCircle, ArrowRight, DollarSign } from 'lucide-react';

interface FeeEstimatorProps {
  onOpenBooking: (packageTitle?: string) => void;
}

export const FeeEstimator: React.FC<FeeEstimatorProps> = ({ onOpenBooking }) => {
  const [selectedPackage, setSelectedPackage] = useState(FEE_ESTIMATOR_OPTIONS[1].id);
  const [addDeedTransfer, setAddDeedTransfer] = useState(true);
  const [addBusinessAddon, setAddBusinessAddon] = useState(false);

  const currentPkg = FEE_ESTIMATOR_OPTIONS.find(p => p.id === selectedPackage) || FEE_ESTIMATOR_OPTIONS[1];

  let calculatedTotal = currentPkg.priceNum;
  if (addDeedTransfer && currentPkg.id === 'essential-plan') calculatedTotal += 50000;
  if (addBusinessAddon) calculatedTotal += 75000;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg text-slate-800">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-amber-800 text-xs font-bold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5 text-amber-600" />
            <span>100% Transparent Flat-Fee Rates</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Predictable Legal Fee Structure
          </h3>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            No unpredictable hourly billing or surprise fees. Every client receives a written fixed quote before work begins.
          </p>
        </div>

        {/* Package Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEE_ESTIMATOR_OPTIONS.map((pkg) => {
            const isSelected = selectedPackage === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-500 bg-white shadow-xl ring-2 ring-amber-500/20'
                    : 'border-slate-200 bg-slate-100/60 hover:bg-white hover:border-slate-300'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-base mb-1">
                    {pkg.name}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4 min-h-[32px]">
                    {pkg.subtitle}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-serif font-extrabold text-slate-900">
                      {pkg.price}
                    </span>
                    {pkg.id !== 'probate-assistance' && (
                      <span className="text-xs text-slate-500 ml-1">flat fee</span>
                    )}
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-200 pt-4">
                    {pkg.includes.map((inc, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <div className={`w-full text-center py-2 rounded-lg text-xs font-bold transition-colors ${
                    isSelected
                      ? 'bg-slate-900 text-amber-400'
                      : 'bg-slate-200 text-slate-700'
                  }`}>
                    {isSelected ? 'Selected Package' : 'Select Package'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Add-ons Customizer */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h4 className="font-serif font-bold text-slate-900 text-sm flex items-center space-x-2">
            <Shield className="w-4 h-4 text-amber-600" />
            <span>Customize Optional Add-ons</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <label className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-all ${
              addDeedTransfer ? 'bg-amber-50/60 border-amber-300 text-slate-900' : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}>
              <input
                type="checkbox"
                checked={addDeedTransfer}
                onChange={(e) => setAddDeedTransfer(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
              />
              <div>
                <span className="font-bold block">Additional Property Title Search & Deed</span>
                <span className="text-[11px] text-slate-500">+₦50,000 per extra land plot</span>
              </div>
            </label>

            <label className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-all ${
              addBusinessAddon ? 'bg-amber-50/60 border-amber-300 text-slate-900' : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}>
              <input
                type="checkbox"
                checked={addBusinessAddon}
                onChange={(e) => setAddBusinessAddon(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
              />
              <div>
                <span className="font-bold block">CAC Company / Business Registration</span>
                <span className="text-[11px] text-slate-500">+₦75,000 Ltd / Business Name filing</span>
              </div>
            </label>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-500 block uppercase font-medium">Estimated Flat Fee Total</span>
              <span className="text-2xl font-serif font-extrabold text-slate-900">
                ₦{calculatedTotal.toLocaleString()} <span className="text-xs font-sans font-normal text-slate-500">(All-Inclusive Quote)</span>
              </span>
            </div>

            <button
              onClick={() => onOpenBooking(currentPkg.name)}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md"
            >
              <span>Lock In Flat-Fee Rate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
