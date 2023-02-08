import Resume from "../Assets/MyResume.pdf";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineDownload,
} from "react-icons/ai";
import "../Styles/Footer.css";

function Footer() {
  const logo = "</Alex-Ball\\>";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer">
      <div className="footer_Container">
        <section className="heading_Section">
          <h2>{logo}</h2>
          <h3>
            Developer <span>Portfolio</span>
          </h3>
          <div className="email_Container">
            <a
              href="mailto:admin@alexballportfolio.dev"
              rel="noreferrer"
              target="_blank"
            >
              admin@alexballportfolio.dev
            </a>
          </div>
        </section>

        <section className="site-developer_Section">
          <p>Developed by: Alex Ball</p> <br />
          <p>2022 - {currentYear}</p>
        </section>

        <section className="links_Section">
          <ul className="links_Container">
            <li>
              <a
                href="https://www.linkedin.com/in/alexball03/"
                rel="noreferrer"
                target="_black"
              >
                <AiOutlineLinkedin className="icon" />
                |LinkedIn
              </a>
            </li>{" "}
            <br />
            <li>
              <a
                href="https://github.com/AlexBall03"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineGithub className="icon" />
                |GitHub
              </a>
            </li>{" "}
            <br />
            <li>
              <a href={Resume} rel="noreferrer" target="_blank">
                <AiOutlineDownload />
                |Resume
              </a>
            </li>{" "}
            <br />
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
