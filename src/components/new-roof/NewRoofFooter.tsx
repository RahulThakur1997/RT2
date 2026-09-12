import React, { useState } from 'react';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/roofingData';
import { Logo } from '../Logo';

interface NewRoofFooterProps {
  onOpenQuoteModal: () => void;
  onNavigateHome: (sectionId?: string) => void;
}

export const NewRoofFooter: React.FC<NewRoofFooterProps> = ({
  onOpenQuoteModal,
  onNavigateHome,
}) => {
  const [legalModal, setLegalModal] = useState<{ title: string; body: string } | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'New Roof Installations',
    'Roof Repairs',
    'Flat Roofing',
    'Roof Maintenance',
    'Chimney Repairs',
    'Roof Inspections',
    'Guttering & Downpipes'
  ];

  return (
    <>
      <footer id="service-footer" className="bg-[#040205] text-white pt-16 sm:pt-20 pb-12 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          {/* TOP SECTION: Callout & Large Phone on Left, A T Roofing Logo on Right */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/15">
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-heading font-medium tracking-wide text-gray-300 block uppercase">
                Speak to one of our roofing experts today
              </span>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white hover:text-[#C80103] transition-colors tracking-tight block"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <span className="text-white/30 hidden sm:inline">|</span>
                <a
                  href={BUSINESS_INFO.freePhoneTelLink}
                  className="font-heading font-bold text-lg sm:text-xl text-emerald-400 hover:text-emerald-300 transition-colors block"
                  title="Freephone"
                >
                  Free: {BUSINESS_INFO.freePhone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-md bg-[#C80103] hover:bg-[#a50102] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors shadow-sm"
              >
                Get a Free Quote
              </button>

              <div className="bg-[#f9f9f9] px-3.5 py-1.5 rounded-md shadow-xs border border-[#e5e5e5]">
                <Logo variant="footer" width="130px" />
              </div>
            </div>
          </div>

          {/* MIDDLE SECTION: 3 Columns (Our Services, Company, Contact) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 py-12 sm:py-14 border-b border-white/15">
            {/* Column 1: Our Services */}
            <div>
              <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-widest text-white mb-4">
                Our Services
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                {services.map((svc, i) => (
                  <li key={i}>
                    {svc === 'New Roof Installations' ? (
                      <span className="text-white font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ac0e13]" />
                        {svc} (Current)
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onNavigateHome('services')}
                        className="hover:text-white transition-colors cursor-pointer text-left"
                      >
                        {svc}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-widest text-white mb-4">
                Company
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateHome()}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateHome('why-us')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateHome('projects')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Projects &amp; Gallery
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateHome('reviews')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Customer Reviews
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateHome('service-areas')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Service Areas
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateHome('contact')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-widest text-white mb-4">
                Contact
              </h3>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-300">
                <div className="font-semibold text-white">
                  A T Roofing Birmingham Limited
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C80103] shrink-0 mt-0.5" />
                  <span>
                    {BUSINESS_INFO.address.fullFormatted}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C80103] shrink-0" />
                  <a href={BUSINESS_INFO.telLink} className="hover:text-white transition-colors">
                    Tel: {BUSINESS_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={BUSINESS_INFO.freePhoneTelLink} className="hover:text-emerald-300 transition-colors text-emerald-300 font-semibold">
                    Free Phone: {BUSINESS_INFO.freePhone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C80103] shrink-0" />
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors break-all">
                    {BUSINESS_INFO.email}
                  </a>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] text-gray-400 block mb-1">Coverage Hours</span>
                  <span className="text-white text-xs font-medium">Mon - Sat: 08:00 - 18:00 | 24/7 Emergency Response</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: Copyright, Legal Links, Scroll to Top */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <div>
              &copy; {new Date().getFullYear()} A T Roofing Birmingham Limited. All rights reserved. Registered in England &amp; Wales.
            </div>

            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() =>
                  setLegalModal({
                    title: 'Privacy Policy',
                    body: 'A T Roofing Birmingham Limited respects your privacy and is committed to protecting your personal data. We only collect information strictly required to respond to your roofing quote requests and deliver our contracted services.'
                  })
                }
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>

              <button
                type="button"
                onClick={() =>
                  setLegalModal({
                    title: 'Terms & Conditions',
                    body: 'All new roof installations, structural works, and materials are provided subject to written quotation specifications, manufacturer warranties, and British Standard BS 5534 compliance.'
                  })
                }
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms &amp; Conditions
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer ml-2"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Simple Legal Modal */}
      {legalModal && (
        <div
          className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full text-gray-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-heading font-bold text-base text-[#040205] mb-3">{legalModal.title}</h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-5">{legalModal.body}</p>
            <div className="text-right">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-[#040205] text-white rounded text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
