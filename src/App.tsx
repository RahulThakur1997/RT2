import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectGallery } from './components/ProjectGallery';
import { CustomerReviews } from './components/CustomerReviews';
import { ServiceAreas } from './components/ServiceAreas';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { NewRoofPage } from './components/new-roof/NewRoofPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState<string>('');
  const [quoteInitialPostcode, setQuoteInitialPostcode] = useState<string>('');
  const [activeServiceCategory, setActiveServiceCategory] = useState<string>('ALL');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string, sectionId?: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
    if (path === '/') {
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = (serviceName?: string, postcode?: string) => {
    if (serviceName) setQuoteInitialService(serviceName);
    else setQuoteInitialService('');

    if (postcode) setQuoteInitialPostcode(postcode);
    else setQuoteInitialPostcode('');

    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleNavigate = (sectionId: string, category?: string) => {
    if (currentPath !== '/') {
      navigateTo('/', sectionId);
      return;
    }
    if (category) {
      setActiveServiceCategory(category);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isNewRoofRoute =
    currentPath === '/new-roof-installations' ||
    currentPath === '/new-roof-installations/';

  if (isNewRoofRoute) {
    return (
      <>
        <NewRoofPage
          onOpenQuoteModal={handleOpenQuoteModal}
          onNavigateHome={(sectionId?: string) => navigateTo('/', sectionId)}
        />
        {/* Quote Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuoteModal}
          initialService={quoteInitialService || 'New Roof Installations'}
          initialPostcode={quoteInitialPostcode}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-neutral-900 selection:bg-[#C80103] selection:text-white">
      {/* Sticky Header */}
      <Header
        onOpenQuoteModal={handleOpenQuoteModal}
        onNavigate={handleNavigate}
      />

      {/* Main Page Sections */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section with Floating Quick Quote Tool and Scrolling White Trust Strip */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
          onNavigate={handleNavigate}
        />

        {/* 14 Roofing Services Grid & Category Filter Bar */}
        <ServicesGrid
          onOpenQuoteModal={handleOpenQuoteModal}
          activeCategoryFilter={activeServiceCategory}
          onFilterChange={(cat) => setActiveServiceCategory(cat)}
          onNavigateToNewRoof={() => navigateTo('/new-roof-installations')}
        />

        {/* Why Choose Us: Editorial Trust Section & Conversion Card */}
        <WhyChooseUs onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Recent Roofing Work Portfolio & Lightbox */}
        <ProjectGallery onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Customer Reviews Section with Carousel Controls */}
        <CustomerReviews />

        {/* Local Service Area Section with Interactive Postcode Checker */}
        <ServiceAreas onOpenQuoteModal={handleOpenQuoteModal} />

        {/* How It Works: 5 Clear Transparent Steps */}
        <HowItWorks onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </main>

      {/* Dark Navy Full Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
        onNavigateToNewRoof={() => navigateTo('/new-roof-installations')}
      />

      {/* 5-Step Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={quoteInitialService}
        initialPostcode={quoteInitialPostcode}
      />
    </div>
  );
}
