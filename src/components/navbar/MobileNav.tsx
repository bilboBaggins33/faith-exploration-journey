
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, User, LogOut, Book, BookText, Info, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileNavLink from './MobileNavLink';
import { User as SupabaseUser } from '@supabase/supabase-js';

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
        <MobileNavLink to="/profile" icon={<User className="h-5 w-5 mr-2" />} active={isActive('/profile')}>
          Profile
        </MobileNavLink>
        
        {user ? (
          <Button 
            className="w-full flex items-center justify-center"
            variant="destructive"
            onClick={handleSignOut}
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </Button>
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
