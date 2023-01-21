import "./AboutMe.css";

const AboutMe = ({ aboutRef }) => {
    const highLigts = [
        "Frontend Development",
        "Data Structures",
        "Algorithms",
        "Backend Development",
        "Database management",
    ];
    const about = `A 4th year engineering student from Indian Institute of Technology, Guwahati passionate about coding.
        Started my coding journey in 2020 by learning C language. Over the past two years I have a explored a lot in the field of both Frontend and Backend Web Development by building mutiple projects and delpoying them.
        Also I practiced a lot of problems on Data Structures and Algorithms across multiple websites.`;

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
