import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, BookText, Info, LogIn, LayoutDashboard, User, Settings, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavLink from './NavLink';
import LevelPill from '@/components/gamification/LevelPill';
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
  isDarkBg: boolean;
  user: SupabaseUser | null;
  handleSignOut: () => Promise<void>;
}

const DesktopNav = ({ isHomePage, isDarkBg, user, handleSignOut }: DesktopNavProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-8">
        <NavLink to="/" active={isActive('/')} isHomePage={isHomePage} isDarkBg={isDarkBg}>
          Home
        </NavLink>
        <NavLink to="/bible" active={isActive('/bible')} isHomePage={isHomePage} isDarkBg={isDarkBg}>
          Bible
        </NavLink>
        <NavLink to="/daily-reading" active={isActive('/daily-reading')} isHomePage={isHomePage} isDarkBg={isDarkBg}>
          <div className="flex items-center">
            Plans
          </div>
        </NavLink>
        <NavLink to="/theology" active={isActive('/theology')} isHomePage={isHomePage} isDarkBg={isDarkBg}>
          <div className="flex items-center">
            Books
          </div>
        </NavLink>

        <NavLink to="/about" active={isActive('/about')} isHomePage={isHomePage} isDarkBg={isDarkBg}>
          <div className="flex items-center">
            About
          </div>
        </NavLink>

        {user ? (
          <div className="flex items-center gap-4">
          <LevelPill dark={isDarkBg} />
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button className={`flex items-center justify-center p-1 hover-link font-medium transition-colors duration-300 ${isActive('/profile') || isActive('/dashboard')
                ? 'text-bible-blue after:scale-x-100'
                : isDarkBg
                  ? 'text-white'
                  : 'text-bible-dark hover:text-bible-blue'
                }`}>
                <User className="h-4 w-4 mr-1" />
                <span>{user.user_metadata?.full_name?.split(' ')[0] || user.email?.split('@')[0] || 'Account'}</span>
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
          </div>
        ) : (
          <Button asChild size="sm" className="ml-4">
            <Link to="/auth">
              <LogIn className="h-4 w-4" />
              Sign In
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default DesktopNav;
