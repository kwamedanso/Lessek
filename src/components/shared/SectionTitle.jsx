import React from 'react'

export default function SectionTitle({ title }) {
    return (
        <div className='section-title'>
            <h2 className='fs-700'>
                {title}
            </h2>
        </div>
    )
}
