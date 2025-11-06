import React from 'react';
import { MarketingSection } from './MarketingSection';
import { Hero } from './Hero';
import { AutomationsSection } from './AutomationsSection';
import { ManagementSection } from './ManagementSection';

export const HomePage: React.FC = () => {
    return (
        <main>
            <Hero />
            <MarketingSection />
            <ManagementSection />
            <AutomationsSection />
        </main>
    );
};
