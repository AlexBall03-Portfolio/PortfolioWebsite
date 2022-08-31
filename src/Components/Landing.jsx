import Banner from "../Assets/Blue-Dark_Keyboard_Background-img.jpg";

function Landing() {
    return (
        <div className="Landing">
            <div className="landing_Container">
                <div className="banner">
                    <img src={Banner} alt="" />
                    <div className="img-gradient"></div>
                </div>
                
                <div className="greeting">
                    <h2>Alex Ball</h2>
                    <h3>Frontend Web Developer</h3>
                </div>
            </div>
        </div>
    );
}

export default Landing;