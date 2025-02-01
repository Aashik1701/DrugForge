import React from 'react';
import { FlaskConical } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FlaskConical className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold">DrugForge</span>
            </div>
            <p className="text-gray-400">Accelerating drug discovery with AI</p>
          </div>
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Documentation", "API"]
            },
            {
              title: "Company",
              links: ["About", "Careers", "Blog", "Press"]
            },
            {
              title: "Resources",
              links: ["Documentation", "Support", "Status", "Terms"]
            }
          ].map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 DrugForge. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;