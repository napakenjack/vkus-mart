import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { IncomeSection } from '../components/sections/IncomeSection';
import { SystemSection } from '../components/sections/SystemSection';
import { SupportSection } from '../components/sections/SupportSection';
import { IncludesSection } from '../components/sections/IncludesSection';
import { AudienceSection } from '../components/sections/AudienceSection';
import { LaunchSection } from '../components/sections/LaunchSection';
import { FormatsSection } from '../components/sections/FormatsSection';
import { BrandSection } from '../components/sections/BrandSection';
import { WhyNowSection } from '../components/sections/WhyNowSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pt-10">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <IncomeSection />
        <SystemSection />
        <SupportSection />
        <IncludesSection />
        <AudienceSection />
        <LaunchSection />
        <FormatsSection />
        <BrandSection />
        <WhyNowSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

