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
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <img
          src={logoSrc}
          alt="Bible Quest Logo"
          className="h-12 w-auto transition-all duration-300"
        />
      </Link>
    </div>
  );
};

export default NavLogo;
