import React from 'react';
import { Link } from 'react-router-dom';

interface NavLogoProps {
  isHomePage: boolean;
  isScrolled: boolean;
}

const NavLogo = ({ isHomePage, isScrolled }: NavLogoProps) => {
  return (
    <div className={`flex items-center ${!isScrolled ? 'pt-5' : ''}`}>
      <Link to="/" className="flex items-center">
        <img 
          src="/BibleQuestLogo.png"
          alt="Bible Quest Logo"
          className={`transition-all duration-300 ${
            isHomePage && !isScrolled ? 'h-16 w-auto' : 'h-10 w-auto'
          }`} 
        />

      </Link>
    </div>
  );
};

export default NavLogo;
