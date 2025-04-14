import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, BookText, Info, LogIn, LayoutDashboard, User, Settings, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavLink from './NavLink';
import { User as SupabaseUser } from '@supabase/supabase-js';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

interface DesktopNavProps {
  isHomePage: boolean;
  isScrolled: boolean;
  user: SupabaseUser | null;
  handleSignOut: () => Promise<void>;
}

const DesktopNav = ({ isHomePage, isScrolled, user, handleSignOut }: DesktopNavProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);
  
  const getSignInButtonClasses = () => {
    if (isHomePage && !isScrolled) {
      return 'bg-bible-blue text-white hover:bg-bible-deepBlue';
    }
    return 'bg-bible-dark text-white dark:bg-white dark:text-bible-dark hover:bg-bible-dark/90 dark:hover:bg-white/90';
  };

  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-8">
        <NavLink to="/" active={isActive('/')} isScrolled={isScrolled} isHomePage={isHomePage}>
          Home
        </NavLink>
        <NavLink to="/bible" active={isActive('/bible')} isScrolled={isScrolled} isHomePage={isHomePage}>
          Bible
        </NavLink>
        <NavLink to="/plans" active={isActive('/plans')} isScrolled={isScrolled} isHomePage={isHomePage}>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            Plans
          </div>
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
        
        {user ? (
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button className={`flex items-center justify-center p-1 hover-link font-medium transition-colors duration-300 ${
                isActive('/profile') || isActive('/dashboard')
                  ? 'text-bible-blue after:scale-x-100' 
                  : isHomePage && !isScrolled
                    ? 'text-white'
                    : 'text-bible-dark dark:text-white'
              }`}>
                <User className="h-4 w-4 mr-1" />
                <span>Admin</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-56 bg-white dark:bg-bible-dark border border-gray-200 dark:border-gray-800"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <DropdownMenuItem asChild>
                <Link to="/profile" className="flex w-full items-center cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dashboard" className="flex w-full items-center cursor-pointer">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut} className="flex items-center cursor-pointer text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link to="/auth">
            <Button 
              size="sm" 
              className={`ml-4 transition-colors duration-300 flex items-center ${getSignInButtonClasses()}`}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DesktopNav;
