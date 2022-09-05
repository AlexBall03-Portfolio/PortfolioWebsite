import Banner from "../Assets/PortfolioBanner.jpg";
import "../Styles/Landing.css";
import { Link } from "react-scroll";

function Landing() {
    return (
        <div name='home' className="Landing">
            <div className="landing_Container">
                <div className="banner">
                    <img src={Banner} alt="" />
                    <div className="img-overlay"></div>
                </div>
                
                <div className="banner-text_Container">
                    <h2>Alex Ball</h2>
                    <h3>Frontend Web Developer</h3>
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