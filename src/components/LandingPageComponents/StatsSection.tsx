import React from 'react';
import StatCard from './StatCard';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StatsSection: React.FC<{ stats: any[] }> = ({ stats }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            {...stat}
            delay={index * 200}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;