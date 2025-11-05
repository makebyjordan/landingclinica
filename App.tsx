import React from 'react';
import { MarketingSection } from './components/MarketingSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AutomationsSection } from './components/AutomationsSection';
import { ManagementSection } from './components/ManagementSection'; // Corregido sin espacio

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <MarketingSection />
        <ManagementSection />
        <AutomationsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App; // No olvides esta línea