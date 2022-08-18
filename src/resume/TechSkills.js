const TechSkills = () => {
    const skills = [
        { name: "Core Programming", tech: "C++, Python" },
        {
            name: "Frontend Development",
            tech: "React.js, JavaScript, TypeScript, Next.js",
        },
        {
            name: "Backend Development",
            tech: "Node.js, Nest.js, MongoDB, MySQL, Firebase",
        },
        { name: "Database", tech: "MongoDB, Firebase, MySQL" },
        { name: "Machine Learning", tech: "Scikit-learn, Keras, OpenCV" },
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
