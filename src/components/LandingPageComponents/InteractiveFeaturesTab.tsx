import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const InteractiveFeaturesTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Everything you need to accelerate your drug discovery pipeline
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["SMILES Processing", "Molecular Docking", "QSAR Models", "ADMET Predictions"].map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === index 
                ? "bg-blue-500 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-blue-500">
            {["SMILES Validation", "3D Conformer Generation", "Property Prediction", "Safety Assessment"][activeTab]}
          </h3>
          <p className="text-gray-400">
            {[
              "Automatically validate and optimize chemical structures with our advanced SMILES processing engine.",
              "Generate accurate 3D conformers and predict binding poses with 95% accuracy.",
              "Leverage our QSAR models to predict key molecular properties and activities.",
              "Comprehensive ADMET profiling for early safety assessment."
            ][activeTab]}
          </p>
          <button className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors">
            Learn more <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl filter blur-3xl"></div>
          <div className="relative aspect-square bg-white/5 rounded-3xl border border-gray-800 overflow-hidden">
            {/* Placeholder for feature visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-blue-500/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeaturesTab;