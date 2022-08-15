import React, { useState } from "react";
import "./Resume.css";
import Education from "./Education";
import Projects from "./Projects";
import Hackathons from "./Hackathons";
import Achievements from "./Achievements";
import TechSkills from "./TechSkills";
import KeyCourses from "./KeyCourses";
import {
    FaGraduationCap,
    FaLaptopCode,
    FaChartLine,
    FaHackerrank,
    FaCertificate,
    FaAccusoft,
} from "react-icons/fa";

const Resume = ({ resumeRef }) => {
    const [indexSelected, setIndexSelected] = useState(0);
    const iconPoints = [
        { component: <Education />, icon: <FaGraduationCap />, iconValue: "Education" },
        { component: <Projects />, icon: <FaLaptopCode />, iconValue: "Projects" },
        { component: <TechSkills />, icon: <FaChartLine />, iconValue: "Technical Skills" },
        { component: <Hackathons />, icon: <FaHackerrank />, iconValue: "Hackathons" },
        { component: <KeyCourses />, icon: <FaCertificate />, iconValue: "Key Courses" },
        { component: <Achievements />, icon: <FaAccusoft />, iconValue: "Achievements" },
    ];

    const changeSelectedIcon = (idx) => {
        setIndexSelected(idx);
        const element = document.getElementById("resume-details");
        element.scroll({
            top: idx * 420,
            behavior: "smooth",
        });
    };

    return (
        <div className="resume-container" ref={resumeRef}>
            <div className="heading">Resume</div>
            <div className="resume-main">
                <div className="icon-container">
                    <div className="icons"></div>
                    <div className="icon-points">
                        {iconPoints.map((point, index) => (
                            <div
                                key={index}
                                id={"icon-" + index}
                                className={
                                    indexSelected === index
                                        ? "icon-point icon-selected"
                                        : "icon-point"
                                }
                            >
                                <div onClick={() => changeSelectedIcon(index)}>{point.icon}</div>
                                <span onClick={() => changeSelectedIcon(index)}>
                                    {point.iconValue}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="resume-details" className="resume-details">
                    {iconPoints.map((point, index) => (
                        <div key={index} id={"det-" + (index + 1)} className="resume-icon-details">
                            {point.component}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resume;
