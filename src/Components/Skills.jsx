import { AiOutlineHtml5 } from 'react-icons/ai';
import { RiCss3Line } from 'react-icons/ri';
import { SiJavascript, SiReact } from 'react-icons/si';
import { BsHddStack } from 'react-icons/bs';

function Skills() {
    return (
        <div className="Skills">
            <h2><BsHddStack className='icon' /> | My Skills</h2>
            <ul className="skill-icons_Container">
                <li><AiOutlineHtml5 className='icon html_Icon' /></li>
                <li><RiCss3Line className='icon css_Icon' /></li>
                <li><SiJavascript className='icon js_Icon' /></li>
                <li><SiReact className='icon react_Icon' /></li>
            </ul>
        </div>
    );
}

export default Skills;