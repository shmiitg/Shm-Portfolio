import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = ({ projectsRef }) => {
    const projects = [
        {
            name: "Interview Prep Website",
            link: "https://shm-it.herokuapp.com",
            info: "An Interview Preparation Website inspired from GeekforGeeks. The website has features like user authentication, code compiler, progress status, reading, writing, editing and deleting blogs, profile viewing and editing, problem solving, etc.",
            tech: ["React.js", "Express.js", "JWT", "JavaScript", "MongoDB", "CSS"],
        },
        {
            name: "Portfolio Website",
            link: "https://shm-portgen.herokuapp.com",
            info: "The website allows users to generate multiple portfolio by filling required details. Users can view and edit their portfolios in the dashboard and signup/login using email, google or github.",
            tech: ["React.js", "Express.js", "JavaScript", "MongoDB", "CSS"],
        },
        {
            name: "Ecommerce Website",
            link: "https://shm-ecommerce.herokuapp.com",
            info: "An ecommerce website to showcase products and sell them. Users can add different products to their card, order them, see their past orders and check their order status. It allows user authentication using email and also has an admin panel to keep track of pending orders.",
            tech: ["Express.js", "JavaScript", "EJS", "Passport.js", "MongoDB", "CSS"],
        },
        {
            name: "Slack Clone",
            link: "https://shm-dilack.vercel.app",
            info: "Chat application where users can chat in different channels just like slack with authentication using google. It allows only admins to create channels.",
            tech: ["Next.js", "Firebase"],
        },
        {
            name: "Personal Portfolio",
            link: "https://shm-portfolio.netlify.app",
            info: "My Personal Website to display my profile and showcase by projects and skills. This website also helps beginners by providing them explanation and free source code of my projects.",
            tech: ["React.js", "EmailJS", "JavaScript", "CSS"],
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
                            link={project.link}
                            info={project.info}
                            tech={project.tech}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Projects;
