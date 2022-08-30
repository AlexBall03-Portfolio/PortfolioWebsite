import { FaRegEnvelope } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { BsHddStack, BsCodeSlash } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
 
function Nav() {
    const sectionTitle = "<Home>";

    return (
        <nav className="Nav">
            <div className="contact-btn_Container">
                <button type='button'>
                    <FaRegEnvelope />
                </button>
            </div>

            <div className="section-title_Container">
                <h2>{sectionTitle}</h2>
            </div>

            <div className="toggle-btn_Container">
                <button className='hamburger'>
                    <FaBars />
                </button>
            </div>

            <div className='nav_Container'>
                <ul className="navigation">
                    <li><a href="#home" className='internal-link'><AiOutlineHome className='icon' /> Home</a></li>
                    <li><a href="#home" className='internal-link'><AiOutlineInfoCircle className='icon' /> About Me</a></li>
                    <li><a href="#home" className='internal-link'><BsHddStack className='icon' /> My Skills</a></li>
                    <li><a href="#home" className='internal-link'><BsCodeSlash className='icon' /> My Projects</a></li>
                    <li><a href="#home" className='internal-link'><FaRegEnvelope className='icon' /> Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;