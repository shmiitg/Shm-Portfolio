import React from 'react'

const Education = () => {

    const education = [
        { degree: 'Bachelor of Technology (Mechanical Engineering)', date: '2019-Present', institute: 'Indian Institute of Technology, Guwahati' },
        { degree: 'High School (Central Board of Secondary Education)', date: '2014-2017', institute: ' Gyan Ganga Educational Academy, Raipur' }
    ]
    return (
        <>
            {
                education.map((edu, index) => (
                    <div key={index} className="resume-content">
                        <div className="details-head">
                            <div className="details-head-left">
                                {edu.degree}
                            </div>
                            <div className="details-head-right">
                                {edu.date}
                            </div>
                        </div>
                        <div className="details-info">
                            {edu.institute}
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Education
