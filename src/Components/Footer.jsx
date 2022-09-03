import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
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
                </section>

                <section className='site-developer_Section'>
                    <p>Developer: Alex Ball</p>
                    <p>2022 - {currentYear}</p>
                </section>

                <section className='social-links_Section'>
                    <ul className="social-links_Container">
                        <li><a href="https://www.linkedin.com/in/alexball03/" rel='noreferrer' target="_black"><AiOutlineLinkedin className='icon' />|LinkedIn</a></li>
                        <li><a href="https://github.com/AlexBall03" rel='noreferrer' target="_blank"><AiOutlineGithub className='icon' />|GitHub</a></li>
                    </ul>
                </section>
            </div>
        </footer>
    );
}

export default Footer;