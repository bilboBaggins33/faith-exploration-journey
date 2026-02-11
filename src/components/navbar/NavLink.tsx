
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  active: boolean;
  isHomePage?: boolean;
  isDarkBg?: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, isHomePage, isDarkBg = true, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`hover-link font-medium transition-colors duration-300 ${active
          ? 'text-bible-blue after:scale-x-100'
          : isDarkBg
            ? 'text-white'
            : 'text-bible-dark hover:text-bible-blue'
        }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
