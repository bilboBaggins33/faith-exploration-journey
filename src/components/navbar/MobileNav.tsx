import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, User, LogOut, Book, BookText, Info, LayoutDashboard, ChevronDown, ChevronUp, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
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
        className="w-[85vw] sm:w-[380px] bg-bible-dark/95 backdrop-blur-xl border-l border-white/10 p-0 shadow-2xl"
      >
        <div className="flex flex-col h-full">
          {/* Header with Logo */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between mb-2">
              <Link to="/" onClick={() => onOpenChange(false)} className="block">
                <img
                  src="/BibleQuestLogo.png"
                  alt="Bible Quest Logo"
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-white/60 text-xs font-light tracking-wide uppercase mt-1">
              Faith Exploration Journey
            </p>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
            {/* Main Navigation */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 px-2">Menu</h3>
              <MobileNavLink
                to="/"
                icon={<BookOpen className="h-5 w-5 mr-3" />}
                active={isActive('/')}
                onClick={() => onOpenChange(false)}
              >
                Home
              </MobileNavLink>
              <MobileNavLink
                to="/bible"
                icon={<Book className="h-5 w-5 mr-3" />}
                active={isActive('/bible')}
                onClick={() => onOpenChange(false)}
              >
                Bible
              </MobileNavLink>
              <MobileNavLink
                to="/daily-reading"
                icon={<BookOpen className="h-5 w-5 mr-3" />}
                active={isActive('/daily-reading')}
                onClick={() => onOpenChange(false)}
              >
                Plans
              </MobileNavLink>
              <MobileNavLink
                to="/theology"
                icon={<BookText className="h-5 w-5 mr-3" />}
                active={isActive('/theology')}
                onClick={() => onOpenChange(false)}
              >
                Books
              </MobileNavLink>
              <MobileNavLink
                to="/about"
                icon={<Info className="h-5 w-5 mr-3" />}
                active={isActive('/about')}
                onClick={() => onOpenChange(false)}
              >
                About
              </MobileNavLink>
            </div>

            {/* Auth Section */}
            <div className="pt-2">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 px-2">Account</h3>
              {user ? (
                <div className="space-y-2">
                  <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                    <button
                      onClick={() => setAdminExpanded(!adminExpanded)}
                      className={`flex items-center w-full px-4 py-3 text-base font-medium transition-all duration-200 ${isActive('/profile') || isActive('/dashboard')
                        ? 'bg-bible-blue/20 text-bible-sky'
                        : 'text-white hover:bg-white/5'
                        }`}
                    >
                      <User className="h-5 w-5 mr-3" />
                      <span className="flex-1 text-left">My Profile</span>
                      {adminExpanded ? (
                        <ChevronUp className="h-4 w-4 opacity-50" />
                      ) : (
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      )}
                    </button>

                    {adminExpanded && (
                      <div className="bg-black/20 border-t border-white/5 p-2 space-y-1">
                        <Link
                          to="/profile"
                          className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/profile')
                            ? 'text-bible-sky bg-bible-blue/10'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                            }`}
                          onClick={() => onOpenChange(false)}
                        >
                          <User className="h-4 w-4 mr-3 opacity-70" />
                          Profile Settings
                        </Link>
                        <Link
                          to="/dashboard"
                          className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/dashboard')
                            ? 'text-bible-sky bg-bible-blue/10'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                            }`}
                          onClick={() => onOpenChange(false)}
                        >
                          <LayoutDashboard className="h-4 w-4 mr-3 opacity-70" />
                          Dashboard
                        </Link>
                        <button
                          className="w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors mt-1"
                          onClick={() => {
                            handleSignOut();
                            onOpenChange(false);
                          }}
                        >
                          <LogOut className="h-4 w-4 mr-3 opacity-70" />
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/auth" className="w-full" onClick={() => onOpenChange(false)}>
                    <Button variant="outline" className="w-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 h-11">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/auth" className="w-full" onClick={() => onOpenChange(false)}>
                    <Button className="w-full bg-bible-blue hover:bg-bible-deepBlue text-white border-0 shadow-lg shadow-bible-blue/20 h-11">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Footer with Socials */}
          <div className="p-6 border-t border-white/10 bg-black/20">
            <div className="flex items-center justify-center space-x-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <p className="text-center text-white/30 text-[10px] mt-4">
              © 2024 Faith Exploration Journey. All rights reserved.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
