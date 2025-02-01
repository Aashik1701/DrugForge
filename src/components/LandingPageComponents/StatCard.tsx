import React, { useState, useEffect } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-gray-800">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
            {icon}
          </div>
          <div>
            <p className="text-3xl font-bold text-white">{value}</p>
            <p className="text-gray-400">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;