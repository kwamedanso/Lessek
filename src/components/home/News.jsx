import React from 'react'
import "components/home/styles/news.css"
import image1 from "accets/image1.JPG"
import news from 'consts/news'
import { BsCalendarDate } from "react-icons/bs"
import SectionTitle from 'components/shared/SectionTitle'

export default function News() {
    return (
        <div className='news-wrapper section-margin'>
            <SectionTitle title={"News"} />
            <div className="news padding-block-300">
                <div className="news-first-card">
                    <div className="first-card-img-wrapper">
                        <img className='first-card-img' src={image1} alt="first card image" />
                    </div>
                </div>

                <div className="news-group-cards">
                    {news.map(item => (
                        <div key={item.id} className="news-card">
                            <div className="news-card-image">
                                <img src={item.image} alt={item.date} />
                            </div>
                            <div className="news-card-content">
                                <p className="news-card-title fw-bold fs-100">
                                    <BsCalendarDate />{item.date}
                                </p>
                                <p className='op-200'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
