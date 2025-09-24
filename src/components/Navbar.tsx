
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, BookText, Info } from 'lucide-react';
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
  const isBiblePage = location.pathname.valueOf() === '/bible';
  
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
  
  const navbarBgClass = 'dark:bg-bible-dark/90';
  
  return (
    <nav 
      className={`z-50 transition-all duration-300 ${navbarBgClass}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLogo isHomePage={isHomePage} isScrolled={isScrolled} isBiblePage={isBiblePage}/>
          
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
                isBiblePage ? 'text-bible-dark hover:text-bible-sky' : 'text-white dark:text-white hover:text-bible-blue'
              }`}
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
