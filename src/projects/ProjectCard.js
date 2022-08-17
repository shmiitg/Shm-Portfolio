const ProjectCard = ({ name, link, info, tech }) => {
    return (
        <div className="proj-card">
            <div className="proj-card-wrapper">
                <div className="proj-name">
                    <a href={link} target="_blank" rel="noreferrer">
                        {name}
                    </a>
                </div>
                <div className="proj-info">{info}</div>
                <div className="proj-tech-stack">Tech Stack</div>
                <div className="proj-tools">
                    {tech.map((t, index) => (
                        <div key={index} className="proj-tool">
                            {t}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
