import { AiOutlineInfoCircle } from 'react-icons/ai';
import ProfileImage from "../Assets/MyProfilePic.jpeg";
import "../Styles/About.css";

function About() {
    return ( 
        <div className="About">
            <div className='about_Container'>
                <header className='section_Header'>
                    <h2><AiOutlineInfoCircle className='icon' /> | About Me</h2>
                </header>
                <div className='profile-img_Container'>
                    <img src={ProfileImage} alt="Alex Ball" />
                </div>
                <main className='section_Main'>
                    <p>Hello, my name is Alex and I love programming. I started learning Web Development early 2020, but after 1.5 years in, I switched to wanting to do Software Developement instead, so I was (slowly) trying to find the best rought in that field. At the time I was working for a compony called VirTra (whis is a GREAT compony to work for by the way) as a Manufacturing Shop Assistant. Their software departpemt primarily uses C#, so that is what I started learning. But I came to the realization that I need to go back to Web Development so that I can get a job as a developer, then if I want to change later, I can. So I started to refresh what I had learned in the past and push forward, building my Portfolio Website. I currently don't have a lot of projects to show on this website, but I am hopping with this and what I start working on next will help me get a job anyway.</p>
                </main>
            </div>
        </div>
    );
}

export default About;