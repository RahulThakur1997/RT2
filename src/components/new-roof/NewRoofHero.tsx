import React from 'react';
import { Star, ShieldCheck, ChevronRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/roofingData';

interface NewRoofHeroProps {
  onOpenQuoteModal: () => void;
  onNavigateHome: () => void;
}

export const NewRoofHero: React.FC<NewRoofHeroProps> = ({
  onOpenQuoteModal,
  onNavigateHome
}) => {
  return (
    <section
      id="service-hero"
      aria-label="New Roof Installations Hero"
      className="relative min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* BACKGROUND: Authentic British Residential Roofing Installation Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/uk-roofing-hero.jpg"
          alt="British residential pitched roof installation in Reading"
          className="w-full h-full object-cover object-center scale-102"
          onError={(e) => {
            // Fallback to high-res British slate roof architecture
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=85';
          }}
        />
        {/* Deep Navy/Black overlay for crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111738]/92 via-[#151D45]/85 to-[#151D45]/75" />
        {/* Subtle architectural grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Breadcrumb + H1 + Supporting Copy + CTAs (col-span-7) */}
          <div className="lg:col-span-7 text-left">
            {/* Small Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
              <ol className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] font-heading font-semibold uppercase tracking-wider text-gray-300">
                <li>
                  <button
                    type="button"
                    onClick={onNavigateHome}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    HOME
                  </button>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <button
                    type="button"
                    onClick={onNavigateHome}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    SERVICES
                  </button>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-[#ac0e13] font-bold">
                  NEW ROOF INSTALLATIONS
                </li>
              </ol>
            </nav>

            {/* Restrained, Architectural H1 */}
            <h1 className="font-heading text-[28px] xs:text-[32px] sm:text-[38px] md:text-[42px] font-extrabold text-white tracking-tight leading-[1.12] mb-4 sm:mb-5">
              NEW ROOF INSTALLATIONS
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-[17px] text-gray-200/95 leading-relaxed max-w-[620px] font-normal mb-7 sm:mb-8">
              Professional new roof installations for homes and properties across Reading, Berkshire and surrounding areas.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-[#ac0e13] hover:bg-[#920b10] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <span>Get a Free Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.telLink}
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/25 font-heading font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Compact Trust / Review Badges (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3.5 sm:gap-4 lg:items-end justify-start">
            {/* Google Review Badge */}
            <div className="bg-white rounded-lg p-4 sm:p-4.5 shadow-md border border-white/80 w-full sm:w-[240px] lg:w-[260px] flex items-center gap-3.5 transition-transform hover:scale-101">
              <img
                src="/images/google-icon.svg"
                alt="Google Reviews"
                className="w-8 h-8 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div className="text-[12px] font-heading font-bold text-[#242F6B] leading-tight">
                  Google Verified
                </div>
                <div className="text-[10.5px] text-gray-500 font-medium">
                  5.0 ★ Top Rated Contractors
                </div>
              </div>
            </div>

            {/* Checkatrade / Standard Assured Badge */}
            <div className="bg-white rounded-lg p-4 sm:p-4.5 shadow-md border border-white/80 w-full sm:w-[240px] lg:w-[260px] flex items-center gap-3.5 transition-transform hover:scale-101">
              <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div className="text-[12px] font-heading font-bold text-[#242F6B] leading-tight">
                  Checkatrade Standard
                </div>
                <div className="text-[10.5px] text-gray-500 font-medium">
                  Vetted, Insured &amp; Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
