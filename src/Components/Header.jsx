import Picture from "../Assets/ProfilePicture.jpg";
import { Link } from "react-scroll";

function Header() {
  // Logo
  const myFirstName = "Alex";
  const myLastName = "Ball";
  const myHyphen = "-";
  const myPreffix = "</";
  const mySuffix = "\\>";

  return (
    <header className="Header">
      <section className="logo_Section">
        <div className="logo_Container">
          <Link to="home" spy={true} smooth={true} duration={500} href="/">
            <h1>
              <span className="title-accent-clr">{myPreffix}</span>
              {myFirstName}
              <span className="title-accent-clr">{myHyphen}</span>
              {myLastName}
              <span className="title-accent-clr">{mySuffix}</span>
            </h1>
          </Link>
        </div>
      </section>
      <section className="profile-img_Section">
        <div className="profile-img_Container">
          <img src={Picture} alt="Alex Ball" />
        </div>
      </section>
      <section className="greeting_Section">
        <div className="greeting_Container">
          <p>
            Hello, my name is Alex and I am a Frontend Web Developer. Welcome to
            my Portfolio Website!
          </p>
        </div>
      </section>
    </header>
  );
}

export default Header;
