import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

function Footer() {
    const logo = "</Alex-Ball\\>"
    
    return (
        <footer className="Footer">
            <a href="/"><h2>{logo}</h2></a>
            <h3>Developer <span>Portfolio</span></h3>
            <p>Made by <span>{logo}</span> to show my work as a Developer.</p>
            <ul className="social-links_Container">
                <li><a href="https://www.linkedin.com/in/alexball03/"><AiOutlineLinkedin className='icon' />|LinkedIn</a></li>
                <li><a href="https://github.com/AlexBall03"><AiOutlineGithub className='icon' />|GitHub</a></li>
            </ul>
        </footer>
    );
}

export default Footer;