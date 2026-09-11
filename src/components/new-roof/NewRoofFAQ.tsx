import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { NEW_ROOF_FAQS } from '../../data/newRoofData';

export const NewRoofFAQ: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('why-new-roof');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq-section"
      aria-label="Frequently Asked Questions About New Roof Installations"
      className="bg-[#F2F8FC] py-16 sm:py-20 lg:py-24 border-b border-gray-200/60"
    >
      <div className="max-w-[760px] mx-auto px-5 sm:px-6">
        {/* Centred Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="h-0.5 w-5 bg-[#ac0e13]" />
            <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-[#ac0e13]">
              QUESTIONS &amp; ADVICE
            </span>
            <span className="h-0.5 w-5 bg-[#ac0e13]" />
          </div>

          <h2 className="font-heading text-[24px] sm:text-[28px] lg:text-[34px] font-extrabold text-[#242F6B] leading-tight tracking-tight">
            New Roof Installation FAQ
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-lg mx-auto leading-relaxed">
            Clear, honest answers to common homeowner questions regarding roof replacement timelines, materials, and costs.
          </p>
        </div>

        {/* Horizontal White Accordion Rows */}
        <div className="space-y-3">
          {NEW_ROOF_FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-lg border border-gray-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/70 transition-colors"
                >
                  <span className="font-heading font-bold text-xs sm:text-sm md:text-[15px] text-[#242F6B] leading-snug">
                    {faq.question}
                  </span>

                  <div
                    className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#ac0e13] text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
