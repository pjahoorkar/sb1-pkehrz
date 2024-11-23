import React from 'react';
import { Bot } from 'lucide-react';
import { RollingText } from './RollingText';

export function Hero() {
  const roles = [
    'CEO',
    'CFO',
    'CMO',
    'Product Manager',
    'Data Scientist'
  ];

  return (
    <div className="text-center max-w-4xl mx-auto mb-24">
      <div className="flex justify-center items-center gap-3 mb-6">
        <Bot className="w-12 h-12 text-indigo-600" />
      </div>
      <h1 className="text-6xl font-bold mb-6">
        <span className="block mb-2">Cosmos is the</span>
        <div className="relative h-[1.2em] flex justify-center items-center overflow-hidden">
          <RollingText texts={roles} />
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent ml-2">
            Co-pilot
          </span>
        </div>
      </h1>
      <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
        Your intelligent partner in strategic decision-making, operational excellence, and business growth. Experience the future of executive leadership.
      </p>
    </div>
  );
}