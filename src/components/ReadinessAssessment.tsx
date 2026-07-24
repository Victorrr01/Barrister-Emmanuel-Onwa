import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, ArrowRight, CheckCircle2, RotateCcw, Calendar } from 'lucide-react';

interface ReadinessAssessmentProps {
  onOpenBooking: () => void;
}

export const ReadinessAssessment: React.FC<ReadinessAssessmentProps> = ({ onOpenBooking }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({
    1: -1,
    2: -1,
    3: -1,
    4: -1
  });

  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Do you currently have a Revocable Living Trust or Will?",
      options: [
        { label: "Yes, I have a Living Trust with pour-over wills", score: 25 },
        { label: "Yes, I have a simple Will only", score: 15 },
        { label: "No, I currently have no estate documents", score: 0 }
      ]
    },
    {
      id: 2,
      question: "When was your estate plan last reviewed by a specialized lawyer?",
      options: [
        { label: "Within the last 1-3 years", score: 25 },
        { label: "Over 5 years ago or created online", score: 10 },
        { label: "Never reviewed / No existing plan", score: 0 }
      ]
    },
    {
      id: 3,
      question: "Do you own real estate, business equity, or minor dependents?",
      options: [
        { label: "Yes, I own primary/secondary real estate or business equity", score: 25 },
        { label: "Yes, I have minor children requiring guardianship designation", score: 25 },
        { label: "Standard bank accounts & personal belongings only", score: 15 }
      ]
    },
    {
      id: 4,
      question: "Are your Financial Power of Attorney & Healthcare Directives designated?",
      options: [
        { label: "Yes, signed, notarized, and shared with named agents", score: 25 },
        { label: "Drafted but not fully notarized or updated", score: 10 },
        { label: "No, no medical or financial proxies designated", score: 0 }
      ]
    }
  ];

  const handleSelect = (qId: number, score: number) => {
    setAnswers(prev => ({ ...prev, [qId]: score }));
  };

  const answerValues = Object.values(answers) as number[];
  const isComplete = answerValues.every(val => val !== -1);
  const totalScore = answerValues.reduce((acc: number, curr: number) => (curr > -1 ? acc + curr : acc), 0);

  const getScoreReport = () => {
    if (totalScore >= 80) {
      return {
        level: "High Estate Security",
        color: "text-emerald-600 bg-emerald-50 border-emerald-200",
        summary: "Your estate framework is solid! However, minor updates to tax laws or beneficiary designations could still optimize your trust protection.",
        actionText: "Claim Your Free Estate Readiness Check"
      };
    } else if (totalScore >= 50) {
      return {
        level: "Moderate Exposure Risk",
        color: "text-amber-600 bg-amber-50 border-amber-200",
        summary: "Your current plan may leave key assets vulnerable to court probate delays, state inheritance taxes, or outdated guardianship terms.",
        actionText: "Schedule a Strategic Estate Blueprint Review"
      };
    } else {
      return {
        level: "High Probate Vulnerability",
        color: "text-rose-600 bg-rose-50 border-rose-200",
        summary: "Without a Revocable Living Trust or clear directives, your estate will automatically be subjected to state intestate probate court, incurring costly fees and public delays.",
        actionText: "Protect Your Family's Legacy Today"
      };
    }
  };

  const report = getScoreReport();

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-800 relative overflow-hidden">
      {/* Decorative background glow */}

      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Interactive Tool • 60-Second Self-Assessment</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Evaluate Your Estate Plan Readiness
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Answer 4 quick questions to discover whether your family and assets are protected from court probate, estate taxes, and legal ambiguity.
          </p>
        </div>

        {!submitted ? (
          <div className="space-y-6">
            {questions.map((q, idx) => (
              <div key={q.id} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-3">
                <h4 className="font-serif font-semibold text-slate-100 text-base flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{q.question}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = answers[q.id] === opt.score;
                    return (
                      <button
                        type="button"
                        key={oIdx}
                        onClick={() => handleSelect(q.id, opt.score)}
                        className={`text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
                            : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:border-slate-500 hover:bg-slate-800'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="text-center pt-2">
              <button
                type="button"
                disabled={!isComplete}
                onClick={() => setSubmitted(true)}
                className={`inline-flex items-center space-x-2 px-5 py-3 sm:px-8 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xl ${
                  isComplete
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 scale-100'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                }`}
              >
                <span>Calculate My Readiness Score</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              {!isComplete && (
                <p className="text-xs text-slate-400 mt-2">
                  Please select an answer for all 4 questions above.
                </p>
              )}
            </div>
          </div>
        ) : (
          /* Report Screen */
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-center animate-in fade-in duration-300">
            <div className="inline-block">
              <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1">Your Calculated Score</span>
              <div className="text-5xl font-serif font-extrabold text-amber-400 tracking-tight">
                {totalScore} <span className="text-2xl text-slate-500">/ 100</span>
              </div>
            </div>

            <div className={`p-4 rounded-xl border text-sm font-semibold max-w-md mx-auto ${report.color}`}>
              <div className="flex items-center justify-center space-x-2 mb-1">
                <AlertCircle className="w-4 h-4" />
                <span>{report.level}</span>
              </div>
              <p className="text-xs font-normal text-slate-700 mt-1 leading-relaxed">
                {report.summary}
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-left text-xs text-slate-300 space-y-2.5 max-w-lg mx-auto">
              <div className="font-bold text-amber-400 uppercase tracking-wider text-[11px] mb-1">
                Personalized Legal Recommendations:
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Establish or update a Revocable Living Trust to bypass Probate Court entirely.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Verify that bank accounts, deeds, and retirement beneficiaries are correctly titled to your trust.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Formalize durable power of attorney instruments to protect decision-making in case of incapacity.</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>{report.actionText}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setAnswers({ 1: -1, 2: -1, 3: -1, 4: -1 });
                  setSubmitted(false);
                }}
                className="inline-flex items-center space-x-1.5 text-slate-400 hover:text-white text-xs py-2 px-4"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Assessment</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
