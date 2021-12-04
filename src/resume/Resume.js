import React, { useState } from 'react';
import './Resume.css';
import Education from './Education';
import Projects from './Projects';
import Hackathons from './Hackathons';
import Achievements from './Achievements';
import TechSkills from './TechSkills';
import KeyCourses from './KeyCourses';
import { FaGraduationCap, FaLaptopCode, FaChartLine, FaHackerrank, FaCertificate, FaAccusoft } from 'react-icons/fa';

const Resume = () => {
    const [indexSelected, setIndexSelected] = useState(0);
    const iconPoints = [
        { component: <Education />, icon: <FaGraduationCap />, iconValue: 'Education' },
        { component: <Projects />, icon: <FaLaptopCode />, iconValue: 'Projects' },
        { component: <TechSkills />, icon: <FaChartLine />, iconValue: 'Technical Skills' },
        { component: <Hackathons />, icon: <FaHackerrank />, iconValue: 'Hackathons' },
        { component: <KeyCourses />, icon: <FaCertificate />, iconValue: 'Key Courses' },
        { component: <Achievements />, icon: <FaAccusoft />, iconValue: 'Achievements' },
    ]

    // function scrollTo(element, to, duration) {
    //     var start = element.scrollTop,
    //         change = to - start,
    //         currentTime = 0,
    //         increment = 20;

    //     var animateScroll = function () {
    //         currentTime += increment;
    //         var val = Math.easeInOutQuad(currentTime, start, change, duration);
    //         element.scrollTop = val;
    //         if (currentTime < duration) {
    //             setTimeout(animateScroll, increment);
    //         }
    //     };
    //     animateScroll();
    // }

    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    // Math.easeInOutQuad = function (t, b, c, d) {
    //     t /= d / 2;
    //     if (t < 1) return c / 2 * t * t + b;
    //     t--;
    //     return -c / 2 * (t * (t - 2) - 1) + b;
    // };

    // const changeSelectedIcon = (idx) => {
    // setIndexSelected(idx);
    // var elem = [...document.getElementsByClassName("icon-point")][idx];
    // var topPos = elem.offsetTop;
    // if (idx === 0) topPos = 0
    // else if (idx === 1) topPos += 255;
    // else if (idx === 2) topPos += 557;
    // else if (idx === 3) topPos += 859;
    // else topPos += 1161;
    // scrollTo(document.getElementById('resume-details'), topPos, 600);
    // }

    const changeSelectedIcon = (idx) => {
        setIndexSelected(idx);
        const element = document.getElementById('resume-details');
        element.scroll({
            top: idx * 420,
            behavior: 'smooth'
        })
    }

    return (
        <div className="resume-container">
            <div className="heading">Resume</div>
            <div className="resume-main">
                <div className="icon-container">
                    <div className="icons"></div>
                    <div className="icon-points">
                        {
                            iconPoints.map((point, index) => (
                                <div key={index} id={'icon-' + index} className={indexSelected === index ? 'icon-point icon-selected' : 'icon-point'}>
                                    <div onClick={() => changeSelectedIcon(index)}>{point.icon}</div>
                                    <span onClick={() => changeSelectedIcon(index)}>{point.iconValue}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div id="resume-details" className="resume-details">
                    {
                        iconPoints.map((point, index) => (
                            <div key={index} id={'det-' + (index + 1)} className="resume-icon-details">
                                {point.component}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Resume
