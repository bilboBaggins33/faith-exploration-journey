
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useIsMobile } from '@/hooks/use-mobile';
import NavLogo from './navbar/NavLogo';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  const isMobile = useIsMobile();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleSignOut = async () => {
    await signOut();
  };
  
  // On mobile, show minimal nav on challenge pages, full nav elsewhere
  const isChallengeRoute = location.pathname.includes('/challenge/');
  const showMinimalMobile = isMobile && isChallengeRoute;
  
  const navbarBgClass = isHomePage 
    ? isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md dark:bg-bible-dark/90' : 'bg-transparent'
    : 'bg-white/90 backdrop-blur-md shadow-md dark:bg-bible-dark/90';
  
  if (showMinimalMobile) {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm dark:bg-bible-dark/90">
          <div className="flex items-center justify-between h-14 px-4">
            <NavLogo isHomePage={false} isScrolled={true} />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-bible-dark dark:text-white hover:text-bible-blue transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
        <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} user={user} handleSignOut={handleSignOut} />
      </>
    );
  }
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBgClass}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLogo isHomePage={isHomePage} isScrolled={isScrolled} />
          
          <DesktopNav 
            isHomePage={isHomePage} 
            isScrolled={isScrolled} 
            user={user} 
            handleSignOut={handleSignOut}
          />
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isHomePage && !isScrolled ? 'text-white hover:text-bible-sky' : 'text-bible-dark dark:text-white hover:text-bible-blue'
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} user={user} handleSignOut={handleSignOut} />
    </nav>
  );
};

export default Navbar;
