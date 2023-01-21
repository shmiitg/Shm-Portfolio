import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            name: "Interview Prep Website",
            date: "Oct 2021",
            info: "Keep track of your progress and crack interviews",
            tech: "React.js, Express.js, JWT, MongoDB, CSS",
        },
        {
            name: "Project Manager",
            date: "Aug 2022",
            info: "Manage you projects and mark them with different status",
            tech: "React.js, Express.js, MySQL, CSS",
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
            info: "Checkout amazing products and buy them",
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
