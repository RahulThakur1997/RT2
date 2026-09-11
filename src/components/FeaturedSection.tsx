import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FeaturedSectionProps {
  onOpenQuoteModal: () => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="featured-roofing" className="bg-[#242F6B] text-white py-16 sm:py-24 relative overflow-hidden">
      {/* Background subtle geometry */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Large image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[8px] overflow-hidden shadow-2xl bg-[#151D45] aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80"
                alt="Quality roofing installation and weatherproofing"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151D45]/70 via-transparent to-black/20" />
            </div>
          </div>

          {/* RIGHT: High impact copy & Red CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#ac0e13]" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-gray-200">
                ROOFING YOU CAN RELY ON
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Protect Your Home With Roofing Done Right
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
              Whether your roof needs attention today or you're planning a larger project, Keystone Roofing & Building Ltd can help you understand the work required and provide a clear route forward.
            </p>

            {/* Value checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ac0e13] shrink-0" />
                <span className="text-sm sm:text-base text-gray-100 font-medium">
                  Direct inspection by experienced roofing specialists
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ac0e13] shrink-0" />
                <span className="text-sm sm:text-base text-gray-100 font-medium">
                  Clear, detailed quotations with no hidden costs
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ac0e13] shrink-0" />
                <span className="text-sm sm:text-base text-gray-100 font-medium">
                  Tidy worksite etiquette and respectful customer care
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                id="featured-quote-cta-btn"
                onClick={onOpenQuoteModal}
                className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-md bg-[#ac0e13] hover:bg-[#920b10] text-white font-heading font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl flex items-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>REQUEST A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
