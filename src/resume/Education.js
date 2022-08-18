import React from "react";

const Education = () => {
    const education = [
        {
            degree: "Bachelor of Technology (Mechanical Engineering)",
            date: "2019-23",
            institute: "Indian Institute of Technology, Guwahati",
        },
        {
            degree: "Higher Secondary School (CBSE)",
            date: "2017-18",
            institute: " Gyan Ganga Educational Academy, Raipur",
        },
        {
            degree: "High School (CBSE)",
            date: "2015-16",
            institute: " Gyan Ganga Educational Academy, Raipur",
        },
    ];
    return (
        <>
            {education.map((edu, index) => (
                <div key={index} className="resume-content">
                    <div className="details-head">
                        <div className="details-head-left">{edu.degree}</div>
                        <div className="details-head-right">{edu.date}</div>
                    </div>
                    <div className="details-info">{edu.institute}</div>
                </div>
            ))}
        </>
    );
};

export default Education;
