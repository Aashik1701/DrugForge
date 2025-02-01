import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <div className="bg-gray-900/50 border-y border-gray-800">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How DrugForge Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A streamlined process from molecule to validated drug candidate
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="relative p-6 bg-white/5 rounded-xl border border-gray-800 transform transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold">1</div>
            <h3 className="text-xl font-semibold mb-4">Input Structure</h3>
            <p className="text-gray-400">Upload SMILES or draw molecular structures using our intuitive interface.</p>
          </div>
          <div className="relative p-6 bg-white/5 rounded-xl border border-gray-800 transform transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold">2</div>
            <h3 className="text-xl font-semibold mb-4">AI Analysis</h3>
            <p className="text-gray-400">Our AI algorithms analyze the input and provide insights and predictions.</p>
          </div>
          <div className="relative p-6 bg-white/5 rounded-xl border border-gray-800 transform transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold">3</div>
            <h3 className="text-xl font-semibold mb-4">Validation</h3>
            <p className="text-gray-400">Validate results with experimental data and refine predictions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;