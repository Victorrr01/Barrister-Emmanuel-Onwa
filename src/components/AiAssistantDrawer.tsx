import React, { useState } from 'react';
import { X, MessageSquare, Send, Sparkles, Shield, ChevronRight, HelpCircle } from 'lucide-react';
import { FREQUENT_QUESTIONS } from '../data/legalData';

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const AiAssistantDrawer: React.FC<AiAssistantDrawerProps> = ({ isOpen, onClose, onOpenBooking }) => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'assistant'; text: string }>>([
    {
      sender: 'assistant',
      text: "Hello! I am Barrister Emmanuel Onwa's AI Legal Assistant. How can I help answer your property title, C of O, probate, or corporate law questions today?"
    }
  ]);
  const [input, setInput] = useState('');

  if (!isOpen) return null;

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const newMsgs = [...messages, { sender: 'user' as const, text: userText }];
    setMessages(newMsgs);
    setInput('');

    // Answer matching logic based on legalData
    setTimeout(() => {
      let reply = "Thank you for asking. Under Nigerian Law, proper land conveyancing, C of O perfection, and High Court probate structures protect your assets and family legacy. For tailored legal counsel, I recommend scheduling a consultation directly with Barrister Emmanuel Onwa.";
      
      const lower = userText.toLowerCase();
      if (lower.includes('will') || lower.includes('trust') || lower.includes('land') || lower.includes('c of o')) {
        reply = "An executed Deed of Assignment accompanied by a KWAGIS search and Certificate of Occupancy (C of O) guarantees unassailable land ownership in Kwara State. A Family Living Trust transfers real estate and accounts privately without court probate delay.";
      } else if (lower.includes('cost') || lower.includes('fee') || lower.includes('price')) {
        reply = "Barrister Emmanuel Onwa operates on a 100% transparent flat-fee model. Legal packages start at ₦150,000 for custom Wills and ₦280,000 for complete property conveyancing & family trust bundles with no surprise charges.";
      } else if (lower.includes('probate') || lower.includes('executor') || lower.includes('letter')) {
        reply = "High Court Probate or Letters of Administration clear bank accounts and property transfers for deceased relatives. Our office handles the High Court petition, Gazette publication, and beneficiary distribution.";
      } else if (lower.includes('tax') || lower.includes('cac') || lower.includes('business')) {
        reply = "We handle Corporate Affairs Commission (CAC) registrations for Limited Liability Companies and Business Names, ensuring complete regulatory compliance.";
      }

      setMessages([...newMsgs, { sender: 'assistant', text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-white">AI Legal Assistant</h4>
              <p className="text-[11px] text-amber-400 font-medium">Onwa & Co. Legal Desk • Ilorin</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Suggested Quick Questions */}
        <div className="bg-slate-50 p-3 border-b border-slate-200 text-xs">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
            Popular Legal Questions:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {[
              "Why a C of O and KWAGIS search?",
              "How does flat-fee pricing work?",
              "What is High Court probate?"
            ].map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="bg-white border border-slate-200 text-slate-700 hover:border-amber-500 hover:text-amber-900 px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-100/50">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-amber-500 text-slate-950 font-medium rounded-br-none shadow-sm'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="p-4 bg-white border-t border-slate-200 space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask a legal question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              onClick={() => handleSend(input)}
              className="bg-slate-900 hover:bg-slate-800 text-amber-400 p-2.5 rounded-xl transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-md"
          >
            <span>Book Consultation With Barrister Onwa</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
