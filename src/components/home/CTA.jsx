import React from 'react'
import background from "accets/image2.JPG"
import "components/home/styles/cta.css"

export default function CTA() {

    const BACKGROUNDSTYLES = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <>
            <section className='margin-block-800'>
                <div className="final-cta section-margin">
                    <div className="cta" style={BACKGROUNDSTYLES}>
                        <div className="cta-content-text">
                            <h2 className='fs-800'>Building futere with confidence</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint illo dolore velit maiores necessitatibus! Eos id sunt recusandae veritatis nam?</p>
                        </div>
                        <div className='contact-us-wrapper'>
                            <button className='contact-us button' data-type="cl-white">
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="behind"></div>
                </div>
            </section>
        </>
    )
}
