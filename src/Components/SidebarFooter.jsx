import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineDownload,
} from "react-icons/ai";
import Resume from "../Assets/MyResume.pdf";

function SidebarFooter() {
  return (
    <footer className="SidebarFooter">
      <div className="sidebar-footer_Container">
        <ul className="social-links_List">
          <li>
            <a
              href="https://www.linkedin.com/in/alexball03/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AlexBall03"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineGithub />
            </a>
          </li>
          <li>
            <a href={Resume} rel="noreferrer" target="_blank">
              <AiOutlineDownload />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default SidebarFooter;
