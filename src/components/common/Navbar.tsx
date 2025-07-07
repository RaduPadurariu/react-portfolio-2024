import { NavLink } from "react-router-dom";
interface NavbarProps {
  scrollToResume: () => void;
  scrollToSkills: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
  isMenuOpen?: boolean;
  setIsMenuOpen?: (isMenuOpen: boolean) => void;
}
const Navbar: React.FC<NavbarProps> = ({
  scrollToResume,
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
  isMenuOpen = false,
  setIsMenuOpen = () => {},
}) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            onClick={(e) => {
              e.preventDefault();
              {
                scrollToResume();
              }
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            onClick={(e) => {
              e.preventDefault();
              {
                scrollToSkills();
              }
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            onClick={(e) => {
              e.preventDefault();
              {
                scrollToProjects();
              }
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            onClick={(e) => {
              e.preventDefault();
              {
                scrollToContact();
              }
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
