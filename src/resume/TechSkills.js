const TechSkills = () => {
    const skills = [
        { name: 'Core Programming', tech: 'C++, Python' },
        { name: 'Web Development', tech: 'React.js, JavaScript, Express.js, Node.js' },
        { name: 'Database', tech: 'MongoDB, Firebase' },
        { name: 'Machine Learning', tech: 'Scikit-learn, Keras, OpenCV' }
    ]

    return (
        <>
            {
                skills.map((skill, index) => (
                    <div key={index} className="resume-project-content">
                        <div className="details-head">
                            <div className="details-head-left">
                                {skill.name}
                            </div>
                        </div>
                        <div className="details-info">
                            {skill.tech}
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default TechSkills
