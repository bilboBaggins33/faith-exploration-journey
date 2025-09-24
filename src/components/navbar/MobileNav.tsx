import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, User, LogOut, Book, BookText, Info, LayoutDashboard, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import MobileNavLink from './MobileNavLink';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  user: SupabaseUser | null;
  handleSignOut: () => Promise<void>;
}

const MobileNav = ({ isOpen, onClose, user, handleSignOut }: MobileNavProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [adminExpanded, setAdminExpanded] = useState(false);
  
  const handleLinkClick = () => {
    onClose();
  };
  
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-80 p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col space-y-2 p-6">
          <Link 
            to="/" 
            onClick={handleLinkClick}
            className={`flex items-center px-4 py-3 text-base font-medium rounded-md transition-colors ${
              isActive('/') 
                ? 'bg-bible-sky text-bible-blue' 
                : 'text-bible-dark dark:text-white hover:bg-bible-beige dark:hover:bg-slate-800'
            }`}
          >
            <BookOpen className="h-5 w-5 mr-3" />
            Home
          </Link>
          
          <Link 
            to="/bible" 
            onClick={handleLinkClick}
            className={`flex items-center px-4 py-3 text-base font-medium rounded-md transition-colors ${
              isActive('/bible') 
                ? 'bg-bible-sky text-bible-blue' 
                : 'text-bible-dark dark:text-white hover:bg-bible-beige dark:hover:bg-slate-800'
            }`}
          >
            <Book className="h-5 w-5 mr-3" />
            Bible
          </Link>
          
          <Link 
            to="/plans" 
            onClick={handleLinkClick}
            className={`flex items-center px-4 py-3 text-base font-medium rounded-md transition-colors ${
              isActive('/plans') 
                ? 'bg-bible-sky text-bible-blue' 
                : 'text-bible-dark dark:text-white hover:bg-bible-beige dark:hover:bg-slate-800'
            }`}
          >
            <BookOpen className="h-5 w-5 mr-3" />
            Plans
          </Link>
          
          <Link 
            to="/theology" 
            onClick={handleLinkClick}
            className={`flex items-center px-4 py-3 text-base font-medium rounded-md transition-colors ${
              isActive('/theology') 
                ? 'bg-bible-sky text-bible-blue' 
                : 'text-bible-dark dark:text-white hover:bg-bible-beige dark:hover:bg-slate-800'
            }`}
          >
            <BookText className="h-5 w-5 mr-3" />
            Books
          </Link>
          
          <Link 
            to="/about" 
            onClick={handleLinkClick}
            className={`flex items-center px-4 py-3 text-base font-medium rounded-md transition-colors ${
              isActive('/about') 
                ? 'bg-bible-sky text-bible-blue' 
                : 'text-bible-dark dark:text-white hover:bg-bible-beige dark:hover:bg-slate-800'
            }`}
          >
            <Info className="h-5 w-5 mr-3" />
            About
          </Link>
          
          {user ? (
            <div className="space-y-2 mt-4">
              <button 
                onClick={() => setAdminExpanded(!adminExpanded)}
                className={`flex items-center w-full px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  isActive('/profile') || isActive('/dashboard') 
                    ? 'bg-bible-sky text-bible-blue' 
                    : 'text-bible-dark dark:text-white hover:bg-bible-beige dark:hover:bg-slate-800'
                }`}
              >
                <User className="h-5 w-5 mr-3" />
                Admin
                <div className="flex-grow" />
                {adminExpanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              
              {adminExpanded && (
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/profile" 
                    onClick={handleLinkClick}
                    className={`flex items-center px-4 py-3 text-base font-medium rounded-md transition-colors ${
                      isActive('/profile') 
                        ? 'bg-bible-sky text-bible-blue' 
                        : 'text-bible-dark dark:text-white hover:bg-bible-beige dark:hover:bg-slate-800'
                    }`}
                  >
                    <User className="h-5 w-5 mr-3" />
                    Profile
                  </Link>
                  <Link 
                    to="/dashboard" 
                    onClick={handleLinkClick}
                    className={`flex items-center px-4 py-3 text-base font-medium rounded-md transition-colors ${
                      isActive('/dashboard') 
                        ? 'bg-bible-sky text-bible-blue' 
                        : 'text-bible-dark dark:text-white hover:bg-bible-beige dark:hover:bg-slate-800'
                    }`}
                  >
                    <LayoutDashboard className="h-5 w-5 mr-3" />
                    Dashboard
                  </Link>
                  <Button 
                    className="w-full flex items-center justify-center mt-2"
                    variant="destructive"
                    onClick={() => {
                      handleSignOut();
                      onClose();
                    }}
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Sign Out
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth" onClick={handleLinkClick} className="w-full mt-4">
              <Button className="w-full bg-bible-blue hover:bg-bible-deepBlue text-white">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
