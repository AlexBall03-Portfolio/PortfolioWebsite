import './App.css';
import SideBar from './Components/SideBar';
import Landing from './Components/Landing';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Landing />

      <main className='site-content_Container'>
        <section className="about_Section">
          <About />
        </section>

        <section className="skills_Section">
          <Skills />
        </section>

        <section className="projects_Section">
          <Projects />
        </section>
        
        <section className="contact_Section">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;