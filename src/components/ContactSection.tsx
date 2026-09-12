import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';
import { HeroQualifierForm } from './HeroQualifierForm';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#F5F7FA] py-20 lg:py-28 xl:py-32 border-b border-gray-200/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* LEFT: Contact Information & Direct Call (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <span className="text-xs sm:text-sm font-heading font-bold text-[#C80103] uppercase tracking-widest block mb-3">
              Direct Assistance
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#040205] tracking-tight leading-tight mb-4 sm:mb-5">
              Let's Talk About Your Roof
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
              Have a roofing problem, planning a new roof or simply want some advice? Complete our interactive project qualifier to get tailored guidance and a free, no-obligation quote from A T Roofing Birmingham.
            </p>

            {/* Direct Contact Cards with generous breathing room and unified 14px radius */}
            <div className="space-y-4 sm:space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-4.5 p-6 sm:p-7 rounded-[14px] bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#040205]/30 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-[#040205]/10 text-[#040205] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#040205]" />
                </div>
                <div>
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-gray-500 block mb-1">
                    PHONE
                  </span>
                  <a
                    href={BUSINESS_INFO.telLink}
                    className="font-heading text-xl sm:text-2xl font-bold text-[#040205] hover:text-[#C80103] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Direct line for repairs &amp; surveys</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4.5 p-6 sm:p-7 rounded-[14px] bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#040205]/30 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-[#040205]/10 text-[#040205] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#040205]" />
                </div>
                <div>
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-gray-500 block mb-1">
                    ADDRESS
                  </span>
                  <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                    {BUSINESS_INFO.address.line1},<br />
                    {BUSINESS_INFO.address.line2},<br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postcode},<br />
                    {BUSINESS_INFO.address.country}
                  </p>
                </div>
              </div>

              {/* Call CTA Button */}
              <a
                id="contact-call-us-today-btn"
                href={BUSINESS_INFO.telLink}
                className="w-full py-4 px-7 rounded-lg bg-[#040205] hover:bg-[#201525] text-white font-heading font-bold text-sm tracking-wider uppercase shadow-sm flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#C80103]" />
                <span>CALL US TODAY</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Same Interactive Qualifier Form as the Hero Section (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <HeroQualifierForm idPrefix="contact-" />
          </div>
        </div>
      </div>
    </section>
  );
};

