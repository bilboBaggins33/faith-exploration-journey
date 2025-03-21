
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen, User, LogOut, Book, BookText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  
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
  
  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md dark:bg-bible-dark/90' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-bible-blue" />
              <span className="ml-2 text-xl font-serif font-semibold tracking-tight">
                Bible Adventure Quest
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <NavLink to="/" active={isActive('/')}>
                Home
              </NavLink>
              <NavLink to="/challenge" active={isActive('/challenge')}>
                Challenges
              </NavLink>
              <NavLink to="/bible" active={isActive('/bible')}>
                Bible
              </NavLink>
              <NavLink to="/theology" active={isActive('/theology')}>
                <div className="flex items-center">
                  <BookText className="h-4 w-4 mr-1" />
                  Books
                </div>
              </NavLink>
              <NavLink to="/profile" active={isActive('/profile')}>
                Profile
              </NavLink>
              
              {user ? (
                <Button variant="outline" size="sm" className="ml-4 flex items-center" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              ) : (
                <Link to="/auth">
                  <Button variant="outline" size="sm" className="ml-4">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-bible-dark dark:text-white hover:text-bible-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
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
            <MobileNavLink to="/challenge" icon={<BookOpen className="h-5 w-5 mr-2" />} active={isActive('/challenge')}>
              Challenges
            </MobileNavLink>
            <MobileNavLink to="/bible" icon={<Book className="h-5 w-5 mr-2" />} active={isActive('/bible')}>
              Bible
            </MobileNavLink>
            <MobileNavLink to="/theology" icon={<BookText className="h-5 w-5 mr-2" />} active={isActive('/theology')}>
              Books
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
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className={`hover-link font-medium transition-colors duration-300 ${
      active ? 'text-bible-blue after:scale-x-100' : 'text-bible-dark dark:text-white'
    }`}
  >
    {children}
  </Link>
);

interface MobileNavLinkProps {
  to: string;
  active: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const MobileNavLink = ({ to, active, icon, children }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className={`flex items-center px-4 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
      active 
        ? 'bg-bible-sky text-bible-blue' 
        : 'text-bible-dark dark:text-white hover:bg-bible-beige dark:hover:bg-slate-800'
    }`}
  >
    {icon}
    {children}
  </Link>
);

export default Navbar;
