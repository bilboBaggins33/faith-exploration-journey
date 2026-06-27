import { Link } from 'react-router-dom';
import { BookOpen, Cookie } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bible-dark text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-2 max-w-sm">
            <div className="flex items-center mb-3">
              <BookOpen className="h-6 w-6 text-bible-gold mr-2" />
              <span className="text-lg font-serif font-semibold tracking-tight">
                Bible Quest
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              An interactive way to read Scripture and the classics of Christian thought —
              take chapter quizzes, build streaks, and track your growth in faith.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/bible" className="text-white/70 hover:text-bible-gold transition-colors duration-300 text-sm">
                  Bible
                </Link>
              </li>
              <li>
                <Link to="/theology" className="text-white/70 hover:text-bible-gold transition-colors duration-300 text-sm">
                  Theology
                </Link>
              </li>
              <li>
                <Link to="/daily-reading" className="text-white/70 hover:text-bible-gold transition-colors duration-300 text-sm">
                  Reading Plans
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-white/70 hover:text-bible-gold transition-colors duration-300 text-sm">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/auth" className="text-white/70 hover:text-bible-gold transition-colors duration-300 text-sm">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-bible-gold transition-colors duration-300 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-bible-gold transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Bible Quest. All rights reserved.
            </p>
            <span className="text-white/40 text-xs">
              v1.7.0
            </span>
          </div>
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
