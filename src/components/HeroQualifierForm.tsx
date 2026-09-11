import React, { useState, useRef, useEffect } from 'react';
import {
  Home,
  Hammer,
  Layers,
  Droplets,
  Flame,
  Shield,
  Search,
  Sun,
  ShieldCheck,
  HelpCircle,
  Check,
  ArrowRight,
  ArrowLeft,
  Phone,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { LeadData, LeadPriority } from '../types';
import { BUSINESS_INFO } from '../data/roofingData';

interface ServiceOption {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'NEW ROOF',
    title: 'NEW ROOF',
    subtitle: 'Roof installation or replacement',
    icon: Home
  },
  {
    id: 'ROOF REPAIR',
    title: 'ROOF REPAIR',
    subtitle: 'Leaks, damage or general repairs',
    icon: Hammer
  },
  {
    id: 'FLAT ROOFING',
    title: 'FLAT ROOFING',
    subtitle: 'Flat roof installation or repair',
    icon: Layers
  },
  {
    id: 'GUTTERING',
    title: 'GUTTERING',
    subtitle: 'Guttering & downpipes',
    icon: Droplets
  },
  {
    id: 'CHIMNEY WORK',
    title: 'CHIMNEY WORK',
    subtitle: 'Chimney repairs and maintenance',
    icon: Flame
  },
  {
    id: 'LEAD WORK',
    title: 'LEAD WORK',
    subtitle: 'Lead flashing and roof detailing',
    icon: Shield
  },
  {
    id: 'ROOF INSPECTION',
    title: 'ROOF INSPECTION',
    subtitle: 'Roof assessment or inspection',
    icon: Search
  },
  {
    id: 'SKYLIGHTS',
    title: 'SKYLIGHTS',
    subtitle: 'Skylight installation or replacement',
    icon: Sun
  },
  {
    id: 'INSULATION',
    title: 'INSULATION',
    subtitle: 'Roof insulation',
    icon: ShieldCheck
  },
  {
    id: 'OTHER',
    title: 'OTHER',
    subtitle: 'Something else',
    icon: HelpCircle
  }
];

const URGENCY_OPTIONS = [
  'As soon as possible',
  'Within the next 1–2 weeks',
  'Within the next month',
  'Just getting a quote',
  'Not sure yet'
];

interface HeroQualifierFormProps {
  onSuccess?: (lead: LeadData) => void;
  idPrefix?: string;
  className?: string;
  isHighlighted?: boolean;
  onUserInteract?: () => void;
}

export const HeroQualifierForm: React.FC<HeroQualifierFormProps> = ({
  onSuccess,
  idPrefix = 'hero-',
  className = '',
  isHighlighted = false,
  onUserInteract
}) => {
  const [step, setStep] = useState<number>(1);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [animating, setAnimating] = useState<boolean>(false);

  // Form State
  const [selectedService, setSelectedService] = useState<string>('');
  const [areaPostcode, setAreaPostcode] = useState<string>('');
  const [projectDetails, setProjectDetails] = useState<string>('');
  const [urgency, setUrgency] = useState<string>('Within the next 1–2 weeks');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  // Error State
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Final Submitted Lead
  const [submittedLead, setSubmittedLead] = useState<LeadData | null>(null);

  // References for DOM scrolling and autofocusing
  const cardRef = useRef<HTMLDivElement>(null);
  const postcodeInputRef = useRef<HTMLInputElement>(null);
  const projectTextareaRef = useRef<HTMLTextAreaElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Helper: Lead Qualification Logic (High Priority, Standard, Lower Priority)
  const calculateLeadPriority = (
    service: string,
    urgencyChoice: string,
    details: string
  ): LeadPriority => {
    const detailsLower = details.toLowerCase();
    const urgentKeywords = ['leak', 'emergency', 'urgent', 'hole', 'water', 'storm', 'damage', 'caved', 'dripping'];
    const hasUrgentKeyword = urgentKeywords.some((kw) => detailsLower.includes(kw));

    if (
      urgencyChoice === 'As soon as possible' ||
      service === 'ROOF REPAIR' ||
      hasUrgentKeyword
    ) {
      return 'HIGH PRIORITY';
    }

    if (
      urgencyChoice === 'Just getting a quote' ||
      urgencyChoice === 'Not sure yet' ||
      service === 'OTHER'
    ) {
      return 'LOWER PRIORITY';
    }

    return 'STANDARD';
  };

  // Helper: Single submission entry point for CRM / Webhook / API integrations
  const submitLead = async (leadData: LeadData) => {
    // ====================================================
    // FUTURE CRM / WEBHOOK INTEGRATION
    // ====================================================
    // This lead data structure is prepared for seamless integration with:
    // - GoHighLevel
    // - HubSpot
    // - Zapier / Make Webhooks
    // - Google Sheets / Email notifications
    //
    // Example:
    // try {
    //   await fetch('https://your-crm-webhook-endpoint.com/leads', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(leadData)
    //   });
    // } catch (err) {
    //   console.error('Webhook error:', err);
    // }

    // Log structured lead in development console for verification
    if (process.env.NODE_ENV !== 'production') {
      console.info('[Keystone Lead Submitted]:', leadData);
    }

    if (onSuccess) {
      onSuccess(leadData);
    }
  };

  // Scroll to top of card on step change (especially mobile)
  const scrollToCard = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      // Only scroll if card top is out of view
      if (rect.top < 60 || rect.top > 300) {
        cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  // Autofocus inputs smoothly after transition
  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 2 && postcodeInputRef.current) {
        postcodeInputRef.current.focus();
      } else if (step === 3 && projectTextareaRef.current) {
        projectTextareaRef.current.focus();
      } else if (step === 4 && nameInputRef.current) {
        nameInputRef.current.focus();
      }
    }, 280);

    return () => clearTimeout(timer);
  }, [step]);

  const changeStep = (newStep: number, dir: 'forward' | 'backward') => {
    setDirection(dir);
    setAnimating(true);
    setErrorMessage('');
    scrollToCard();

    setTimeout(() => {
      setStep(newStep);
      setAnimating(false);
    }, 200);
  };

  // Step 1 Validation & Next
  const handleStep1Continue = () => {
    if (!selectedService) {
      setErrorMessage('Please select a service.');
      return;
    }
    changeStep(2, 'forward');
  };

  // Step 2 Validation & Next
  const handleStep2Continue = () => {
    if (!areaPostcode.trim()) {
      setErrorMessage('Please enter your area or postcode.');
      return;
    }
    changeStep(3, 'forward');
  };

  // Step 3 Next (Optional inputs)
  const handleStep3Continue = () => {
    changeStep(4, 'forward');
  };

  // Step 4 Final Submit
  const handleStep4Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!phone.trim()) {
      setErrorMessage('Please enter a valid phone number.');
      return;
    }

    // Basic email check
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const priority = calculateLeadPriority(selectedService, urgency, projectDetails);

    const leadPayload: LeadData = {
      service: selectedService,
      area: areaPostcode.trim(),
      projectDetails: projectDetails.trim(),
      urgency,
      name: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      leadPriority: priority,
      submittedAt: new Date().toISOString()
    };

    submitLead(leadPayload);
    setSubmittedLead(leadPayload);
    scrollToCard();
  };

  const getServiceDisplayTitle = (id: string): string => {
    const match = SERVICE_OPTIONS.find((s) => s.id === id);
    if (!match) return id;
    // Format nicely like "Roof Repairs", "New Roof", etc.
    return match.title
      .toLowerCase()
      .split(' ')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  };

  const highlightClasses = isHighlighted
    ? 'ring-4 ring-[#ac0e13] ring-offset-4 ring-offset-[#0F1638] shadow-[0_0_60px_rgba(220,38,38,0.65),0_25px_50px_-12px_rgba(0,0,0,0.85)] scale-[1.015] -translate-y-1 border-[#ac0e13]'
    : 'border-gray-100 shadow-2xl';

  return (
    <div
      ref={cardRef}
      id={`${idPrefix}qualifier-card`}
      onMouseDown={() => onUserInteract?.()}
      onTouchStart={() => onUserInteract?.()}
      className={`bg-white rounded-[18px] p-5 sm:p-7 md:p-8 border text-[#111827] relative w-full transition-all duration-300 ${highlightClasses} ${className}`}
    >
      {/* Visual Indicator Badge when CTA 'Get a Free Quote' is triggered */}
      {isHighlighted && !submittedLead && (
        <div
          aria-live="polite"
          className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-30 bg-[#ac0e13] text-white px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-heading font-extrabold uppercase tracking-wider shadow-2xl flex items-center gap-2 whitespace-nowrap animate-bounce border-2 border-white pointer-events-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
          <span>Fill in your details here ↓</span>
        </div>
      )}

      {/* SUCCESS SCREEN */}
      {submittedLead ? (
        <div className="py-3 px-1 text-center animate-in fade-in duration-300">
          {/* Green check circle icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#242F6B] mb-2 tracking-tight">
            Thanks, {submittedLead.name.split(' ')[0]}!
          </h3>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-md mx-auto mb-6">
            We've received your roofing enquiry. A member of the Keystone team will be in touch shortly.
          </p>

          {/* Structured Summary Box */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-4 sm:p-5 text-left mb-6 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-gray-200/80 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Service:</span>
              <span className="text-sm font-heading font-bold text-[#242F6B]">
                {getServiceDisplayTitle(submittedLead.service)}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-gray-200/80 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Area:</span>
              <span className="text-sm font-semibold text-gray-800 uppercase">
                {submittedLead.area}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Project:</span>
              <span className="text-xs sm:text-sm text-gray-700 sm:text-right max-w-xs truncate">
                {submittedLead.projectDetails || 'General quotation requested'}
              </span>
            </div>
          </div>

          {/* Urgent calling CTA */}
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Need to speak to us now?
            </p>
            <a
              id={`${idPrefix}success-call-btn`}
              href={BUSINESS_INFO.telLink}
              className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-lg bg-[#ac0e13] hover:bg-[#920b10] text-white font-heading font-bold text-sm tracking-wider uppercase shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>CALL KEYSTONE ({BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>
      ) : (
        /* INTERACTIVE STEP-BY-STEP FORM */
        <div>
          {/* Card Top Branding & Red Accent */}
          <div className="mb-4">
            <div className="w-10 h-1 bg-[#ac0e13] rounded-full mb-3" />
            <h2 className="font-heading text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#242F6B] tracking-tight leading-snug">
              Get Your Free Quote
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Tell us a little about your roofing needs.
            </p>
          </div>

          {/* Form lighting indicator prompt when triggered by hero CTA */}
          {isHighlighted && (
            <div
              role="status"
              className="mb-4 p-2.5 sm:p-3 rounded-lg bg-red-50/95 border border-red-200 text-[#ac0e13] text-xs sm:text-sm font-heading font-bold flex items-center gap-2.5 animate-pulse shadow-xs"
            >
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ac0e13]"></span>
              </span>
              <span>Start here: Choose your service or details below for your free quote</span>
            </div>
          )}

          {/* Progress Indicator */}
          <div className="mb-5 pb-3 border-b border-gray-100">
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider mb-2">
              <span className="text-gray-500">YOUR ROOFING ENQUIRY</span>
              <span className="text-[#242F6B] font-extrabold">STEP {step} OF 4</span>
            </div>

            {/* Custom Progress Bar with Track #242F6B / Fill #ac0e13 */}
            <div className="w-full h-2 bg-[#242F6B]/15 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-[#ac0e13] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Inline Error Notice */}
          {errorMessage && (
            <div
              role="alert"
              className="mb-4 p-3 rounded-md bg-red-50 border border-red-200 text-xs font-medium text-red-700 flex items-center gap-2 animate-in fade-in duration-200"
            >
              <AlertCircle className="w-4 h-4 text-[#ac0e13] shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Step Container with 250ms CSS animation */}
          <div
            className={`transition-opacity duration-200 ease-out ${
              animating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {/* STEP 1: SERVICE */}
            {step === 1 && (
              <div>
                <div className="mb-3">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#242F6B]">
                    What do you need help with?
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Choose the service that best matches your requirements.
                  </p>
                </div>

                {/* 2-Column Grid on Desktop, 2 on Tablet/Mobile */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 max-h-[310px] sm:max-h-[330px] overflow-y-auto pr-1 py-1">
                  {SERVICE_OPTIONS.map((item) => {
                    const isSelected = selectedService === item.id;
                    const IconComponent = item.icon;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setSelectedService(item.id);
                          setErrorMessage('');
                          onUserInteract?.();
                        }}
                        className={`p-2.5 sm:p-3 rounded-lg text-left border transition-all duration-150 relative cursor-pointer min-h-[64px] flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#ac0e13] bg-[#FEF2F2] ring-1 ring-[#ac0e13] shadow-xs'
                            : isHighlighted
                            ? 'border-red-300 bg-red-50/30 hover:border-[#ac0e13] hover:bg-white'
                            : 'border-[#D0D5DD] bg-white hover:border-gray-400 hover:bg-gray-50/70'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-1 mb-1">
                          <IconComponent
                            className={`w-4 h-4 shrink-0 transition-colors ${
                              isSelected ? 'text-[#ac0e13]' : 'text-gray-500'
                            }`}
                          />
                          {isSelected && (
                            <span className="w-4 h-4 rounded-full bg-[#ac0e13] text-white flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                          )}
                        </div>

                        <div>
                          <p
                            className={`text-xs sm:text-[13px] font-heading leading-tight ${
                              isSelected ? 'font-bold text-[#ac0e13]' : 'font-semibold text-gray-900'
                            }`}
                          >
                            {item.title}
                          </p>
                          <p className="text-[10px] text-gray-500 line-clamp-1 leading-snug mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100">
                  <button
                    id={`${idPrefix}step1-continue`}
                    type="button"
                    onClick={handleStep1Continue}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#ac0e13] hover:bg-[#920b10] text-white font-heading font-bold text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
                  >
                    <span>CONTINUE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: LOCATION */}
            {step === 2 && (
              <div>
                <div className="mb-4">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#242F6B]">
                    Where is the property?
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Enter the postcode or area where the work is required.
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <label
                    htmlFor={`${idPrefix}postcode-input`}
                    className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700"
                  >
                    POSTCODE / AREA <span className="text-[#ac0e13]">*</span>
                  </label>
                  <input
                    ref={postcodeInputRef}
                    id={`${idPrefix}postcode-input`}
                    type="text"
                    value={areaPostcode}
                    onChange={(e) => {
                      setAreaPostcode(e.target.value.toUpperCase());
                      setErrorMessage('');
                    }}
                    placeholder="e.g. N3 2DN"
                    className="w-full h-[52px] px-4 rounded-lg bg-white border border-[#D0D5DD] text-base text-gray-900 placeholder:text-gray-400 uppercase font-medium focus:outline-none focus:ring-2 focus:ring-[#242F6B] focus:border-[#242F6B] transition-all"
                  />
                  <p className="text-xs text-gray-500 leading-relaxed pt-1">
                    We use this to check your location and understand where the work is required.
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-6 pt-3 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => changeStep(1, 'backward')}
                    className="px-4 py-3.5 rounded-lg border border-[#242F6B] text-[#242F6B] hover:bg-gray-50 font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer min-h-[48px]"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>BACK</span>
                  </button>

                  <button
                    id={`${idPrefix}step2-continue`}
                    type="button"
                    onClick={handleStep2Continue}
                    className="flex-1 py-3.5 px-6 rounded-lg bg-[#ac0e13] hover:bg-[#920b10] text-white font-heading font-bold text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
                  >
                    <span>CONTINUE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: PROJECT DETAILS */}
            {step === 3 && (
              <div>
                <div className="mb-3">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#242F6B]">
                    What are you looking for?
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Give us a few details about the work you need.
                  </p>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <label
                      htmlFor={`${idPrefix}project-details`}
                      className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700 mb-1"
                    >
                      Project Details <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      ref={projectTextareaRef}
                      id={`${idPrefix}project-details`}
                      rows={3}
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      placeholder="Tell us what's happening with your roof, what work you're considering, or anything you'd like us to know..."
                      className="w-full p-3.5 rounded-lg bg-white border border-[#D0D5DD] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#242F6B] focus:border-[#242F6B] leading-relaxed transition-all"
                    />
                    <p className="text-[11px] text-gray-500 italic mt-1">
                      For example: We have noticed a leak around the chimney and would like someone to inspect it.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor={`${idPrefix}urgency-select`}
                      className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700 mb-1"
                    >
                      How soon do you need help?
                    </label>
                    <select
                      id={`${idPrefix}urgency-select`}
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full h-[48px] px-3.5 rounded-lg bg-white border border-[#D0D5DD] text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#242F6B] focus:border-[#242F6B] transition-all cursor-pointer"
                    >
                      {URGENCY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => changeStep(2, 'backward')}
                    className="px-4 py-3.5 rounded-lg border border-[#242F6B] text-[#242F6B] hover:bg-gray-50 font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer min-h-[48px]"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>BACK</span>
                  </button>

                  <button
                    id={`${idPrefix}step3-continue`}
                    type="button"
                    onClick={handleStep3Continue}
                    className="flex-1 py-3.5 px-6 rounded-lg bg-[#ac0e13] hover:bg-[#920b10] text-white font-heading font-bold text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
                  >
                    <span>CONTINUE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: CONTACT DETAILS */}
            {step === 4 && (
              <form onSubmit={handleStep4Submit}>
                <div className="mb-3">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#242F6B]">
                    Where should we send your quote?
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Enter your details and we'll get back to you about your roofing enquiry.
                  </p>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <label
                      htmlFor={`${idPrefix}fullname`}
                      className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700 mb-1"
                    >
                      FULL NAME <span className="text-[#ac0e13]">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      id={`${idPrefix}fullname`}
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        setErrorMessage('');
                      }}
                      placeholder="Your name"
                      className="w-full h-[50px] px-3.5 rounded-lg bg-white border border-[#D0D5DD] text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#242F6B] focus:border-[#242F6B] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={`${idPrefix}phone`}
                      className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700 mb-1"
                    >
                      PHONE NUMBER <span className="text-[#ac0e13]">*</span>
                    </label>
                    <input
                      id={`${idPrefix}phone`}
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setErrorMessage('');
                      }}
                      placeholder="+44 7XXX XXXXXX"
                      className="w-full h-[50px] px-3.5 rounded-lg bg-white border border-[#D0D5DD] text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#242F6B] focus:border-[#242F6B] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={`${idPrefix}email`}
                      className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700 mb-1"
                    >
                      EMAIL ADDRESS <span className="text-[#ac0e13]">*</span>
                    </label>
                    <input
                      id={`${idPrefix}email`}
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrorMessage('');
                      }}
                      placeholder="you@example.com"
                      className="w-full h-[50px] px-3.5 rounded-lg bg-white border border-[#D0D5DD] text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#242F6B] focus:border-[#242F6B] transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => changeStep(3, 'backward')}
                    className="px-4 py-3.5 rounded-lg border border-[#242F6B] text-[#242F6B] hover:bg-gray-50 font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer min-h-[48px]"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>BACK</span>
                  </button>

                  <button
                    id={`${idPrefix}final-submit`}
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-lg bg-[#ac0e13] hover:bg-[#920b10] text-white font-heading font-bold text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
                  >
                    <span>GET MY FREE QUOTE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-gray-500 text-center mt-3 leading-tight">
                  By submitting this form, you agree that Keystone Roofing & Building Ltd can contact you regarding your enquiry.
                </p>
              </form>
            )}
          </div>

          {/* Subtext Hero Trust Element Under Form */}
          <div className="mt-5 pt-3 border-t border-gray-100 flex flex-col items-center justify-center text-center gap-1 text-[11px] text-gray-500">
            <p className="font-semibold text-gray-700">
              Free quote • No obligation
            </p>
            <p className="text-gray-400">
              Your details are only used to respond to your enquiry.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
