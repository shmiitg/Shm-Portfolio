import './AboutMe.css';

const AboutMe = () => {
    const highLigts = [
        'Full stack web development',
        'Building REST API',
        'Data Structures and Algorithms',
        'Machine learning and data visualisation',
        'Database management'
    ]
    const about = 'A 3rd year engineering student from Indian Institute of Technology, Guwahati with a passion of coding. Started my coding journey in 2019 with C language and now have adequate knowledge of Full Stack Web Development, a descent knowledge in Machine Learning along with good grasp in Data Structures and Algorithms. Like to build full stack web-applications starting from creating the front-end from stratch to developing the back-end system to support the application and creating APIs, analysing large datasets and train machine learning models and solve data structures and alogrithmic problems from various websites.'

    return (
        <div className="about-container">
            <div className="heading">About Me</div>
            <div className="about-me-card">
                <div className="about-me-content">
                    {about}
                </div>
                <div className="about-me-highlights">
                    <div className="highlight-heading">Key highlights:</div>
                    {highLigts.map((highLight, index) => (
                        <div key={index} className="highlight">
                            <div className="highlight-circle"></div>
                            <div key={index} className="about-me-content highlight-text">{highLight}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutMe
