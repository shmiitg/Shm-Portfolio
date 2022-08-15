import React from "react";
import "./Skills.css";
import { FaCode, FaChartBar, FaDiceD6 } from "react-icons/fa";
import SkillCard from "./SkillCard";

const Skills = ({ skillsRef }) => {
    const skills = [
        {
            img: <FaCode />,
            name: "Web Development",
            info: "Bring ideas to life and browser by building front-end from scratch, creating APIs and developing back-end system",
            title: "Technologies",
            tech: ["React.js", "JavaScript", "Express.js", "MongoDB", "Firebase", "MySQL"],
        },
        {
            img: <FaDiceD6 />,
            name: "Competetive Coding",
            info: "Enjoy solving data structures and alogrithmic problems and try to come with a proper algorithm to crack it",
            title: "Languages",
            tech: ["C++", "JavaScript", "Python"],
        },
        {
            img: <FaChartBar />,
            name: "Machine Learning",
            info: "In-depth knowledge of Machine learning alogrithms with adequate implementation skills and data visualisation ",
            title: "Libraries and Open Source",
            tech: ["Scikit-learn", "Keras", "Tensorflow", "OpenCV", "Matplotlib"],
        },
    ];

    return (
        <div className="skills-container" ref={skillsRef}>
            <div className="skills-bg">
                <div className="skill-heading">Skills</div>
                <div className="skills">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            img={skill.img}
                            name={skill.name}
                            info={skill.info}
                            title={skill.title}
                            tech={skill.tech}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
