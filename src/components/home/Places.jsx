import React from 'react'
import image1 from "accets/image1.JPG"
import image2 from "accets/image2.JPG"
import image3 from "accets/image3.JPG"
import image4 from "accets/image4.JPG"
import image5 from "accets/image5.JPG"
import image6 from "accets/image6.JPG"
import image7 from "accets/image7.JPG"

export default function Places() {
    return (
        <div className="category-images">
            <div className="image-1 big"><img src={image1} alt="image-1" /></div>
            <div className="image-2 small"><img src={image2} alt="image-2" /></div>
            <div className="image-3 vertical"><img src={image3} alt="image-3" /></div>
            <div className="image-4 small"><img src={image4} alt="image-4" /></div>
            <div className="image-5 small"><img src={image5} alt="image-5" /></div>
            <div className="image-6 small"><img src={image6} alt="image-6" /></div>
            <div className="image-7 vertical"><img src={image7} alt="image-7" /></div>
        </div>
    )
}
