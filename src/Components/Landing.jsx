import Banner from "../Assets/PortfolioBanner.jpg";
import "../Styles/Landing.css";

function Landing() {
    return (
        <div className="Landing">
            <div className="landing_Container">
                <div className="banner">
                    <img src={Banner} alt="" />
                    <div className="img-overlay"></div>
                </div>
                
                <div className="banner-text_Container">
                    <h2>Alex Ball</h2>
                    <h3>Frontend Web Developer</h3>
                </div>
            </div>
        </div>
    );
}

export default Landing;