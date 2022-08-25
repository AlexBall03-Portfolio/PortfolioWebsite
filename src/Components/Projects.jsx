import { BsHddStack, BsCodeSlash } from 'react-icons/bs';

function Projects() {
    return (
        <div className="Projects">
            <h2><BsCodeSlash />|My Projects</h2>

            <div className="card">
                <div className="card-img_Container">
                    <img src="#" alt="Project Preview Image" />
                </div>

                <header className="card_Header">
                    <h3>Project Name</h3>
                </header>

                <main className="card_Main">
                    <div className="card-description_Container">
                        <p>Projects Description</p>
                    </div>
                </main>

                <footer className="card_Footer">
                    <ul className="project-view-links_Container">
                        <li><a href="#">Live View</a></li>
                        <li><a href="#">Source Code</a></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}

export default Projects;