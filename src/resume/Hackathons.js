import React from "react";

const Hackathons = () => {
    const hackathons = [
        {
            name: "Code Peak (Open Source Hackathon)",
            date: "Dec 2021",
            info: "Achieved 1st rank among 1500+ candidates by contributing in various open source projects",
        },
        {
            name: "Cricket Analytica (Exploratory Data Analysis)",
            date: "Nov 2021",
            info: "Runner up in Cricket Analytica organised by Coding Club, IIT Guwahati",
        },
        {
            name: "Cascade Cup (Machine Learning)",
            date: "March 2022",
            info: "Achieved 21th position in second round among 1500+ qualified participants",
        },
    ];

    return (
        <>
            {hackathons.map((hack, index) => (
                <div key={index} className="resume-content">
                    <div className="details-head">
                        <div className="details-head-left">{hack.name}</div>
                        <div className="details-head-right">{hack.date}</div>
                    </div>
                    <div className="details-info">{hack.info}</div>
                </div>
            ))}
        </>
    );
};

export default Hackathons;
