import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, User, LogOut, Book, BookText, Info, LayoutDashboard, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import MobileNavLink from './MobileNavLink';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface MobileNavProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  user: SupabaseUser | null;
  handleSignOut: () => Promise<void>;
}

const MobileNav = ({ isOpen, onOpenChange, user, handleSignOut }: MobileNavProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [adminExpanded, setAdminExpanded] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-80 bg-gradient-to-b from-bible-beige to-white dark:from-bible-dark dark:to-slate-900 border-l border-bible-stone/20"
      >
        <div className="flex flex-col space-y-6 pt-8">
          <div className="space-y-3">
            <MobileNavLink to="/" icon={<BookOpen className="h-5 w-5 mr-3" />} active={isActive('/')} onClick={() => onOpenChange(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/bible" icon={<Book className="h-5 w-5 mr-3" />} active={isActive('/bible')} onClick={() => onOpenChange(false)}>
              Bible
            </MobileNavLink>
            <MobileNavLink to="/daily-reading" icon={<BookOpen className="h-5 w-5 mr-3" />} active={isActive('/daily-reading')} onClick={() => onOpenChange(false)}>
              Plans
            </MobileNavLink>
            <MobileNavLink to="/theology" icon={<BookText className="h-5 w-5 mr-3" />} active={isActive('/theology')} onClick={() => onOpenChange(false)}>
              Books
            </MobileNavLink>
            <MobileNavLink to="/about" icon={<Info className="h-5 w-5 mr-3" />} active={isActive('/about')} onClick={() => onOpenChange(false)}>
              About
            </MobileNavLink>
          </div>

          <div className="border-t border-bible-stone/20 pt-6">
            {user ? (
              <div className="space-y-3">
                <button
                  onClick={() => setAdminExpanded(!adminExpanded)}
                  className={`flex items-center w-full px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${isActive('/profile') || isActive('/dashboard')
                      ? 'bg-bible-sky/50 text-bible-blue shadow-sm'
                      : 'text-bible-dark dark:text-white hover:bg-bible-sky/20 dark:hover:bg-slate-800'
                    }`}
                >
                  <User className="h-5 w-5 mr-3" />
                  Admin
                  <div className="flex-grow"></div>
                  {adminExpanded ? (
                    <ChevronUp className="h-4 w-4 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  )}
                </button>

                {adminExpanded && (
                  <div className="pl-6 space-y-2 animate-fade-in">
                    <Link
                      to="/profile"
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${isActive('/profile')
                          ? 'bg-bible-sky/50 text-bible-blue shadow-sm'
                          : 'text-bible-dark dark:text-white hover:bg-bible-sky/20 dark:hover:bg-slate-800'
                        }`}
                      onClick={() => onOpenChange(false)}
                    >
                      <User className="h-4 w-4 mr-3" />
                      Profile
                    </Link>
                    <Link
                      to="/dashboard"
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${isActive('/dashboard')
                          ? 'bg-bible-sky/50 text-bible-blue shadow-sm'
                          : 'text-bible-dark dark:text-white hover:bg-bible-sky/20 dark:hover:bg-slate-800'
                        }`}
                      onClick={() => onOpenChange(false)}
                    >
                      <LayoutDashboard className="h-4 w-4 mr-3" />
                      Dashboard
                    </Link>
                    <Button
                      className="w-full flex items-center justify-center mt-4 bg-red-500 hover:bg-red-600 text-white shadow-md"
                      onClick={() => {
                        handleSignOut();
                        onOpenChange(false);
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/auth" className="w-full" onClick={() => onOpenChange(false)}>
                <Button className="w-full bg-gradient-to-r from-bible-blue to-bible-deepBlue hover:from-bible-deepBlue hover:to-bible-blue text-white shadow-lg transition-all duration-300">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
