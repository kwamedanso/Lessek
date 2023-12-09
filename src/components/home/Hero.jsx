import React from 'react'
import "components/home/styles/hero.css"
import background from "accets/background.jpeg"

export default function Hero() {
    return (
        <section id='hero-section'
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className='hero-content section-margin'>
                <p className='fs-400 fw-bold hero-text-small'>Building Future with</p>
                <h2 className='fs-800 fw-black'>Confidence Ghanaian</h2>
                <h2 className='fs-800 fw-black'>Constractors Authority</h2>
                <p className='fs-400 fw-semi-bold hero-text-small'>Building and construction sector is considered the second largest non-oil sector in Ghana and contracting industry represents an integral part on this sector</p>
            </div>
        </section>
    )
}
