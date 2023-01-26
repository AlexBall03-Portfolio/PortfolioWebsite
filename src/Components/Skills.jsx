import { AiOutlineHtml5 } from "react-icons/ai";
import { RiCss3Line } from "react-icons/ri";
import { SiJavascript, SiReact, SiDotnet } from "react-icons/si";
import { BsHddStack } from "react-icons/bs";
import { TbCSharp } from "react-icons/tb";
import "../Styles/Skills.css";

function Skills() {
  return (
    <div name="skills" className="Skills">
      <div className="skills_Container">
        <header className="heading_Section">
          <h2>
            My Skills | <BsHddStack className="icon" />
          </h2>
        </header>

        <main className="section_Main">
          <ul className="skill-icons_Container">
            <li>
              <a
                href="https://www.w3schools.com/html/default.asp"
                rel="noreferrer"
                target="_black"
              >
                <AiOutlineHtml5 className="icon html_Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/css/default.asp"
                rel="noreferrer"
                target="_black"
              >
                <RiCss3Line className="icon css_Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/js/default.asp"
                rel="noreferrer"
                target="_black"
              >
                <SiJavascript className="icon js_Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/react/default.asp"
                rel="noreferrer"
                target="_black"
              >
                <SiReact className="icon react_Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/cs/index.php"
                rel="noreferrer"
                target="_black"
              >
                <TbCSharp className="icon csharp_Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://learn.microsoft.com/en-us/dotnet/"
                rel="noreferrer"
                target="_black"
              >
                <SiDotnet className="icon csharp_Icon" />
              </a>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default Skills;
