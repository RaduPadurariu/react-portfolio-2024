import { NavLink } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
interface HeaderProps {
  scrollToResume: () => void;
  scrollToSkills: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
}
const Header: React.FC<HeaderProps> = ({
  scrollToResume,
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
}) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <>
      <header
        className={`tj-header-area header-absolute ${isSticky ? "sticky" : ""}`}
      >
        <div className="container flexSB">
          <div className="logo-box">
            <NavLink
              to="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src="../images/common/logo.png" alt="logo" />
            </NavLink>
          </div>

          <div className={`header-menu ${isMenuOpen ? "open" : ""}`}>
            <Navbar
              scrollToResume={scrollToResume}
              scrollToSkills={scrollToSkills}
              scrollToProjects={scrollToProjects}
              scrollToContact={scrollToContact}
              isMenuOpen
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>

          <div className="flexSB">
            <div className="header-button">
              <a
                href="https://linkedin.com/in/radu-padurariu-13688991"
                target="_blank"
                rel="noopener noreferrer"
                className="btn tj-btn-primary"
              >
                Hire me!
              </a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <IoCloseOutline size={55} />
              ) : (
                <IoMenuOutline size={55} />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
