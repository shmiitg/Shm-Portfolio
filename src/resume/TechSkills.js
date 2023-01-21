const TechSkills = () => {
    const skills = [
        {
            name: "Frontend Development",
            tech: "React.js, JavaScript, Next.js, Redux",
        },
        {
            name: "Data Structures and Algorithms",
            tech: "C++",
        },
        {
            name: "Backend Development",
            tech: "Node.js, Nest.js",
        },
        {
            name: "Database",
            tech: "MongoDB, Firebase, MySQL",
        },
        {
            name: "Miscellaneous",
            tech: "Python, Docker, TypeScript, Machine Learning",
        },
    ];

    return (
        <>
            {skills.map((skill, index) => (
                <div key={index} className="resume-project-content">
                    <div className="details-head">
                        <div className="details-head-left">{skill.name}</div>
                    </div>
                    <div className="details-info">{skill.tech}</div>
                </div>
            ))}
        </>
    );
};

export default TechSkills;
