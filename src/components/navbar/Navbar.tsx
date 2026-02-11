
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import NavLogo from './NavLogo';
import { useAuth } from '@/context/auth';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { user, signOut } = useAuth();
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    // Pages that have dark backgrounds behind the navbar area
    const darkBgRoutes = ['/', '/bible', '/theology', '/daily-reading', '/auth', '/dashboard'];
    const isDarkBg = darkBgRoutes.some(route => {
        if (route === '/') return location.pathname === '/';
        return location.pathname.startsWith(route);
    });

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <nav className={`absolute top-0 left-0 right-0 z-50 transition-colors duration-300 ${isDarkBg ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm shadow-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <NavLogo isDarkBg={isDarkBg} />
                    <DesktopNav isHomePage={isHomePage} isDarkBg={isDarkBg} user={user} handleSignOut={handleSignOut} />
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${isDarkBg
                                    ? 'text-white hover:text-bible-blue'
                                    : 'text-bible-dark hover:text-bible-blue'
                                }`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <MobileNav isOpen={isOpen} user={user} handleSignOut={handleSignOut} setIsOpen={setIsOpen} />
        </nav>
    );
};

export default Navbar;
