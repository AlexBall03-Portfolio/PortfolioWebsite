import { FaRegEnvelope } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { BsHddStack, BsCodeSlash } from 'react-icons/bs';
 
function Nav() {
    const sectionTitle = "<Home>";
    
    return (
        <nav className="Nav">
            <div className="contact-link_Container">
                <button type='button'>
                    <FaRegEnvelope />
                </button>
            </div>

            <div className="section-title_Container">
                <h2>{sectionTitle}</h2>
            </div>

            <ul className='nav_Container'>
                <li><a href="#home"><AiOutlineHome /> Home</a></li>
                <li><a href="#home"><AiOutlineInfoCircle /> About Me</a></li>
                <li><a href="#home"><BsHddStack /> My Skills</a></li>
                <li><a href="#home"><BsCodeSlash /> My Projects</a></li>
                <li><a href="#home"><FaRegEnvelope /> Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;