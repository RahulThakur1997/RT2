import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '../Logo';
import { BUSINESS_INFO } from '../../data/roofingData';

interface NewRoofHeaderProps {
  onOpenQuoteModal: () => void;
  onNavigateHome: (sectionId?: string) => void;
}

export const NewRoofHeader: React.FC<NewRoofHeaderProps> = ({
  onOpenQuoteModal,
  onNavigateHome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop & Mobile Transparent / Sticky Overlay Header (75–90px) */}
      <header
        id="service-header"
        role="banner"
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#040205]/95 backdrop-blur-md shadow-lg py-3.5 border-b border-white/10'
            : 'bg-gradient-to-b from-[#040205]/90 via-[#040205]/60 to-transparent py-4 sm:py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: Logo (Clicking navigates to Home) */}
          <button
            type="button"
            onClick={() => onNavigateHome()}
            aria-label="A T Roofing Birmingham - Go to Homepage"
            className="flex items-center gap-2 cursor-pointer focus:outline-hidden group"
          >
            <div className="bg-[#f9f9f9] px-3 py-1.5 rounded-md shadow-xs border border-[#e5e5e5] transition-transform duration-200 group-hover:scale-102">
              <Logo variant="light" width="130px" />
            </div>
          </button>

          {/* CENTER: Compact Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-[13.5px] font-heading font-medium tracking-wide text-white/90"
          >
            <button
              type="button"
              onClick={() => onNavigateHome('services')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Roofing
            </button>

            <button
              type="button"
              onClick={() => onNavigateHome('why-us')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Building
            </button>

            {/* Services with subtle dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-white font-semibold py-1 hover:text-white transition-colors cursor-pointer"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-white/70 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#1b2352] border border-white/15 rounded-lg shadow-xl py-2 z-50 text-xs font-heading">
                  <div className="px-3.5 py-2 text-white font-bold bg-[#ac0e13]/25 border-l-3 border-[#ac0e13] flex items-center justify-between">
                    <span>New Roof Installations</span>
                    <span className="text-[10px] bg-[#ac0e13] text-white px-1.5 py-0.5 rounded font-bold">Active</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigateHome('services')}
                    className="w-full text-left px-3.5 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Flat Roofing
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigateHome('services')}
                    className="w-full text-left px-3.5 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Roof Repairs
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigateHome('services')}
                    className="w-full text-left px-3.5 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Chimney & Lead Work
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigateHome('services')}
                    className="w-full text-left px-3.5 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Guttering & Downpipes
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => onNavigateHome('why-us')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              About
            </button>

            <button
              type="button"
              onClick={() => onNavigateHome('projects')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Projects
            </button>

            <button
              type="button"
              onClick={() => onNavigateHome('contact')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Contact
            </button>
          </nav>

          {/* RIGHT: Phone & Primary CTA */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-5">
            <a
              href={BUSINESS_INFO.freePhoneTelLink}
              className="hidden xl:flex items-center gap-2 text-emerald-300 hover:text-white transition-colors group"
              title="Free Phone A T Roofing Birmingham"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-300 group-hover:text-white" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-emerald-300 block font-heading uppercase tracking-wider font-bold">Free Phone</span>
                <span className="text-xs font-heading font-bold text-white tracking-wide">{BUSINESS_INFO.freePhone}</span>
              </div>
            </a>

            <a
              href={BUSINESS_INFO.telLink}
              className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors group"
              title="Call A T Roofing Birmingham"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#C80103] transition-colors">
                <Phone className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="text-left hidden md:block">
                <span className="text-[10px] text-gray-300 block font-heading uppercase tracking-wider">Telephone</span>
                <span className="text-xs font-heading font-bold text-white tracking-wide">{BUSINESS_INFO.phone}</span>
              </div>
            </a>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 rounded-md bg-[#C80103] hover:bg-[#a50102] text-white border border-white/30 text-xs font-heading font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm cursor-pointer hover:border-white/60"
            >
              Get a Quote
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.telLink}
              aria-label="Call A T Roofing"
              className="w-9 h-9 rounded-md bg-white/10 text-white flex items-center justify-center border border-white/20"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="w-9 h-9 rounded-md bg-white/10 text-white flex items-center justify-center border border-white/20 cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xs flex justify-end"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-[280px] xs:w-[320px] bg-[#040205] h-full p-6 flex flex-col justify-between shadow-2xl text-white border-l border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-white/15">
                <div className="bg-[#f9f9f9] px-2.5 py-1 rounded shadow-xs border border-[#e5e5e5]">
                  <Logo variant="light" width="110px" />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col gap-3.5 mt-6 text-sm font-heading font-medium">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateHome();
                  }}
                  className="text-left py-2 text-white/90 hover:text-white border-b border-white/10 flex items-center justify-between"
                >
                  <span>Home</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateHome('services');
                  }}
                  className="text-left py-2 text-white/90 hover:text-white border-b border-white/10"
                >
                  Roofing
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateHome('why-us');
                  }}
                  className="text-left py-2 text-white/90 hover:text-white border-b border-white/10"
                >
                  Building
                </button>
                <div className="py-2 border-b border-white/10">
                  <span className="text-xs uppercase tracking-wider text-gray-400 block mb-2 font-semibold">Services</span>
                  <div className="pl-2 space-y-2 text-xs">
                    <div className="text-white font-bold text-[#C80103] bg-[#C80103]/20 px-2 py-1 rounded">
                      • New Roof Installations
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onNavigateHome('services');
                      }}
                      className="block text-gray-300 hover:text-white pl-2"
                    >
                      Flat Roofing
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onNavigateHome('services');
                      }}
                      className="block text-gray-300 hover:text-white pl-2"
                    >
                      Roof Repairs
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateHome('why-us');
                  }}
                  className="text-left py-2 text-white/90 hover:text-white border-b border-white/10"
                >
                  About Us
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateHome('projects');
                  }}
                  className="text-left py-2 text-white/90 hover:text-white border-b border-white/10"
                >
                  Projects
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateHome('contact');
                  }}
                  className="text-left py-2 text-white/90 hover:text-white"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-white/15 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="py-2.5 px-2 rounded-md bg-white/10 hover:bg-white/15 text-white flex flex-col items-center justify-center gap-1 text-[11px] font-heading font-semibold text-center"
                >
                  <div className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#C80103]" />
                    <span className="text-[10px] text-gray-300 uppercase">Tel</span>
                  </div>
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={BUSINESS_INFO.freePhoneTelLink}
                  className="py-2.5 px-2 rounded-md bg-white/10 hover:bg-white/15 text-white flex flex-col items-center justify-center gap-1 text-[11px] font-heading font-semibold text-center text-emerald-300"
                >
                  <div className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-emerald-400" />
                    <span className="text-[10px] text-emerald-300 uppercase">Free</span>
                  </div>
                  <span>{BUSINESS_INFO.freePhone}</span>
                </a>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-md bg-[#C80103] hover:bg-[#a50102] text-white border border-white/30 text-xs font-heading font-bold uppercase tracking-wider text-center"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
