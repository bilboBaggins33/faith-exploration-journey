import { Link } from 'react-router-dom';
import { BookOpen, Cookie } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bible-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
          <div className="flex items-center">
            <BookOpen className="h-6 w-6 text-bible-gold mr-2" />
            <span className="text-lg font-serif font-semibold tracking-tight">
              Bible Quest
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/bible" className="text-white/70 hover:text-bible-gold transition-colors duration-300 text-sm">
              Bible
            </Link>
            <Link to="/theology" className="text-white/70 hover:text-bible-gold transition-colors duration-300 text-sm">
              Theology
            </Link>
            <Link to="/auth" className="text-white/70 hover:text-bible-gold transition-colors duration-300 text-sm">
              Sign In
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Bible Quest. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/terms" className="text-white/60 hover:text-white transition-colors duration-300">
              Terms
            </Link>
            <Link to="/privacy" className="text-white/60 hover:text-white transition-colors duration-300">
              Privacy
            </Link>
            <Link to="/cookie-policy" className="text-white/60 hover:text-white transition-colors duration-300 flex items-center">
              <Cookie className="h-3 w-3 mr-1" /> Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
