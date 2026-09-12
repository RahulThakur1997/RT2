import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/roofingData';
import { ServiceItem } from '../types';
import { ServiceCard } from './ServiceCard';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesGridProps {
  onOpenQuoteModal: (serviceName?: string) => void;
  activeCategoryFilter?: string;
  onFilterChange?: (cat: string) => void;
  onNavigateToNewRoof?: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onOpenQuoteModal,
  onNavigateToNewRoof
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="bg-white py-20 lg:py-28 xl:py-32 border-b border-gray-100 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
        {/* Section Header with generous breathing space */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="text-xs sm:text-sm font-heading font-bold text-[#C80103] uppercase tracking-widest block mb-3">
            Comprehensive Services
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#040205] tracking-tight mb-4 sm:mb-5">
            Our Roofing Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From roof repairs and maintenance to complete roof installations, A T Roofing Birmingham provides practical roofing solutions built around quality workmanship.
          </p>
        </div>

        {/* 14 Services Grid with horizontal card orientation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {SERVICES_LIST.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={(srv) => {
                if (srv.id === 'new-roofs' && onNavigateToNewRoof) {
                  onNavigateToNewRoof();
                } else {
                  setActiveModalService(srv);
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onOpenQuoteModal={(srvName) => onOpenQuoteModal(srvName)}
        onNavigateToNewRoof={onNavigateToNewRoof}
      />
    </section>
  );
};
