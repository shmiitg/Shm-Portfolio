import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = ({ projectsRef }) => {
    const projects = [
        {
            name: "Code Dunk",
            title: "Interview Tracker Website",
            link: "https://code-dunk.onrender.com",
            info: "Keep track of your interview progress and crack them",
            tech: ["React.js", "Express.js", "JWT", "JavaScript", "MongoDB", "CSS"],
            github: "https://github.com/shmiitg/code-dunk",
        },
        {
            name: "Portgen",
            title: "Portfolio Website",
            link: "https://shm-portgen.herokuapp.com",
            info: "Generate multiple portfolio by filling required details",
            tech: ["React.js", "Express.js", "Passport.js", "JavaScript", "MongoDB", "CSS"],
            github: "https://github.com/shmiitg/portgen",
        },
        {
            name: "Redstore",
            title: "Ecommerce Website",
            link: "https://shm-ecommerce.herokuapp.com",
            info: "Check out amazing products and get them ordered to your address",
            tech: ["Express.js", "JavaScript", "EJS", "Passport.js", "MongoDB", "CSS"],
            github: "https://github.com/shmiitg/redstore",
        },
        {
            name: "Dilack",
            title: "Slack Clone",
            link: "https://shm-dilack.vercel.app",
            info: "Chat in different channels just like slack and create channels.",
            tech: ["Next.js", "Firebase", "CSS"],
            github: "https://github.com/shmiitg/dilack",
        },
        {
            name: "Shm Portfolio",
            title: "Personal Portfolio",
            link: "https://shm-portfolio.netlify.app",
            info: "My Personal Website to display my profile and showcase by projects and skills",
            tech: ["React.js", "JavaScript", "CSS"],
            github: "https://github.com/shmiitg/shm-portfolio",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1048,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
        ],
    };

    return (
        <div className="proj-container" ref={projectsRef}>
            <div className="heading">Projects</div>
            <div className="proj-slider">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            name={project.name}
                            title={project.title}
                            link={project.link}
                            info={project.info}
                            tech={project.tech}
                            github={project.github}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Projects;
