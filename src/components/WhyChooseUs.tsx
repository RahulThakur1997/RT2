import React, { useState } from 'react';

export interface WhyChooseUsProps {
  onOpenQuoteModal?: (serviceName?: string) => void;
}

interface FeatureItemData {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const FEATURES: FeatureItemData[] = [
  {
    id: 'transparent-pricing',
    number: '01',
    eyebrow: '01 · TRANSPARENT PRICING',
    title: 'Clear & Transparent Pricing',
    description:
      "Straightforward quotations with no unnecessary surprises. We explain the work clearly so you know exactly what you're paying for.",
    image: '/images/why-choose-pricing.jpg',
    alt: 'A T Roofing clear and transparent pricing and detailed roofing assessment in Birmingham',
  },
  {
    id: 'customer-care',
    number: '02',
    eyebrow: '02 · CUSTOMER CARE',
    title: 'First Class Service',
    description:
      'From your first enquiry to project completion, our team keeps you informed and makes the process simple.',
    image: '/images/why-choose-service.jpg',
    alt: 'A T Roofing customer service and dedicated roofing team keeping homeowners informed',
  },
  {
    id: 'premium-craftsmanship',
    number: '03',
    eyebrow: '03 · PREMIUM CRAFTSMANSHIP',
    title: 'Highest Quality Work & Materials',
    description:
      'We combine skilled workmanship with quality materials to deliver durable roofing and building solutions designed to stand the test of time.',
    image: '/images/why-choose-quality.jpg',
    alt: 'Skilled roofing craftsmanship and premium durable materials installed by A T Roofing',
  },
  {
    id: 'experienced-team',
    number: '04',
    eyebrow: '04 · EXPERIENCED TEAM',
    title: 'Trusted Roofing Experts',
    description:
      'Our experienced team brings professional knowledge, careful attention to detail and dependable workmanship to every project.',
    image: '/images/why-choose-experts.jpg',
    alt: 'Experienced and trusted A T Roofing Birmingham professionals working on residential roof',
  },
];

/**
 * FeatureItem component representing each selectable trust proposition.
 */
interface FeatureItemProps {
  feature: FeatureItemData;
  isActive: boolean;
  onSelect: () => void;
  isLast: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  feature,
  isActive,
  onSelect,
  isLast,
}) => {
  return (
    <div className="w-full">
      <button
        type="button"
        role="tab"
        id={`feature-tab-${feature.id}`}
        aria-selected={isActive}
        aria-controls="feature-image-viewport"
        onClick={onSelect}
        onMouseEnter={onSelect}
        className={`w-full text-left transition-all duration-200 cursor-pointer group rounded-r-[12px] rounded-l-[4px] px-3.5 sm:px-4 py-3 sm:py-3.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#040205]/60 ${
          isActive
            ? 'bg-[#EEF3F9] border-l-[3.5px] border-[#C80103] shadow-xs'
            : 'border-l-[3.5px] border-transparent hover:bg-gray-100/60'
        }`}
      >
        {/* Eyebrow */}
        <span
          className={`block text-[10.5px] sm:text-[11px] font-mono sm:font-heading font-bold tracking-[0.06em] uppercase mb-1 transition-colors ${
            isActive ? 'text-[#C80103]' : 'text-gray-400 group-hover:text-gray-600'
          }`}
        >
          {feature.eyebrow}
        </span>

        {/* Feature Heading */}
        <h3
          className={`text-[17px] sm:text-[19px] lg:text-[20px] font-heading font-bold tracking-tight leading-snug mb-1 transition-colors ${
            isActive
              ? 'text-[#040205]'
              : 'text-[#040205]/85 group-hover:text-[#040205]'
          }`}
        >
          {feature.title}
        </h3>

        {/* Feature Description */}
        <p
          className={`text-[13px] sm:text-[14px] leading-[1.55] transition-colors ${
            isActive
              ? 'text-gray-700 font-normal'
              : 'text-gray-500 group-hover:text-gray-600'
          }`}
        >
          {feature.description}
        </p>
      </button>

      {/* Subtle Divider between items */}
      {!isLast && (
        <div
          className="border-b border-gray-200/80 my-1 mx-2"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

/**
 * FeatureImage component representing the single persistent image viewport.
 */
interface FeatureImageProps {
  features: FeatureItemData[];
  activeIndex: number;
}

const FeatureImage: React.FC<FeatureImageProps> = ({
  features,
  activeIndex,
}) => {
  return (
    <div
      id="feature-image-viewport"
      role="tabpanel"
      aria-labelledby={`feature-tab-${features[activeIndex].id}`}
      className="relative w-full aspect-[4/3] rounded-[14px] sm:rounded-[18px] overflow-hidden bg-slate-900 shadow-xl shadow-black/10 border border-gray-200/90"
    >
      {/* Preload and layer all images inside the same container for zero layout shift and instant crossfade */}
      {features.map((item, index) => {
        const isSelected = index === activeIndex;
        return (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out ${
              isSelected
                ? 'opacity-100 z-10 pointer-events-auto'
                : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={item.image}
              alt={item.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
                isSelected ? 'scale-[1.015]' : 'scale-100'
              }`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/why-choose-us.jpg';
              }}
            />
            {/* Subtle photographic vignette overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        );
      })}

      {/* Small live badge indicator at bottom right of image */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 pointer-events-none">
        <span className="px-2.5 py-1 rounded-md bg-[#040205]/85 text-white font-mono text-[11px] font-semibold tracking-wider uppercase backdrop-blur-xs border border-white/10 shadow-sm">
          {features[activeIndex].number} / 04
        </span>
      </div>
    </div>
  );
};

export const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      id="why-us"
      className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24 border-b border-gray-200/80 scroll-mt-20 lg:scroll-mt-24"
      aria-labelledby="why-roofing-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
        {/* ====================================================
            DESKTOP TWO-COLUMN COMPOSITION (items-center)
            LEFT: Eyebrow + Heading + 4 Selectable Feature Items
            RIGHT: Exactly ONE Persistent Image Container
            ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 lg:items-center">
          {/* LEFT COLUMN: Editorial Trust propositions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Eyebrow */}
            <span className="text-xs sm:text-[13px] font-heading font-bold text-[#C80103] uppercase tracking-widest block mb-2 sm:mb-2.5">
              WHY CHOOSE A T ROOFING?
            </span>

            {/* Section Main Heading */}
            <h2
              id="why-roofing-heading"
              className="font-heading text-[28px] xs:text-[32px] sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-[#040205] tracking-tight leading-[1.12] mb-6 sm:mb-7 max-w-[580px]"
            >
              Why homeowners trust A T Roofing for their roofing &amp; building needs
            </h2>

            {/* Mobile Viewport: Single Image rendered right after heading for immediate responsive feedback */}
            <div className="block lg:hidden mb-6 sm:mb-8">
              <FeatureImage features={FEATURES} activeIndex={activeIndex} />
            </div>

            {/* Feature List: 4 interactive selectable propositions */}
            <div
              role="tablist"
              aria-label="Why Choose A T Roofing trust features"
              className="flex flex-col space-y-1 w-full"
            >
              {FEATURES.map((feature, idx) => (
                <FeatureItem
                  key={feature.id}
                  feature={feature}
                  isActive={activeIndex === idx}
                  onSelect={() => setActiveIndex(idx)}
                  isLast={idx === FEATURES.length - 1}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN (DESKTOP): Single Persistent Image Viewport */}
          <div className="hidden lg:block lg:col-span-6">
            <FeatureImage features={FEATURES} activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Also export as WhyChooseATRoofingSection alias for architectural naming
export const WhyChooseATRoofingSection = WhyChooseUs;
export const WhyChooseKeystoneSection = WhyChooseUs;
