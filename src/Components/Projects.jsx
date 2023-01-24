import { BsCodeSlash } from "react-icons/bs";
import "../Styles/Projects.css";
import Card from "./Card";

function Projects() {
  return (
    <div name="projects" className="Projects">
      <div className="projects_Container">
        <section className="heading_Section">
          <h2>
            <BsCodeSlash className="icon" /> | My Projects
          </h2>
        </section>

        <section className="cards_Container">
          <Card />
        </section>
      </div>
    </div>
  );
}

export default Projects;
