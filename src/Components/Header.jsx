import Nav from "./Nav";

function Header() {
    const siteTitle = "</Alex-Ball\\>"
    
    return (
        <header className="Header">
            <section className="siteTitle_Container">
                <h1>{siteTitle}</h1>
            </section>

            <Nav />
        </header>
    );
}

export default Header;