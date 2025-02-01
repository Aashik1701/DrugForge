import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative pt-24">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-6 animate-fade-in">
            Revolutionize Drug Discovery with AI-Powered Precision
          </h1>
          <p className="text-xl text-gray-400 mb-8 animate-fade-in-delay">
            Cut development timelines by 50% and costs by 70% using predictive analytics and molecular simulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
              Watch Demo
              <Play className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;