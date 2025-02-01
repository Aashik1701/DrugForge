import React from 'react';

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => (
  <a href={href} className="text-gray-300 hover:text-white transition-colors">
    {label}
  </a>
);

export default NavItem;