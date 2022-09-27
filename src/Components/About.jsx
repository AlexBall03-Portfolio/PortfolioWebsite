import { AiOutlineInfoCircle } from 'react-icons/ai';
import ProfileImage from "../Assets/MyProfilePic.jpeg";
import "../Styles/About.css";

function About() {
    return ( 
        <div name='about' className="About">
            <div className='about_Container'>
                <header className='heading_Section'>
                    <h2><AiOutlineInfoCircle className='icon' /> | About Me</h2>
                </header>
                <div className='profile-img_Container'>
                    <img src={ProfileImage} alt="Alex Ball" />
                </div>
                <main className='section_Main'>
                    <p>My name is Alex, and I love programming. I am very much a perfectionist and have a lot of attention to detail, so I like things to be as perfect as possible both within the UI/UX and the code, or it will drive me insane!</p>
                    <br />
                    <p>My current Tech Stack is: HTML5, CSS3, JavaScript, React and Git/GitHub.
                    I also know a basic amount of C#/.Net and C/C++ along with the basics of how compilers work.</p>
                    <br />
                    <p>I love learning new things and am willing to learn whatever is needed to get the job done!</p> 
                </main>
            </div>
        </div>
    );
}

export default About;