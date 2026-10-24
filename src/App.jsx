import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FundingAnnouncement from './components/FundingAnnouncement';
import InteractiveSimulator from './components/InteractiveSimulator';
import FundedStartups from './components/FundedStartups';
import ProductSpecs from './components/ProductSpecs';
import Footer from './components/Footer';
import InvestorVerificationPage from './components/InvestorVerificationPage';
import { 
  FundingModal, 
  StartupDetailModal, 
  WaitlistModal, 
  PitchDeckModal 
} from './components/Modals';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'verify'
  const [isFundingModalOpen, setIsFundingModalOpen] = useState(false);
  const [isDeckModalOpen, setIsDeckModalOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [selectedStartup, setSelectedStartup] = useState(null);

  // Check URL pathname or hash on initial load
  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const search = window.location.search;

      if (path.includes('/verify') || hash === '#verify' || search.includes('verify')) {
        setCurrentView('verify');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    return () => window.removeEventListener('popstate', checkRoute);
  }, []);

  const navigateToVerify = () => {
    setCurrentView('verify');
    const base = window.location.pathname.includes('/meowboxai') ? '/meowboxai/verify' : '/verify';
    window.history.pushState({}, '', base);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    const base = window.location.pathname.includes('/meowboxai') ? '/meowboxai/' : '/';
    window.history.pushState({}, '', base);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync dark class on html root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulator-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If viewing the official investor verification & Groq perks portal
  if (currentView === 'verify') {
    return <InvestorVerificationPage onBackToHome={navigateToHome} />;
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-void text-paper' : 'bg-paper text-void'} selection:bg-white selection:text-black transition-colors duration-300 font-sans`}>
      
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenFundingModal={() => setIsFundingModalOpen(true)}
        onOpenDeckModal={() => setIsDeckModalOpen(true)}
        onOpenWaitlistModal={() => setIsWaitlistModalOpen(true)}
        onOpenVerifyPage={navigateToVerify}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenWaitlistModal={() => setIsWaitlistModalOpen(true)}
          onOpenFundingModal={() => setIsFundingModalOpen(true)}
          onScrollToSimulator={handleScrollToSimulator}
          onOpenVerifyPage={navigateToVerify}
        />

        {/* Featured $25,000 Funding Announcement Section */}
        <FundingAnnouncement
          onOpenFundingModal={() => setIsFundingModalOpen(true)}
          onOpenDeckModal={() => setIsDeckModalOpen(true)}
          onOpenVerifyPage={navigateToVerify}
        />

        {/* Interactive MeowBox Audio & Vision Engine Simulator */}
        <InteractiveSimulator />

        {/* Funded Startups & 2026 Batch Showcase */}
        <FundedStartups
          onSelectStartup={(startup) => setSelectedStartup(startup)}
        />

        {/* Technical Product Specifications & CAD Schematic */}
        <ProductSpecs />
      </main>

      {/* Footer */}
      <Footer
        onOpenFundingModal={() => setIsFundingModalOpen(true)}
        onOpenDeckModal={() => setIsDeckModalOpen(true)}
        onOpenWaitlistModal={() => setIsWaitlistModalOpen(true)}
        onOpenVerifyPage={navigateToVerify}
      />

      {/* Modals */}
      <FundingModal
        isOpen={isFundingModalOpen}
        onClose={() => setIsFundingModalOpen(false)}
        onOpenVerifyPage={navigateToVerify}
      />

      <StartupDetailModal
        startup={selectedStartup}
        isOpen={!!selectedStartup}
        onClose={() => setSelectedStartup(null)}
      />

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />

      <PitchDeckModal
        isOpen={isDeckModalOpen}
        onClose={() => setIsDeckModalOpen(false)}
      />

    </div>
  );
}
