import React, { useState } from 'react';
import { Sparkles, Rocket, Globe, Star } from 'lucide-react';
import { PricingCard } from './PricingCard';

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      tier: "Starter",
      price: isAnnual ? "$29" : "$39",
      description: "Perfect for individuals and small projects getting started with Cosmos.",
      features: [
        "Up to 5 projects",
        "1GB storage per project",
        "Basic analytics",
        "24/7 email support",
        "Community access"
      ],
      icon: Star
    },
    {
      tier: "Hobby",
      price: isAnnual ? "$79" : "$89",
      description: "Ideal for growing teams and businesses scaling their operations.",
      features: [
        "Up to 15 projects",
        "5GB storage per project",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true,
      icon: Rocket
    },
    {
      tier: "Scale",
      price: isAnnual ? "$199" : "$229",
      description: "Enterprise-grade solution for large-scale deployments.",
      features: [
        "Unlimited projects",
        "20GB storage per project",
        "Enterprise analytics",
        "24/7 phone support",
        "Custom SLA",
        "Dedicated account manager",
        "On-premise deployment"
      ],
      icon: Globe
    }
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-indigo-600" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Pricing Plans
          </h2>
        </div>
        
        <p className="text-xl text-gray-600 mb-8">
          Choose the perfect plan for your needs
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm ${!isAnnual ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600"
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isAnnual ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
          <span className={`text-sm ${isAnnual ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
            Annual
            <span className="ml-1 text-xs text-emerald-500 font-medium">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PricingCard key={plan.tier} {...plan} />
        ))}
      </div>
    </div>
  );
}