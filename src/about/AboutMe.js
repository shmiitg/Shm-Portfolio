import "./AboutMe.css";

const AboutMe = ({ aboutRef }) => {
    const highLigts = [
        "Frontend Development",
        "Data Structures",
        "Algorithms",
        "Backend Development",
        "Database management",
    ];
    const about = `I am a recent graduate in Engineering from the Indian Institute of Technology, Guwahati, with a strong passion for coding and software development. My coding journey began in 2020 with learning C, and over the past few years, I have extensively explored both Frontend and Backend Web Development by building and deploying multiple projects. In addition to hands-on development experience, I have honed my problem-solving skills by practicing numerous Data Structures and Algorithms problems on various competitive programming platforms. My academic foundation, combined with practical experience, equips me to tackle challenging projects in the tech industry effectively.`;

    return (
        <div className="about-container" ref={aboutRef}>
            <div className="heading">About Me</div>
            <div className="about-card">
                <div className="about-content">{about}</div>
                <div className="about-highlights">
                    <div className="highlight-heading">Key highlights:</div>
                    {highLigts.map((highLight, index) => (
                        <div key={index} className="highlight">
                            <div className="highlight-circle"></div>
                            <div key={index} className="about-content highlight-text">
                                {highLight}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
