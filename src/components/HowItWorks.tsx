import React from 'react';
import {
  PhoneCall,
  CalendarClock,
  FileSignature,
  Hammer,
  Award,
  ArrowRight,
} from 'lucide-react';

interface HowItWorksProps {
  onOpenQuoteModal?: () => void;
}

interface ProcessStep {
  id: string;
  stepNumber: string;
  heading: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'process-step-01',
    stepNumber: '01',
    heading: 'Speak to Our Team',
    description:
      'Give us a call or send an enquiry and speak directly with our friendly team about your roofing or building requirements.',
    icon: PhoneCall,
  },
  {
    id: 'process-step-02',
    stepNumber: '02',
    heading: 'Book Your Roof Inspection',
    description:
      "We'll arrange a convenient time for one of our professionals to visit your property and assess the work required.",
    icon: CalendarClock,
  },
  {
    id: 'process-step-03',
    stepNumber: '03',
    heading: 'Receive Your Free Quote',
    description:
      "We'll provide a clear, no-obligation quotation with straightforward pricing and a detailed explanation of the work.",
    icon: FileSignature,
  },
  {
    id: 'process-step-04',
    stepNumber: '04',
    heading: 'Your Project Begins',
    description:
      "Once you're happy to proceed, we'll agree a suitable start date and our team will take care of the work from there.",
    icon: Hammer,
  },
  {
    id: 'process-step-05',
    stepNumber: '05',
    heading: 'Quality You Can Rely On',
    description:
      'We take pride in our workmanship and provide dependable roofing and building solutions designed to give you lasting peace of mind.',
    icon: Award,
  },
];

/**
 * Reusable compact horizontal process card.
 * Icon is on the LEFT, vertically centered relative to the text content block.
 */
const ProcessCard: React.FC<{ step: ProcessStep }> = ({ step }) => {
  const Icon = step.icon;

  return (
    <article
      id={step.id}
      className="w-full bg-[#EEF3F9] rounded-[16px] sm:rounded-[18px] p-5 sm:p-6 lg:py-5 lg:px-6 xl:py-6 xl:px-7 border border-[#DCE5F2]/90 hover:border-[#242F6B]/30 hover:shadow-xs transition-all duration-200"
    >
      <div className="flex items-center gap-4 sm:gap-5 lg:gap-6">
        {/* Left: Vertically centered Navy Line Icon (~70px - 85px column area) */}
        <div
          className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 flex items-center justify-center text-[#242F6B]"
          aria-hidden="true"
        >
          <Icon className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 stroke-[1.6]" />
        </div>

        {/* Right: Text Block (Heading + Description) */}
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-lg sm:text-[20px] lg:text-[21px] font-bold text-[#242F6B] tracking-tight leading-snug mb-1 sm:mb-1.5">
            {step.heading}
          </h3>
          <p className="text-xs sm:text-sm lg:text-[14px] text-gray-600 leading-[1.55] font-normal">
            {step.description}
          </p>
        </div>
      </div>
    </article>
  );
};

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenQuoteModal }) => {
  const handleContactClick = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    }
  };

  return (
    <section
      id="how-it-works"
      className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28 border-b border-gray-200/60 scroll-mt-20 lg:scroll-mt-24"
      aria-labelledby="getting-started-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
        {/* ====================================================
            TWO-COLUMN DESKTOP COMPOSITION (align-items: center)
            Left: Introductory content (~40%)
            Right: Five compact horizontal process cards (~60%)
            ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 xl:gap-18 lg:items-center">
          {/* ====================================================
              LEFT COLUMN: INTRODUCTORY CONTENT
              Constrained editorial width, vertically centered
              ==================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-xs sm:text-[13px] font-heading font-bold text-[#ac0e13] uppercase tracking-widest block mb-2.5 sm:mb-3">
              GET STARTED WITH KEYSTONE
            </span>

            {/* Heading (Constrained width: ~500px–560px, 42px-50px desktop) */}
            <h2
              id="getting-started-heading"
              className="font-heading text-[30px] xs:text-[34px] sm:text-4xl lg:text-[42px] xl:text-[48px] font-bold text-[#242F6B] tracking-tight leading-[1.1] mb-5 sm:mb-6 max-w-[540px]"
            >
              Getting started with Keystone
              <br className="hidden sm:inline" /> couldn&apos;t be simpler...
            </h2>

            {/* Supporting Paragraph (Constrained width: ~450px–520px, 16px–17px, line-height 1.65) */}
            <p className="text-[15px] sm:text-[16px] lg:text-[16.5px] text-gray-600 leading-[1.65] font-normal mb-7 sm:mb-8 max-w-[500px]">
              Whether you need an urgent roof repair, a new roof or professional building work,
              our experienced team makes the process straightforward from your first enquiry through
              to completion. We&apos;ll keep you informed at every stage and provide clear, honest advice
              along the way.
            </p>

            {/* CTA Button directly underneath paragraph */}
            <div>
              <button
                id="how-it-works-contact-btn"
                type="button"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2.5 h-[46px] sm:h-[48px] px-6 sm:px-7 rounded-[10px] bg-white border border-[#242F6B] text-[#242F6B] font-heading font-bold text-sm tracking-wide transition-all duration-200 hover:bg-[#242F6B] hover:text-white shadow-xs hover:shadow-md cursor-pointer group"
              >
                <span>Contact us</span>
                <ArrowRight className="w-4 h-4 text-[#242F6B] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </div>

          {/* ====================================================
              RIGHT COLUMN: FIVE HORIZONTAL PROCESS CARDS
              Stacked vertically with tight 8px-12px gaps
              ==================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-2.5 sm:gap-3 w-full">
            {PROCESS_STEPS.map((step) => (
              <ProcessCard key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Also export GettingStartedSection alias for architectural consistency
export const GettingStartedSection = HowItWorks;
