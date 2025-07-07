import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { hero } from "../assets/data/data";

export const Hero = () => {
  const socialIcons = [
    {
      id: 1,
      icon: <FaLinkedinIn size={20} />,
      link: "https://linkedin.com/in/radu-padurariu-13688991",
      title: "Linkedin",
    },
    {
      id: 2,
      icon: <IoLogoGithub size={20} />,
      link: "https://github.com/RaduPadurariu",
      title: "Github",
    },
    {
      id: 3,
      icon: <FaYoutube size={17} />,
      link: "https://www.youtube.com/channel/UCx8xr9cB-5xIuM1t3VIUTaA",
      title: "Youtube",
    },
    // {
    //   id: 4,
    //   icon: <FaSlack size={20} />,
    //   link: "#",
    //   title: "Linkedin",
    // },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" textAnchor="middle">
              HI
            </text>
          </svg>
        </div>
        <div className="container">
          <div className="content flexSB">
            <div className="left w-half">
              <div className="hero-content-box">
                <span className="hero-sub-title">I am Radu</span>
                <h1 className="hero-title">
                  Frontend Developer <br />
                  (React, Next.js)
                </h1>

                {/* <div className="hero-image-box d-md-none text-center">
                  <img src="assets/img/hero/me.png" alt="" />
                </div> */}

                <p className="lead">
                  I’m an enthusiastic and detail-oriented Frontend Developer
                  seeking an entry-level position to prove my skills in coding
                  and troubleshooting complex problems.
                </p>
                <div className="button-box flexG">
                  <a
                    href="/download/radupadurariuresume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn tj-btn-secondary"
                  >
                    Download CV <i className="flaticon-download"></i>
                  </a>
                  <ul className="ul-reset social-icons">
                    {socialIcons.map((icon, index) => (
                      <li key={index}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={icon.link}
                          title=""
                        >
                          {icon.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="right w-half">
              <div className="hero-image-box text-center">
                <img src="../images/common/logo.png" alt="logo" />
              </div>
            </div>
          </div>

          <div className="funfact-area grid4">
            {hero.map((item, index) => (
              <div className="funfact-item" key={index}>
                <div className="number">
                  <span>{item.text}</span>
                </div>
                <div className="text">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
