import React, { useRef } from "react";
import Profile from "./header/Profile";
import Skills from "./skills/Skills";
import AboutMe from "./about/AboutMe";
import Resume from "./resume/Resume";
import Projects from "./projects/Projects";
import ContactMe from "./contact/ContactMe";
import Collab from "./contact/Collab";
import Footer from "./footer/Footer";

const Portfolio = () => {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const resumeRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <Profile
                aboutRef={aboutRef}
                skillsRef={skillsRef}
                resumeRef={resumeRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
            />
            <AboutMe aboutRef={aboutRef} />
            <Skills skillsRef={skillsRef} />
            <Projects projectsRef={projectsRef} />
            <Collab />
            <Resume resumeRef={resumeRef} />
            <ContactMe contactRef={contactRef} />
            <Footer />
        </>
    );
};

export default Portfolio;
