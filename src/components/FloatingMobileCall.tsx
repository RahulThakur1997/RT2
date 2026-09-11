import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

export const FloatingMobileCall: React.FC = () => {
  return (
    <div
      id="floating-mobile-call-container"
      className="md:hidden fixed bottom-4 left-4 right-4 z-40 pointer-events-auto"
    >
      <a
        id="floating-mobile-call-btn"
        href={BUSINESS_INFO.telLink}
        className="w-full py-3.5 px-5 rounded-full bg-[#ac0e13] hover:bg-[#920b10] text-white font-heading font-bold text-sm tracking-wider uppercase shadow-xl flex items-center justify-center gap-2.5 border-2 border-white/20 transition-transform active:scale-98"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <Phone className="w-3.5 h-3.5 text-white" />
        </div>
        <span>CALL KEYSTONE ({BUSINESS_INFO.phone})</span>
      </a>
    </div>
  );
};
