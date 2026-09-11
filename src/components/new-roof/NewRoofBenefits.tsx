import React from 'react';
import { Check, ShieldCheck, Phone } from 'lucide-react';
import { NEW_ROOF_BENEFITS } from '../../data/newRoofData';
import { BUSINESS_INFO } from '../../data/roofingData';

interface NewRoofBenefitsProps {
  onOpenQuoteModal: () => void;
}

export const NewRoofBenefits: React.FC<NewRoofBenefitsProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="benefits-section"
      aria-label="Why Install a New Roof"
      className="bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100"
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Heading, Narrative & Contact Callout (col-span-5) */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#ac0e13]" />
              <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-[#ac0e13]">
                LONG-TERM PROPERTY PROTECTION
              </span>
            </div>

            <h2 className="font-heading text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-[#242F6B] leading-[1.2] tracking-tight">
              Looking for a New Roof?
              <br />
              <span className="text-[#ac0e13]">We Make Roofing Simple.</span>
            </h2>

            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-normal">
              A failing roof is not just an aesthetic issue—it exposes your ceilings, structural rafters, insulation, and electrical cabling to progressive moisture damage.
            </p>

            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-normal">
              Replacing a tired, porous roof with modern high-grade materials provides lasting reassurance. Keystone guarantees smooth coordination, transparent pricing, and courteous on-site service from survey to completion.
            </p>

            {/* Compact callout card */}
            <div className="bg-[#F2F8FC] border border-[#242F6B]/15 rounded-lg p-4 sm:p-5 mt-4 space-y-3">
              <div className="flex items-center gap-2.5 text-[#242F6B]">
                <ShieldCheck className="w-5 h-5 text-[#ac0e13] shrink-0" />
                <span className="font-heading font-bold text-xs sm:text-sm">
                  Complimentary Roof Surveys &amp; Quotations
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Contact our local Reading team today for honest, pressure-free advice and an itemised written quote.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="px-4 py-2 rounded bg-[#242F6B] hover:bg-[#1b2352] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  Request Survey
                </button>
                <a
                  href={BUSINESS_INFO.telLink}
                  className="text-xs font-heading font-bold text-[#242F6B] hover:text-[#ac0e13] flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Checklist (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
              {NEW_ROOF_BENEFITS.map((benefit, index) => (
                <div
                  key={index}
                  className="py-4 sm:py-4.5 flex items-start gap-3.5 sm:gap-4 transition-colors hover:bg-[#F2F8FC]/60 px-2 sm:px-3 rounded-md"
                >
                  {/* Circular Check Icon */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#242F6B]/10 text-[#242F6B] border border-[#242F6B]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#ac0e13] stroke-[2.5]" />
                  </div>

                  {/* Title & Description */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-sm sm:text-[15px] font-bold text-[#242F6B] leading-tight mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-gray-600 leading-normal font-normal">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
