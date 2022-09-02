import { AiOutlineHtml5 } from 'react-icons/ai';
import { RiCss3Line } from 'react-icons/ri';
import { SiJavascript, SiReact } from 'react-icons/si';
import { BsHddStack } from 'react-icons/bs';
import "../Styles/Skills.css";

function Skills() {
    return (
        <div className="Skills">
            <div className="skills_Container">
                <header className='section_Header'>
                    <h2>My Skills | <BsHddStack className='icon' /></h2>
                </header>

                <main className='section_Main'>
                    <ul className="skill-icons_Container">
                        <li><AiOutlineHtml5 className='icon html_Icon' /></li>
                        <li><RiCss3Line className='icon css_Icon' /></li>
                        <li><SiJavascript className='icon js_Icon' /></li>
                        <li><SiReact className='icon react_Icon' /></li>
                    </ul>
                </main>
            </div>
        </div>
    );
}

export default Skills;