import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const projects = [
        { name: 'Interview Prep Website', info: 'An Interview Preparation Website inspired from InterviewBit, Leetcode and GeekforGeeks. The website has features like user authentication, code compiler, progress status, reading, writing, editing and deleting blogs, profile viewing and editing, problem solving, etc.', tech: ['React.js', 'React Hooks', 'Express.js', 'JWT', 'JavaScript', 'MongoDB', 'CSS'] },
        { name: 'Ecommerce Website', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consectetur similique soluta libero ducimusdignissimos, autem repellat necessitatibus illum ullam culpa, ex nemo, distinctio inventore.', tech: ['Express.js', 'JavaScript', 'EJS', 'Passport.js', 'MongoDB', 'CSS'] },
        { name: 'Amazon Price Alert', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consectetur similique soluta libero ducimusdignissimos, autem repellat necessitatibus illum ullam culpa, ex nemo, distinctio inventore.', tech: ['Chrome Extension', 'Express.js', 'Firebase'] },
        { name: 'Personal Portfolio', info: 'My Personal Website to display my profile and showcase by projects and skills. This website also helps beginners by providing them explanation and free source code of my projects.', tech: ['React.js', 'EmailJS', 'JavaScript', 'CSS'] },
        { name: 'Face Detection', info: 'A real time face detection model implemented in python using pretrained weights. The CNN architecture of the model is based on YOLOv3 (You Only Look Once, Version 3).', tech: ['YOLOv3', 'OpenCV', 'Keras', 'Numpy', 'Pillow'] },
        { name: 'EDA of IPL Data', info: 'Expoloratory Data Analysis of IPL Ball Wise data in json format. This project lead me to runner up position in the Cricket Analytica Hackathon conducted by Coding Club, IIT Guwahati.', tech: ['EDA', 'Python', 'Matplotlib', 'Seaborn', 'Pandas', 'Numpy'] },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="proj-container">
            <div className="heading">Projects</div>
            <div className="proj-slider">
                <Slider {...settings}>
                    {
                        projects.map((project, index) => (
                            <ProjectCard key={index} name={project.name} info={project.info} tech={project.tech} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Projects
