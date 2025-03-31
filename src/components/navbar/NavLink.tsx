
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  active: boolean;
  isScrolled: boolean;
  isHomePage: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, isScrolled, isHomePage, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className={`hover-link font-medium transition-colors duration-300 ${
      active 
        ? 'text-bible-blue after:scale-x-100' 
        : isHomePage && !isScrolled
          ? 'text-white'
          : 'text-bible-dark dark:text-white'
    }`}
  >
    {children}
  </Link>
);

export default NavLink;
