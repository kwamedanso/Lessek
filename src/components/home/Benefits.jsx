import React from 'react'
import benefits from 'consts/benefits'
import "components/home/styles/benefits.css"
import SectionTitle from 'components/shared/SectionTitle'

export default function Benefits() {
    return (
        <>
            <section id='benefits'>
                <SectionTitle title={"Benefits"} />
                <div className='benefits section-margin padding-block-300' >
                    {benefits.map(benefit => (
                        <div key={benefit.id} className="benefit-item">
                            <div className="icon">{benefit.icon}</div>
                            <p className='fw-bold'>{benefit.title}</p>
                            <p className='benefit-desc op-200'>{benefit.desc}</p>
                            <button className='learn-more'>Learn More</button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
