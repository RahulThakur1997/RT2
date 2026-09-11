import React, { useState } from 'react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { SERVICE_REVIEWS_NEW_ROOF } from '../../data/newRoofData';

export const NewRoofReviews: React.FC = () => {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  const prevReview = () => {
    setActiveMobileIdx((prev) => (prev === 0 ? SERVICE_REVIEWS_NEW_ROOF.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveMobileIdx((prev) => (prev === SERVICE_REVIEWS_NEW_ROOF.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="reviews-section"
      aria-label="Customer Reviews"
      className="bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header with Review-Source Badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#ac0e13]" />
              <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-[#ac0e13]">
                VERIFIED HOMEOWNER FEEDBACK
              </span>
            </div>
            <h2 className="font-heading text-[24px] sm:text-[28px] lg:text-[34px] font-extrabold text-[#242F6B] leading-tight tracking-tight">
              What Our Customers Say About Us
            </h2>
          </div>

          {/* Compact Trust Source Badges */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#F5F7FA] border border-gray-200/80 rounded-md px-3 py-1.5 shadow-2xs">
              <img
                src="/images/google-icon.svg"
                alt="Google"
                className="w-4 h-4 shrink-0"
              />
              <div className="text-left">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-heading font-bold text-[#242F6B]">5.0 Google Score</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#F5F7FA] border border-gray-200/80 rounded-md px-3 py-1.5 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="text-left">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-heading font-bold text-[#242F6B]">Checkatrade Vetted</span>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP: 4 Review Cards in Horizontal Row */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICE_REVIEWS_NEW_ROOF.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl p-5 border border-gray-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              <div>
                {/* Header: Avatar, Name, Verified */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={rev.avatarUrl}
                    alt={rev.customerName}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover border border-gray-200 shadow-2xs shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <span className="font-heading font-semibold text-[13px] text-[#242F6B] truncate">
                        {rev.customerName}
                      </span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </div>
                    <span className="text-[11px] text-gray-400 block truncate">
                      {rev.location}
                    </span>
                  </div>
                </div>

                {/* Rating & Timestamp */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10.5px] text-gray-400">{rev.timeAgo}</span>
                </div>

                {/* Review Text */}
                <p className="text-[12.5px] text-gray-700 leading-relaxed font-normal">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              {/* Bottom Anchor: Google Mark & Project Type */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[10.5px] text-gray-500">
                <div className="flex items-center gap-1.5">
                  <img src="/images/google-icon.svg" alt="Google" className="w-3.5 h-3.5" />
                  <span className="font-medium text-gray-500">Google Review</span>
                </div>
                <span className="bg-gray-50 px-2 py-0.5 rounded border border-gray-200/60 font-medium text-gray-600 truncate max-w-[100px]">
                  {rev.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE: Carousel With 1 Card Visible & Touch-Friendly Controls */}
        <div className="block md:hidden">
          <div className="bg-white rounded-xl p-5 border border-gray-200/90 shadow-sm flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={SERVICE_REVIEWS_NEW_ROOF[activeMobileIdx].avatarUrl}
                  alt={SERVICE_REVIEWS_NEW_ROOF[activeMobileIdx].customerName}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <span className="font-heading font-semibold text-sm text-[#242F6B]">
                      {SERVICE_REVIEWS_NEW_ROOF[activeMobileIdx].customerName}
                    </span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  </div>
                  <span className="text-xs text-gray-400 block">
                    {SERVICE_REVIEWS_NEW_ROOF[activeMobileIdx].location} • {SERVICE_REVIEWS_NEW_ROOF[activeMobileIdx].timeAgo}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-0.5 mb-2.5">
                {[...Array(SERVICE_REVIEWS_NEW_ROOF[activeMobileIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs text-gray-700 leading-relaxed">
                &ldquo;{SERVICE_REVIEWS_NEW_ROOF[activeMobileIdx].review}&rdquo;
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <img src="/images/google-icon.svg" alt="Google" className="w-3.5 h-3.5" />
                <span>Google Review</span>
              </div>
              <span className="bg-gray-50 px-2 py-0.5 rounded border border-gray-200 font-medium text-[10.5px]">
                {SERVICE_REVIEWS_NEW_ROOF[activeMobileIdx].projectType}
              </span>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-1.5">
              {SERVICE_REVIEWS_NEW_ROOF.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveMobileIdx(dotIdx)}
                  aria-label={`Go to review ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    dotIdx === activeMobileIdx ? 'w-6 bg-[#ac0e13]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevReview}
                aria-label="Previous review"
                className="w-9 h-9 rounded-md bg-gray-100 hover:bg-gray-200 text-[#242F6B] flex items-center justify-center cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                aria-label="Next review"
                className="w-9 h-9 rounded-md bg-gray-100 hover:bg-gray-200 text-[#242F6B] flex items-center justify-center cursor-pointer transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
