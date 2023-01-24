import { AiOutlineInfoCircle } from "react-icons/ai";
import ProfileImage from "../Assets/ProfilePicture.jpg";
import "../Styles/About.css";

function About() {
  return (
    <div name="about" className="About">
      <div className="about_Container">
        <header className="heading_Section">
          <h2>
            <AiOutlineInfoCircle className="icon" /> | About Me
          </h2>
        </header>
        <div className="profile-img_Container">
          <img src={ProfileImage} alt="Alex Ball" />
        </div>
        <main className="section_Main">
          <p>
            My name is Alex, and I love programming, electronics, weather, music
            and foreign languages. <br /> I am a perfectionist who loves working
            on hard and challenging tasks. I pay a lot of attention to detail
            and strive to make things as best as possible.
          </p>
          <br />
          <p>
            What I like working with the most is C# and the .Net framework. I
            would like to be able to build websites using ASP.Net and Blazer.
          </p>
          <br />
          <p>
            I love learning new things and am willing to learn whatever is
            needed to get the job done!
          </p>
        </main>
      </div>
    </div>
  );
}

export default About;
