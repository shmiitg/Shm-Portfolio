import React from "react";

const Interships = () => {
    const internships = [
        {
            company: "Factly Media & Research",
            date: "Ongoing *",
            role: "Frontend Developer",
            skills: "React.js, Next.js, Redux",
        },
        {
            company: "Dzor Infotech Private Limited",
            date: "May 2022",
            role: "Frontend Developer",
            skills: "React.js",
        },
        {
            company: "Ikanshy Innovations (Opc) Private Limited",
            date: "July 2022",
            role: "Backend Developer",
            skills: "Nest.js, PostgreSQL",
        },
    ];

    return (
        <>
            {internships.map((internship, index) => (
                <div key={index} className="resume-project-content">
                    <div className="details-head">
                        <div className="details-head-left">{internship.company}</div>
                        <div className="details-head-right">{internship.date}</div>
                    </div>
                    <div className="details-info">
                        <div className="project-tech">Technologies Used: {internship.skills}</div>
                        <div className="project-info">{internship.role}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Interships;
