import React from 'react';
import { Clock, Database, Shield, Check } from 'lucide-react';

const ProblemSolutionSection: React.FC = () => {
  return (
    <div className="border-y border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="transform transition-all duration-700 hover:-translate-y-2">
            <h2 className="text-2xl font-bold mb-4">The Problem</h2>
            <p className="text-gray-400 mb-4">
              Traditional drug discovery takes 15+ years and $2B+, with 90% failure in late stages.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Clock className="w-5 h-5 text-red-500" />
                Long development cycles
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Database className="w-5 h-5 text-red-500" />
                Expensive trials
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Shield className="w-5 h-5 text-red-500" />
                High failure rates
              </li>
            </ul>
          </div>
          <div className="transform transition-all duration-700 hover:-translate-y-2">
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-gray-400 mb-4">
              DrugForge identifies promising candidates early using ML models, reducing risk and accelerating time-to-clinical trials.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Check className="w-5 h-5 text-green-500" />
                40% faster lead optimization
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Check className="w-5 h-5 text-green-500" />
                Early-stage candidate filtering
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Check className="w-5 h-5 text-green-500" />
                Reduced late-stage failures
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionSection;