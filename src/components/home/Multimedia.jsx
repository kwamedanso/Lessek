import React, { useState } from 'react'
import "components/home/styles/multimedia.css"
import SectionTitle from 'components/shared/SectionTitle'

import Places from './Places'
import Videos from './Videos'



export default function Multimedia() {
    const [activeTab, setActiveTab] = useState("videos")

    function handleActiveTab(tab) {
        setActiveTab(tab)
    }
    return (
        <>
            <section id='multimedia' className='multimedia'>
                <SectionTitle title={"Multimedia"} />
                <div className="category-wrapper section-margin">
                    <div className="category-buttons margin-block-200">
                        <button
                            className="button"
                            data-type={`${activeTab === "videos" ? "cl-white" : ""}`}
                            onClick={() => handleActiveTab("videos")}
                        >
                            Videos
                        </button>
                        <button
                            className="button"
                            data-type={`${activeTab === "places" ? "cl-white" : ""}`}
                            onClick={() => handleActiveTab("places")}
                        >
                            Places
                        </button>
                    </div>
                    {activeTab === "places" ? <Places /> : <Videos />}

                </div>

            </section>
        </>
    )
}
