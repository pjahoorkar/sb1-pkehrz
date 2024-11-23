import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  tier: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: React.ElementType;
}

export function PricingCard({ 
  tier, 
  price, 
  description, 
  features, 
  popular = false,
  icon: Icon
}: PricingCardProps) {
  return (
    <div className={`relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
      popular 
        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl' 
        : 'bg-white shadow-lg hover:shadow-xl'
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-6 h-6 ${popular ? 'text-white' : 'text-indigo-600'}`} />
        <h3 className="text-xl font-bold">{tier}</h3>
      </div>
      
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className={popular ? 'text-indigo-100' : 'text-gray-500'}>/month</span>
      </div>
      
      <p className={`mb-8 ${popular ? 'text-indigo-100' : 'text-gray-600'}`}>
        {description}
      </p>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className={`w-5 h-5 ${
              popular ? 'text-indigo-200' : 'text-indigo-600'
            }`} />
            <span className={popular ? 'text-indigo-100' : 'text-gray-600'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
        popular
          ? 'bg-white text-indigo-600 hover:bg-indigo-50'
          : 'bg-indigo-600 text-white hover:bg-indigo-700'
      }`}>
        Get Started
      </button>
    </div>
  );
}