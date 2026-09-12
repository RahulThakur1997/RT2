import React, { useState } from 'react';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (sectionId: string, category?: string) => void;
  onOpenQuoteModal: (service?: string) => void;
  onNavigateToNewRoof?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onNavigateToNewRoof
}) => {
  const [legalModalContent, setLegalModalContent] = useState<{ title: string; body: string } | null>(null);

  const quickLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'About Us', target: 'why-us' },
    { label: 'Roofing', target: 'services', category: 'ROOFING' },
    { label: 'Roof Repairs', target: 'services', category: 'REPAIRS' },
    { label: 'Guttering', target: 'services', category: 'GUTTERING' },
    { label: 'Locations', target: 'service-areas' },
    { label: 'Reviews', target: 'reviews' },
    { label: 'Contact', target: 'contact' }
  ];

  const roofingServices = [
    'New Roof Installations',
    'Flat Roofing',
    'Roof Repairs',
    'Roof Pointing',
    'Roof Valleys',
    'Lead Work',
    'Chimney Repairs'
  ];

  const otherServices = [
    'Guttering & Downpipes',
    'Gutter Cleaning',
    'Skylights',
    'Roof Insulation',
    'Drone Roof Inspection',
    'Garage Roofs',
    'RESTEC Roofing Systems'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLegal = (title: string, body: string) => {
    setLegalModalContent({ title, body });
  };

  return (
    <>
      <footer id="main-footer" className="bg-[#040205] text-white pt-20 lg:pt-24 pb-16 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
          {/* Top Row: Logo & Brand Summary with comfortable pacing */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-14 border-b border-white/10">
            <div className="max-w-xl">
              <div className="bg-[#f9f9f9] px-3.5 py-2 rounded-lg shadow-sm border border-[#e5e5e5] inline-flex items-center justify-center mb-4">
                <Logo variant="footer" width="140px" />
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">
                Professional roofing and building services delivered with quality workmanship, reliable service and attention to detail.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                id="footer-quote-btn"
                onClick={() => onOpenQuoteModal()}
                className="px-7 py-3.5 rounded-lg bg-[#C80103] hover:bg-[#a50102] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-sm hover:-translate-y-0.5"
              >
                GET A FREE QUOTE
              </button>
              <button
                id="footer-back-to-top-btn"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="w-11 h-11 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Middle Row: Columns with generous spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-12 py-14 sm:py-16 border-b border-white/10">
            {/* Contact Details Column */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white mb-5">
                Contact Details
              </h3>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3.5">
                  <Phone className="w-4.5 h-4.5 text-[#C80103] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5">Telephone</span>
                    <a
                      href={BUSINESS_INFO.telLink}
                      className="font-bold text-base text-white hover:text-red-300 transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5">Free Phone</span>
                    <a
                      href={BUSINESS_INFO.freePhoneTelLink}
                      className="font-bold text-base text-white hover:text-emerald-300 transition-colors"
                    >
                      {BUSINESS_INFO.freePhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4.5 h-4.5 text-[#C80103] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5">Email</span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="font-medium text-xs sm:text-sm text-white hover:text-red-300 transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4.5 h-4.5 text-[#C80103] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5">Registered Address</span>
                    <p className="leading-relaxed text-xs sm:text-sm">
                      {BUSINESS_INFO.address.line1},<br />
                      {BUSINESS_INFO.address.line2},<br />
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postcode},<br />
                      {BUSINESS_INFO.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => {
                        if (link.target === 'contact') {
                          onOpenQuoteModal();
                        } else {
                          onNavigate(link.target, link.category);
                        }
                      }}
                      className="hover:text-white hover:underline cursor-pointer transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Roofing Services */}
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white mb-5">
                Roofing Services
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                {roofingServices.map((service) => (
                  <li key={service}>
                    {service === 'New Roof Installations' ? (
                      <button
                        onClick={() => {
                          if (onNavigateToNewRoof) {
                            onNavigateToNewRoof();
                          } else {
                            window.location.pathname = '/new-roof-installations';
                          }
                        }}
                        className="hover:text-white hover:underline cursor-pointer transition-colors text-left"
                      >
                        {service}
                      </button>
                    ) : (
                      <button
                        onClick={() => onOpenQuoteModal(service)}
                        className="hover:text-white hover:underline cursor-pointer transition-colors text-left"
                      >
                        {service}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Services */}
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white mb-5">
                Other Services
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                {otherServices.map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => onOpenQuoteModal(service)}
                      className="hover:text-white hover:underline cursor-pointer transition-colors text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Row: Legal Links & Copyright */}
          <div className="pt-10 sm:pt-12 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-gray-400">
            <p>© 2026 A T Roofing Birmingham. All Rights Reserved.</p>

            <div className="flex items-center gap-6 sm:gap-8">
              <button
                onClick={() =>
                  openLegal(
                    'Privacy Policy',
                    'A T Roofing Birmingham is committed to ensuring customer privacy. Any information submitted through our contact forms is used solely to provide roofing quotations and communication regarding your requested project. We do not share customer data with external marketing third-parties.'
                  )
                }
                className="hover:text-gray-200 hover:underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() =>
                  openLegal(
                    'Cookie Policy',
                    'This website utilizes only essential cookies necessary for website responsiveness, quote submission processing, and functional usability.'
                  )
                }
                className="hover:text-gray-200 hover:underline cursor-pointer"
              >
                Cookie Policy
              </button>
              <button
                onClick={() =>
                  openLegal(
                    'Terms & Conditions',
                    'All written quotations provided by A T Roofing Birmingham remain valid for 30 days unless otherwise agreed. Roofing inspections and works are scheduled subject to property access and safe weather conditions.'
                  )
                }
                className="hover:text-gray-200 hover:underline cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Simple Modal */}
      {legalModalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
          onClick={() => setLegalModalContent(null)}
        >
          <div
            className="bg-white text-gray-900 rounded-lg max-w-lg w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-heading text-xl font-bold text-[#040205] mb-3">
              {legalModalContent.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              {legalModalContent.body}
            </p>
            <div className="text-right">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-5 py-2 rounded bg-[#040205] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C80103] cursor-pointer"
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
