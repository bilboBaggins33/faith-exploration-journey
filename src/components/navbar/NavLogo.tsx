import React from 'react';
import { Link } from 'react-router-dom';

interface NavLogoProps {
  isHomePage: boolean;
  isBiblePage: boolean;
}

const NavLogo = ({ isHomePage, isBiblePage }: NavLogoProps) => {
  const logoSrc =
    isBiblePage
      ? '/BibleQuestLogo.png' // default full homepage logo
      : '/BibleQuestLogo.png'; // smaller or alternative logo for all other cases

  return (
    <div className={`flex items-center ${(isHomePage) ? 'pt-5' : ''}`}>
      <Link to="/" className="flex items-center">
        <img
          src={logoSrc}
          alt="Bible Quest Logo"
          className={`transition-all duration-300 ${
            isHomePage ? 'h-14 w-auto' : 'h-10 md:h-14 w-auto'
          }`}
        />
      </Link>
    </div>
  );
};

export default NavLogo;
