import { FaRegEnvelope } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { BsHddStack, BsCodeSlash } from 'react-icons/bs';
import { GiPaperPlane } from "react-icons/gi";
 
function Nav() {
    return (
        <nav className="Nav">
            <div className='nav_Container'>
                <ul className="nav_List">
                    <li><a href="#home" className='internal-link'><AiOutlineHome className='icon' /> Home</a></li>
                    <li><a href="#about" className='internal-link'><AiOutlineInfoCircle className='icon' /> About Me</a></li>
                    <li><a href="#skills" className='internal-link'><BsHddStack className='icon' /> My Skills</a></li>
                    <li><a href="#projects" className='internal-link'><BsCodeSlash className='icon' /> My Projects</a></li>
                    <li><a href="#contact" className='internal-link'><FaRegEnvelope className='icon' /> Contact</a></li>
                </ul>
                <div className='hire-me-link_Container'>
                    <a href="#about" className='hire-me_Link'><GiPaperPlane /> Hire Me</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;