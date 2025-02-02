import React from 'react';

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 64; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a 
      href={href} 
      className="text-gray-300 transition-colors hover:text-white"
      onClick={handleClick}
    >
      {label}
    </a>
  );
};

export default NavItem;