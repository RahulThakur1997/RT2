import React, { useEffect } from 'react';
import { NewRoofHeader } from './NewRoofHeader';
import { NewRoofHero } from './NewRoofHero';
import { NewRoofIntro } from './NewRoofIntro';
import { NewRoofBenefits } from './NewRoofBenefits';
import { NewRoofServiceArea } from './NewRoofServiceArea';
import { NewRoofMaterials } from './NewRoofMaterials';
import { NewRoofCTABanner } from './NewRoofCTABanner';
import { NewRoofReviews } from './NewRoofReviews';
import { NewRoofFAQ } from './NewRoofFAQ';
import { NewRoofFooter } from './NewRoofFooter';

interface NewRoofPageProps {
  onOpenQuoteModal: (service?: string) => void;
  onNavigateHome: (sectionId?: string) => void;
}

export const NewRoofPage: React.FC<NewRoofPageProps> = ({
  onOpenQuoteModal,
  onNavigateHome
}) => {
  useEffect(() => {
    // Set appropriate page title and SEO meta description
    const prevTitle = document.title;
    document.title = 'New Roof Installations Birmingham | A T Roofing Birmingham';

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';

    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Professional new roof installations for homes and properties across Birmingham, West Midlands and surrounding areas. Slate, concrete, clay tiles, and full roof replacements.'
    );

    window.scrollTo(0, 0);

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#C80103] selection:text-white flex flex-col font-sans">
      {/* 01. HEADER / NAVIGATION */}
      <NewRoofHeader
        onOpenQuoteModal={() => onOpenQuoteModal('New Roof Installations')}
        onNavigateHome={onNavigateHome}
      />

      <main className="flex-grow">
        {/* 02. SERVICE HERO */}
        <NewRoofHero
          onOpenQuoteModal={() => onOpenQuoteModal('New Roof Installations')}
          onNavigateHome={() => onNavigateHome()}
        />

        {/* 03. INTRODUCTION + ROOF INSTALLATION IMAGE */}
        <NewRoofIntro
          onOpenQuoteModal={() => onOpenQuoteModal('New Roof Installations')}
        />

        {/* 04. WHY INSTALL A NEW ROOF? / BENEFITS SECTION */}
        <NewRoofBenefits
          onOpenQuoteModal={() => onOpenQuoteModal('New Roof Installations')}
        />

        {/* 05. SERVICE AREA / LOCAL COVERAGE */}
        <NewRoofServiceArea
          onOpenQuoteModal={() => onOpenQuoteModal('New Roof Installations')}
        />

        {/* 06. COMMON ROOF MATERIALS */}
        <NewRoofMaterials />

        {/* 07. LARGE CTA BANNER */}
        <NewRoofCTABanner
          onOpenQuoteModal={() => onOpenQuoteModal('New Roof Installations')}
        />

        {/* 08. CUSTOMER REVIEWS */}
        <NewRoofReviews />

        {/* 09. FAQ SECTION */}
        <NewRoofFAQ />
      </main>

      {/* 10. FOOTER */}
      <NewRoofFooter
        onOpenQuoteModal={() => onOpenQuoteModal('New Roof Installations')}
        onNavigateHome={onNavigateHome}
      />
    </div>
  );
};
