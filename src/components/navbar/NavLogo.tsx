import React from 'react';
import { Link } from 'react-router-dom';

interface NavLogoProps {
  isDarkBg?: boolean;
}

const NavLogo = ({ isDarkBg = true }: NavLogoProps) => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <img
          src="/BibleQuestLogo.png"
          alt="Bible Quest Logo"
          className={`h-12 w-auto transition-all duration-300 ${isDarkBg ? '' : 'brightness-0 dark:brightness-100'
            }`}
        />
      </Link>
    </div>
  );
};

export default NavLogo;
