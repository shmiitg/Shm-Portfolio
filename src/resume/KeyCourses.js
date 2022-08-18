import React from "react";

const KeyCourses = () => {
    const courses = [
        {
            name: "Computer Science",
            date: "2019-20",
            info: "Introduction to Computing, Computing Laboratory",
        },
        {
            name: "Mathematics",
            date: "2019-20",
            info: "Linear Algebra, Real Analysis, Complex Analysis, Ordinary and Partial Differential Equation",
        },
        {
            name: "Machine Learning",
            date: "2020-21",
            info: "Deep Learning Specialization by deeplearning.ai, FAST TRACK TO ML by Coding Club IIT Guwahati",
        },
    ];

    return (
        <>
            {courses.map((course, index) => (
                <div key={index} className="resume-project-content">
                    <div className="details-head">
                        <div className="details-head-left">{course.name}</div>
                        <div className="details-head-right">{course.date}</div>
                    </div>
                    <div className="details-info">{course.info}</div>
                </div>
            ))}
        </>
    );
};

export default KeyCourses;
