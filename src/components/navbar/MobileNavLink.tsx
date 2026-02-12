
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
    className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${active
        ? 'bg-bible-blue/20 text-bible-sky shadow-sm border border-bible-blue/10'
        : 'text-white/70 hover:text-white hover:bg-white/5'
      }`}
  >
    {icon}
    <span className="ml-0.5">{children}</span>
  </Link>
);

export default MobileNavLink;
