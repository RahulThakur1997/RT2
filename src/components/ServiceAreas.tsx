import React, { useState } from 'react';
import { Check, Phone, Search, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/roofingData';

interface ServiceAreasProps {
  onOpenQuoteModal: (initialService?: string, initialPostcode?: string) => void;
}

// Service locations organized into 3 neat columns for Birmingham & West Midlands
const SERVICE_COLUMNS = [
  {
    id: 'col-1',
    title: 'Birmingham & Greater Area',
    locations: [
      'Birmingham',
      'Sutton Coldfield',
      'Solihull',
      'Erdington',
      'Edgbaston',
      'Harborne',
      'Moseley',
      'Kings Heath',
      'Bournville',
      'Selly Oak',
      'Perry Barr',
      'Great Barr'
    ]
  },
  {
    id: 'col-2',
    title: 'West Midlands & Black Country',
    locations: [
      'West Midlands',
      'Wolverhampton',
      'Dudley',
      'Walsall',
      'West Bromwich',
      'Stourbridge',
      'Halesowen',
      'Oldbury',
      'Smethwick',
      'Tipton',
      'Willenhall',
      'Wednesbury'
    ]
  },
  {
    id: 'col-3',
    title: 'Surrounding Towns & Borders',
    locations: [
      'Tamworth',
      'Lichfield',
      'Bromsgrove',
      'Redditch',
      'Kidderminster',
      'Coleshill',
      'Kenilworth',
      'Coventry',
      'Royal Leamington Spa',
      'Warwick',
      'And surrounding areas'
    ]
  }
];

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onOpenQuoteModal }) => {
  const [postcodeInput, setPostcodeInput] = useState('');
  const [coverageFeedback, setCoverageFeedback] = useState<string | null>(null);

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcodeInput.trim()) return;

    const query = postcodeInput.trim().toUpperCase();
    if (query.startsWith('B') || query.startsWith('WS') || query.startsWith('WV') || query.startsWith('DY') || query.includes('BIRMINGHAM') || query.length >= 2) {
      setCoverageFeedback(
        `✓ Active coverage: A T Roofing teams cover ${query} with fast emergency response & scheduled visits.`
      );
    } else {
      setCoverageFeedback(
        `We cover Birmingham, West Midlands and bordering towns. Contact us to confirm rapid scheduling for ${query}.`
      );
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal('General Enquiry');
    }
  };

  return (
    <section id="service-areas" className="relative w-full overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      {/* ====================================================================
          TOP TRANSITION BAND
          Very light gray / off-white background (#F5F7FA)
          Provides the light backdrop for the van to overlap downwards
          ==================================================================== */}
      <div className="w-full bg-[#F5F7FA] pt-10 sm:pt-14 lg:pt-16 pb-24 sm:pb-32 lg:pb-40 border-t border-gray-200/60">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C80103]" />
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#040205]">
              A T ROOFING BIRMINGHAM • LOCAL SERVICE COVERAGE
            </span>
          </div>
        </div>
      </div>

      {/* ====================================================================
          MAIN SECTION
          Primary Brand Background: #040205
          Contains subtle dark blueprint/map-line pattern on the left side
          ==================================================================== */}
      <div className="w-full bg-[#040205] text-white pt-6 sm:pt-10 pb-24 sm:pb-32 lg:pb-36 relative">
        {/* Subtle dark blueprint / map-line pattern (concentrated on the left, low contrast) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            maskImage: 'radial-gradient(ellipse 75% 90% at 22% 40%, black 15%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 90% at 22% 40%, black 15%, transparent 85%)'
          }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Technical blueprint grid */}
              <pattern id="atroofing-blueprint-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 3" />
                <path d="M 24 24 m -2, 0 a 2,2 0 1,0 4,0 a 2,2 0 1,0 -4,0" fill="#FFFFFF" opacity="0.4" />
              </pattern>
              {/* Abstract topographic contour arcs */}
              <pattern id="atroofing-map-contours" width="240" height="240" patternUnits="userSpaceOnUse">
                <circle cx="120" cy="120" r="80" fill="none" stroke="#93C5FD" strokeWidth="1" strokeDasharray="8 6" />
                <circle cx="120" cy="120" r="115" fill="none" stroke="#93C5FD" strokeWidth="0.75" />
                <path d="M 0 120 Q 60 90 120 120 T 240 120" fill="none" stroke="#93C5FD" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#atroofing-blueprint-grid)" />
            <rect width="100%" height="100%" fill="url(#atroofing-map-contours)" />
          </svg>
        </div>

        {/* Content Container */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-18 items-start">
            
            {/* ================================================================
                LEFT COLUMN (~40% on Desktop: lg:col-span-5)
                Houses the overlapping van at top, large heading, copy & CTA
                ================================================================ */}
            <div className="lg:col-span-5 flex flex-col items-start">
              
              {/* LARGE ROOFING COMPANY WORK TRUCK WITH TRANSPARENT BACKGROUND
                  Scroll-triggered arrival animation: drives into place smoothly from the left as user scrolls down */}
              <motion.div
                initial={{ opacity: 0, x: -90, filter: 'blur(3px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.95,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="-mt-24 sm:-mt-32 lg:-mt-40 xl:-mt-46 mb-8 sm:mb-10 w-full max-w-[520px] xl:max-w-[560px] relative z-20 group"
              >
                {/* Multi-layered ground contact shadows beneath tires & chassis */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0.6, x: -40 }}
                  whileInView={{ opacity: 1, scaleX: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-1 left-8 right-6 h-6 bg-black/60 blur-xl rounded-full pointer-events-none transform skew-x-3"
                />
                <motion.div
                  initial={{ opacity: 0, scaleX: 0.7 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 left-10 right-10 h-3 bg-black/85 blur-sm rounded-full pointer-events-none"
                />

                {/* Commercial vehicle cutout */}
                <img
                  src="/images/keystone-truck-transparent.png?v=clean3"
                  alt="A T Roofing Birmingham commercial work vehicle"
                  className="w-full h-auto object-contain relative z-10 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Fleet status tag */}
                <motion.div
                  initial={{ opacity: 0, y: 14, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.35, duration: 0.45, ease: 'easeOut' }}
                  className="absolute -bottom-2 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#040205]/95 backdrop-blur-xs border border-white/20 text-white text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider shadow-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>A T Roofing Mobile Fleet • Birmingham</span>
                </motion.div>
              </motion.div>

              {/* Large, visually dominant Heading with generous breathing room */}
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-extrabold tracking-tight leading-[1.18] text-white mb-5 sm:mb-6">
                Looking for a trusted roofer near you? We cover Birmingham, West Midlands &amp; surrounding areas.
              </h2>

              {/* Supporting Paragraph */}
              <p className="text-sm sm:text-base md:text-lg text-gray-200 font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl">
                A T Roofing Birmingham provides professional roofing and building services across Birmingham, West Midlands and the surrounding areas. Whether you need a fast roof repair, a complete roof replacement or professional building work, our experienced team can arrange a convenient time to visit your property.
              </p>

              {/* Premium "Contact Us" CTA Button + Direct Phone with clean spacing */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10 sm:mb-12">
                <button
                  id="service-areas-contact-btn"
                  type="button"
                  onClick={handleContactClick}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-white text-[#040205] hover:bg-[#C80103] hover:text-white font-heading font-bold text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  id="service-areas-direct-phone"
                  href={BUSINESS_INFO.telLink}
                  className="inline-flex items-center justify-center gap-2 text-sm font-heading font-semibold text-gray-200 hover:text-white transition-colors py-2 px-3"
                >
                  <Phone className="w-4 h-4 text-[#C80103]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>

              {/* Clean, Non-Intrusive Quick Postcode Check */}
              <div className="w-full pt-6 border-t border-white/15">
                <form onSubmit={handlePostcodeCheck} className="flex items-center gap-2.5">
                  <div className="relative flex-1">
                    <input
                      id="service-areas-postcode-input"
                      type="text"
                      value={postcodeInput}
                      onChange={(e) => setPostcodeInput(e.target.value)}
                      placeholder="Check your postcode (e.g. B44 8DX)..."
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 uppercase font-medium"
                    />
                    <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white text-xs font-heading font-bold uppercase tracking-wider border border-white/20 transition-colors cursor-pointer shrink-0"
                  >
                    Check
                  </button>
                </form>

                {coverageFeedback && (
                  <p className="mt-3 text-xs text-red-200 leading-snug animate-in fade-in duration-200">
                    {coverageFeedback}
                  </p>
                )}
              </div>
            </div>

            {/* ================================================================
                RIGHT SIDE (~60% on Desktop: lg:col-span-7)
                Three-column list of service areas with refined column gaps
                ================================================================ */}
            <div className="lg:col-span-7 lg:pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 lg:gap-x-10 xl:gap-x-12 gap-y-3.5 sm:gap-y-4">
                {SERVICE_COLUMNS.map((column) => (
                  <div key={column.id} className="space-y-3.5 sm:space-y-4">
                    {column.locations.map((location) => (
                      <div
                        key={location}
                        className="flex items-center gap-3 py-1 group/loc"
                      >
                        {/* Circular Checkmark Icon */}
                        <span className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#C80103] group-hover/loc:border-[#C80103] group-hover/loc:text-[#C80103] transition-colors shadow-xs">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>

                        {/* Location Text in white / very light gray */}
                        <span className="text-sm sm:text-[15px] font-medium text-gray-100 group-hover/loc:text-white transition-colors tracking-normal">
                          {location}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Discreet assurance footnote */}
              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-300">
                <span>Free roof surveys &amp; inspections throughout Birmingham &amp; West Midlands</span>
                <span className="text-gray-400">Response within 24 hours</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
