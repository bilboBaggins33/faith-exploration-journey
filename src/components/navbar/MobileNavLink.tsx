
import React from 'react';
import { Link } from 'react-router-dom';

interface MobileNavLinkProps {
  to: string;
  active: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const MobileNavLink = ({ to, active, icon, children }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className={`flex items-center px-4 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
      active 
        ? 'bg-bible-sky text-bible-blue' 
        : 'text-bible-dark dark:text-white hover:bg-bible-beige dark:hover:bg-slate-800'
    }`}
  >
    {icon}
    {children}
  </Link>
);

export default MobileNavLink;
