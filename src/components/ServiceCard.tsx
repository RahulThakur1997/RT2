import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onClick: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div
      id={`service-card-${service.id}`}
      onClick={() => onClick(service)}
      className="group relative h-[180px] xs:h-[190px] sm:h-[205px] lg:h-[220px] w-full rounded-[14px] overflow-hidden cursor-pointer shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl bg-[#151D45] flex flex-col justify-between p-4 xs:p-5 sm:p-5 lg:p-6 border border-white/10 hover:border-white/25"
    >
      {/* Background Architectural Image with Controlled Zoom */}
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-106"
        referrerPolicy="no-referrer"
      />

      {/* Dual-layer Gradient Overlay for rich contrast & photographic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#151D45] via-[#151D45]/70 via-50% to-black/35 opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

      {/* Top Red Accent Highlight (Reveals smoothly on hover) */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#ac0e13] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Top Bar: Clean Frosted Category Pill with Status Dot */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#151D45]/85 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ac0e13]" />
          <span>{service.category}</span>
        </span>
      </div>

      {/* Bottom Content Area with Deliberate Proportions */}
      <div className="relative z-10 pt-2 sm:pt-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-white transition-colors leading-snug line-clamp-1">
            {service.title}
          </h3>

          <span className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-white/15 group-hover:bg-[#ac0e13] border border-white/25 text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-1 shadow-sm">
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </span>
        </div>

        <p className="text-xs sm:text-[13px] text-gray-200 mt-1 sm:mt-1.5 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity font-normal">
          {service.shortDesc}
        </p>
      </div>
    </div>
  );
};

