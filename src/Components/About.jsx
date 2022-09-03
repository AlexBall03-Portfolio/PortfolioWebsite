import { AiOutlineInfoCircle } from 'react-icons/ai';
import ProfileImage from "../Assets/MyProfilePic.jpeg";
import "../Styles/About.css";

function About() {
    return ( 
        <div className="About" id="about">
            <div className='about_Container'>
                <header className='section_Header'>
                    <h2><AiOutlineInfoCircle className='icon' /> | About Me</h2>
                </header>
                <div className='profile-img_Container'>
                    <img src={ProfileImage} alt="Alex Ball" />
                </div>
                <main className='section_Main'>
                    <p>My name is Alex, and I love programming. I am very much a perfectionist and have a decent amount of attention to detail, so I like things to be as perfect as possible both within the UI/UX and the code, or it will drive me insane!</p>
                    <br />
                    <p>My current Tech Stack is: HTML, CSS, JS, React.js and Git/GitHub.
                    I also know a very basic amount of C/C++ and C#/.Net (along with the very basics of how compilers work).</p>
                    <br />
                    <p>I love learning new things and am willing to learn whatever is needed to get the job done!</p> 
                </main>
            </div>
        </div>
    );
}

export default About;