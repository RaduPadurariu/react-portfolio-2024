import { Link } from "react-router-dom";
import Navbar from "./Navbar";
interface NavbarProps {
  scrollToResume: () => void;
  scrollToSkills: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
}
const Footer: React.FC<NavbarProps> = ({
  scrollToResume,
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
}) => {
  return (
    <>
      <footer className="tj-footer-area">
        <div className="container text-center">
          <div className="logo-box">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src="../images/common/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="footer-menu">
            <Navbar
              scrollToResume={scrollToResume}
              scrollToSkills={scrollToSkills}
              scrollToProjects={scrollToProjects}
              scrollToContact={scrollToContact}
            />
          </div>
          <div className="copy-text">
            <p>
              &copy; 2024 All rights reserved by Radu Padurariu
              {/* <a href="#" target="_blank">
                GorkCoder
              </a> */}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
