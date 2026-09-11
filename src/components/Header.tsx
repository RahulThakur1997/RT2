import React, { useState, useEffect } from 'react';
import { Phone, Menu, FileText, Instagram } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { BUSINESS_INFO } from '../data/roofingData';

interface HeaderProps {
  onOpenQuoteModal: (initialService?: string) => void;
  onNavigate: (sectionId: string, categoryFilter?: string) => void;
}

interface NavItem {
  label: string;
  target: string;
  category?: string;
}

// Exactly the 4 requested items in the menu bar:
// Services -> scrolls to Our Roofing Services (id: services)
// Our Work -> scrolls to Recent Work (id: projects)
// Reviews -> scrolls to Customer Reviews (id: reviews)
// Locations -> scrolls to Service Areas (id: service-areas)
const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Services', target: 'services', category: 'ALL' },
  { label: 'Our Work', target: 'projects' },
  { label: 'Reviews', target: 'reviews' },
  { label: 'Locations', target: 'service-areas' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ====================================================
          MOBILE ONLY SLIM TOP BAR (Directly above the header)
          Keystone Red (#AC0D2E) background with white text
          Strictly visible on mobile view only (hidden on md and above)
          ==================================================== */}
      <aside
        id="mobile-slim-top-bar"
        aria-label="Contact notice"
        className="block md:hidden fixed top-0 left-0 right-0 w-full z-[51] bg-[#AC0D2E] text-white border-b border-white/20 shadow-sm"
      >
        <div className="h-[34px] px-3 flex items-center justify-center gap-2.5 text-center">
          <a
            href={BUSINESS_INFO.telLink}
            className="flex items-center justify-center gap-1 text-white active:opacity-85 transition-opacity"
            title={`Call Keystone Roofing on ${BUSINESS_INFO.phone}`}
          >
            <Phone className="w-3 h-3 text-white fill-white/15 stroke-[2.2]" />
            <span className="font-heading font-medium text-[11px] text-white/95">
              Tel:
            </span>
            <span className="font-heading font-bold text-[11.5px] text-white tracking-wide underline underline-offset-2 decoration-white/60">
              {BUSINESS_INFO.phone}
            </span>
          </a>
          <span className="text-white/40 text-xs">|</span>
          <a
            href={BUSINESS_INFO.freePhoneTelLink}
            className="flex items-center justify-center gap-1 text-white active:opacity-85 transition-opacity"
            title={`Free Phone on ${BUSINESS_INFO.freePhone}`}
          >
            <span className="font-heading font-medium text-[11px] text-white/95">
              Free:
            </span>
            <span className="font-heading font-bold text-[11.5px] text-white tracking-wide underline underline-offset-2 decoration-white/60">
              {BUSINESS_INFO.freePhone}
            </span>
          </a>
        </div>
      </aside>

      <header
        id="main-header"
        role="banner"
        className={`fixed left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-white/15 shadow-lg top-[34px] md:top-0 ${
          isScrolled
            ? 'h-[68px] md:h-[72px] lg:h-[74px] bg-[#151D45]/98 backdrop-blur-md shadow-xl'
            : 'h-[68px] md:h-[76px] xl:h-[155px] bg-[#242F6B]'
        }`}
      >
        {/* ====================================================
            BACKGROUND: Shared Sunset Slate Roofing Visual with
            Distinct Header Treatment & Contrast Overlay
            (One image for both sections, styled as two distinct backgrounds)
            ==================================================== */}
        <div
          className={`absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-300 ${
            isScrolled ? 'opacity-40' : 'opacity-100'
          }`}
        >
          {/* Same hero image, cropped to the top ridge/sky */}
          <img
            src="/images/hero-sunset-slate.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-top filter brightness-[0.68] contrast-[1.15]"
          />

          {/* Distinct Deep Navy & Slate Grading for Header Section */}
          <div className="absolute inset-0 bg-[#151D45]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#151D45]/95 via-[#1E2858]/80 to-[#151D45]/92" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#151D45]/30 to-[#151D45]/95" />
        </div>

        {/* ====================================================
            A. DESKTOP TWO-ROW HEADER (Shown at xl breakpoint when NOT scrolled)
            Total height: ~145px (Top row: 90px, Divider: 1px, Bottom row: 54px)
            Features a clearly visible 20px gap between the logo plaque and divider line
            Outer container max-width: ~1380px
            ==================================================== */}
        <div
          className={`relative z-10 w-full h-full hidden ${
            isScrolled ? 'xl:hidden' : 'xl:flex xl:flex-col justify-between'
          }`}
        >
          {/* ----------------------------------------------------
              ROW 1: TOP ROW (~98px tall - slightly larger bar)
              Contains logo plaque on Left (78px tall, leaving a 20px visible gap before divider)
              Phone + CTA on Right
              ---------------------------------------------------- */}
          <div className="h-[98px] w-full relative">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-full flex items-center justify-between relative">
              {/* LEFT: Keystone Logo Plaque with #f9f9f9 background
                  Height: 78px, leaving an easily visible 20px gap above the divider line! */}
              <div
                id="header-logo-plaque"
                onClick={() => onNavigate('hero')}
                className="absolute top-0 left-4 sm:left-6 lg:left-8 xl:left-10 w-[275px] h-[78px] bg-[#f9f9f9] rounded-b-[14px] shadow-xl shadow-black/25 border-b border-x border-[#e5e5e5] z-30 flex items-center justify-center px-3.5 py-1.5 cursor-pointer group hover:bg-[#f2f2f2] transition-all duration-200"
                title="Keystone Roofing & Building Ltd - Home"
              >
                {/* Visual logo mark sized to fit plaque cleanly */}
                <Logo
                  variant="header-block"
                  className="group-hover:scale-[1.02] transition-transform duration-200"
                />
              </div>

              {/* RIGHT: Direct Roofer Line + Freephone + GET A QUOTE Button */}
              <div className="flex items-center gap-6 xl:gap-8 ml-auto z-20">
                {/* Freephone */}
                <a
                  href={BUSINESS_INFO.freePhoneTelLink}
                  className="hidden 2xl:flex items-center gap-2.5 text-white transition-all duration-200 hover:-translate-y-0.5 group"
                  title={`Free Phone on ${BUSINESS_INFO.freePhone}`}
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 group-hover:bg-emerald-600 border border-emerald-400/40 flex items-center justify-center text-emerald-300 group-hover:text-white transition-all duration-200 shadow-sm">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[10px] font-bold tracking-wider text-emerald-300 uppercase">
                      FREE PHONE
                    </span>
                    <span className="font-heading font-bold text-[16px] tracking-wide text-white group-hover:text-emerald-100 transition-colors">
                      {BUSINESS_INFO.freePhone}
                    </span>
                  </div>
                </a>

                {/* Telephone Section */}
                <a
                  id="desktop-phone-link"
                  href={BUSINESS_INFO.telLink}
                  className="flex items-center gap-3.5 text-white transition-all duration-200 hover:-translate-y-0.5 group"
                  title={`Call Keystone Roofing on ${BUSINESS_INFO.phone}`}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#AC0E13] border border-white/20 flex items-center justify-center text-white transition-all duration-200 shadow-sm">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[11px] font-semibold tracking-wider text-blue-100/90 uppercase">
                      TELEPHONE
                    </span>
                    <span className="font-heading font-bold text-[17px] tracking-wide text-white group-hover:text-red-100 transition-colors">
                      {BUSINESS_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Primary CTA: GET A QUOTE (175px × 52px, #AC0E13, rounded-[10px]) */}
                <button
                  id="desktop-header-quote-cta"
                  onClick={() => onOpenQuoteModal()}
                  className="w-[175px] h-[52px] rounded-[10px] bg-[#AC0E13] hover:bg-[#920b10] text-white font-heading font-bold text-[14px] tracking-wider uppercase shadow-xl shadow-black/30 border border-white/15 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <FileText className="w-4 h-4 text-white group-hover:rotate-6 transition-transform" />
                  <span>Get a Quote</span>
                </button>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------
              DIVIDER: Thin horizontal line (rgba(255,255,255,0.15))
              Separated from the logo plaque bottom by a visible 20px gap
              ---------------------------------------------------- */}
          <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="h-[1px] bg-white/15 w-full" />
          </div>

          {/* ----------------------------------------------------
              ROW 2: NAVIGATION ROW (54px tall)
              Spacious, restrained, perfectly aligned on one baseline
              ---------------------------------------------------- */}
          <div className="h-[54px] w-full">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-full flex items-center justify-between">
              {/* Main Navigation: Offset by 280px to align cleanly */}
              <nav
                className="flex items-center gap-8 xl:gap-10 pl-[280px]"
                aria-label="Main Navigation"
              >
                {MAIN_NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => onNavigate(item.target, item.category)}
                    className="py-2 font-heading font-semibold text-[15px] whitespace-nowrap text-white hover:text-[#AC0E13] transition-colors cursor-pointer relative group"
                  >
                    <span>{item.label}</span>
                    {/* Active/Hover underline indicator */}
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#AC0E13] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-200" />
                  </button>
                ))}
              </nav>

              {/* Instagram link on far right */}
              <div className="flex items-center ml-auto">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Keystone Roofing & Building Ltd on Instagram"
                  className="p-2 text-white/80 hover:text-[#AC0E13] transition-colors cursor-pointer hover:scale-110"
                  title="Follow Keystone Roofing on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            B. STICKY COMPACT HEADER (Active when scrolled down on desktop)
            Height: ~74px, Clean, Minimalist, Uncluttered
            ==================================================== */}
        <div
          className={`relative z-10 w-full h-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 hidden ${
            isScrolled ? 'xl:flex items-center justify-between gap-6' : 'hidden'
          }`}
        >
          {/* Logo on Left: ONLY single logo image */}
          <div
            onClick={() => onNavigate('hero')}
            className="cursor-pointer shrink-0 hover:opacity-95 transition-opacity"
            title="Keystone Roofing & Building Ltd"
          >
            <div className="bg-[#f9f9f9] px-2.5 py-1 rounded-lg shadow-sm border border-[#e5e5e5] flex items-center justify-center">
              <Logo variant="light" width="125px" />
            </div>
          </div>

          {/* Compact Main Links */}
          <nav className="flex items-center gap-8" aria-label="Sticky Main Navigation">
            {MAIN_NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.target, item.category)}
                className="py-1 text-[15px] font-heading font-semibold text-white/90 hover:text-[#AC0E13] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Phone + CTA on Right */}
          <div className="flex items-center gap-4 lg:gap-5 shrink-0">
            <a
              href={BUSINESS_INFO.telLink}
              className="flex items-center gap-2 text-white hover:text-red-100 transition-colors group"
              title={`Call Keystone Roofing on ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4 text-white/90 group-hover:text-[#AC0E13] transition-colors" />
              <span className="font-heading font-bold text-sm tracking-wide text-white">
                {BUSINESS_INFO.phone}
              </span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="h-10 px-5 rounded-lg bg-[#AC0E13] hover:bg-[#920b10] text-white font-heading font-bold text-xs tracking-wider uppercase shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get a Quote</span>
            </button>
          </div>
        </div>

        {/* ====================================================
            C. MOBILE & TABLET HEADER (<xl screens)
            Height: ~68px (same size maintained), Logo slightly smaller & padded up,
            Phone & Menu on Right. Horizontal padding increased to 1.5x (24px / px-6)
            ==================================================== */}
        <div className="relative z-10 w-full h-full px-6 sm:px-6 flex items-center justify-between gap-3 xl:hidden">
          {/* Logo on Left: slightly smaller, padded up, header height preserved */}
          <div
            onClick={() => onNavigate('hero')}
            className="cursor-pointer shrink-0 active:opacity-90 transition-opacity"
            title="Keystone Roofing & Building Ltd"
          >
            <div className="bg-[#f9f9f9] px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg shadow-sm border border-[#e5e5e5] flex items-center justify-center">
              <Logo variant="light" width="98px" />
            </div>
          </div>

          {/* Right Mobile Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick Quote button on tablets */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="hidden md:flex h-[46px] min-h-[44px] px-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-bold text-xs tracking-wider uppercase transition-colors items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Quote</span>
            </button>

            {/* Mobile Hamburger Menu Toggle (46px x 46px, target 44-48px) */}
            <button
              id="header-mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="h-[46px] w-[46px] min-h-[44px] min-w-[44px] rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/20 flex items-center justify-center active:scale-95"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen accessible Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenQuoteModal={onOpenQuoteModal}
        onNavigate={onNavigate}
      />
    </>
  );
};
