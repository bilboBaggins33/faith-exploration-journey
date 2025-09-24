
import React from 'react';
import { Link } from 'react-router-dom';

interface MobileNavLinkProps {
  to: string;
  active: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

const MobileNavLink = ({ to, active, icon, children, onClick }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
      active 
        ? 'bg-bible-sky/50 text-bible-blue shadow-sm' 
        : 'text-bible-dark dark:text-white hover:bg-bible-sky/20 dark:hover:bg-slate-800'
    }`}
  >
    {icon}
    {children}
  </Link>
);

export default MobileNavLink;
