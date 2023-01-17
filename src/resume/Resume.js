import React, { useState, useRef } from "react";
import "./Resume.css";
import Education from "./Education";
import Interships from "./Interships";
import Projects from "./Projects";
import Hackathons from "./Hackathons";
import Achievements from "./Achievements";
import TechSkills from "./TechSkills";
import KeyCourses from "./KeyCourses";
import {
    FaGraduationCap,
    FaDev,
    FaLaptopCode,
    FaChartLine,
    FaHackerrank,
    FaCertificate,
    FaAccusoft,
} from "react-icons/fa";

const Resume = ({ resumeRef }) => {
    const [indexSelected, setIndexSelected] = useState(0);
    const resumeDetailsRef = useRef(null);
    const iconPoints = [
        { component: <Education />, icon: <FaGraduationCap />, iconValue: "Education" },
        { component: <Interships />, icon: <FaDev />, iconValue: "Internships" },
        { component: <Projects />, icon: <FaLaptopCode />, iconValue: "Projects" },
        { component: <TechSkills />, icon: <FaChartLine />, iconValue: "Technical Skills" },
        { component: <Hackathons />, icon: <FaHackerrank />, iconValue: "Hackathons" },
        { component: <KeyCourses />, icon: <FaCertificate />, iconValue: "Key Courses" },
        { component: <Achievements />, icon: <FaAccusoft />, iconValue: "Achievements" },
    ];

    const changeSelectedIcon = (idx) => {
        setIndexSelected(idx);
        resumeDetailsRef.current.scroll({
            top: idx * 450,
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
                    <div className="icon-points-resp">
                        {iconPoints.map((point, index) => (
                            <div
                                key={index}
                                id={"icon-" + index}
                                className={
                                    indexSelected === index
                                        ? "icon-point-resp icon-selected-resp"
                                        : "icon-point-resp"
                                }
                                onClick={() => changeSelectedIcon(index)}
                            >
                                {point.icon}
                            </div>
                        ))}
                    </div>
                </div>
                <div ref={resumeDetailsRef} className="resume-details">
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
