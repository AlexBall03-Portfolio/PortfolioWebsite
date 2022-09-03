import { BsCodeSlash } from 'react-icons/bs';
import "../Styles/Projects.css";
import ProjectData from "../Data/Projects.json";

function Projects() {
    return (
        <div name='projects' className="Projects">
            <div className="projects_Container">
                <section className='heading_Section'>
                    <h2><BsCodeSlash className='icon' /> | My Projects</h2>
                </section>

                <section className="card-galery_Section">
                    {
                        ProjectData && ProjectData.map(data => {
                            return (
                                <div className="card" key={data.id}>
                                    <div className="card-img_Container">
                                        <img src={data.imgSrc} alt="Project Preview" />
                                        <div className='img-overlay'></div>
                                    </div>

                                    <header className="card_Header">
                                        <h3>{data.Title}</h3>
                                    </header>

                                    <main className="card_Main">
                                        <div className="card-description_Container">
                                            <p>{data.Description}</p>
                                        </div>
                                    </main>

                                    <footer className="card_Footer">
                                        <ul className="project-view-links_Container">
                                            <li><a href={data.LiveViewURL} className='external-link button' rel='noreferrer' target="_blank">Live View</a></li>
                                            <li><a href={data.SourceCodeURL} className='external-link button' rel='noreferrer' target="_blank">Source Code</a></li>
                                        </ul>
                                    </footer>
                                </div>
                            );
                        })
                    }
                </section>
            </div>
        </div>
    );
}

export default Projects;