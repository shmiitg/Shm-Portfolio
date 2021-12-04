import React from 'react'

const SkillCard = ({ img, name, info, title, tech }) => {
    return (
        <div className="skill-card">
            <div className="skill-img">
                {img}
            </div>
            <div className="skill-name">
                {name}
            </div>
            <div className="skill-info">
                {info}
            </div>
            <div className="skill-tech-title">
                {title}
            </div>
            <div className="skill-tech">
                {
                    tech.map((t, index) => (
                        <div key={index} className="tech">{t}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillCard
