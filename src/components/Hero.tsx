import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  MapPin,
  ChevronDown,
  Hammer,
  Home,
  PhoneCall,
  Star
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal?: (initialService?: string, initialPostcode?: string) => void;
  onNavigate?: (sectionId: string, category?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onNavigate }) => {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleFindOutMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('services');
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal('Roofing & Building Solutions');
    }
  };

  const scrollingValues = [
    {
      id: 'specialists',
      icon: Home,
      heading: 'Roofing Specialists',
      description: 'Repairs, renewals & replacements',
      iconContainerBg: 'bg-[#040205]/[0.08]',
      iconColor: 'text-[#040205]',
      hasRedAccent: false,
    },
    {
      id: 'workmanship',
      icon: ShieldCheck,
      heading: 'Quality Workmanship',
      description: 'Built for long-term weather protection',
      iconContainerBg: 'bg-[#040205]/[0.08]',
      iconColor: 'text-[#040205]',
      hasRedAccent: true,
    },
    {
      id: 'local',
      icon: MapPin,
      heading: 'Local Roofing Team',
      description: 'Serving Birmingham & West Midlands',
      iconContainerBg: 'bg-[#040205]/[0.08]',
      iconColor: 'text-[#040205]',
      hasRedAccent: false,
    },
    {
      id: 'quotes',
      icon: PhoneCall,
      heading: 'Free Detailed Quotes',
      description: 'Speak directly with our roofing team',
      iconContainerBg: 'bg-[#C80103]/[0.09]',
      iconColor: 'text-[#C80103]',
      hasRedAccent: true,
    },
    {
      id: 'insurance',
      icon: Award,
      heading: 'Fully Insured & Vetted',
      description: '£5M public liability insurance cover',
      iconContainerBg: 'bg-[#040205]/[0.08]',
      iconColor: 'text-[#040205]',
      hasRedAccent: false,
    },
    {
      id: 'guaranteed',
      icon: CheckCircle2,
      heading: 'Guaranteed Standards',
      description: 'Insurance backed warranties on new roofs',
      iconContainerBg: 'bg-[#C80103]/[0.09]',
      iconColor: 'text-[#C80103]',
      hasRedAccent: false,
    },
  ];

  const handleQuickSelectGo = () => {
    const service = selectedService || 'Roof Repairs';
    if (onOpenQuoteModal) {
      onOpenQuoteModal(service);
    }
  };

  return (
    <section
      id="hero"
      aria-label="A T Roofing Birmingham Hero"
      className="relative min-h-[560px] lg:min-h-[750px] xl:min-h-[820px] 2xl:min-h-[860px] flex flex-col justify-between overflow-hidden bg-[#040205]"
    >
      {/* ====================================================
          BACKGROUND: User Requested British Roofer Slate Tile Sunset Image
          with #040205 Dark Overlay for Crisp Readability
          ==================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero-sunset-slate.png"
          alt="A T Roofing professional roofer installing slate tiles at sunset on UK residential roof"
          className="w-full h-full object-cover object-[center_38%] scale-100"
        />

        {/* Dark Overlay based on #040205 */}
        <div className="absolute inset-0 bg-[#040205]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040205]/95 via-[#040205]/75 to-[#040205]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040205]/85 via-transparent to-[#040205]/95" />
      </div>

      {/* ====================================================
          MAIN HERO CONTENT
          - Desktop: Fully visible right upfront in initial view, including all CTAs & trust strip
          - Mobile: 1.5x side padding (px-6), healthy spacing below fixed header, strictly single-row service quick-select
          ==================================================== */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-8 xl:px-12 pt-[146px] xs:pt-[150px] sm:pt-[154px] md:pt-[102px] lg:pt-[118px] xl:pt-[186px] pb-5 sm:pb-6 lg:pb-12 xl:pb-16 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center w-full my-auto">
          {/* ====================================================
              LEFT SIDE: MAIN HERO CONTENT (~55% width)
              - Headline: Clearly visible, commanding, first thing noticed
              - Sub-heading: Prominent, comfortable reading size
              - Quick-Select: Larger pill and high-contrast CTA button
              ==================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center text-white pt-0.5 sm:pt-0">
            {/* MAIN HEADLINE (larger & longer on desktop) */}
            <h1 className="font-heading text-white font-extrabold text-[25px] xs:text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] xl:text-[54px] 2xl:text-[58px] leading-[1.08] tracking-tight max-w-[700px] drop-shadow-md">
              Trusted Roofing &amp; Building Experts in Birmingham
            </h1>

            {/* SUB-HEADING: Used in desktop/tablet view, hidden on mobile (larger & longer on desktop) */}
            <p className="hidden md:block text-white/95 text-base sm:text-[17px] md:text-[18.5px] lg:text-[20px] xl:text-[21.5px] leading-relaxed mt-3.5 sm:mt-4 lg:mt-5 max-w-[640px] drop-shadow-sm font-normal">
              Quality workmanship, dependable service, and complete roofing solutions for homes and businesses across Birmingham and the West Midlands.
            </p>

            {/* SERVICE QUICK-SELECT: Enlarged, strictly single row on both mobile and desktop with comfortable gap */}
            <div className="mt-4 xs:mt-4.5 sm:mt-5 lg:mt-7 xl:mt-8 w-full max-w-[590px]">
              <div className="bg-white rounded-full p-1.5 sm:p-2 lg:p-2.5 shadow-xl shadow-black/30 border border-white/40 flex flex-row items-center gap-2 sm:gap-3 h-[48px] xs:h-[50px] sm:h-[54px] lg:h-[62px]">
                <div className="relative flex-grow flex items-center min-w-0 h-full">
                  <div className="pl-3 sm:pl-4 pr-1.5 sm:pr-2 text-[#040205] shrink-0">
                    <Hammer className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-[#C80103]" />
                  </div>
                  <select
                    id="hero-service-quick-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    aria-label="What roofing service do you need?"
                    className="w-full py-1 pr-7 sm:pr-9 pl-0.5 bg-transparent text-[#040205] font-heading font-semibold text-[13px] xs:text-[13.5px] sm:text-[14.5px] lg:text-[16px] xl:text-[16.5px] focus:outline-none appearance-none cursor-pointer truncate"
                  >
                    <option value="" disabled>
                      What roofing service do you need?
                    </option>
                    <option value="Roof Repairs">Roof Repairs &amp; Leak Fixes</option>
                    <option value="Roof Replacement">Roof Replacement &amp; Re-tiling</option>
                    <option value="New Roofs">New Roof Installations</option>
                    <option value="Flat Roofing">Flat Roofing (EPDM / GRP)</option>
                    <option value="Guttering">Guttering, Fascias &amp; Soffits</option>
                    <option value="Chimney Repairs">Chimney Repairs &amp; Flashing</option>
                    <option value="Building Services">Building &amp; Structural Work</option>
                  </select>
                  <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 text-gray-500 absolute right-2 sm:right-3.5 pointer-events-none" />
                </div>

                <button
                  id="hero-quick-select-go-btn"
                  type="button"
                  onClick={handleQuickSelectGo}
                  className="h-[36px] xs:h-[38px] sm:h-[42px] lg:h-[48px] px-4 xs:px-5 sm:px-7 lg:px-8 rounded-full bg-[#C80103] hover:bg-[#a50102] text-white font-heading font-bold text-xs xs:text-[13px] sm:text-[14px] lg:text-[15px] tracking-wider uppercase transition-colors shadow-md cursor-pointer flex items-center justify-center gap-1.5 shrink-0 active:scale-95"
                >
                  <span>Go</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5" />
                </button>
              </div>
            </div>
          </div>

          {/* ====================================================
              RIGHT SIDE: PROMOTIONAL CARD WITH FLOATING ROOF & TRUST BAR
              - Mobile: Visible gap separating it from the CTA button above
              - Desktop: Proportionally enlarged card, typography & button taking more space
              ==================================================== */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full mt-7 xs:mt-8 sm:mt-9 lg:mt-0 lg:pr-2 xl:pr-4">
            {/* 1. PROMOTIONAL CARD CONTAINER */}
            <div className="relative w-full max-w-[340px] xs:max-w-[355px] sm:max-w-[380px] lg:max-w-[430px] xl:max-w-[465px]">
              {/* Main Promotional Card (#C80103) with edge overlap for floating roof */}
              <div
                id="hero-promotional-card"
                className="relative z-10 w-full min-h-[142px] xs:min-h-[152px] sm:min-h-[170px] lg:min-h-[210px] xl:min-h-[224px] bg-[#C80103] text-white rounded-[14px] sm:rounded-[16px] lg:rounded-[18px] p-4 xs:p-4.5 sm:p-5 lg:p-6.5 xl:p-7.5 shadow-xl shadow-black/35 border border-white/20 flex flex-col justify-between"
              >
                {/* Floating Imagery (Roof): Freely floating photorealistic roof */}
                <div
                  id="hero-floating-roof"
                  className="absolute -top-4 -right-3 xs:-top-5 xs:-right-4 sm:-top-7 sm:-right-5 lg:-top-9 lg:-right-6 xl:-top-10 xl:-right-7 w-[135px] xs:w-[150px] sm:w-[175px] lg:w-[220px] xl:w-[235px] h-[95px] xs:h-[105px] sm:h-[120px] lg:h-[148px] xl:h-[160px] z-0 pointer-events-none select-none"
                  aria-hidden="true"
                >
                  {/* Soft ambient cast shadow beneath the floating roof */}
                  <div
                    className="absolute bottom-0 left-5 right-2 h-4 bg-black/45 rounded-[100%] blur-md transform -rotate-[3deg]"
                    aria-hidden="true"
                  />
                  {/* Photorealistic floating roof */}
                  <img
                    src="/images/floating-roof.png"
                    alt="Photorealistic floating slate roof"
                    referrerPolicy="no-referrer"
                    className="relative w-full h-full object-contain filter drop-shadow-[0_12px_18px_rgba(0,0,0,0.55)] transform -rotate-[2deg]"
                  />
                </div>

                {/* Text Content: Layered IN FRONT of the floating roof panel */}
                <div className="relative z-10">
                  {/* Heading (enlarged font size) */}
                  <h3 className="font-heading font-extrabold text-[19px] xs:text-[21px] sm:text-[23px] lg:text-[28px] xl:text-[30px] leading-[1.1] text-white tracking-tight max-w-[205px] xs:max-w-[225px] lg:max-w-[280px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
                    Roofing &amp; Building
                    <span className="block text-white">Solutions</span>
                  </h3>

                  {/* Supporting text (enlarged font size) */}
                  <p className="text-white/95 text-[11px] xs:text-[12px] sm:text-[12.5px] lg:text-[14px] xl:text-[14.5px] leading-snug mt-1.5 sm:mt-2 lg:mt-3 max-w-[210px] xs:max-w-[230px] sm:max-w-[250px] lg:max-w-[285px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
                    Quality roofing and building solutions delivered by experienced professionals.
                  </p>
                </div>

                {/* Single Primary CTA Button (#040205) (enlarged font & button sizing) */}
                <div className="pt-2.5 sm:pt-3 lg:pt-4 relative z-10">
                  <button
                    id="hero-promotional-cta"
                    type="button"
                    onClick={handleFindOutMore}
                    className="w-[135px] xs:w-[145px] sm:w-[160px] lg:w-[180px] xl:w-[195px] h-[36px] sm:h-[40px] lg:h-[46px] xl:h-[48px] rounded-[8px] bg-[#040205] hover:bg-[#1a171d] text-white font-heading font-bold text-[11.5px] xs:text-[12px] sm:text-[12.5px] lg:text-[13.5px] xl:text-[14px] uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>Find out more</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* 2. SINGLE CONTINUOUS WHITE PILL-SHAPED TRUST BAR (larger on desktop) */}
            <div
              id="hero-trust-bar"
              className="w-full max-w-[340px] xs:max-w-[350px] sm:max-w-[460px] lg:max-w-[530px] xl:max-w-[565px] bg-white rounded-xl sm:rounded-full py-1.5 sm:py-0 sm:h-[68px] lg:h-[82px] xl:h-[86px] px-1.5 sm:px-3 lg:px-4 shadow-lg shadow-black/15 border border-gray-200/90 flex items-center justify-center text-[#040205] mt-2 xs:mt-2.5 sm:mt-3 lg:mt-5"
            >
              <div className="w-full grid grid-cols-4 items-center divide-x divide-gray-200">
                {/* Point 1: 20+ Years Experience */}
                <div className="flex flex-col items-center justify-center text-center px-0.5 sm:px-1.5 lg:px-2">
                  <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#040205] mb-0.5 sm:mb-1 lg:mb-1.5 stroke-[1.8]" />
                  <span className="font-heading font-extrabold text-[9.5px] xs:text-[10px] sm:text-[11.5px] lg:text-[13.5px] text-[#040205] leading-tight block">
                    20+ Years
                  </span>
                  <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] lg:text-[10.5px] text-gray-500 font-medium leading-tight mt-0.5 block">
                    Experience
                  </span>
                </div>

                {/* Point 2: Fully Insured */}
                <div className="flex flex-col items-center justify-center text-center px-0.5 sm:px-1.5 lg:px-2">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#040205] mb-0.5 sm:mb-1 lg:mb-1.5 stroke-[1.8]" />
                  <span className="font-heading font-extrabold text-[9.5px] xs:text-[10px] sm:text-[11.5px] lg:text-[13.5px] text-[#040205] leading-tight block">
                    Fully Insured
                  </span>
                  <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] lg:text-[10.5px] text-gray-500 font-medium leading-tight mt-0.5 block">
                    <span className="hidden sm:inline">For </span>Peace of Mind
                  </span>
                </div>

                {/* Point 3: 5★ Rated */}
                <div className="flex flex-col items-center justify-center text-center px-0.5 sm:px-1.5 lg:px-2">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#C80103] fill-[#C80103]/15 mb-0.5 sm:mb-1 lg:mb-1.5 stroke-[1.8]" />
                  <span className="font-heading font-extrabold text-[9.5px] xs:text-[10px] sm:text-[11.5px] lg:text-[13.5px] text-[#040205] leading-tight block">
                    5★ Rated
                  </span>
                  <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] lg:text-[10.5px] text-gray-500 font-medium leading-tight mt-0.5 block">
                    By Customers
                  </span>
                </div>

                {/* Point 4: Quality Guaranteed */}
                <div className="flex flex-col items-center justify-center text-center px-0.5 sm:px-1.5 lg:px-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#040205] mb-0.5 sm:mb-1 lg:mb-1.5 stroke-[1.8]" />
                  <span className="font-heading font-extrabold text-[9.5px] xs:text-[10px] sm:text-[11.5px] lg:text-[13.5px] text-[#040205] leading-tight block">
                    Quality
                  </span>
                  <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] lg:text-[10.5px] text-gray-500 font-medium leading-tight mt-0.5 block">
                    Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================
          BOTTOM SCROLLING WHITE STRIP (Continuous Trust Marquee)
          Replaces the static navy slide with smooth auto-scrolling white strip
          ==================================================== */}
      <div
        id="hero-bottom-scrolling-strip"
        className="relative z-10 w-full bg-white border-t border-b border-gray-200/90 shadow-md py-2 sm:py-2.5 lg:py-3.5 overflow-hidden select-none"
        aria-label="A T Roofing Key Guarantees and Credentials"
      >
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 whitespace-nowrap">
          {scrollingValues.concat(scrollingValues).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.id}-${idx}`}
                className="inline-flex items-center gap-3 px-4 lg:px-5 py-1.5 lg:py-2 rounded-full bg-[#F5F7FA] border border-gray-200/80 shrink-0 transition-colors hover:bg-white hover:border-gray-300 shadow-2xs group cursor-default"
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg ${item.iconContainerBg} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 ${item.iconColor} stroke-[2]`} />
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-xs sm:text-[13px] lg:text-[14px] text-[#040205] leading-none">
                    {item.heading}
                  </span>
                  {item.hasRedAccent && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#C80103] shrink-0"
                      title="A T Roofing Quality Assurance"
                    />
                  )}
                  <span className="text-gray-300 select-none">•</span>
                  <span className="text-[11.5px] sm:text-[12.5px] lg:text-[13.5px] font-normal text-[#5F6470] leading-none">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
