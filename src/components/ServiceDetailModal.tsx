import React from 'react';
import { X, Check, ArrowRight, Phone } from 'lucide-react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/roofingData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuoteModal: (serviceName: string) => void;
  onNavigateToNewRoof?: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuoteModal,
  onNavigateToNewRoof
}) => {
  if (!service) return null;

  return (
    <div
      id="service-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="service-detail-card"
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden my-8 relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#151D45]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151D45] via-[#242F6B]/60 to-transparent" />
          
          <button
            id="service-detail-close-btn"
            onClick={onClose}
            aria-label="Close service details"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-[#ac0e13] text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded bg-[#ac0e13] text-[11px] font-heading font-bold uppercase tracking-wider mb-2">
              {service.category}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-5">
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-gray-500 mb-1.5">
              Service Overview
            </h4>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {service.fullDesc}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-gray-500 mb-2">
              Key Inclusions & Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-gray-800">
                  <span className="w-4 h-4 rounded-full bg-[#242F6B]/10 text-[#242F6B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#242F6B]" />
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {service.id === 'new-roofs' && (
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onNavigateToNewRoof) {
                    onNavigateToNewRoof();
                  } else {
                    window.location.pathname = '/new-roof-installations';
                  }
                }}
                className="w-full py-3 px-4 rounded-md bg-[#242F6B] hover:bg-[#1b2352] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <span>View Dedicated New Roof Installations Page</span>
                <ArrowRight className="w-4 h-4 text-[#ac0e13]" />
              </button>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <a
              href={BUSINESS_INFO.telLink}
              className="px-4 py-3 rounded-md bg-[#F5F7FA] hover:bg-gray-200 text-gray-800 font-heading font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#242F6B]" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="service-detail-enquire-btn"
              onClick={() => {
                onClose();
                onOpenQuoteModal(service.title);
              }}
              className="px-6 py-3 rounded-md bg-[#ac0e13] hover:bg-[#920b10] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <span>Enquire For This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
