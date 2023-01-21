const ProjectCard = ({ name, title, link, info, tech, github }) => {
    const openAnchor = "<a>";
    const closeAnchor = "</a>";
    return (
        <div className="proj-card">
            <div className="proj-card-wrapper">
                <div className="proj-name">
                    <a href={link} target="_blank" rel="noreferrer">
                        {name}
                    </a>
                </div>
                <h4 className="proj-title">{title}</h4>
                <p className="proj-info">{info}</p>
                <div className="proj-tech-stack">Tech Stack</div>
                <div className="proj-tools">
                    {tech.map((t, index) => (
                        <div key={index} className="proj-tool">
                            {t}
                        </div>
                    ))}
                </div>
                <div className="proj-github">
                    <span>{openAnchor}</span>
                    <a href={github}>{github}</a>
                    <span>{closeAnchor}</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
