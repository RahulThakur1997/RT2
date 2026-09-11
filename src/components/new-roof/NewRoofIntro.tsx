import React from 'react';
import { ArrowRight, Layers, Hammer, Building } from 'lucide-react';

interface NewRoofIntroProps {
  onOpenQuoteModal: () => void;
}

export const NewRoofIntro: React.FC<NewRoofIntroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="intro-section"
      aria-label="About Keystone New Roof Installations"
      className="bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100"
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Text Column (col-span-6 or 7) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#ac0e13]" />
              <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-[#ac0e13]">
                ROOFING CONTRACTORS IN READING
              </span>
            </div>

            {/* Main H2 */}
            <h2 className="font-heading text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-[#242F6B] leading-[1.2] tracking-tight">
              Professional New Roof Installation From Keystone Roofing &amp; Building
            </h2>

            {/* Sub-copy overview */}
            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-normal">
              Whether your existing roof covering has deteriorated with age, sustained storm damage, or you are undertaking an extensive property renovation, Keystone delivers end-to-end new roof installations built strictly to British Standards (BS 5534).
            </p>

            {/* Three H3 Content Blocks */}
            <div className="space-y-4 pt-1">
              {/* Block 1: All Roof Types */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-md bg-[#242F6B]/10 text-[#242F6B] flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-[15px] font-bold text-[#242F6B] mb-1">
                    All Roof Types
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-normal">
                    We expertly install traditional Welsh and Spanish natural slate, interlocking concrete tiles, handmade clay plain tiles, and modern architectural flat roofing systems.
                  </p>
                </div>
              </div>

              {/* Block 2: Supply & Installation */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-md bg-[#242F6B]/10 text-[#242F6B] flex items-center justify-center shrink-0 mt-0.5">
                  <Hammer className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-[15px] font-bold text-[#242F6B] mb-1">
                    Supply &amp; Installation
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-normal">
                    We manage the entire project: certified scaffolding, strip-out of tired coverings, structural timber reinforcement, high-performance breathable underlay, treated battens, and dry-fix ridge systems.
                  </p>
                </div>
              </div>

              {/* Block 3: Domestic & Commercial */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-md bg-[#242F6B]/10 text-[#242F6B] flex items-center justify-center shrink-0 mt-0.5">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-[15px] font-bold text-[#242F6B] mb-1">
                    Domestic &amp; Commercial
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-normal">
                    From detached, semi-detached, and terraced houses to residential extensions, listed properties, and light commercial premises, our skilled tradesmen complete every roof with meticulous care.
                  </p>
                </div>
              </div>
            </div>

            {/* Primary CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-md bg-[#242F6B] hover:bg-[#ac0e13] text-white font-heading font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors duration-200 shadow-sm cursor-pointer inline-flex items-center gap-2"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT: Authentic Roofing Installation Image (col-span-6) */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-gray-200/80 bg-gray-100 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/why-choose-us.jpg"
                alt="Keystone roofers completing high quality roof installation in Reading"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-102"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              {/* Subtle quality badge on image */}
              <div className="absolute bottom-4 left-4 bg-[#151D45]/90 backdrop-blur-xs text-white px-3.5 py-2 rounded-md border border-white/20 shadow-md">
                <span className="text-[11px] font-heading font-bold block text-white tracking-wide">
                  BS 5534 Compliant Workmanship
                </span>
                <span className="text-[10px] text-gray-300">
                  Precision batten spacing &amp; dry-fix roofing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
