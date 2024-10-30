import { linkList } from "../../assets/data/data";

const Footer = () => {
  return (
    <>
      <footer className="tj-footer-area">
        <div className="container text-center">
          <div className="logo-box">
            <a href="/">
              <img src="../images/common/logo.png" alt="logo" />
            </a>
          </div>
          <div className="footer-menu">
            <nav>
              <ul>
                {linkList.map((link) => (
                  <li key={link.id}>
                    <a href={link.link}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
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
