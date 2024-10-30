import { NavLink } from "react-router-dom";
import { linkList } from "../../assets/data/data";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Header = () => {
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
            <NavLink to="/">
              <img src="../images/common/logo.png" alt="logo" />
            </NavLink>
          </div>

          <div className={`header-menu ${isMenuOpen ? "open" : ""}`}>
            <nav>
              <ul>
                {linkList.map((link) => (
                  <li key={link.id}>
                    <NavLink to={link.link}>{link.text}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flexSB">
            <div className="header-button">
              <NavLink to="/" className="btn tj-btn-primary">
                Hire me!
              </NavLink>
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
