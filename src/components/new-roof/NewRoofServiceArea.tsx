import React from 'react';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICE_LOCATIONS } from '../../data/newRoofData';

interface NewRoofServiceAreaProps {
  onOpenQuoteModal: () => void;
}

export const NewRoofServiceArea: React.FC<NewRoofServiceAreaProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="service-area-section"
      aria-label="New Roof Installation Service Areas"
      className="relative bg-[#242F6B] text-white py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Subtle Map Texture & Architectural Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-8">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Subtle diagonal ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b2452]/90 via-[#242F6B] to-[#151D45]/90 pointer-events-none" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Heading, Paragraph, CTA (col-span-5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#ac0e13]" />
              <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-white/80">
                LOCAL COVERAGE &amp; PROMPT RESPONSE
              </span>
            </div>

            <h2 className="font-heading text-[24px] sm:text-[28px] lg:text-[34px] font-extrabold text-white leading-[1.15] tracking-tight">
              New Roof Installations Across Reading &amp; Berkshire
            </h2>

            <p className="text-sm sm:text-[15px] text-gray-200/90 leading-relaxed font-normal">
              Based at 116 Ballards Lane, Finchley, London, Keystone Roofing &amp; Building proudly delivers professional new roof installations throughout Finchley, London, and neighbouring communities.
            </p>

            <p className="text-sm sm:text-[15px] text-gray-200/90 leading-relaxed font-normal">
              Our local roofing specialists provide rapid site surveys, accurate estimates, and dedicated project management from initial scaffold setup to final site sign-off.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-md bg-white hover:bg-gray-100 text-[#242F6B] font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-[#ac0e13]" />
              </button>

              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-[#ac0e13]" />
                <span>Fully Insured</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Location Grid (col-span-7) */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-xs border border-white/12 rounded-xl p-6 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <span className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase text-white/90">
                Key Coverage Towns &amp; Villages
              </span>
              <span className="text-[11px] font-medium text-[#ac0e13] bg-[#ac0e13]/20 px-2 py-0.5 rounded border border-[#ac0e13]/30">
                Berkshire &amp; Surrounds
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 sm:gap-y-3.5 text-xs sm:text-[13px] font-heading font-medium">
              {SERVICE_LOCATIONS.map((loc, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#ac0e13] shrink-0" />
                  <span className={loc.startsWith('+') ? 'text-[#ac0e13] font-bold' : ''}>
                    {loc}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-gray-300/80 mt-5 pt-3 border-t border-white/10 italic">
              *If your property is within a 25-mile radius of Reading, our team is equipped to survey and install your new roof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
