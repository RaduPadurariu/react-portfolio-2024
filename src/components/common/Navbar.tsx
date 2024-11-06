import { NavLink } from "react-router-dom";
interface NavbarProps {
  scrollToResume: () => void;
  scrollToSkills: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
}
const Navbar: React.FC<NavbarProps> = ({
  scrollToResume,
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
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
