import React from "react";
import "./Skills.css";
import { FaCode, FaChartBar, FaDiceD6 } from "react-icons/fa";
import SkillCard from "./SkillCard";

const Skills = ({ skillsRef }) => {
    const skills = [
        {
            img: <FaCode />,
            name: "Frontend Development",
            info: "Likes to bring ideas to life and browser by building front-end from scratch",
            title: "Technologies",
            tech: ["React.js", "JavaScript", "Next.js", "Redux", "TypeScript"],
        },
        {
            img: <FaDiceD6 />,
            name: "Data Structures & Algorithms",
            info: "Enjoy solving data structures and alogrithmic problems and try to come with a proper algorithm to crack it",
            title: "Languages",
            tech: ["C++", "JavaScript"],
        },
        {
            img: <FaChartBar />,
            name: "Backend Development",
            info: "Develop the backend system by creating Rest APIs",
            title: "Technologies",
            tech: ["Node.js", "Nest.js"],
        },
        {
            img: <FaChartBar />,
            name: "Database",
            info: "Integrate backend with databases and manage them",
            title: "Technologies",
            tech: ["MongoDB", "MySQL", "Firebase"],
        },
        {
            img: <FaChartBar />,
            name: "Machine Learning",
            info: "Beginner in this field but learning is fun",
            title: "Technologies",
            tech: ["Python", "Panda", "Scikit-Learn", "Keras", "Matplotlib"],
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
