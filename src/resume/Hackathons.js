import React from 'react'

const Hackathons = () => {
    const hackathons = [
        { name: 'Cascade Cup (Machine Learning)', date: 'Dec 2020', info: 'Achieved 75th position among 2000+ qualified participants' },
        { name: 'Cricket Analytica (Exploratory Data Analysis)', date: 'Nov 2021', info: 'Runner up in Cricket Analytica organised by Coding Club, IIT Guwahati' }
    ]

    return (
        <>
            {
                hackathons.map((hack, index) => (
                    <div key={index} className="resume-content">
                        <div className="details-head">
                            <div className="details-head-left">
                                {hack.name}
                            </div>
                            <div className="details-head-right">
                                {hack.date}
                            </div>
                        </div>
                        <div className="details-info">
                            {hack.info}
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Hackathons
