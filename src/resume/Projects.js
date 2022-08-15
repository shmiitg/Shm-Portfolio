import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            name: "Interview Prep Website",
            date: "Oct 2021",
            info: "Interview Preparation Website that can be to used to keep track of progress and crack interviews",
            tech: "React.js, Express.js, JWT, MongoDB, CSS",
        },
        {
            name: "Portfolio Generator",
            date: "Nov 2021",
            info: "Generate amazing portfolio using the portfolio generator",
            tech: "React.js, Express.js, MongoDB, CSS",
        },
        {
            name: "Ecommerce Website",
            date: "July 2021",
            info: "Interactive Ecommerce Website for showcasing and selling products",
            tech: "Express.js, Passport.js, MongoDB, CSS",
        },
    ];

    return (
        <>
            {projects.map((project, index) => (
                <div key={index} className="resume-project-content">
                    <div className="details-head">
                        <div className="details-head-left">{project.name}</div>
                        <div className="details-head-right">{project.date}</div>
                    </div>
                    <div className="details-info">
                        <div className="project-tech">Technologies Used: {project.tech}</div>
                        <div className="project-info">{project.info}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Projects;
