import "../Styles/Header.css";

function Header() {
    const siteTitle = "</Alex-Ball\\>";
    
    return (
        <header className="Header">
            <a href="/"><h1>{siteTitle}</h1></a>
        </header>
    );
}

export default Header;