import Resume from "../Assets/MyResume.pdf";
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineDownload } from 'react-icons/ai';
import "../Styles/Footer.css";

function Footer() {
    const logo = "</Alex-Ball\\>"
    const currentYear = new Date().getFullYear();

    return (
        <footer className="Footer">
            <div className="footer_Container">
                <section className='heading_Section'>
                    <h2>{logo}</h2>
                    <h3>Developer <span>Portfolio</span></h3>
                    <div className='email_Container'>
                        <a href="mailto:portfolio.alexball@gmail.com" rel='noreferrer' target="_blank">portfolio.alexball@gmail.com</a>
                    </div>
                </section>

                <section className='site-developer_Section'>
                    <p>Developer: Alex Ball</p>
                    <p>2022 - {currentYear}</p>
                </section>

                <section className='links_Section'>
                    <ul className="links_Container">
                        <li><a href="https://www.linkedin.com/in/alexball03/" rel='noreferrer' target="_black"><AiOutlineLinkedin className='icon' /><br /> |LinkedIn</a></li>
                        <li><a href="https://github.com/AlexBall03" rel='noreferrer' target="_blank"><AiOutlineGithub className='icon' /><br /> |GitHub</a></li>
                        <li><a href={Resume} rel='noreferrer' target="_blank"><AiOutlineDownload /><br /> |Resume</a></li>
                    </ul>
                </section>
            </div>
        </footer>
    );
}

export default Footer;