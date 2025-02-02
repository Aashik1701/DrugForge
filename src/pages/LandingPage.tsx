import React, { useState, useEffect } from 'react';
import NavItem from '../components/LandingPageComponents/NavItem';
import FeatureCard from '../components/LandingPageComponents/FeatureCard';

import Footer from '../components/LandingPageComponents/Footer';
import CTASection from '../components/LandingPageComponents/CTASection';
import ProblemSolutionSection from '../components/LandingPageComponents/ProblemSolutionSection';
import StatsSection from '../components/LandingPageComponents/StatsSection';
import HeroSection from '../components/LandingPageComponents/HeroSection';
import ProcessSection from '../components/LandingPageComponents/ProcessSection';
import InteractiveFeaturesTab from '../components/LandingPageComponents/InteractiveFeaturesTab';
import { Brain, ChartBar, Database, FlaskConical, Shield, Zap, Target, Users } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Benefits", href: "#benefits" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Documentation", href: "#documentation" },
    { label: "Contact", href: "#contact" },
  ];

  const features = [
    {
      title: "SMILES Processing",
      description: "Parse and optimize chemical structures with automated SMILES validation.",
      icon: <FlaskConical className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Molecular Docking",
      description: "Predict ligand-target interactions with 95% accuracy using advanced simulations.",
      icon: <Brain className="w-6 h-6 text-blue-500" />
    },
    {
      title: "QSAR Models",
      description: "Quantitative structure-activity relationship modeling for toxicity/safety screening.",
      icon: <ChartBar className="w-6 h-6 text-blue-500" />
    },
    {
      title: "ADMET Predictions",
      description: "Comprehensive absorption, distribution, metabolism, excretion, and toxicity profiling.",
      icon: <Shield className="w-6 h-6 text-blue-500" />
    }
  ];

  const stats = [
    {
      value: "50%",
      label: "Faster Development",
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      value: "95%",
      label: "Prediction Accuracy",
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      value: "500+",
      label: "Research Labs",
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      value: "10M+",
      label: "Compounds Analyzed",
      icon: <Database className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <FlaskConical className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold">DrugForge</span>
            </div>
            <div className="items-center hidden gap-8 md:flex">
              {navItems.map((item) => (
              <NavItem 
                key={item.label} 
                label={item.label} 
                href={item.href}
              />
              ))}
            </div>
            <button className="px-4 py-2 font-semibold transition-all duration-300 bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105">
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      <HeroSection />
      <StatsSection stats={stats} />
      <ProblemSolutionSection />
      <div className="container px-4 py-24 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Powered by Cutting-Edge Technology
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Leverage advanced AI and molecular simulations to accelerate your drug discovery process.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 200}
            />
          ))}
        </div>
      </div>

      <ProcessSection />
      <InteractiveFeaturesTab />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;