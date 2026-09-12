import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/roofingData';

interface NewRoofCTABannerProps {
  onOpenQuoteModal: () => void;
}

export const NewRoofCTABanner: React.FC<NewRoofCTABannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="cta-banner-section"
      aria-label="Speak to Local Roofing Experts"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
        {/* Large Architectural CTA Card */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
          {/* Background Photograph with Strong Navy Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80"
              alt="British residential slate roof construction"
              className="w-full h-full object-cover object-center"
            />
            {/* Deep Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040205]/95 via-[#040205]/92 to-[#1a171d]/90" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

          {/* Card Content with Substantial Padding */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-14 text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#C80103]" />
              <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-gray-200">
                NO OBLIGATION CONSULTATION
              </span>
              <span className="h-0.5 w-6 bg-[#C80103]" />
            </div>

            <h2 className="font-heading text-[24px] sm:text-[30px] md:text-[34px] font-extrabold text-white leading-tight tracking-tight">
              Speak To Your Local Roofing Experts
            </h2>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal max-w-xl mx-auto">
              Planning a new roof? Talk to A T Roofing Birmingham about your property, requirements and next steps.
            </p>

            {/* Two CTAs with Distinct Hierarchy */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              {/* Primary Call Us CTA (Red) */}
              <a
                href={BUSINESS_INFO.telLink}
                className="px-7 py-3.5 rounded-md bg-[#C80103] hover:bg-[#a50102] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>CALL US: {BUSINESS_INFO.phone}</span>
              </a>

              {/* Secondary Get A Quote CTA (White Background / Dark Text) */}
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-7 py-3.5 rounded-md bg-white hover:bg-gray-100 text-[#040205] font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#040205]" />
                <span>GET A QUOTE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
