import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import NavLogo from './navbar/NavLogo';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import { cn } from '@/lib/utils';

/** Full-bleed dark surfaces — white chrome always. */
const ALWAYS_DARK = ['/', '/auth', '/reset-password'];
/** Dark hero → parchment body — white chrome at top, dark after scroll. */
const DARK_HERO_THEN_LIGHT = [
  '/about',
  '/daily-reading',
  '/dashboard',
  '/achievements',
  '/profile',
];
/** Light parchment pages — dark chrome always. */
const ALWAYS_LIGHT = ['/contact', '/terms', '/privacy', '/cookie-policy'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const isHomePage = location.pathname === '/';
  const path = location.pathname;

  const isBibleOrTheology =
    path === '/bible' ||
    path.startsWith('/bible/') ||
    path === '/theology' ||
    path.startsWith('/theology/');

  const isAlwaysDark =
    ALWAYS_DARK.includes(path) || isBibleOrTheology;
  const isAlwaysLight = ALWAYS_LIGHT.includes(path);
  const isDarkHeroThenLight = DARK_HERO_THEN_LIGHT.includes(path);
  const isTransparentRoute = isAlwaysDark || isDarkHeroThenLight;

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSignOut = async () => {
    await signOut();
  };

  // White logo/links on dark photo heroes; dark mark over parchment / after scroll
  const isDarkBg = isAlwaysLight
    ? false
    : isAlwaysDark
      ? true
      : isDarkHeroThenLight
        ? !isScrolled
        : !isScrolled;

  const showSolidBar = isAlwaysLight || (isScrolled && !isAlwaysDark) || isOpen;
  const isGlass = isTransparentRoute && !isScrolled && !isOpen && !isAlwaysLight;

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 border-b transition-all duration-300',
          isGlass && 'border-transparent bg-transparent opacity-0',
          showSolidBar && isDarkBg && 'border-white/10 bg-black/40 backdrop-blur-xl opacity-100 shadow-lg',
          showSolidBar && !isDarkBg && 'border-border/80 bg-background/90 backdrop-blur-xl opacity-100 shadow-sm',
          !showSolidBar && !isGlass && 'opacity-0'
        )}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLogo isDarkBg={isDarkBg} />

          <DesktopNav
            isHomePage={isHomePage}
            isDarkBg={isDarkBg}
            user={user}
            handleSignOut={handleSignOut}
          />

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={cn(
                'inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300',
                isDarkBg
                  ? 'text-white hover:text-bible-sky'
                  : 'text-foreground hover:text-bible-deepBlue'
              )}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <MobileNav
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        user={user}
        handleSignOut={handleSignOut}
      />
    </nav>
  );
};

export default Navbar;
