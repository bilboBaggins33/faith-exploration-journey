
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import NavLogo from './navbar/NavLogo';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const isHomePage = location.pathname === '/';
  const transparentRoutes = ['/', '/daily-reading', '/dashboard', '/achievements', '/profile', '/auth'];
  const isTransparentRoute = transparentRoutes.some(route => location.pathname === route);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSignOut = async () => {
    await signOut();
  };

  const navbarClass = isTransparentRoute && !isScrolled && !isOpen
    ? 'bg-transparent'
    : 'bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg';

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLogo isDarkBg={true} />

          <DesktopNav
            isHomePage={isHomePage}
            isDarkBg={true}
            user={user}
            handleSignOut={handleSignOut}
          />

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 text-white dark:text-white hover:text-bible-blue"
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
