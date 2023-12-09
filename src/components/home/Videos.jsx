import React, { useState } from 'react'
import videos from 'consts/videos'

export default function Videos() {
    const [grow, setGrow] = useState("one")


    function handleGrow(item) {
        setGrow(item)
    }
    return (
        <div className='videos-wrapper'>
            {videos.map(box => (
                <div key={box.id} style={{ backgroundImage: `url(${box.imgage})` }} className={`video-1 ${grow === box.name ? "grow" : ""}`} onClick={() => handleGrow(box.name)}></div>
            ))}
        </div>
    )
}

