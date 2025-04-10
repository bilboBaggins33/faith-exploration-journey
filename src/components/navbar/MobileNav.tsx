
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, User, LogOut, Book, BookText, Info, Mail, LayoutDashboard, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileNavLink from './MobileNavLink';
import { User as SupabaseUser } from '@supabase/supabase-js';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

interface MobileNavProps {
  isOpen: boolean;
  user: SupabaseUser | null;
  handleSignOut: () => Promise<void>;
}

const MobileNav = ({ isOpen, user, handleSignOut }: MobileNavProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  if (!isOpen) return null;
  
  return (
    <motion.div 
      className="md:hidden bg-white dark:bg-bible-dark p-4 shadow-lg"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="flex flex-col space-y-4 pt-2 pb-3">
        <MobileNavLink to="/" icon={<BookOpen className="h-5 w-5 mr-2" />} active={isActive('/')}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/bible" icon={<Book className="h-5 w-5 mr-2" />} active={isActive('/bible')}>
          Bible
        </MobileNavLink>
        <MobileNavLink to="/theology" icon={<BookText className="h-5 w-5 mr-2" />} active={isActive('/theology')}>
          Books
        </MobileNavLink>
        <MobileNavLink to="/about" icon={<Info className="h-5 w-5 mr-2" />} active={isActive('/about')}>
          About
        </MobileNavLink>
        <MobileNavLink to="/contact" icon={<Mail className="h-5 w-5 mr-2" />} active={isActive('/contact')}>
          Contact
        </MobileNavLink>
        
        {user ? (
          <div className="space-y-2">
            <div className={`flex items-center px-4 py-2 text-base font-medium rounded-md ${
              isActive('/profile') || isActive('/dashboard') 
                ? 'bg-bible-sky text-bible-blue' 
                : 'text-bible-dark dark:text-white'
            }`}>
              <User className="h-5 w-5 mr-2" />
              Admin
              <div className="flex-grow"></div>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="pl-8 space-y-2">
              <Link 
                to="/profile" 
                className={`flex items-center px-4 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                  isActive('/profile') 
                    ? 'bg-bible-sky text-bible-blue' 
                    : 'text-bible-dark dark:text-white hover:bg-bible-beige dark:hover:bg-slate-800'
                }`}
              >
                <User className="h-5 w-5 mr-2" />
                Profile
              </Link>
              <Link 
                to="/dashboard" 
                className={`flex items-center px-4 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                  isActive('/dashboard') 
                    ? 'bg-bible-sky text-bible-blue' 
                    : 'text-bible-dark dark:text-white hover:bg-bible-beige dark:hover:bg-slate-800'
                }`}
              >
                <LayoutDashboard className="h-5 w-5 mr-2" />
                Dashboard
              </Link>
              <Button 
                className="w-full flex items-center justify-center"
                variant="destructive"
                onClick={handleSignOut}
              >
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        ) : (
          <Link to="/auth" className="w-full">
            <Button className="w-full bg-bible-blue hover:bg-bible-deepBlue text-white">Sign In</Button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default MobileNav;
