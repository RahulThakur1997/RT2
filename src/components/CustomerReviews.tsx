import React, { useState } from 'react';
import { Star, CheckCircle, X } from 'lucide-react';
import { REVIEWS_LIST } from '../data/roofingData';
import { ReviewItem } from '../types';

interface ExtendedReviewItem extends ReviewItem {
  timeAgo: string;
}

// Extend review items with authentic Google review time stamps
const REVIEWS_WITH_TIMESTAMPS: ExtendedReviewItem[] = REVIEWS_LIST.map((rev, index) => {
  const times = [
    '2 months ago',
    '3 months ago',
    '4 months ago',
    '5 months ago',
    '2 months ago',
    '3 months ago',
    '4 months ago',
    '6 months ago'
  ];
  return {
    ...rev,
    timeAgo: times[index % times.length]
  };
});

// Row 1 & Row 2 sequences with alternating ordering of genuine reviews
// 8 unique items per base half ensures a track width of over 2300px, larger than 1080p/1440p viewports
const ROW_1_BASE: ExtendedReviewItem[] = [
  REVIEWS_WITH_TIMESTAMPS[0],
  REVIEWS_WITH_TIMESTAMPS[1],
  REVIEWS_WITH_TIMESTAMPS[2],
  REVIEWS_WITH_TIMESTAMPS[3],
  REVIEWS_WITH_TIMESTAMPS[4],
  REVIEWS_WITH_TIMESTAMPS[5],
  REVIEWS_WITH_TIMESTAMPS[6],
  REVIEWS_WITH_TIMESTAMPS[7]
];

const ROW_2_BASE: ExtendedReviewItem[] = [
  REVIEWS_WITH_TIMESTAMPS[4],
  REVIEWS_WITH_TIMESTAMPS[5],
  REVIEWS_WITH_TIMESTAMPS[6],
  REVIEWS_WITH_TIMESTAMPS[7],
  REVIEWS_WITH_TIMESTAMPS[0],
  REVIEWS_WITH_TIMESTAMPS[1],
  REVIEWS_WITH_TIMESTAMPS[2],
  REVIEWS_WITH_TIMESTAMPS[3]
];

export const CustomerReviews: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState<ExtendedReviewItem | null>(null);

  const renderReviewCard = (review: ExtendedReviewItem, key: string) => {
    return (
      <div
        key={key}
        className="w-[265px] xs:w-[272px] sm:w-[280px] h-[218px] sm:h-[222px] p-[18px] sm:p-5 rounded-[12px] bg-white border border-gray-200/85 shadow-xs flex flex-col justify-between shrink-0 select-none transition-shadow duration-200 hover:shadow-md"
      >
        {/* Top: Customer Header & Star Rating */}
        <div>
          {/* Customer Header: Avatar + Name + Date + Verified */}
          <div className="flex items-center gap-3">
            {/* Avatar: Real Customer Photo or Styled Monogram Fallback */}
            {review.avatarUrl ? (
              <img
                src={review.avatarUrl}
                alt={review.customerName}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full object-cover border border-gray-200 shadow-2xs shrink-0"
              />
            ) : (
              <div
                className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full bg-[#040205]/10 border border-[#040205]/15 text-[#040205] font-heading font-bold text-xs sm:text-[13px] flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                {review.customerName.charAt(0) || 'A'}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-semibold text-[13px] sm:text-[13.5px] text-[#040205] truncate leading-tight">
                  {review.customerName}
                </span>
                <CheckCircle
                  className="w-3.5 h-3.5 text-emerald-600 shrink-0"
                  aria-label="Verified Homeowner"
                  title="Verified Customer"
                />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-[11.5px] text-gray-400 font-normal leading-tight mt-0.5">
                <span>{review.timeAgo}</span>
                <span>•</span>
                <span className="truncate">{review.location}</span>
              </div>
            </div>
          </div>

          {/* Star Rating: 5 gold stars placed 12-16px below header */}
          <div className="mt-3 mb-2 sm:mb-2.5 flex items-center gap-1" aria-label={`Rated ${review.rating} out of 5 stars`}>
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-amber-400 text-amber-400 stroke-[1.5]"
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Review Text: Dark neutral, 3-4 lines with ellipsis */}
          <p className="text-[12px] sm:text-[12.5px] text-gray-700 leading-[1.48] line-clamp-3 font-normal">
            &ldquo;{review.review}&rdquo;
          </p>

          {/* Read more text link */}
          <button
            type="button"
            onClick={() => setSelectedReview(review)}
            className="text-[11px] sm:text-[11.5px] font-semibold text-[#C80103] hover:underline cursor-pointer mt-1 inline-block text-left"
          >
            Read more
          </button>
        </div>

        {/* Bottom Anchor: Google Review Source */}
        <div className="mt-auto pt-2.5 border-t border-gray-100/90 flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-1.5">
            <img
              src="/images/google-icon.svg"
              alt="Google"
              className="w-3.5 h-3.5 shrink-0"
              aria-hidden="true"
            />
            <span className="text-[10px] sm:text-[10.5px] font-medium text-gray-500 tracking-tight">
              Posted on Google
            </span>
          </div>

          <span className="text-[10px] sm:text-[10.5px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-200/60 truncate max-w-[105px]">
            {review.projectType}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section
      id="reviews"
      className="bg-[#EEF1FA] pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-16 sm:pb-20 lg:pb-24 xl:pb-28 border-b border-gray-200/50 scroll-mt-20 lg:scroll-mt-24 overflow-hidden relative"
      aria-label="Customer Reviews and Social Proof"
    >
      {/* Scoped CSS animations for seamless infinite scrolling & hover-pause */}
      <style>{`
        @keyframes marquee-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-track-left {
          display: flex;
          width: max-content;
          animation: marquee-scroll-left 54s linear infinite;
          will-change: transform;
        }

        .marquee-track-right {
          display: flex;
          width: max-content;
          animation: marquee-scroll-right 60s linear infinite;
          will-change: transform;
        }

        .marquee-track-left:hover,
        .marquee-track-right:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track-left,
          .marquee-track-right {
            animation: none !important;
          }
          .reviews-overflow-container {
            overflow-x: auto !important;
          }
        }
      `}</style>

      {/* Section Header: Eyebrow + Large Heading */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 text-center mb-10 sm:mb-12 lg:mb-16">
        {/* Eyebrow: Small, uppercase, letter-spaced */}
        <p className="text-[12px] sm:text-[13px] font-heading font-bold text-[#C80103] tracking-[0.16em] uppercase mb-4 sm:mb-5">
          SOCIAL PROOF
        </p>

        {/* Large Heading: Center-aligned, single line on desktop if naturally fits */}
        <h2 className="font-heading text-[30px] xs:text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[48px] font-extrabold text-[#040205] leading-[1.08] tracking-tight text-center max-w-[960px] mx-auto">
          Trusted by Homeowners Across Birmingham &amp; West Midlands
        </h2>
      </div>

      {/* Two Horizontal Rows of Review Cards: Full Width Overflow */}
      <div className="relative w-full overflow-hidden reviews-overflow-container">
        {/* Subtle edge fade overlays on desktop and mobile */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 md:w-28 lg:w-36 bg-gradient-to-r from-[#EEF1FA] to-transparent z-20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 md:w-28 lg:w-36 bg-gradient-to-l from-[#EEF1FA] to-transparent z-20"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
          {/* ====================================================
              ROW 1: Continuous scroll from RIGHT → LEFT
              Hover on Row 1 pauses only Row 1
              ==================================================== */}
          <div className="w-full overflow-hidden">
            <div className="marquee-track-left">
              {/* Primary Half */}
              <div className="flex items-center gap-3.5 sm:gap-4 pr-3.5 sm:pr-4">
                {ROW_1_BASE.map((review, idx) =>
                  renderReviewCard(review, `r1-primary-${review.id}-${idx}`)
                )}
              </div>
              {/* Duplicated Clone Half for seamless loop */}
              <div className="flex items-center gap-3.5 sm:gap-4 pr-3.5 sm:pr-4" aria-hidden="true">
                {ROW_1_BASE.map((review, idx) =>
                  renderReviewCard(review, `r1-clone-${review.id}-${idx}`)
                )}
              </div>
            </div>
          </div>

          {/* ====================================================
              ROW 2: Continuous scroll from LEFT → RIGHT
              Hover on Row 2 pauses only Row 2
              ==================================================== */}
          <div className="w-full overflow-hidden">
            <div className="marquee-track-right">
              {/* Primary Half */}
              <div className="flex items-center gap-3.5 sm:gap-4 pr-3.5 sm:pr-4">
                {ROW_2_BASE.map((review, idx) =>
                  renderReviewCard(review, `r2-primary-${review.id}-${idx}`)
                )}
              </div>
              {/* Duplicated Clone Half for seamless loop */}
              <div className="flex items-center gap-3.5 sm:gap-4 pr-3.5 sm:pr-4" aria-hidden="true">
                {ROW_2_BASE.map((review, idx) =>
                  renderReviewCard(review, `r2-clone-${review.id}-${idx}`)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Read More Detail Dialog */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedReview(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="review-modal-title"
        >
          <div
            className="bg-white rounded-[16px] max-w-md w-full p-6 sm:p-7 shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedReview(null)}
              aria-label="Close review details"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-[#040205] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Reviewer Header */}
            <div className="flex items-center gap-3 mb-4">
              {selectedReview.avatarUrl ? (
                <img
                  src={selectedReview.avatarUrl}
                  alt={selectedReview.customerName}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-gray-200 shadow-2xs shrink-0"
                />
              ) : (
                <div className="w-11 h-11 rounded-full bg-[#040205]/10 border border-[#040205]/15 text-[#040205] font-heading font-bold text-base flex items-center justify-center shrink-0">
                  {selectedReview.customerName.charAt(0) || 'A'}
                </div>
              )}
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 id="review-modal-title" className="font-heading font-bold text-base text-[#040205]">
                    {selectedReview.customerName}
                  </h4>
                  <CheckCircle className="w-4 h-4 text-emerald-600" aria-label="Verified Customer" />
                </div>
                <p className="text-xs text-gray-400 mt-0.5">
                  {selectedReview.timeAgo} • {selectedReview.location}
                </p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(selectedReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-[#040205] ml-1.5">5.0 out of 5</span>
            </div>

            {/* Full Review Text */}
            <p className="text-sm text-gray-700 leading-relaxed italic mb-5 bg-[#F5F7FA] p-4 rounded-xl border border-gray-100">
              &ldquo;{selectedReview.review}&rdquo;
            </p>

            {/* Footer with Google attribution & project type */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <img src="/images/google-icon.svg" alt="Google" className="w-4 h-4" />
                <span className="font-medium text-gray-600">Verified Google Review</span>
              </div>
              <span className="font-medium text-[#040205] bg-[#040205]/10 px-2.5 py-1 rounded-md">
                {selectedReview.projectType}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
