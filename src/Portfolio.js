import React from 'react';
import Profile from './header/Profile';
import Skills from './skills/Skills';
import AboutMe from './about/AboutMe';
import Resume from './resume/Resume';
import Projects from './projects/Projects';
import ContactMe from './contact/ContactMe';
import Collab from './contact/Collab';
import Platform from './platforms/Platforms'
import Footer from './footer/Footer';

const Portfolio = () => {
    return (
        <>
            <Profile />
            <AboutMe />
            <Skills />
            <Projects />
            <Collab />
            <Platform />
            <Resume />
            <ContactMe />
            <Footer />
        </>
    )
}

export default Portfolio
