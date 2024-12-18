const Achievements = () => {
    const achievemets = [
        {
            name: "Competitive Programming",
            date: "2021",
            info: "Achieve maximum rating of 2051 on LeetCode and 1803 on CodeChef",
        },
        {
            name: "JEE Mains and Advanced",
            date: "2019",
            info: "Cracked JEE Mains with 99+ percentile and JEE Advanced",
        },
        {
            name: "Center for Basic Sciences Examination",
            date: "2018",
            info: "Achieved 1st rank among 2000+ candidates",
        },
    ];

    return (
        <>
            {achievemets.map((achievement, index) => (
                <div key={index} className="resume-content">
                    <div className="details-head">
                        <div className="details-head-left">{achievement.name}</div>
                        <div className="details-head-right">{achievement.date}</div>
                    </div>
                    <div className="details-info">{achievement.info}</div>
                </div>
            ))}
        </>
    );
};

export default Achievements;
