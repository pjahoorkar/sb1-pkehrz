import React from 'react';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { PricingSection } from './components/PricingSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Hero />
        <SkillsSection />
        <PricingSection />
      </div>
    </div>
  );
}

export default App;