import { useRef } from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Project from './components/projects';
import Skills from './components/skills';
import Education from './components/education';
import IntrestHobbies from './components/intrest&hobbies';
import Contact from './components/contact';
import Footer from './components/footer';
import Certifications from './components/certifications';
import './App.css';

function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const intrestRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to the specific section
  const scrollToSection = (section) => {
    const sectionRefs = {
      about: aboutRef,
      projects: projectsRef,
      skills: skillsRef,
      education: educationRef,
      intrest: intrestRef,
      contact: contactRef,
    };

    sectionRefs[section]?.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {/* Navbar */}
        <Navbar scrollToSection={scrollToSection} />

        {/* Sections */}
        <div ref={aboutRef} className="flex-row items-center mt-10" id="about">
          <About />
        </div>
        <div ref={projectsRef} className="flex-row items-center mt-8" id="projects">
          <Project />
        </div>
        <div ref={skillsRef} className="flex-row items-center mt-8" id="skills">
          <Skills />
        </div>
        <div ref={skillsRef} className="flex-row items-center mt-8" id="skills">
          <Certifications />
        </div>
        <div ref={educationRef} className="flex-row items-center mt-8" id="education">
          <Education />
        </div>
        <div ref={intrestRef} className="flex-row items-center mt-8" id="intrest">
          <IntrestHobbies />
        </div>
        <div ref={contactRef} className="flex-row  mt-8 lg:w-5/12" id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;