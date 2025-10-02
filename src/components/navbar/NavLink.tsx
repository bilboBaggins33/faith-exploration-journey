
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  active: boolean;
  isHomePage: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, isHomePage, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className={`hover-link font-medium transition-colors duration-300 ${
      active 
        ? 'text-bible-blue after:scale-x-100' 
        : 'text-white'
    }`}
  >
    {children}
  </Link>
);

export default NavLink;
