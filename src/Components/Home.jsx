import Header from "./Header";

function Home() {
    return (
        <section className="Home">
            <Header />
            
            <div className="banner">
                <div className="welcome-message_Container">
                    <p className="welcome-message">Hello, my name is <span>Alex</span> and I am a <span>Frontend Web Developer</span>!</p>
                </div>
            </div>
        </section>          
    );
}

export default Home;