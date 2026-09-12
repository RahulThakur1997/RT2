import React from 'react';
import { Home, ShieldCheck, MapPin, PhoneCall } from 'lucide-react';

interface TrustValue {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  heading: string;
  description: string;
  iconContainerBg: string;
  iconColor: string;
  hasRedAccent?: boolean;
}

export const TrustStrip: React.FC = () => {
  const values: TrustValue[] = [
    {
      id: 'specialists',
      icon: Home,
      heading: 'Roofing Specialists',
      description: 'Repairs, renewals & replacements',
      iconContainerBg: 'bg-[#040205]/[0.07]',
      iconColor: 'text-[#040205]',
    },
    {
      id: 'workmanship',
      icon: ShieldCheck,
      heading: 'Quality Workmanship',
      description: 'Built for long-term protection',
      iconContainerBg: 'bg-[#040205]/[0.07]',
      iconColor: 'text-[#040205]',
      hasRedAccent: true,
    },
    {
      id: 'local',
      icon: MapPin,
      heading: 'Local Roofing Team',
      description: 'Serving Birmingham & West Midlands',
      iconContainerBg: 'bg-[#040205]/[0.07]',
      iconColor: 'text-[#040205]',
    },
    {
      id: 'quotes',
      icon: PhoneCall,
      heading: 'Free Quotes',
      description: 'Speak directly with our team',
      iconContainerBg: 'bg-[#C80103]/[0.08]',
      iconColor: 'text-[#C80103]',
    },
  ];

  return (
    <section
      id="trust-strip"
      aria-label="A T Roofing Birmingham Key Values"
      className="relative z-20 py-8 sm:py-10 lg:py-12 px-3 sm:px-4 lg:px-6"
    >
      {/* FLOATING INFORMATION CARD */}
      <div className="w-full sm:w-[92%] lg:w-[90%] max-w-[1540px] mx-auto bg-white rounded-2xl sm:rounded-[24px] lg:rounded-[28px] shadow-[0_20px_50px_rgba(15,22,56,0.08),0_6px_18px_rgba(0,0,0,0.03)] border border-gray-100/90 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:h-[120px]">
          {values.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === values.length - 1;
            const isRightColTablet = index % 2 === 1;

            return (
              <div
                key={item.id}
                className="relative flex items-center gap-4 px-5 sm:px-6 lg:px-4 xl:px-7 py-4 sm:py-5 lg:py-0 border-b sm:border-b-0 border-gray-100 last:border-b-0 group"
              >
                {/* ICON CONTAINER: 52x52px with light navy-tinted or red-tinted background */}
                <div
                  className={`w-[52px] h-[52px] min-w-[52px] rounded-xl ${item.iconContainerBg} flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105`}
                >
                  <Icon className={`w-[22px] h-[22px] ${item.iconColor} stroke-[1.9]`} />
                </div>

                {/* TEXT CONTAINER */}
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-heading font-bold text-[17px] sm:text-[17px] lg:text-[17px] xl:text-[19px] text-[#040205] tracking-tight leading-tight whitespace-nowrap">
                      {item.heading}
                    </h3>
                    {item.hasRedAccent && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#C80103] shrink-0"
                        title="A T Roofing Quality Assurance"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p className="text-[13.5px] sm:text-[14px] xl:text-[15px] font-normal sm:font-medium text-[#5F6470] leading-snug mt-0.5">
                    {item.description}
                  </p>
                </div>

                {/* SUBTLE VERTICAL DIVIDER (Desktop: between cols 1-2, 2-3, 3-4) */}
                {!isLast && (
                  <div
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-px bg-gray-200/75 pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                {/* SUBTLE VERTICAL DIVIDER (Tablet 2-col: between col 0-1 and 2-3) */}
                {!isRightColTablet && (
                  <div
                    className="hidden sm:block lg:hidden absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gray-200/75 pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                {/* SUBTLE HORIZONTAL DIVIDER (Tablet 2-col: between row 1 and row 2) */}
                {index < 2 && (
                  <div
                    className="hidden sm:block lg:hidden absolute bottom-0 left-6 right-6 h-px bg-gray-100 pointer-events-none"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

