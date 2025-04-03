import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, BookText, Info, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavLink from './NavLink';
import { User } from '@supabase/supabase-js';

interface DesktopNavProps {
  isHomePage: boolean;
  isScrolled: boolean;
  user: User | null;
  handleSignOut: () => Promise<void>;
}

const DesktopNav = ({ isHomePage, isScrolled, user, handleSignOut }: DesktopNavProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const getSignInButtonClasses = () => {
    if (isHomePage && !isScrolled) {
      return 'border-bible-blue text-bible-blue hover:bg-bible-blue/10';
    }
    return 'border-bible-dark text-bible-dark dark:border-white dark:text-white hover:bg-bible-dark/10 dark:hover:bg-white/10';
  };

  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-8">
        <NavLink to="/" active={isActive('/')} isScrolled={isScrolled} isHomePage={isHomePage}>
          Home
        </NavLink>
        <NavLink to="/challenge" active={isActive('/challenge')} isScrolled={isScrolled} isHomePage={isHomePage}>
          Challenges
        </NavLink>
        <NavLink to="/bible" active={isActive('/bible')} isScrolled={isScrolled} isHomePage={isHomePage}>
          Bible
        </NavLink>
        <NavLink to="/theology" active={isActive('/theology')} isScrolled={isScrolled} isHomePage={isHomePage}>
          <div className="flex items-center">
            <BookText className="h-4 w-4 mr-1" />
            Books
          </div>
        </NavLink>
        <NavLink to="/about" active={isActive('/about')} isScrolled={isScrolled} isHomePage={isHomePage}>
          <div className="flex items-center">
            <Info className="h-4 w-4 mr-1" />
            About
          </div>
        </NavLink>
        <NavLink to="/contact" active={isActive('/contact')} isScrolled={isScrolled} isHomePage={isHomePage}>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-1" />
            Contact
          </div>
        </NavLink>
        <NavLink to="/profile" active={isActive('/profile')} isScrolled={isScrolled} isHomePage={isHomePage}>
          Profile
        </NavLink>
        
        {user ? (
          <Button 
            variant="outline" 
            size="sm" 
            className={`ml-4 flex items-center transition-colors duration-300 ${getSignInButtonClasses()}`} 
            onClick={handleSignOut}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        ) : (
          <Link to="/auth">
            <Button 
              variant="outline" 
              size="sm" 
              className={`ml-4 transition-colors duration-300 ${getSignInButtonClasses()}`}
            >
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DesktopNav;
