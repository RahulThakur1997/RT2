import React, { useEffect } from 'react';
import { Phone, X, ShieldCheck, Instagram, MapPin, FileText, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';
import { Logo } from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: (service?: string) => void;
  onNavigate: (sectionId: string, category?: string) => void;
}

interface NavItem {
  label: string;
  target: string;
  category?: string;
}

// Exactly matching the requested menu items:
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

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenQuoteModal,
  onNavigate
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLinkClick = (target: string, category?: string) => {
    onNavigate(target, category);
    onClose();
  };

  return (
    <div
      id="mobile-menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-[60] bg-[#040205]/98 backdrop-blur-lg flex flex-col justify-between overflow-y-auto transition-all duration-300 animate-in fade-in"
    >
      {/* Top Header Row: ONLY logo image on left, close button on right */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/15 sticky top-0 bg-[#040205]/95 backdrop-blur-md z-10">
        <div onClick={() => handleLinkClick('hero')} className="cursor-pointer" title="A T Roofing Birmingham">
          <div className="bg-[#f9f9f9] px-2.5 py-1 rounded-lg shadow-sm border border-[#e5e5e5] flex items-center justify-center">
            <Logo variant="light" width="115px" />
          </div>
        </div>
        <button
          id="mobile-menu-close-btn"
          onClick={onClose}
          aria-label="Close mobile navigation menu"
          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-white/10 hover:bg-[#C80103] text-white transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-5 py-6 space-y-6">
        {/* Main Navigation: Services, Our Work, Reviews, Locations */}
        <div>
          <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-red-200/70 px-2 block mb-3">
            Navigation
          </span>
          <div className="space-y-2">
            {MAIN_NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item.target, item.category)}
                className="w-full min-h-[52px] px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-left font-heading font-bold text-[17px] text-white hover:text-[#C80103] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>{item.label}</span>
                <span className="text-white/40 group-hover:text-[#C80103] group-hover:translate-x-1 transition-all font-sans text-lg">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Primary CTAs: GET A QUOTE & PHONE NUMBER */}
        <div className="p-4 rounded-xl bg-[#0a060c] border border-white/15 shadow-lg flex flex-col gap-3">
          <button
            id="mobile-menu-quote-btn"
            onClick={() => {
              onClose();
              onOpenQuoteModal();
            }}
            className="min-h-[50px] w-full rounded-lg bg-[#C80103] hover:bg-[#a50102] text-white font-heading font-bold text-base tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-transform active:scale-[0.98] cursor-pointer"
          >
            <FileText className="w-5 h-5" />
            <span>Get a Quote</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              id="mobile-menu-call-btn"
              href={BUSINESS_INFO.telLink}
              className="min-h-[46px] flex flex-col items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs tracking-wide border border-white/20 transition-colors p-2 text-center"
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span className="text-[10px] text-gray-300 uppercase">Telephone</span>
              </div>
              <span className="text-white text-[12px]">{BUSINESS_INFO.phone}</span>
            </a>

            <a
              id="mobile-menu-freephone-btn"
              href={BUSINESS_INFO.freePhoneTelLink}
              className="min-h-[46px] flex flex-col items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs tracking-wide border border-white/20 transition-colors p-2 text-center"
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] text-emerald-300 uppercase">Free Phone</span>
              </div>
              <span className="text-white text-[12px]">{BUSINESS_INFO.freePhone}</span>
            </a>
          </div>
        </div>

        {/* Business Address & Credentials */}
        <div className="pt-2 border-t border-white/15 space-y-2.5 text-xs text-gray-300">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#C80103] shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              {BUSINESS_INFO.address.fullFormatted}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#C80103] shrink-0" />
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="text-gray-200 hover:text-white transition-colors break-all"
            >
              {BUSINESS_INFO.email}
            </a>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C80103]" />
              <span className="font-medium text-white">Fully Insured &amp; Certified UK Roofer</span>
            </div>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A T Roofing Birmingham Instagram Profile"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-white/10 text-white hover:text-[#C80103] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
