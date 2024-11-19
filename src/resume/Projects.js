import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            name: "Vocabrain",
            date: "June 2024",
            info: "Improve your vocabulary by learning new words and idioms",
            tech: "React.js, Express.js, JWT, MongoDB, CSS",
        },
        {
            name: "Code Dunk",
            date: "Oct 2021",
            info: "Keep track of your progress and crack interviews",
            tech: "React.js, Express.js, JWT, MongoDB, CSS",
        },
        {
            name: "TaskUp",
            date: "Aug 2022",
            info: "Manage you projects and mark them with different status",
            tech: "React.js, Express.js, MySQL, CSS",
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
