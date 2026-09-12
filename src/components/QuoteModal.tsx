import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Phone, Home, Building2, Warehouse } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialPostcode?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialPostcode = ''
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: initialService,
    propertyType: 'Detached House',
    postcode: initialPostcode,
    timeline: 'Within 1–2 weeks',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    if (initialPostcode) {
      setFormData((prev) => ({ ...prev, postcode: initialPostcode }));
    }
  }, [initialService, initialPostcode]);

  if (!isOpen) return null;

  const totalSteps = 5;

  const servicesOptions = [
    'New Roof Installation',
    'Roof Repairs',
    'Flat Roofing',
    'Roof Pointing',
    'Lead Work',
    'Roof Valleys',
    'Chimney Repairs',
    'Guttering & Downpipes',
    'Gutter Cleaning',
    'Skylight Installation',
    'Roof Insulation',
    'Drone Roof Inspection',
    'Garage Roofs',
    'RESTEC Roofing Systems',
    'Other'
  ];

  const propertyTypes = [
    { label: 'Detached House', desc: 'Single residential property' },
    { label: 'Semi-Detached', desc: 'Residential paired home' },
    { label: 'Terraced House', desc: 'Row or town house' },
    { label: 'Bungalow', desc: 'Single-storey dwelling' },
    { label: 'Garage / Outbuilding', desc: 'Flat or pitched annex' },
    { label: 'Commercial Building', desc: 'Office, retail or industrial' }
  ];

  const timelineOptions = [
    { label: 'As soon as possible', badge: 'Urgent / Storm leak' },
    { label: 'Within 1–2 weeks', badge: 'Standard enquiry' },
    { label: 'Within a month', badge: 'Flexible booking' },
    { label: 'Planning ahead', badge: 'Budgeting & advice' }
  ];

  const handleNext = () => {
    setErrorMsg('');
    if (step === 1 && !formData.service) {
      setErrorMsg('Please select what service you need help with.');
      return;
    }
    if (step === 3 && !formData.postcode.trim()) {
      setErrorMsg('Please enter your property postcode.');
      return;
    }
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setErrorMsg('');
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please provide your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please provide your contact telephone number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div
      id="quote-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="quote-modal-container"
        className="bg-white rounded-lg shadow-2xl max-w-xl w-full overflow-hidden my-6 relative border-t-4 border-[#C80103] animate-in fade-in zoom-in-95 duration-200 text-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#040205] text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-heading font-bold text-[#f87171] uppercase tracking-wider block mb-0.5">
              A T Roofing Birmingham
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold">
              Request Your Free Quotation
            </h3>
          </div>
          <button
            id="quote-modal-close-btn"
            onClick={onClose}
            aria-label="Close quote modal"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C80103] flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation State */
          <div className="p-8 sm:p-10 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-heading text-2xl font-bold text-[#040205]">
              Thank You!
            </h4>
            <p className="text-base text-gray-700 leading-relaxed max-w-md mx-auto">
              Your enquiry has been received. A member of the A T Roofing team will be in touch.
            </p>

            <div className="p-4 rounded-lg bg-[#EEF1FA] text-xs sm:text-sm text-[#040205] text-left max-w-sm mx-auto space-y-1 mt-4">
              <p><strong>Service:</strong> {formData.service}</p>
              <p><strong>Postcode:</strong> {formData.postcode || 'Birmingham Area'}</p>
              <p><strong>Contact:</strong> {formData.name} ({formData.phone})</p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-md bg-[#040205] hover:bg-[#1a171d] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Content with Progress */
          <div className="p-6 sm:p-8">
            {/* Progress Indicator */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider text-gray-500 mb-2">
                <span>Step {step} of {totalSteps}</span>
                <span className="text-[#C80103] font-bold">
                  {step === 1 && 'Select Service'}
                  {step === 2 && 'Property Information'}
                  {step === 3 && 'Location / Postcode'}
                  {step === 4 && 'Target Timeline'}
                  {step === 5 && 'Contact Details'}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C80103] transition-all duration-300 ease-out"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded bg-red-50 border border-red-200 text-xs font-medium text-red-700">
                {errorMsg}
              </div>
            )}

            {/* STEP 1: What do you need help with? */}
            {step === 1 && (
              <div className="space-y-3">
                <h4 className="font-heading text-base font-bold text-[#040205] mb-2">
                  What do you need help with?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[300px] overflow-y-auto pr-1">
                  {servicesOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: opt })}
                      className={`p-3 rounded-md text-left text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                        formData.service === opt
                          ? 'border-[#040205] bg-gray-100 text-[#040205] font-bold shadow-xs'
                          : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Property information */}
            {step === 2 && (
              <div className="space-y-3">
                <h4 className="font-heading text-base font-bold text-[#040205] mb-2">
                  What type of property is it?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {propertyTypes.map((prop) => (
                    <button
                      key={prop.label}
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: prop.label })}
                      className={`p-3.5 rounded-md text-left border transition-all cursor-pointer ${
                        formData.propertyType === prop.label
                          ? 'border-[#040205] bg-gray-100 text-[#040205] shadow-xs'
                          : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <p className="font-heading font-bold text-sm text-[#040205]">
                        {prop.label}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{prop.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: Location / Postcode */}
            {step === 3 && (
              <div className="space-y-4">
                <h4 className="font-heading text-base font-bold text-[#040205] mb-1">
                  Where is the property located?
                </h4>
                <p className="text-xs text-gray-500 mb-2">
                  We provide roofing services throughout Birmingham and surrounding areas.
                </p>
                <div>
                  <label htmlFor="modal-postcode-input" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                    Postcode
                  </label>
                  <input
                    id="modal-postcode-input"
                    type="text"
                    value={formData.postcode}
                    onChange={(e) =>
                      setFormData({ ...formData, postcode: e.target.value.toUpperCase() })
                    }
                    placeholder="e.g. B44 8DX, B1, B72"
                    className="w-full px-4 py-3.5 rounded-md bg-[#F5F7FA] border border-gray-300 text-base uppercase font-medium focus:ring-2 focus:ring-[#040205] focus:outline-none"
                  />
                </div>
                <div className="p-3 rounded bg-gray-100 text-xs text-[#040205] leading-relaxed">
                  Fast response available for emergency leaks and repair assessments across Birmingham and surrounding areas.
                </div>
              </div>
            )}

            {/* STEP 4: When do you need help? */}
            {step === 4 && (
              <div className="space-y-3">
                <h4 className="font-heading text-base font-bold text-[#040205] mb-2">
                  When do you need the work completed?
                </h4>
                <div className="space-y-2.5">
                  {timelineOptions.map((t) => (
                    <button
                      key={t.label}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: t.label })}
                      className={`w-full p-3.5 rounded-md text-left flex items-center justify-between border transition-all cursor-pointer ${
                        formData.timeline === t.label
                          ? 'border-[#040205] bg-gray-100 text-[#040205] font-bold shadow-xs'
                          : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span className="font-heading text-sm font-semibold">{t.label}</span>
                      <span className="text-xs text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-200">
                        {t.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 5: Contact Details */}
            {step === 5 && (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <h4 className="font-heading text-base font-bold text-[#040205] mb-1">
                  How should we send your quote?
                </h4>
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                    Your Name <span className="text-[#C80103]">*</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F7FA] border border-gray-300 text-sm focus:ring-2 focus:ring-[#040205] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                      Phone Number <span className="text-[#C80103]">*</span>
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 07542 949479"
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F7FA] border border-gray-300 text-sm focus:ring-2 focus:ring-[#040205] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                      Email Address <span className="text-[#C80103]">*</span>
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.co.uk"
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F7FA] border border-gray-300 text-sm focus:ring-2 focus:ring-[#040205] focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="modal-notes" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                    Additional Notes <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="modal-notes"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Brief description of roof issue or project requirements..."
                    className="w-full px-3.5 py-2 rounded-md bg-[#F5F7FA] border border-gray-300 text-sm focus:ring-2 focus:ring-[#040205] focus:outline-none"
                  />
                </div>

                <button
                  id="modal-final-submit-btn"
                  type="submit"
                  className="w-full py-4 px-6 rounded-md bg-[#C80103] hover:bg-[#a50102] text-white font-heading font-bold text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer mt-3"
                >
                  <span>REQUEST MY FREE QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Navigation Buttons for Steps 1 - 4 */}
            {step < totalSteps && (
              <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-gray-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2.5 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-md bg-[#040205] hover:bg-[#1a171d] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
