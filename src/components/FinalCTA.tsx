import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface FinalCTAProps {
  onOpenQuoteModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="final-cta" className="relative py-20 sm:py-28 bg-[#040205] text-white overflow-hidden">
      {/* UK Roofing Background */}
      <img
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80"
        alt="British residential slate roof construction"
        className="absolute inset-0 w-full h-full object-cover object-center"
        referrerPolicy="no-referrer"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#040205]/92 via-[#040205]/96 to-[#040205]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs sm:text-sm font-heading font-bold text-[#C80103] uppercase tracking-widest mb-3">
          Prompt, Reliable Service
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
          Need Roofing Work?
          <span className="block text-white mt-1">Let's Get Your Roof Sorted.</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
          Speak to A T Roofing Birmingham today for professional roofing advice and a free quote.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            id="final-cta-quote-btn"
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-md bg-[#C80103] hover:bg-[#a50102] text-white font-heading font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            id="final-cta-call-btn"
            href={BUSINESS_INFO.telLink}
            className="w-full sm:w-auto px-7 sm:px-9 py-4 rounded-md bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-sm sm:text-base tracking-wider uppercase border border-white/25 flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 text-[#C80103]" />
            <span>CALL {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
