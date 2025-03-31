
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface NavLogoProps {
  isHomePage: boolean;
  isScrolled: boolean;
}

const NavLogo = ({ isHomePage, isScrolled }: NavLogoProps) => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <BookOpen 
          className={`transition-all duration-300 ${
            isHomePage && !isScrolled ? 'h-8 w-8 text-white' : 'h-6 w-6 text-bible-dark dark:text-white'
          }`} 
        />
        <span 
          className={`ml-2 font-serif font-semibold tracking-tight transition-all duration-300 ${
            isHomePage && !isScrolled ? 'text-xl text-white' : 'text-lg text-bible-dark dark:text-white'
          }`}
        >
          Bible Adventure Quest
        </span>
      </Link>
    </div>
  );
};

export default NavLogo;
