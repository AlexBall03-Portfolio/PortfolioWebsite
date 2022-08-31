import "../Styles/Header.css";

function Header() {
    const siteTitle = "</Alex-Ball\\>";
    
    return (
        <header className="Header">
            <section className="logo_Section">
                <div className="logo_Container">
                    <a href="/"><h1>{siteTitle}</h1></a>
                </div>
            </section>
            <section className="profile-img_Section">
                <div className="profile-img_Container">
                    <img src="#" alt="Alex Ball" />
                </div>
            </section>
            <section className="greeting_Section">
                <div className="greeting_Container">
                    <p>Hello, my name is <span>Alex</span> and I am a <span>Frontend Web Developer</span>. Welcome to my <span>Portfolio</span> Website!</p>
                </div>
            </section>
        </header>
    );
}

export default Header;