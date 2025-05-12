import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Github, Mail, Cookie } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bible-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-bible-gold" />
              <span className="ml-2 text-xl font-serif font-semibold tracking-tight">
                Bible Quest
              </span>
            </div>
            <p className="text-white/70 mb-6">
              An interactive journey through Scripture designed to make Bible learning engaging and spiritually enriching.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Github className="h-5 w-5" />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <FooterNav>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/map">World Map</FooterLink>
              <FooterLink to="/challenge">Challenges</FooterLink>
              <FooterLink to="/profile">Profile</FooterLink>
              <FooterLink to="/auth">Sign In</FooterLink>
            </FooterNav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <FooterNav>
              <FooterLink to="#">Study Materials</FooterLink>
              <FooterLink to="#">Bible Translations</FooterLink>
              <FooterLink to="#">Commentaries</FooterLink>
              <FooterLink to="#">Community Forum</FooterLink>
              <FooterLink to="#">Help & Support</FooterLink>
            </FooterNav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="flex items-start mb-4">
              <Mail className="h-5 w-5 mr-2 mt-1 text-bible-gold" />
              <span className="text-white/70">info@bibleadventurequest.com</span>
            </p>
            <p className="text-white/70 mb-4">
              If you have any questions or feedback, we'd love to hear from you!
            </p>
            <Link 
              to="#" 
              className="inline-block px-4 py-2 bg-bible-gold/20 text-bible-gold hover:bg-bible-gold/30 rounded transition-colors duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Bible Quest. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Terms of Service</Link>
            <Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Privacy Policy</Link>
            <Link to="/cookie-policy" className="text-white/60 hover:text-white text-sm transition-colors duration-300 flex items-center">
              <Cookie className="h-4 w-4 mr-1" /> Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a 
    href={href} 
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-bible-gold/20 hover:text-bible-gold transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

interface FooterNavProps {
  children: React.ReactNode;
}

const FooterNav = ({ children }: FooterNavProps) => (
  <nav className="flex flex-col space-y-2">
    {children}
  </nav>
);

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <Link 
    to={to} 
    className="text-white/70 hover:text-bible-gold transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Footer;
