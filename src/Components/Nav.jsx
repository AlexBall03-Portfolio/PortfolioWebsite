import { FaRegEnvelope } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { BsHddStack, BsCodeSlash } from 'react-icons/bs';
import { GiPaperPlane } from "react-icons/gi";
import { Link } from "react-scroll";
 
function Nav() {
    return (
        <nav className="Nav">
            <div className='nav_Container'>
                <ul className="nav_List">
                    <li><Link to='home' spy={true} smooth={true} duration={500} className='internal-link'><AiOutlineHome className='icon' /> Home</Link></li>
                    <li><Link to='about' spy={true} smooth={true} duration={500} className='internal-link'><AiOutlineInfoCircle className='icon' /> About Me</Link></li>
                    <li><Link to='skills' spy={true} smooth={true} duration={500} className='internal-link'><BsHddStack className='icon' /> My Skills</Link></li>
                    <li><Link to='projects' spy={true} smooth={true} duration={500} className='internal-link'><BsCodeSlash className='icon' /> My Projects</Link></li>
                    <li><Link to='contact' spy={true} smooth={true} duration={500} className='internal-link'><FaRegEnvelope className='icon' /> Contact</Link></li>
                </ul>
                <div className='hire-me-link_Container'>
                    <Link to='contact' spy={true} smooth={true} duration={500} href="/about" className='hire-me_Link button'><GiPaperPlane /> Hire Me</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;