import Banner from "../Assets/PortfolioBanner.jpg";
import "../Styles/Landing.css";
import { Link } from "react-scroll";

function Landing() {
    // Logo
    const myFirstName = "Alex";
    const myLastName = "Ball";
    const myHyphen = "-"
    const myPreffix = "</"
    const mySuffix = "\\>"
    
    return (
        <div name='home' className="Landing">
            <div className="landing_Container">
                <div className="banner">
                    <img src={Banner} alt="" />
                    <div className="img-overlay"></div>
                </div>
                
                <div className="banner-text_Container">
                    <h2><span className="title-accent-clr">{myPreffix}</span>{myFirstName}<span className="title-accent-clr">{myHyphen}</span>{myLastName}<span className="title-accent-clr">{mySuffix}</span></h2>
                    <h3>Frontend Software Engineer</h3>
                    <br />
                    <div className="call-to-action_Container">
                        <Link to='projects' spy={true} smooth={true} duration={500} className="internal-link button">Projects</Link>
                        <Link to='contact' spy={true} smooth={true} duration={500} className="internal-link button">Hire Me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;