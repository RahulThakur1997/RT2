import React from 'react';
import { ROOF_MATERIALS } from '../../data/newRoofData';

export const NewRoofMaterials: React.FC = () => {
  return (
    <section
      id="materials-section"
      aria-label="Common New Roof Materials"
      className="bg-[#F2F8FC] py-16 sm:py-20 lg:py-24 border-b border-gray-200/60"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-0.5 w-5 bg-[#ac0e13]" />
            <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-[#ac0e13]">
              MATERIAL SPECIFICATIONS
            </span>
            <span className="h-0.5 w-5 bg-[#ac0e13]" />
          </div>

          <h2 className="font-heading text-[24px] sm:text-[28px] lg:text-[34px] font-extrabold text-[#242F6B] leading-[1.15] tracking-tight">
            Common New Roof Materials
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
            We partner with leading British and European manufacturers to source durable, aesthetically refined tiles, slates, and metal systems.
          </p>
        </div>

        {/* 6-Item Gallery Grid: 6 in 1 row on xl, 3x2 on tablet, 2x3 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {ROOF_MATERIALS.map((material) => (
            <div
              key={material.id}
              className="bg-white rounded-lg sm:rounded-xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group"
            >
              {/* Material Texture Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                  src={material.imageUrl}
                  alt={`${material.name} texture and profile`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Material Label & Micro-Details */}
              <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-heading text-xs sm:text-[13px] font-bold text-[#242F6B] leading-tight mb-1 group-hover:text-[#ac0e13] transition-colors">
                    {material.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed font-normal">
                    {material.description}
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-gray-100 text-[10px] font-semibold text-[#242F6B]/80 flex items-center justify-between">
                  <span className="truncate">{material.benefits.split('•')[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
